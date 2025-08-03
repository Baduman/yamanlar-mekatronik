'use client';

import { Send, Clock, Package, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

const QuotePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [urgency, setUrgency] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // URL'den ürün ve kategori parametrelerini al
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const productParam = urlParams.get('product');
      const categoryParam = urlParams.get('category');
      
      if (categoryParam) {
        const decodedCategory = decodeURIComponent(categoryParam);
        setSelectedCategory(decodedCategory);
      }
      
      if (productParam) {
        const decodedProduct = decodeURIComponent(productParam);
        setSelectedProduct(decodedProduct);
        
        // Eğer kategori parametresi yoksa, ürün adına göre kategoriyi otomatik seç
        if (!categoryParam) {
          const category = getCategoryFromProduct(decodedProduct);
          if (category) {
            setSelectedCategory(category);
          }
        }
      }
    }
  }, []);

  const getCategoryFromProduct = (productName: string) => {
    // Ürün adına göre kategoriyi belirle
    if (productName.includes('Vidalı Mil') || productName.includes('FSZ') || productName.includes('FSI') || productName.includes('FSC')) {
      return 'Lineer Hareket Sistemleri';
    }
    if (productName.includes('Lineer Kızak') || productName.includes('WE Serisi') || productName.includes('EG Serisi') || productName.includes('SE Serisi') || productName.includes('E2 Serisi') || productName.includes('AG Serisi') || productName.includes('QR Serisi') || productName.includes('QW Serisi') || productName.includes('QE Serisi') || productName.includes('CG Serisi') || productName.includes('MG Serisi') || productName.includes('RG Serisi') || productName.includes('HG Serisi')) {
      return 'Lineer Hareket Sistemleri';
    }
    if (productName.includes('Uç Yatağı') || productName.includes('WBK') || productName.includes('FF') || productName.includes('BF') || productName.includes('FK') || productName.includes('BK')) {
      return 'Lineer Hareket Sistemleri';
    }
    if (productName.includes('Kremayer') || productName.includes('Pinyon') || productName.includes('Dişli') || productName.includes('Zincir')) {
      return 'Kremayer ve Pinyon Sistemleri';
    }
    if (productName.includes('Kablo') || productName.includes('Kayış') || productName.includes('Trapez') || productName.includes('Bez') || productName.includes('Krom') || productName.includes('Alt Destekli')) {
      return 'Güç Aktarım Ürünleri';
    }
    return '';
  };

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
      description: 'HIWIN, YOSO ve diğer önde gelen markalar'
    }
  ];

  const productCategories = {
    'Lineer Hareket Sistemleri': [
      'Vidalı Mil ve Somunlar',
      'Lineer Kızak ve Arabalar',
      'Uç Yatakları',
      'Hassas Lineer Kızak',
      'Teleskopik Raylar',
      'Lineer Rulman',
      'Lineer Kılavuzlar ve Kavisli Kılavuzlar',
      'Raylı Kılavuz Tablaları'
    ],
    'Vidalı Mil ve Somunlar': [
      'FSZ DIN Flanşlı Vidalı Milleri',
      'FSI DIN Flanşlı Vidalı Milleri',
      'FSC DIN Flanşlı Tip'
    ],
    'Lineer Kızak ve Arabalar': [
      'WE Serisi Dört Sıralı Tip',
      'EG Serisi Alçak Profil Tip',
      'SE Serisi Metal Uç Kapaklı Tip',
      'E2 Serisi Kendinden Yağlamalı Tip',
      'AG Serisi Çapraz Konfigürasyonlu Açılı Tip',
      'QR Serisi Sessiz Makaralı Tip',
      'QW Serisi Sessiz Geniş Tip',
      'QE Serisi Alçak Profilli Tip',
      'CG Serisi Anti-Tork Bilyalı Tip',
      'MG Serisi Minyatür Tip',
      'RG Serisi Makaralı Tip',
      'HG Serisi Bilyalı Tip'
    ],
    'Uç Yatakları': [
      'WBK TİP MİL UÇ YATAĞI',
      'FF TİP MİL UÇ YATAĞI',
      'BF TİP MİL UÇ YATAĞI',
      'FK TİP MİL UÇ YATAĞI',
      'BK TİP MİL UÇ YATAĞI'
    ],
    'Kremayer ve Pinyon Sistemleri': [
      'Kremayer',
      'Pinyon',
      'Dişli Sistemler',
      'Zincir Dişli'
    ],
    'Güç Aktarım Ürünleri': [
      'Kablo Taşıyıcıları',
      'Kayışlar ve Kasnaklar',
      'Trapez Vidalar',
      'Bez Körük',
      'Krom Kaplı İndüksiyonlu Mil',
      'Alt Destekli Miller'
    ]
  };

  const brands = [
    'HIWIN',
    'PYG',
    'YOSO',
    'Diğer'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      console.log('=== TEKLİF FORM BAŞLIYOR ===');
      
      // Form verilerini topla
      const formData = {
        company: (e.target as HTMLFormElement).company?.value || '',
        name: (e.target as HTMLFormElement).contactPerson?.value || '',
        email: (e.target as HTMLFormElement).email?.value || '',
        phone: (e.target as HTMLFormElement).phone?.value || '',
        product: selectedProduct,
        message: `Kategori: ${selectedCategory}\nMarka: ${(e.target as HTMLFormElement).brand?.value || ''}\nMiktar: ${quantity}\nAciliyet: ${urgency}\nTeknik Detaylar: ${(e.target as HTMLFormElement).technicalDetails?.value || ''}\nEk Notlar: ${(e.target as HTMLFormElement).additionalNotes?.value || ''}`
      };

      console.log('Form data:', formData);
      
      const response = await fetch('https://us-central1-yamanlar-mekatronik.cloudfunctions.net/sendQuoteEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('HTTP Error:', response.status, errorText);
        setSubmitMessage(`HTTP Error: ${response.status}`);
        return;
      }
      
      const result = await response.json();
      console.log('Response data:', result);
      
      if (result.success) {
        setSubmitMessage('Teklif talebiniz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
        // Formu temizle
        (e.target as HTMLFormElement).reset();
        setSelectedCategory('');
        setSelectedProduct('');
        setQuantity('');
        setUrgency('');
      } else {
        setSubmitMessage(result.message);
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
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
              HIWIN, YOSO ve diğer önde gelen markaların ürünlerini stoktan tedarik ediyoruz.
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Teklif Formu
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Şirket Adı *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    placeholder="Şirket adınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yetkili Kişi *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    placeholder="Ad soyad"
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
                    name="email"
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
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    placeholder="Telefon numaranız"
                  />
                </div>
              </div>

              {/* Product Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Malzeme Bilgileri
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ürün Kategorisi *
                    </label>
                    <select
                      required
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setSelectedProduct(''); // Kategori değişince ürünü sıfırla
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    >
                      <option value="">Kategori seçiniz</option>
                      {Object.keys(productCategories).map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ürün *
                    </label>
                    <select
                      required
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    >
                      <option value="">Önce kategori seçiniz</option>
                      {selectedCategory && productCategories[selectedCategory as keyof typeof productCategories]?.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tercih Ettiğiniz Marka
                    </label>
                    <select
                      name="brand"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    >
                      <option value="">Marka seçiniz</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>
                  
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
                      placeholder="Miktar veya adet"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teslimat Aciliyeti
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                  >
                    <option value="">Aciliyet seviyesi seçiniz</option>
                    <option value="acil">Acil (1-3 gün)</option>
                    <option value="normal">Normal (1 hafta)</option>
                    <option value="esnek">Esnek (2-4 hafta)</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teknik Özellikler / Detaylar
                  </label>
                  <textarea
                    name="technicalDetails"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent resize-none"
                    placeholder="Ürünün teknik özellikleri, boyutları, özel gereksinimler vb."
                  ></textarea>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ek Dosyalar
                  </label>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Teknik çizimler, fotoğraflar veya diğer belgeler ekleyebilirsiniz
                  </p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ek Bilgiler
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ek Notlar
                  </label>
                  <textarea
                    name="additionalNotes"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent resize-none"
                    placeholder="Ek bilgiler, özel istekler veya notlarınız..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('başarıyla') ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00b9bf] hover:bg-[#009aa0] disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Teklif Talebi Gönder
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Process Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Teklif Süreci
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Teklif talebinizden malzeme teslimatına kadar olan süreç
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Teklif Talebi
              </h3>
              <p className="text-gray-600 text-sm">
                Formu doldurun ve gönderin
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Stok Kontrolü
              </h3>
              <p className="text-gray-600 text-sm">
                Ürün stok durumu kontrol edilir
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fiyat Teklifi
              </h3>
              <p className="text-gray-600 text-sm">
                24 saat içinde fiyat teklifi
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hızlı Teslimat
              </h3>
              <p className="text-gray-600 text-sm">
                Onay sonrası hızlı teslimat
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage; 