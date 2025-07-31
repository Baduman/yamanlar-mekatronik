import { Cpu, Settings, Zap, Shield, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const EngineeringPage = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Sistem Tasarımı',
      description: 'Endüstriyel sistemlerin tasarımı ve optimizasyonu',
      features: [
        'Mekatronik sistem tasarımı',
        'Kontrol algoritmaları geliştirme',
        'Simülasyon ve analiz',
        'Prototip geliştirme',
        'Performans optimizasyonu'
      ]
    },
    {
      icon: Settings,
      title: 'Proje Yönetimi',
      description: 'Kapsamlı proje yönetimi ve danışmanlık hizmetleri',
      features: [
        'Proje planlama ve takip',
        'Risk yönetimi',
        'Kalite kontrol',
        'Dokümantasyon',
        'Ekip koordinasyonu'
      ]
    },
    {
      icon: Zap,
      title: 'Elektrik Sistemleri',
      description: 'Güvenli ve verimli elektrik sistemleri tasarımı',
      features: [
        'Güç dağıtım sistemleri',
        'Aydınlatma tasarımı',
        'Güvenlik sistemleri',
        'Enerji verimliliği',
        'Bakım planlaması'
      ]
    },
    {
      icon: Shield,
      title: 'Güvenlik Sistemleri',
      description: 'İş güvenliği ve sistem koruması çözümleri',
      features: [
        'E-Stop sistemleri',
        'Güvenlik ağları',
        'Acil durum sistemleri',
        'Risk analizi',
        'Güvenlik eğitimi'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Performans Analizi',
      description: 'Mevcut sistemlerin analizi ve iyileştirme',
      features: [
        'Sistem analizi',
        'Verimlilik artırma',
        'Bakım optimizasyonu',
        'Enerji tasarrufu',
        'Maliyet analizi'
      ]
    },
    {
      icon: Users,
      title: 'Danışmanlık',
      description: 'Uzman danışmanlık ve eğitim hizmetleri',
      features: [
        'Teknik danışmanlık',
        'Eğitim programları',
        'Süreç iyileştirme',
        'Strateji geliştirme',
        'Kalite yönetimi'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'İhtiyaç Analizi',
      description: 'Müşteri ihtiyaçlarının detaylı analizi ve gereksinimlerin belirlenmesi'
    },
    {
      step: '02',
      title: 'Tasarım ve Planlama',
      description: 'Sistem tasarımı, teknik çizimler ve proje planlaması'
    },
    {
      step: '03',
      title: 'Geliştirme',
      description: 'Prototip geliştirme, test ve optimizasyon süreçleri'
    },
    {
      step: '04',
      title: 'Uygulama',
      description: 'Sistem kurulumu, entegrasyon ve devreye alma'
    },
    {
      step: '05',
      title: 'Test ve Doğrulama',
      description: 'Kapsamlı testler, performans doğrulama ve kalite kontrol'
    },
    {
      step: '06',
      title: 'Destek ve Bakım',
      description: 'Sürekli teknik destek, bakım ve iyileştirme hizmetleri'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mühendislik Hizmetleri
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deneyimli mühendislik ekibimizle, projelerinizi en yüksek kalite 
              standartlarında hayata geçiriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hizmet Alanlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mekatronik alanında kapsamlı mühendislik çözümleri sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projelerinizi sistematik ve profesyonel bir yaklaşımla hayata geçiriyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for connection */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Neden Bizi Seçmelisiniz?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      10+ Yıl Deneyim
                    </h3>
                    <p className="text-gray-600">
                      Sektörde 10 yılı aşkın deneyimimizle, en karmaşık projeleri bile 
                      başarıyla tamamlıyoruz.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Uzman Ekip
                    </h3>
                    <p className="text-gray-600">
                      Deneyimli mühendislerden oluşan ekibimiz, her projeye 
                      özel çözümler geliştiriyor.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Kalite Odaklı
                    </h3>
                    <p className="text-gray-600">
                      Her projede en yüksek kalite standartlarını hedefliyor, 
                      müşteri memnuniyetini önceliyoruz.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Sürekli Destek
                    </h3>
                    <p className="text-gray-600">
                      Proje tamamlandıktan sonra da teknik destek ve bakım 
                      hizmetleri sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Teknik Özellikler</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span>ISO 9001 Kalite Yönetim Sistemi</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span>CE Sertifikalı Ürünler</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <span>Güvenlik Standartlarına Uygunluk</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span>Uluslararası Teknoloji Standartları</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Projenizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mühendislik uzmanlığımızla projelerinizi en yüksek kalitede tamamlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teklif-al"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Teklif Alın
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringPage; 