'use client';

import { Send, Clock, Package, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

const QuotePage = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [urgency, setUrgency] = useState('');

  // URL'den ürün parametresini al
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const productParam = urlParams.get('product');
      if (productParam) {
        setSelectedProduct(decodeURIComponent(productParam));
      }
    }
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: 'Hızlı Yanıt',
      description: '24 saat içinde fiyat teklifi alın'
    },
    {
      icon: Package,
      title: 'Stoktan Teslimat',
      description: 'Geniş stok yapımızla hızlı teslimat'
    },
    {
      icon: Shield,
      title: 'Kalite Garantisi',
      description: 'HIWIN ve diğer önde gelen markalar'
    }
  ];

  const productCategories = [
    'Vidalı Mil ve Somunlar',
    'Lineer Kızak ve Arabalar',
    'Uç Yatakları',
    'Hassas Lineer Kızak',
    'Teleskopik Raylar',
    'Lineer Rulman',
    'Lineer Kılavuzlar ve Kavisli Kılavuzlar',
    'Raylı Kılavuz Tablaları',
    'Kremayer ve Dişli Pinyon',
    'Kaplin',
    'Triger Dişliler ve Zincir Dişliler',
    'Alt Destekli Miller',
    'Krom Kaplı İndüksiyonlu Mil',
    'Vidalı Mil Somun Gövdeleri ve Mil Ucu Bağlantıları',
    'Bez Körük',
    'Trapez Vidalar ve Mafsallar',
    'Kayışlar ve Kasnaklar'
  ];

  const brands = [
    'HIWIN',
    'PYG',
    'YOSO',
    'Diğer'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    alert('Teklif talebiniz alındı. En kısa sürede size dönüş yapacağız.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e6f7f8] to-[#00b9bf]/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Malzeme Teklifi Alın
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyacınız olan endüstriyel mekatronik malzemeleri için hızlı ve güvenilir teklif alın. 
              HIWIN ve diğer önde gelen markaların ürünlerini stoktan tedarik ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#00b9bf]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[#00b9bf]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Malzeme Teklif Formu
              </h2>
              <p className="text-gray-600">
                Aşağıdaki formu doldurarak ihtiyacınız olan malzemeler için teklif alabilirsiniz.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Şirket Bilgileri
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Şirket Adı *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                      placeholder="Şirket adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sektör *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    >
                      <option value="">Sektör seçiniz</option>
                      <option value="manufacturing">Üretim</option>
                      <option value="automotive">Otomotiv</option>
                      <option value="food">Gıda</option>
                      <option value="chemical">Kimya</option>
                      <option value="pharmaceutical">İlaç</option>
                      <option value="textile">Tekstil</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  İletişim Bilgileri
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pozisyon *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                      placeholder="Pozisyonunuz"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                      placeholder="Telefon numaranız"
                    />
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Malzeme Bilgileri
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ürün Kategorisi *
                    </label>
                    <select
                      required
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    >
                      <option value="">Ürün kategorisi seçiniz</option>
                      {productCategories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tercih Ettiğiniz Marka
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent">
                      <option value="">Marka seçiniz</option>
                      {brands.map((brand, index) => (
                        <option key={index} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Miktar/Adet *
                    </label>
                    <input
                      type="text"
                      required
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                      placeholder="Örn: 10 adet, 5 metre, 2 set"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teslimat Aciliyeti
                    </label>
                    <select
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    >
                      <option value="">Seçiniz</option>
                      <option value="urgent">Acil (1-3 gün)</option>
                      <option value="normal">Normal (1 hafta)</option>
                      <option value="flexible">Esnek (2-4 hafta)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teknik Özellikler / Detaylar
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent resize-none"
                    placeholder="Ürünün teknik özellikleri, boyutları, malzeme türü, özel gereksinimler vb. detayları belirtiniz."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ek Dosyalar
                  </label>
                  <input
                    type="file"
                    multiple
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    accept=".pdf,.doc,.docx,.jpg,.png,.zip,.dwg,.dxf"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Teknik çizimler, katalog sayfaları, resimler veya diğer belgeler yükleyebilirsiniz (Max: 10MB)
                  </p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Ek Bilgiler
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nasıl Haberdar Oldunuz?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent">
                    <option value="">Seçiniz</option>
                    <option value="website">Web Sitesi</option>
                    <option value="social">Sosyal Medya</option>
                    <option value="search">Arama Motoru</option>
                    <option value="referral">Tavsiye</option>
                    <option value="advertisement">Reklam</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ek Notlar
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent resize-none"
                    placeholder="Eklemek istediğiniz notlar, özel gereksinimler veya sorularınız..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-[#00b9bf] text-white font-semibold rounded-lg hover:bg-[#009aa0] transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Teklif Talebi Gönder
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  * İşaretli alanlar zorunludur
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Process Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Teklif Süreci
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teklif talebinizden malzeme teslimatına kadar olan süreç
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Teklif Talebi
              </h3>
              <p className="text-gray-600">
                Formu doldurarak malzeme detaylarınızı paylaşın
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Stok Kontrolü
              </h3>
              <p className="text-gray-600">
                Stok durumunu kontrol edip fiyat hesaplaması yaparız
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fiyat Teklifi
              </h3>
              <p className="text-gray-600">
                Size detaylı fiyat teklifi hazırlarız
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hızlı Teslimat
              </h3>
              <p className="text-gray-600">
                Onay sonrası malzemelerinizi teslim ederiz
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage; 