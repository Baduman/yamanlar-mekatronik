# Yamanlar Mekatronik

Yamanlar Mekatronik şirketinin resmi web sitesi. Next.js ve React kullanılarak geliştirilmiştir.

## Özellikler

- 🏢 **Kurumsal Web Sitesi**: Profesyonel ve modern tasarım
- 📱 **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- ⚡ **Hızlı Performans**: Next.js ile optimize edilmiş
- 🎨 **Modern UI**: Tailwind CSS ile şık tasarım
- 🌐 **Çok Dilli Destek**: Türkçe ve İngilizce dil desteği
- 📝 **İletişim Formları**: Teklif alma ve iletişim formları
- 🔧 **Mekatronik Odaklı**: Endüstriyel otomasyon ve kontrol sistemleri

## Sayfalar

- **Ana Sayfa**: Hero section, hizmetler, hakkımızda önizleme
- **Ürünler**: Otomasyon sistemleri, sensör teknolojileri, kontrol sistemleri
- **Hakkımızda**: Şirket hikayesi, değerler, ekip, timeline
- **Mühendislik**: Mühendislik hizmetleri ve süreçler
- **İletişim**: İletişim bilgileri ve form
- **Teklif Al**: Detaylı teklif formu

## Teknolojiler

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Firebase Hosting

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/your-username/yamanlar-mekatronik.git
cd yamanlar-mekatronik
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Build ve Deployment

### Firebase Deployment

1. Firebase CLI'yi yükleyin:
```bash
npm install -g firebase-tools
```

2. Firebase'de oturum açın:
```bash
firebase login
```

3. Firebase projesini başlatın:
```bash
firebase init hosting
```

4. Projeyi build edin ve deploy edin:
```bash
npm run deploy
```

### Manuel Build

```bash
# Production build
npm run build

# Static export
npm run export
```

## Proje Yapısı

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global stiller
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Ana sayfa
│   ├── urunler/        # Ürünler sayfası
│   ├── hakkimizda/     # Hakkımızda sayfası
│   ├── muhendislik/    # Mühendislik sayfası
│   ├── iletisim/       # İletişim sayfası
│   └── teklif-al/      # Teklif al sayfası
├── components/         # React bileşenleri
│   ├── Header.tsx     # Header bileşeni
│   ├── Footer.tsx     # Footer bileşeni
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── AboutPreview.tsx
│   └── ContactCTA.tsx
└── lib/               # Utility fonksiyonları
    └── utils.ts
```

## Özelleştirme

### Renkler
Ana renkler `tailwind.config.js` dosyasında tanımlanmıştır:
- Primary: Blue (#2563eb)
- Secondary: Indigo (#4f46e5)

### İçerik
Tüm içerikler ilgili sayfa dosyalarında bulunmaktadır. Metinleri değiştirmek için bu dosyaları düzenleyebilirsiniz.

### Logo
Logo `src/components/Header.tsx` dosyasında tanımlanmıştır. Kendi logonuzu eklemek için bu dosyayı düzenleyin.

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## İletişim

Yamanlar Mekatronik - info@yamanlarmekatronik.com

Proje Linki: [https://github.com/your-username/yamanlar-mekatronik](https://github.com/your-username/yamanlar-mekatronik)
