import nodemailer from "nodemailer";

interface QuoteData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  services: string[];
  notes?: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const serviceLabels: Record<string, { tr: string; en: string }> = {
  data: { tr: "Starlink Veri Hizmeti", en: "Starlink Data Service" },
  hardware: { tr: "Starlink Anten & Donanım", en: "Starlink Antenna & Hardware" },
  installation: { tr: "Uçtan Uca Kurulum Hizmeti", en: "End-to-End Installation Service" },
  firewall: { tr: "Yönetilen Firewall & Güvenlik", en: "Managed Firewall & Security" },
  support: { tr: "7/24 Teknik Destek & Bakım", en: "24/7 Technical Support & Maintenance" },
  network: { tr: "Gemi İçi Network Yönetimi", en: "Onboard Network Management" },
};

export async function sendQuoteEmails(quote: QuoteData) {
  const services = quote.services || [];
  const servicesListTR = services
    .map((s) => `• ${serviceLabels[s]?.tr || s}`)
    .join("\n");
  
  const servicesListEN = services
    .map((s) => `• ${serviceLabels[s]?.en || s}`)
    .join("\n");

  // Email to customer (Turkish)
  const customerEmailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Poppins', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: #ffde59; padding: 30px; text-align: center; }
        .header img { max-height: 60px; margin-bottom: 15px; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; color: #ffffff; }
        .content { padding: 30px; }
        .highlight { background-color: #fff9e6; border-left: 4px solid #ffde59; padding: 15px; margin: 20px 0; border-radius: 4px; }
        .footer { background: #000000; color: #999; text-align: center; padding: 20px; font-size: 12px; }
        .footer a { color: #ffde59; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://adegloba.space/assets/logo-Dgu5770B.png" alt="AdeGloba Space" />
          <h1>Teklif Talebiniz Alındı</h1>
        </div>
        <div class="content">
          <p>Sayın <strong>${quote.contactName}</strong>,</p>
          <p>Teklif talebiniz tarafımıza ulaşmıştır. Başvurunuz için teşekkür ederiz.</p>
          
          <div class="highlight">
            <strong>Talep Detayları:</strong><br>
            Firma: ${quote.companyName}<br>
            E-posta: ${quote.email}<br>
            Telefon: ${quote.phone}
          </div>

          <p><strong>İlgilendiğiniz Hizmetler:</strong></p>
          <pre style="background: #f8f8f8; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${servicesListTR || "Belirtilmemiş"}</pre>

          ${quote.notes ? `<p><strong>Notlarınız:</strong><br>${quote.notes}</p>` : ""}

          <p>Uzman ekibimiz en kısa sürede sizinle iletişime geçerek özel teklifinizi sunacaktır.</p>
          
          <p style="margin-top: 30px;">Saygılarımızla,<br><strong>AdeGloba Space Ekibi</strong></p>
        </div>
        <div class="footer">
          <p>AdeGloba Space | Starlink Maritime Hizmetleri</p>
          <p>71-75 Shelton Street, London, WC2H 9JQ, UK</p>
          <p><a href="mailto:starlink@adegloba.space">starlink@adegloba.space</a> | +44 7440 225 375</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Email to admin (detailed)
  const adminEmailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Poppins', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { max-width: 700px; margin: 30px auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: #ffde59; padding: 30px; text-align: center; }
        .header img { max-height: 50px; margin-bottom: 10px; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; color: #ffde59; }
        .content { padding: 30px; }
        .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .info-table th { background: #000; color: #ffde59; padding: 12px; text-align: left; font-weight: 600; }
        .info-table td { padding: 12px; border-bottom: 1px solid #eee; }
        .services-box { background: #f9f9f9; border: 2px solid #ffde59; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .footer { background: #000000; color: #999; text-align: center; padding: 20px; font-size: 12px; }
        .urgent { color: #ff5722; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://adegloba.space/assets/logo-Dgu5770B.png" alt="AdeGloba Space" />
          <h1>Yeni Teklif Talebi</h1>
        </div>
        <div class="content">
          <p class="urgent">⚠️ Yeni bir müşteri teklif talebi oluşturdu. Lütfen en kısa sürede yanıt verin.</p>
          
          <table class="info-table">
            <tr>
              <th colspan="2">Müşteri Bilgileri</th>
            </tr>
            <tr>
              <td><strong>Firma Adı:</strong></td>
              <td>${quote.companyName}</td>
            </tr>
            <tr>
              <td><strong>Yetkili Kişi:</strong></td>
              <td>${quote.contactName}</td>
            </tr>
            <tr>
              <td><strong>E-posta:</strong></td>
              <td><a href="mailto:${quote.email}">${quote.email}</a></td>
            </tr>
            <tr>
              <td><strong>Telefon:</strong></td>
              <td><a href="tel:${quote.phone}">${quote.phone}</a></td>
            </tr>
          </table>

          <div class="services-box">
            <h3 style="margin-top: 0; color: #000;">İlgilenilen Hizmetler:</h3>
            <pre style="white-space: pre-wrap; margin: 0;">${servicesListTR || "Belirtilmemiş"}</pre>
            <hr style="border: none; border-top: 1px dashed #ccc; margin: 10px 0;">
            <pre style="white-space: pre-wrap; margin: 0; color: #666;">${servicesListEN || "Not specified"}</pre>
          </div>

          ${quote.notes ? `
          <div style="background: #fff9e6; padding: 15px; border-left: 4px solid #ffde59; margin: 20px 0;">
            <strong>Müşteri Notları:</strong><br>
            ${quote.notes}
          </div>
          ` : ""}

          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            <strong>Aksiyon:</strong> Lütfen müşteriyle iletişime geçin ve özel teklifinizi hazırlayın.
          </p>
        </div>
        <div class="footer">
          <p>AdeGloba Space - Admin Panel</p>
          <p>Bu mail otomatik olarak oluşturulmuştur.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Send emails
  await Promise.all([
    transporter.sendMail({
      from: `"AdeGloba Space" <${process.env.SMTP_USER}>`,
      to: quote.email,
      subject: "Teklif Talebiniz Alındı - AdeGloba Space",
      html: customerEmailHTML,
    }),
    transporter.sendMail({
      from: `"AdeGloba Space System" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🔔 Yeni Teklif Talebi - ${quote.companyName}`,
      html: adminEmailHTML,
    }),
  ]);
}