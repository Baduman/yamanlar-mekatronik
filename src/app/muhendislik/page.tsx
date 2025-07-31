'use client';

import { Cpu, Settings, Zap, Shield, TrendingUp, Users, CheckCircle, ArrowRight, Wrench, Cog, Factory, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

const EngineeringPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Video autoplay failed:', e));
    }
  }, []);

  const services = [
    {
      icon: Wrench,
      title: 'Özel Parça Üretim ve Prototipleme',
      description: 'İhtiyaçlarınıza özel parça üretimi ve prototip geliştirme hizmetleri',
      features: [
        'Özel parça tasarımı ve üretimi',
        'Prototip geliştirme',
        '3D baskı ve hızlı prototipleme',
        'Malzeme seçimi ve optimizasyonu',
        'Kalite kontrol ve test süreçleri'
      ]
    },
    {
      icon: Shield,
      title: 'Bakım ve Destek Planları Oluşturma',
      description: 'Sistemlerinizin uzun ömürlü olması için kapsamlı bakım planları',
      features: [
        'Önleyici bakım planları',
        'Bakım takvimleri oluşturma',
        'Yedek parça yönetimi',
        'Arıza analizi ve çözümleri',
        'Performans izleme sistemleri'
      ]
    },
    {
      icon: Cpu,
      title: 'Sistem Entegrasyonu ve Test Hizmetleri',
      description: 'Karmaşık sistemlerin entegrasyonu ve kapsamlı test süreçleri',
      features: [
        'Sistem entegrasyonu',
        'Yazılım ve donanım entegrasyonu',
        'Kapsamlı test süreçleri',
        'Performans doğrulama',
        'Güvenlik testleri'
      ]
    },
    {
      icon: Cog,
      title: 'CNC Makine Tasarımı ve İyileştirme',
      description: 'CNC makinelerin tasarımı, optimizasyonu ve iyileştirme çözümleri',
      features: [
        'CNC makine tasarımı',
        'Mevcut makinelerin iyileştirilmesi',
        'Otomasyon entegrasyonu',
        'Hassasiyet optimizasyonu',
        'Verimlilik artırma çözümleri'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Lineer Hareket Sistemleri Tasarımı',
      description: 'Hassas lineer hareket sistemlerinin tasarımı ve optimizasyonu',
      features: [
        'Lineer sistem tasarımı',
        'Hassasiyet optimizasyonu',
        'Yük kapasitesi hesaplamaları',
        'Malzeme seçimi',
        'Performans analizi'
      ]
    },
    {
      icon: Smartphone,
      title: 'Endüstri Uyumluluğu 4.0',
      description: 'Endüstri 4.0 standartlarına uygun sistem entegrasyonu',
      features: [
        'IoT entegrasyonu',
        'Veri toplama sistemleri',
        'Akıllı fabrika çözümleri',
        'Uzaktan izleme sistemleri',
        'Dijital ikiz teknolojileri'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'İhtiyaç Analizi',
      description: 'Müşteri ihtiyaçlarının detaylı analizi ve teknik gereksinimlerin belirlenmesi'
    },
    {
      step: '02',
      title: 'Tasarım ve Planlama',
      description: 'Sistem tasarımı, teknik çizimler ve proje planlaması'
    },
    {
      step: '03',
      title: 'Geliştirme ve Üretim',
      description: 'Prototip geliştirme, özel parça üretimi ve test süreçleri'
    },
    {
      step: '04',
      title: 'Entegrasyon ve Test',
      description: 'Sistem entegrasyonu, kapsamlı testler ve performans doğrulama'
    },
    {
      step: '05',
      title: 'Devreye Alma',
      description: 'Sistem kurulumu, eğitim ve devreye alma süreçleri'
    },
    {
      step: '06',
      title: 'Destek ve Bakım',
      description: 'Sürekli teknik destek, bakım planları ve iyileştirme hizmetleri'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/MuhendislikVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00b9bf]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00b9bf]/10 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-6xl mx-auto px-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#00b9bf]/20 backdrop-blur-sm rounded-full border border-[#00b9bf]/30 mb-8">
              <Cpu className="w-4 h-4 text-[#00b9bf] mr-2" />
              <span className="text-sm font-medium">Mühendislik Hizmetleri</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Mühendislik{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Çözümleri
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              25 yıllık deneyimimizle, endüstriyel mekatronik alanında kapsamlı mühendislik 
              hizmetleri sunuyoruz. Özel parça üretiminden sistem entegrasyonuna kadar 
              tüm ihtiyaçlarınız için uzman çözümler geliştiriyoruz.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/teklif-al"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#00b9bf] text-white font-bold rounded-xl hover:bg-[#009aa0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Teklif Alın
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/iletisim"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#00b9bf] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                İletişime Geçin
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Mühendislik{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Hizmetlerimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Endüstriyel mekatronik alanında kapsamlı mühendislik çözümleri sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#00b9bf] transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00b9bf] to-[#009aa0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900 group-hover:text-[#00b9bf] transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#00b9bf] mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#e6f7f8] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-[#00b9bf]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#00b9bf]/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Çalışma{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Sürecimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projelerinizi sistematik ve profesyonel bir yaklaşımla hayata geçiriyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00b9bf] to-[#009aa0] text-white rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-900 group-hover:text-[#00b9bf] transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for connection */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[#00b9bf]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Neden{' '}
                <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                  Bizi Seçmelisiniz?
                </span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#00b9bf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      25+ Yıl Deneyim
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sektörde 25 yılı aşkın deneyimimizle, en karmaşık mühendislik projelerini 
                      bile başarıyla tamamlıyoruz.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#00b9bf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Uzman Mühendislik Ekibi
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Deneyimli mühendislerden oluşan ekibimiz, her projeye özel 
                      çözümler geliştiriyor.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#00b9bf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Kalite Odaklı Yaklaşım
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Her projede en yüksek kalite standartlarını hedefliyor, 
                      müşteri memnuniyetini önceliyoruz.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#00b9bf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Sürekli Teknik Destek
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Proje tamamlandıktan sonra da kapsamlı teknik destek ve 
                      bakım hizmetleri sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00b9bf] via-[#009aa0] to-[#007b80] rounded-3xl p-8 text-white shadow-2xl">
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
                    <span>Endüstri 4.0 Uyumluluğu</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                    <span>Uluslararası Teknoloji Standartları</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00b9bf] via-[#009aa0] to-[#007b80] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Cpu className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Mühendislik Uzmanlığı</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Mühendislik{' '}
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Projenizi Hayata Geçirelim
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            25 yıllık deneyimimizle, mühendislik uzmanlığımızla projelerinizi 
            en yüksek kalitede tamamlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/teklif-al"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#00b9bf] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Teklif Alın
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/iletisim"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#00b9bf] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              İletişime Geçin
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringPage; 