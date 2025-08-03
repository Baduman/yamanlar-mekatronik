import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

// SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'mail.yamanlarmekatronik.com',
  port: 587,
  secure: false,
  auth: {
    user: 'info@yamanlarmekatronik.com',
    pass: 'BSw8Y2bX'
  },
  tls: {
    rejectUnauthorized: false
  }
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message, product } = await request.json();

    const mailOptions = {
      from: 'info@yamanlarmekatronik.com',
      to: 'info@yamanlarmekatronik.com',
      subject: 'Yeni Teklif Talebi - Yamanlar Mekatronik',
      html: `
        <h2>Yeni Teklif Talebi</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Şirket:</strong> ${company}</p>
        <p><strong>Ürün:</strong> ${product}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Teklif talebiniz başarıyla gönderildi.'
    });
  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return NextResponse.json({
      success: false,
      message: 'Mail gönderilirken bir hata oluştu.'
    }, { status: 500 });
  }
} 