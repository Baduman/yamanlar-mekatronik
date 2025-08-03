# Yamanlar Mail API

Bu proje, Yamanlar Mekatronik web sitesi için e-posta gönderme API'sini içerir.

## Özellikler

- İletişim formu e-posta gönderimi
- Teklif formu e-posta gönderimi
- SMTP entegrasyonu
- TypeScript desteği

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Environment variables'ları ayarlayın:
```env
SMTP_HOST=mail.yamanlarmekatronik.com
SMTP_PORT=587
SMTP_USER=info@yamanlarmekatronik.com
SMTP_PASS=your-email-password
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## API Endpoints

### İletişim Formu
- **URL**: `/api/send-contact`
- **Method**: POST
- **Body**: 
```json
{
  "name": "Ad Soyad",
  "email": "email@example.com",
  "phone": "Telefon",
  "company": "Şirket",
  "subject": "Konu",
  "message": "Mesaj"
}
```

### Teklif Formu
- **URL**: `/api/send-quote`
- **Method**: POST
- **Body**:
```json
{
  "company": "Şirket",
  "name": "Yetkili Kişi",
  "email": "email@example.com",
  "phone": "Telefon",
  "category": "Kategori",
  "product": "Ürün",
  "brand": "Marka",
  "quantity": "Miktar",
  "urgency": "Aciliyet",
  "technicalDetails": "Teknik Detaylar",
  "additionalNotes": "Ek Notlar"
}
```

## Deploy

Bu proje Vercel'de deploy edilmiştir. Environment variables'ları Vercel Dashboard'da ayarlayın.

## Lisans

MIT
