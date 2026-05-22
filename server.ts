import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for sending email
  app.post("/api/send", async (req, res) => {
    const { name, phone, email, service_type, message } = req.body || {};

    if (!name || !phone || !email) {
      return res.status(400).json({ message: 'Chybí povinná pole (Jméno, Telefon, E-mail)' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.seznam.cz',
      port: 465,
      secure: true,
      auth: {
        user: 'formular@marek-bednar.cz',
        pass: '%]#$5(H{C=f)X;jy'
      }
    });

    try {
      const safeName = name ? name.replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
      const safePhone = phone ? phone.replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
      const safeEmail = email ? email.replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
      const safeServiceType = service_type ? service_type.replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
      const safeMessage = message ? message.replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';

      await transporter.sendMail({
        from: 'formular@marek-bednar.cz',
        to: 'perat.sro@seznam.cz',
        subject: `Nová poptávka od: ${safeName}`,
        html: `
          <h3>Obdrželi jste novou zprávu z kontaktního formuláře.</h3>
          <p><strong>Od:</strong> ${safeName}</p>
          <p><strong>E-mail:</strong> ${safeEmail}</p>
          <p><strong>Telefon:</strong> ${safePhone}</p>
          <p><strong>Typ služby:</strong> ${safeServiceType}</p>
          <p><strong>Zpráva:</strong><br>${safeMessage.replace(/\n/g, '<br>')}</p>
        `,
        text: `Od: ${name}\nE-mail: ${email}\nTelefon: ${phone}\nTyp služby: ${service_type}\n\nZpráva:\n${message}`,
      });

      return res.status(200).json({ status: 'success', message: 'Zpráva byla úspěšně odeslána.' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      return res.status(500).json({ status: 'error', message: 'Chyba serveru při odesílání.', details: error.message || String(error) });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
