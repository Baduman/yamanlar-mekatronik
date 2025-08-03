# SMTP E-posta Kurulumu

Bu dosya, Yamanlar Mekatronik web sitesindeki formların hosting sağlayıcınızın SMTP servisi ile e-posta gönderimi için kurulum talimatlarını içerir.

## 1. Environment Variables Dosyası Oluşturma

Proje ana dizininde `.env.local` dosyası oluşturun ve aşağıdaki bilgileri ekleyin:

```env
# SMTP Yapılandırması
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=info@yamanlarmekatronik.com
SMTP_PASS=your-email-password
```

## 2. Hosting Sağlayıcınızdan SMTP Bilgilerini Alma

### Yaygın Hosting Sağlayıcıları:

#### **cPanel Hosting:**
- SMTP Host: `mail.yamanlarmekatronik.com` veya `smtp.yamanlarmekatronik.com`
- Port: `587` (TLS) veya `465` (SSL)
- Kullanıcı: `info@yamanlarmekatronik.com`
- Şifre: E-posta hesabınızın şifresi

#### **Plesk Hosting:**
- SMTP Host: `mail.yamanlarmekatronik.com`
- Port: `587`
- Kullanıcı: `info@yamanlarmekatronik.com`
- Şifre: E-posta hesabınızın şifresi

#### **DirectAdmin:**
- SMTP Host: `mail.yamanlarmekatronik.com`
- Port: `587`
- Kullanıcı: `info@yamanlarmekatronik.com`
- Şifre: E-posta hesabınızın şifresi

#### **Google Workspace (Gmail):**
- SMTP Host: `smtp.gmail.com`
- Port: `587`
- Kullanıcı: `info@yamanlarmekatronik.com`
- Şifre: Uygulama şifresi (normal şifre değil)

#### **Microsoft 365 (Outlook):**
- SMTP Host: `smtp.office365.com`
- Port: `587`
- Kullanıcı: `info@yamanlarmekatronik.com`
- Şifre: E-posta hesabınızın şifresi

## 3. SMTP Bilgilerini Bulma

### cPanel'de:
1. cPanel'e giriş yapın
2. "Email Accounts" bölümüne gidin
3. `info@yamanlarmekatronik.com` hesabını seçin
4. "Connect Devices" veya "Email Client Configuration" bölümüne gidin
5. SMTP ayarlarını not alın

### Plesk'te:
1. Plesk'e giriş yapın
2. "Mail" bölümüne gidin
3. `info@yamanlarmekatronik.com` hesabını seçin
4. "Email Client Configuration" bölümüne gidin
5. SMTP ayarlarını not alın

## 4. Güvenlik Ayarları

### Port Seçimi:
- **Port 587**: TLS (Transport Layer Security) - Önerilen
- **Port 465**: SSL (Secure Sockets Layer) - Alternatif

### Güvenlik Seviyesi:
- **TLS**: Modern ve güvenli
- **SSL**: Eski ama hala güvenli

## 5. Test Etme

1. `.env.local` dosyasını oluşturun ve SMTP bilgilerini ekleyin
2. Sitenizi yeniden başlatın: `npm run dev`
3. Teklif al veya iletişim sayfasına gidin
4. Formu doldurun ve gönderin
5. `info@yamanlarmekatronik.com` adresine e-posta gelip gelmediğini kontrol edin

## 6. Sorun Giderme

### E-posta gelmiyor:
1. **SMTP bilgilerini kontrol edin:**
   - Host adresi doğru mu?
   - Port numarası doğru mu?
   - Kullanıcı adı ve şifre doğru mu?

2. **Güvenlik ayarlarını kontrol edin:**
   - Port 587 için `secure: false`
   - Port 465 için `secure: true`

3. **Hosting sağlayıcınızın SMTP kısıtlamalarını kontrol edin:**
   - Bazı hosting sağlayıcıları SMTP kullanımını kısıtlar
   - Günlük e-posta limitleri olabilir

### Hata mesajları:
- **"Authentication failed"**: Kullanıcı adı veya şifre yanlış
- **"Connection timeout"**: SMTP host adresi yanlış
- **"Port not allowed"**: Port numarası yanlış

## 7. Alternatif Çözümler

### SMTP çalışmazsa:
1. **Hosting sağlayıcınızla iletişime geçin**
2. **SMTP ayarlarını tekrar kontrol edin**
3. **Farklı bir port deneyin (587 yerine 465)**
4. **Güvenlik ayarlarını değiştirin**

### Son çare:
- **EmailJS'e geri dönebiliriz**
- **Formspree kullanabiliriz**
- **Netlify Forms kullanabiliriz**

## 8. Örnek .env.local Dosyası

```env
# SMTP Yapılandırması - Örnek
SMTP_HOST=mail.yamanlarmekatronik.com
SMTP_PORT=587
SMTP_USER=info@yamanlarmekatronik.com
SMTP_PASS=your-email-password-here

# Not: Bu dosyayı git'e commit etmeyin!
# .gitignore dosyasında .env.local olduğundan emin olun
```

## 9. Güvenlik Notları

1. **`.env.local` dosyasını asla git'e commit etmeyin**
2. **E-posta şifrenizi güvenli tutun**
3. **Düzenli olarak şifre değiştirin**
4. **SMTP loglarını kontrol edin**

Bu kurulum tamamlandıktan sonra formlarınız hosting sağlayıcınızın SMTP servisi üzerinden e-posta gönderecektir. 