export const translations = {
  tr: {
    nav: {
      home: 'Anasayfa',
      about: 'Hakkımızda',
      products: 'Ürünler',
      engineering: 'Mühendislik',
      contact: 'İletişim',
      getQuote: 'Teklif Al'
    },
    products: {
      automation: 'Otomasyon Sistemleri',
      sensors: 'Sensör Teknolojileri',
      control: 'Kontrol Sistemleri'
    },
    topBar: {
      products: 'Doğru Ürünlerle Lineer Hareket',
      email: 'info@yamanlarmekatronik.com',
      phone: '+90 232 250 35 00'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      engineering: 'Engineering',
      contact: 'Contact',
      getQuote: 'Get Quote'
    },
    products: {
      automation: 'Automation Systems',
      sensors: 'Sensor Technologies',
      control: 'Control Systems'
    },
    topBar: {
      products: 'Linear motion with the right products',
      email: 'info@yamanlarmekatronik.com',
      phone: '+90 232 250 35 00'
    }
  }
};

export type Language = 'tr' | 'en';
export type TranslationKey = keyof typeof translations.tr; 