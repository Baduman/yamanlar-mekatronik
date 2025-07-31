import { Send, Clock, Users, Shield } from 'lucide-react';

const QuotePage = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Hızlı Yanıt',
      description: '24 saat içinde size dönüş yapıyoruz'
    },
    {
      icon: Users,
      title: 'Uzman Ekip',
      description: 'Deneyimli mühendislerimizle analiz'
    },
    {
      icon: Shield,
      title: 'Güvenilir',
      description: 'Kaliteli ve güvenilir çözümler'
    }
  ];

  const serviceTypes = [
    'Otomasyon Sistemleri',
    'Sensör Teknolojileri',
    'Kontrol Sistemleri',
    'Elektrik Sistemleri',
    'Güvenlik Sistemleri',
    'Performans Optimizasyonu',
    'Danışmanlık Hizmetleri',
    'Bakım ve Destek'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Teklif Alın
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projeniz için özel teklif alın. Uzman ekibimiz ihtiyaçlarınızı analiz ederek 
              size en uygun çözümü sunacak.
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
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
                Teklif Formu
              </h2>
              <p className="text-gray-600">
                Aşağıdaki formu doldurarak projeniz için özel teklif alabilirsiniz.
              </p>
            </div>

            <form className="space-y-8">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Şirket adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sektör *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Çalışan Sayısı
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Seçiniz</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Şirket Büyüklüğü
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Seçiniz</option>
                      <option value="startup">Startup</option>
                      <option value="small">Küçük İşletme</option>
                      <option value="medium">Orta Ölçekli</option>
                      <option value="large">Büyük Şirket</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Telefon numaranız"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Proje Bilgileri
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hizmet Türü *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {serviceTypes.map((service, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Proje Bütçesi
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Seçiniz</option>
                      <option value="0-50k">0 - 50.000 TL</option>
                      <option value="50k-200k">50.000 - 200.000 TL</option>
                      <option value="200k-500k">200.000 - 500.000 TL</option>
                      <option value="500k-1m">500.000 - 1.000.000 TL</option>
                      <option value="1m+">1.000.000 TL+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Proje Zamanı
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Seçiniz</option>
                      <option value="urgent">Acil (1-2 ay)</option>
                      <option value="normal">Normal (3-6 ay)</option>
                      <option value="flexible">Esnek (6+ ay)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Açıklaması *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Projeniz hakkında detaylı bilgi verin. Mevcut durum, hedefler, özel gereksinimler vb."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ek Dosyalar
                  </label>
                  <input
                    type="file"
                    multiple
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    accept=".pdf,.doc,.docx,.jpg,.png,.zip"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    PDF, Word, resim dosyaları veya ZIP arşivi yükleyebilirsiniz (Max: 10MB)
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
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Eklemek istediğiniz notlar veya özel gereksinimler..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Teklif Gönder
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
              Teklif talebinizden proje tamamlanmasına kadar olan süreç
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Teklif Gönderimi
              </h3>
              <p className="text-gray-600">
                Formu doldurarak proje detaylarınızı paylaşın
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Analiz
              </h3>
              <p className="text-gray-600">
                Uzman ekibimiz ihtiyaçlarınızı detaylı analiz eder
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Teklif Hazırlama
              </h3>
              <p className="text-gray-600">
                Size özel kapsamlı teklif hazırlanır
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Proje Başlangıcı
              </h3>
              <p className="text-gray-600">
                Onay sonrası proje hayata geçirilir
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage; 