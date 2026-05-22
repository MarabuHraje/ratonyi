import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ message: 'Chybí povinná pole (Jméno, E-mail)' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.seznam.cz',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'formular@marek-bednar.cz',
      pass: '%]#$5(H{C=f)X;jy'
    }
  });

  try {
    const safeName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeEmail = email ? email.replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
    const safeMessage = message ? message.replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';

    await transporter.sendMail({
      from: 'formular@marek-bednar.cz',
      to: 'perat.sro@seznam.cz',
      subject: `Nová poptávka od: ${safeName}`,
      html: `
        <h3>Obdrželi jste novou zprávu z kontaktního formuláře.</h3>
        <p><strong>Od:</strong> ${safeName}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        <p><strong>Zpráva:</strong><br>${safeMessage.replace(/\n/g, '<br>')}</p>
      `,
      text: `Od: ${name}\nE-mail: ${email}\n\nZpráva:\n${message}`,
    });

    return res.status(200).json({ status: 'success', message: 'Zpráva byla úspěšně odeslána.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ status: 'error', message: 'Chyba serveru při odesílání.' });
  }
}
