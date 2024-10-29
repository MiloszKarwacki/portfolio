// lib/email.ts
import nodemailer from 'nodemailer';

interface EmailConfig {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

// Konfiguracja transportera
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Szablon maila dla administratora
const createAdminEmailTemplate = (email: string, message: string): EmailConfig => ({
  from: process.env.SMTP_USER!,
  to: process.env.ADMIN_EMAIL!,
  subject: 'Nowa wiadomość z formularza kontaktowego',
  text: `Otrzymałeś nową wiadomość od: ${email}\n\nTreść:\n${message}`,
  html: `
    <h2>Nowa wiadomość z formularza kontaktowego</h2>
    <p><strong>Od:</strong> ${email}</p>
    <p><strong>Treść:</strong></p>
    <p>${message}</p>
  `
});

// Zaktualizowany szablon maila dla użytkownika z GIFem
const createUserEmailTemplate = (email: string): EmailConfig => ({
  from: process.env.SMTP_USER!,
  to: email,
  subject: 'Dziękujemy za kontakt',
  text: `Dziękujemy za przesłanie wiadomości. Odpowiemy najszybciej jak to możliwe.`,
  html: `
    <div style="text-align: center; font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Dziękujemy za kontakt</h2>
      <p style="color: #666; font-size: 16px;">Drogi Użytkowniku,</p>
      <p style="color: #666; font-size: 16px;">Dziękujemy za przesłanie wiadomości. Potwierdzamy jej otrzymanie i zapewniamy, że odpowiemy najszybciej jak to możliwe.</p>
      <div style="margin: 30px 0;">
        <img src="https://usagif.com/wp-content/uploads/gif/dz5ksfj-33.gif" 
             alt="Thank you animation" 
             style="max-width: 100%; height: auto;"/>
      </div>
      <p style="color: #666; font-size: 16px;">Pozdrawiamy,<br>Zespół Miłego :)</p>
    </div>
  `
});

export const sendEmails = async (userEmail: string, message: string) => {
  try {
    // Wysyłanie maila do administratora
    const adminMailResponse = await transporter.sendMail(
      createAdminEmailTemplate(userEmail, message)
    );

    // Wysyłanie potwierdzenia do użytkownika
    const userMailResponse = await transporter.sendMail(
      createUserEmailTemplate(userEmail)
    );

    return {
      success: true,
      adminMail: adminMailResponse,
      userMail: userMailResponse
    };
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
};