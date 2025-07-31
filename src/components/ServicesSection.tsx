import { Package, Headphones, Cpu, Database, Zap, Users } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: 'Geniş Ürün Yelpazesi',
      description: 'Yamanlar Mekatronik, endüstriyel mekanik uygulamalar için kapsamlı bir ürün yelpazesi sunmaktadır.',
      features: [
        'HIWIN gibi sektörün en güvenilir markalarıyla iş birliği',
        'Yüksek kaliteli lineer ürünler ve kılavuzlar',
        'Vida milleri ve teleskopik kızaklar',
        'Dişli sistemleri ve çeşitli bileşenler',
        'Özelleştirilmiş sistem tasarımı'
      ],
      href: '/urunler'
    },
    {
      icon: Headphones,
      title: 'Güçlü Teknik Destek',
      description: '20 yıllık birikimimizle müşterilerimize güçlü ve güvenilir teknik destek sunmaktayız.',
      features: [
        'Ürün kurulumundan bakıma kadar tam destek',
        'Uzman ekip ile hızlı çözüm üretimi',
        'Lineer ürünlerde derin teknik bilgi',
        'Satış sonrası kapsamlı hizmet',
        '7/24 teknik danışmanlık'
      ],
      href: '/iletisim'
    },
    {
      icon: Cpu,
      title: 'Endüstri 4.0',
      description: 'Endüstri 4.0 dönüşüm sürecinde müşterilerimize en son teknolojileri kullanarak çözümler sunuyoruz.',
      features: [
        'Akıllı sistemler ve otomasyon çözümleri',
        'Dijitalleşme yolculuğunda destek',
        'Rekabet gücünü artıran teknolojiler',
        'Geleceğe hazır sistem entegrasyonu',
        'IoT ve sensör teknolojileri'
      ],
      href: '/muhendislik'
    },
    {
      icon: Database,
      title: 'Geniş Stok Yapısı',
      description: 'Müşteri memnuniyetini ön planda tutarak, geniş bir stok yapısı ile hizmet vermekteyiz.',
      features: [
        'Mekatronik alanında kapsamlı stok',
        'Acil ihtiyaçlara hızlı çözüm',
        'Üretim süreçlerinin kesintisiz devamı',
        'Farklı sektörlere özel ürün çeşitliliği',
        'Projelerin hızlı hayata geçirilmesi'
      ],
      href: '/urunler'
    },
    {
      icon: Zap,
      title: 'Mühendislik Çözümleri',
      description: 'Uzman mühendislik ekibimizle endüstriyel uygulamalar için özel çözümler geliştiriyoruz.',
      features: [
        'Mekatronik sistem tasarımı',
        'Uygulama aşamasında teknik destek',
        'Endüstriyel otomasyon çözümleri',
        'Sistem entegrasyonu hizmetleri',
        'Performans optimizasyonu'
      ],
      href: '/muhendislik'
    },
    {
      icon: Users,
      title: 'Müşteri Odaklı Hizmet',
      description: 'Müşteri memnuniyetini ön planda tutarak kişiselleştirilmiş çözümler sunuyoruz.',
      features: [
        'İhtiyaç analizi ve çözüm önerisi',
        'Kişiselleştirilmiş hizmet yaklaşımı',
        'Uzun vadeli işbirlikleri',
        'Müşteri odaklı ürün seçimi',
        'Sürekli iletişim ve destek'
      ],
      href: '/iletisim'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
            <span className="text-gray-700 font-medium">Hizmetlerimiz</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Neler Sunuyoruz?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mekatronik alanında kapsamlı çözümler sunuyoruz. 
            Her projede yenilikçi teknolojiler ve güvenilir sistemler kullanıyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 hover:border-[#00b9bf] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00b9bf] group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#00b9bf] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#00b9bf] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Read More Button */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#00b9bf] hover:text-[#009aa0] font-semibold text-sm group-hover:underline"
                >
                  Detayları Görüntüle
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b9bf]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Projeniz İçin Özel Çözüm
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              İhtiyaçlarınıza özel mekatronik çözümler geliştiriyoruz. 
              Uzman ekibimizle projenizi hayata geçirelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/teklif-al"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00b9bf] text-white font-semibold rounded-xl hover:bg-[#009aa0] transition-colors transform hover:scale-105"
              >
                Teklif Alın
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#00b9bf] text-[#00b9bf] font-semibold rounded-xl hover:bg-[#00b9bf] hover:text-white transition-colors transform hover:scale-105"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 