<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');

function respond(string $status, string $message, int $httpCode = 200): void
{
    http_response_code($httpCode);
    echo json_encode([
        'status' => $status,
        'message' => $message,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

function loadEnvFile(string $path): void
{
    if (!is_readable($path)) {
        return;
    }

    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);

        if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
            continue;
        }

        [$key, $value] = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);

        if (
            (str_starts_with($value, '"') && str_ends_with($value, '"')) ||
            (str_starts_with($value, "'") && str_ends_with($value, "'"))
        ) {
            $value = substr($value, 1, -1);
        }

        if ($key !== '' && getenv($key) === false) {
            putenv($key . '=' . $value);
            $_ENV[$key] = $value;
        }
    }
}

function loadConfigFile(string $path): void
{
    if (!is_readable($path)) {
        return;
    }

    $config = require $path;

    if (!is_array($config)) {
        return;
    }

    foreach ($config as $key => $value) {
        if (!is_string($key) || $key === '' || getenv($key) !== false) {
            continue;
        }

        $value = (string) $value;
        putenv($key . '=' . $value);
        $_ENV[$key] = $value;
    }
}

function envValue(string $key, ?string $default = null): ?string
{
    $value = $_ENV[$key] ?? getenv($key);

    if ($value === false || $value === '') {
        return $default;
    }

    return (string) $value;
}

function requireConfig(string $key): string
{
    $value = envValue($key);

    if ($value === null) {
        respond('error', 'Chybí konfigurace serveru: ' . $key, 500);
    }

    return $value;
}

function cleanSubjectPart(string $value): string
{
    $value = preg_replace('/[\r\n]+/', ' ', $value) ?? '';
    return trim(substr($value, 0, 120));
}

loadEnvFile(dirname(__DIR__) . '/.env');
loadEnvFile(__DIR__ . '/.env');
loadConfigFile(dirname(__DIR__) . '/config.php');
loadConfigFile(__DIR__ . '/config.php');

$autoloadPath = is_readable(dirname(__DIR__) . '/vendor/autoload.php')
    ? dirname(__DIR__) . '/vendor/autoload.php'
    : __DIR__ . '/vendor/autoload.php';
if (!is_readable($autoloadPath)) {
    respond('error', 'Chybí závislosti. Na serveru spusťte composer install.', 500);
}

require $autoloadPath;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond('error', 'Neplatná metoda požadavku.', 405);
}

$name = trim((string) ($_POST['name'] ?? ''));
$senderEmail = filter_var(trim((string) ($_POST['email'] ?? '')), FILTER_SANITIZE_EMAIL);
$phone = trim((string) ($_POST['phone'] ?? ''));
$serviceType = trim((string) ($_POST['service_type'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || strlen($name) > 120) {
    respond('error', 'Vyplňte prosím platné jméno.', 422);
}

if ($senderEmail === '' || strlen($senderEmail) > 254 || !filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {
    respond('error', 'Vyplňte prosím platný e-mail.', 422);
}

$maxMessageLength = (int) envValue('MAX_MESSAGE_LENGTH', '10000');
if (strlen($message) > $maxMessageLength) {
    respond('error', 'Zpráva je příliš dlouhá.', 422);
}

$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($senderEmail, ENT_QUOTES, 'UTF-8');
$safePhone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeServiceType = htmlspecialchars($serviceType, ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = requireConfig('SMTP_HOST');
    $mail->Port = (int) envValue('SMTP_PORT', '587');
    $mail->SMTPAuth = true;
    $mail->Username = requireConfig('SMTP_USERNAME');
    $mail->Password = requireConfig('SMTP_PASSWORD');
    $mail->CharSet = 'UTF-8';

    $encryption = strtolower((string) envValue('SMTP_ENCRYPTION', 'tls'));
    if ($encryption === 'ssl' || $encryption === 'smtps') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } elseif ($encryption === 'tls' || $encryption === 'starttls') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->setFrom(requireConfig('MAIL_FROM'), envValue('MAIL_FROM_NAME', ''));
    $mail->addAddress(requireConfig('MAIL_TO'));
    $mail->addReplyTo($senderEmail, $name);

    $mail->isHTML(true);
    $mail->Subject = 'Nová poptávka z webu od ' . cleanSubjectPart($name);
    $mail->Body =
        'Dobrý den,<br><br>' .
        'Obdrželi jste novou zprávu z kontaktního formuláře.<br><br>' .
        '<b>Od:</b> ' . $safeName . '<br>' .
        '<b>E-mail:</b> ' . $safeEmail . '<br>' .
        '<b>Telefon:</b> ' . $safePhone . '<br>' .
        '<b>Typ služby:</b> ' . $safeServiceType . '<br><br>' .
        '<b>Zpráva:</b><br>' . nl2br($safeMessage);
    $mail->AltBody = "Od: {$name}\nE-mail: {$senderEmail}\nTelefon: {$phone}\nTyp služby: {$serviceType}\n\nZpráva:\n{$message}";

    $mail->send();

    respond('success', 'Zpráva byla úspěšně odeslána.');
} catch (Exception $exception) {
    $debug = filter_var(envValue('APP_DEBUG', 'false'), FILTER_VALIDATE_BOOLEAN);
    $message = $debug
        ? 'E-mail se nepodařilo odeslat. Chyba: ' . $exception->getMessage()
        : 'E-mail se nepodařilo odeslat. Zkontrolujte SMTP konfiguraci.';

    respond('error', $message, 500);
}
