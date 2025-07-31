import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 (212) 555 0123',
      href: 'tel:+902125550123',
      description: 'Pazartesi - Cuma: 09:00 - 18:00'
    },
    {
      icon: Mail,
      title: 'E-posta',
      value: 'info@yamanlarmekatronik.com',
      href: 'mailto:info@yamanlarmekatronik.com',
      description: '24 saat içinde yanıt alın'
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'İstanbul, Türkiye',
      href: '#',
      description: 'Merkez ofisimiz'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      value: 'Pazartesi - Cuma: 09:00 - 18:00',
      href: '#',
      description: 'Cumartesi: 09:00 - 14:00'
    }
  ];

  const departments = [
    {
      name: 'Satış',
      email: 'satis@yamanlarmekatronik.com',
      phone: '+90 (212) 555 0124'
    },
    {
      name: 'Teknik Destek',
      email: 'destek@yamanlarmekatronik.com',
      phone: '+90 (212) 555 0125'
    },
    {
      name: 'Proje Yönetimi',
      email: 'proje@yamanlarmekatronik.com',
      phone: '+90 (212) 555 0126'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              İletişim
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projeleriniz için bizimle iletişime geçin. 
              Uzman ekibimiz size en uygun çözümü sunmak için hazır.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.href !== '#' ? (
                  <a
                    href={info.href}
                    className="text-blue-600 hover:text-blue-700 font-medium block mb-2"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium mb-2">
                    {info.value}
                  </p>
                )}
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mesaj Gönderin
              </h2>
              <form className="space-y-6">
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
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Telefon numaranız"
                    />
                  </div>
                </div>
                
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
                    Şirket
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Şirket adınız"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konu *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="teklif">Teklif Talebi</option>
                    <option value="destek">Teknik Destek</option>
                    <option value="proje">Proje Danışmanlığı</option>
                    <option value="genel">Genel Bilgi</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Mesaj Gönder
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Harita
                  </h3>
                  <p className="text-gray-600">
                    İnteraktif harita burada görüntülenecek
                  </p>
                </div>
              </div>

              {/* Departments */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Departmanlar
                </h3>
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {dept.name}
                      </h4>
                      <div className="space-y-1 text-sm">
                        <a
                          href={`mailto:${dept.email}`}
                          className="flex items-center text-blue-600 hover:text-blue-700"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {dept.email}
                        </a>
                        <a
                          href={`tel:${dept.phone}`}
                          className="flex items-center text-blue-600 hover:text-blue-700"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-blue-600 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Acil Durum?
                </h3>
                <p className="mb-6">
                  Teknik destek için 7/24 hizmetinizdeyiz
                </p>
                <a
                  href="tel:+902125550123"
                  className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Acil Çağrı
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En çok sorulan sorular ve cevapları
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Teklif süreci nasıl işliyor?
                </h3>
                <p className="text-gray-600">
                  Teklif talebinizi aldıktan sonra 24 saat içinde size dönüş yapıyoruz. 
                  Detaylı analiz sonrası 3-5 iş günü içinde kapsamlı teklif sunuyoruz.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Proje süresi ne kadar?
                </h3>
                <p className="text-gray-600">
                  Proje süresi, projenin kapsamına ve karmaşıklığına göre değişir. 
                  Küçük projeler 2-4 hafta, büyük projeler 3-6 ay sürebilir.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Teknik destek hizmeti var mı?
                </h3>
                <p className="text-gray-600">
                  Evet, tüm projelerimiz için teknik destek hizmeti sunuyoruz. 
                  7/24 acil durum desteği ve normal çalışma saatlerinde tam destek.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Garanti süresi nedir?
                </h3>
                <p className="text-gray-600">
                  Tüm sistemlerimiz için 2 yıl garanti süresi sunuyoruz. 
                  Garanti kapsamında ücretsiz bakım ve onarım hizmeti veriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 