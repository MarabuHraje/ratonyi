import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as nodemailer from "nodemailer";

type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  service_type: string;
  message: string;
};

type ApiStatus = "success" | "error";

const DEFAULT_MAX_MESSAGE_LENGTH = 10000;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return respond(res, "error", "Neplatná metoda požadavku.", 405);
  }

  const payload = normalizePayload(req.body);
  const validationError = validatePayload(payload);

  if (validationError) {
    return respond(res, "error", validationError, 422);
  }

  const missingConfig = [
    "SMTP_HOST",
    "SMTP_USERNAME",
    "SMTP_PASSWORD",
    "MAIL_FROM",
    "MAIL_TO",
  ].filter((key) => envValue(key) === "");

  if (missingConfig.length > 0) {
    return respond(
      res,
      "error",
      `Chybí konfigurace serveru: ${missingConfig.join(", ")}`,
      500,
    );
  }

  const smtpPort = parsePositiveInteger(envValue("SMTP_PORT", "587"), 587);
  const smtpEncryption = envValue("SMTP_ENCRYPTION", "tls").toLowerCase();
  const mailFromName = envValue("MAIL_FROM_NAME");

  const transporter = nodemailer.createTransport({
    host: envValue("SMTP_HOST"),
    port: smtpPort,
    secure: usesSecureConnection(smtpEncryption, smtpPort),
    auth: {
      user: envValue("SMTP_USERNAME"),
      pass: envValue("SMTP_PASSWORD"),
    },
    requireTLS: usesStartTls(smtpEncryption),
  });

  try {
    await transporter.sendMail({
      from: mailFromName
        ? { address: envValue("MAIL_FROM"), name: mailFromName }
        : envValue("MAIL_FROM"),
      to: splitRecipients(envValue("MAIL_TO")),
      replyTo: { address: payload.email, name: payload.name },
      subject: `Nová poptávka z webu od ${cleanSubjectPart(payload.name)}`,
      html: buildHtmlBody(payload),
      text: buildTextBody(payload),
    });

    return respond(res, "success", "Zpráva byla úspěšně odeslána.");
  } catch (error) {
    const debugEnabled = envValue("APP_DEBUG", "false").toLowerCase() === "true";
    const message = debugEnabled
      ? `E-mail se nepodařilo odeslat. Chyba: ${error instanceof Error ? error.message : String(error)}`
      : "E-mail se nepodařilo odeslat. Zkontrolujte SMTP konfiguraci.";

    return respond(res, "error", message, 500);
  }
}

function respond(
  res: VercelResponse,
  status: ApiStatus,
  message: string,
  httpCode = 200,
) {
  return res.status(httpCode).json({ status, message });
}

function normalizePayload(body: unknown): InquiryPayload {
  const source = parseBody(body);

  return {
    name: readField(source, "name"),
    email: readField(source, "email"),
    phone: readField(source, "phone"),
    service_type: normalizeServiceType(readField(source, "service_type")),
    message: readField(source, "message"),
  };
}

function parseBody(body: unknown): Record<string, unknown> {
  if (isRecord(body)) {
    return body;
  }

  if (typeof body !== "string") {
    return {};
  }

  try {
    const parsed = JSON.parse(body);
    if (isRecord(parsed)) {
      return parsed;
    }
  } catch {
    // Fall through to URLSearchParams for form-encoded requests.
  }

  return Object.fromEntries(new URLSearchParams(body));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readField(source: Record<string, unknown>, key: string): string {
  const value = source[key];

  if (Array.isArray(value)) {
    return sanitizeInput(value[0]);
  }

  return sanitizeInput(value);
}

function sanitizeInput(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeServiceType(value: string): string {
  return value.startsWith("Zvolte") ? "" : value;
}

function validatePayload(payload: InquiryPayload): string | null {
  if (payload.name === "" || payload.name.length > 120) {
    return "Vyplňte prosím platné jméno.";
  }

  if (payload.phone === "" || payload.phone.length > 40) {
    return "Vyplňte prosím platný telefon.";
  }

  if (
    payload.email === "" ||
    payload.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
  ) {
    return "Vyplňte prosím platný e-mail.";
  }

  if (payload.message === "") {
    return "Vyplňte prosím zprávu.";
  }

  const maxMessageLength = parsePositiveInteger(
    envValue("MAX_MESSAGE_LENGTH", String(DEFAULT_MAX_MESSAGE_LENGTH)),
    DEFAULT_MAX_MESSAGE_LENGTH,
  );

  if (payload.message.length > maxMessageLength) {
    return "Zpráva je příliš dlouhá.";
  }

  return null;
}

function envValue(key: string, fallback = ""): string {
  const value = process.env[key];
  return value && value.trim() !== "" ? value.trim() : fallback;
}

function parsePositiveInteger(value: string, fallback: number): number {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function usesSecureConnection(encryption: string, port: number): boolean {
  return encryption === "ssl" || encryption === "smtps" || port === 465;
}

function usesStartTls(encryption: string): boolean {
  return encryption === "tls" || encryption === "starttls";
}

function splitRecipients(value: string): string[] {
  return value
    .split(/[;,]/)
    .map((recipient) => recipient.trim())
    .filter(Boolean);
}

function cleanSubjectPart(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, 120);
}

function buildHtmlBody(payload: InquiryPayload): string {
  return [
    "Dobrý den,<br><br>",
    "Obdrželi jste novou zprávu z kontaktního formuláře.<br><br>",
    `<b>Od:</b> ${escapeHtml(payload.name)}<br>`,
    `<b>E-mail:</b> ${escapeHtml(payload.email)}<br>`,
    `<b>Telefon:</b> ${escapeHtml(payload.phone)}<br>`,
    `<b>Typ služby:</b> ${escapeHtml(payload.service_type || "Neuvedeno")}<br><br>`,
    `<b>Zpráva:</b><br>${escapeHtml(payload.message).replace(/\n/g, "<br>")}`,
  ].join("");
}

function buildTextBody(payload: InquiryPayload): string {
  return [
    `Od: ${payload.name}`,
    `E-mail: ${payload.email}`,
    `Telefon: ${payload.phone}`,
    `Typ služby: ${payload.service_type || "Neuvedeno"}`,
    "",
    "Zpráva:",
    payload.message,
  ].join("\n");
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character] ?? character;
  });
}
