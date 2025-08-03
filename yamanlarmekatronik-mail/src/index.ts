/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import * as nodemailer from 'nodemailer';
import cors from 'cors';

const corsHandler = cors({ 
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept']
});

// SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.yamanlarmekatronik.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'info@yamanlarmekatronik.com',
    pass: process.env.SMTP_PASSWORD || 'BSw8Y2bX'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Quote email function
export const sendQuoteEmail = onRequest(async (request, response) => {
  console.log('sendQuoteEmail function called');
  console.log('Request method:', request.method);
  console.log('Request body:', request.body);
  
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept');
    response.set('Access-Control-Max-Age', '3600');
    response.status(204).send('');
    return;
  }

  corsHandler(request, response, async () => {
    try {
      const { name, email, phone, company, message, product } = request.body;
      
      console.log('Extracted data:', { name, email, phone, company, message, product });

      // Validate required fields
      if (!name || !email || !phone || !company) {
        console.error('Missing required fields');
        response.status(400).json({
          success: false,
          message: 'Eksik alanlar var. Lütfen tüm zorunlu alanları doldurun.'
        });
        return;
      }

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
          <p><strong>Ürün:</strong> ${product || 'Belirtilmemiş'}</p>
          <p><strong>Mesaj:</strong> ${message || 'Belirtilmemiş'}</p>
        `
      };

      console.log('Sending email with options:', mailOptions);
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');

      response.status(200).json({
        success: true,
        message: 'Teklif talebiniz başarıyla gönderildi.'
      });
    } catch (error) {
      console.error('Mail gönderme hatası:', error);
      response.status(500).json({
        success: false,
        message: 'Mail gönderilirken bir hata oluştu.',
        error: error instanceof Error ? error.message : 'Bilinmeyen hata'
      });
    }
  });
});

// Contact email function
export const sendContactEmail = onRequest(async (request, response) => {
  console.log('sendContactEmail function called');
  console.log('Request method:', request.method);
  console.log('Request body:', request.body);
  
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept');
    response.set('Access-Control-Max-Age', '3600');
    response.status(204).send('');
    return;
  }

  corsHandler(request, response, async () => {
    try {
      const { name, email, phone, company, message } = request.body;
      
      console.log('Extracted data:', { name, email, phone, company, message });

      // Validate required fields
      if (!name || !email || !phone || !company) {
        console.error('Missing required fields');
        response.status(400).json({
          success: false,
          message: 'Eksik alanlar var. Lütfen tüm zorunlu alanları doldurun.'
        });
        return;
      }

      const mailOptions = {
        from: 'info@yamanlarmekatronik.com',
        to: 'info@yamanlarmekatronik.com',
        subject: 'Yeni İletişim Mesajı - Yamanlar Mekatronik',
        html: `
          <h2>Yeni İletişim Mesajı</h2>
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Şirket:</strong> ${company}</p>
          <p><strong>Mesaj:</strong> ${message || 'Belirtilmemiş'}</p>
        `
      };

      console.log('Sending email with options:', mailOptions);
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');

      response.status(200).json({
        success: true,
        message: 'Mesajınız başarıyla gönderildi.'
      });
    } catch (error) {
      console.error('Mail gönderme hatası:', error);
      response.status(500).json({
        success: false,
        message: 'Mail gönderilirken bir hata oluştu.',
        error: error instanceof Error ? error.message : 'Bilinmeyen hata'
      });
    }
  });
});
