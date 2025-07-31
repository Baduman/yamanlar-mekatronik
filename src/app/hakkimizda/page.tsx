import { ArrowRight, Star, Users, Target, Shield, Package, Truck, Headphones, Cpu, Heart, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  const features = [
    {
      icon: Headphones,
      title: 'Teknik Destek ve Danışmanlık',
      description: 'Uzman ekibimizle sürekli teknik danışmanlık'
    },
    {
      icon: Star,
      title: 'Memnuniyet',
      description: 'Müşteri memnuniyeti odaklı hizmet anlayışı'
    },
    {
      icon: Truck,
      title: 'Hızlı Teslimat',
      description: 'Stoktan hızlı ve güvenilir teslimat'
    },
    {
      icon: Users,
      title: 'Satış Sonrası Hizmet',
      description: 'Kapsamlı satış sonrası destek hizmetleri'
    },
    {
      icon: Package,
      title: 'Güçlü Stok',
      description: 'Geniş ve güçlü stok yapısı'
    },
    {
      icon: Cpu,
      title: 'Endüstri 4.0',
      description: 'Modern endüstriyel çözümler'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Müşteri Odaklılık',
      description: 'Her projede müşteri memnuniyetini ön planda tutuyoruz'
    },
    {
      icon: Lightbulb,
      title: 'Yenilikçilik',
      description: 'Teknolojik gelişmeleri takip ederek çözümlerimizi sürekli geliştiriyoruz'
    },
    {
      icon: Shield,
      title: 'Güvenilirlik',
      description: '25 yıllık deneyimimizle güvenilir çözüm ortağınız oluyoruz'
    },
    {
      icon: Target,
      title: 'Kalite',
      description: 'En yüksek kalite standartlarında ürün ve hizmet sunuyoruz'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/aboutUsImage/Endustri4-0.jpg)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00b9bf]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00b9bf]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#00b9bf]/20 backdrop-blur-sm rounded-full border border-[#00b9bf]/30 mb-8">
              <Star className="w-4 h-4 text-[#00b9bf] mr-2" />
              <span className="text-sm font-medium text-white">25 Yıllık Deneyim</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Deneyim ile sektörü{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                şekillendiriyoruz
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Yamanlar Mekatronik, 25 yıllık deneyimi ile mekatronik mühendislik alanında seçkin bir firma olarak, kaliteli ve yenilikçi ürünler sunma amacını taşımaktadır. Başta Makina Sektörü olmak üzere Otomotiv, Gıda, Tekstil gibi sektörlerin kullandığı makinalardaki Lineer ve Dairesel Hareket Gruplarının İthalat, İhracat ve Satışını yürütmektedir.
            </p>
          </div>
        </div>
      </section>

      {/* Yenilikçi Çözümler Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 bg-[#e6f7f8] rounded-full text-sm font-medium text-[#00b9bf] mb-4">
                  Yenilikçi Çözümler
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Endüstriyi{' '}
                  <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                    Dönüştürüyoruz
                  </span>
                </h2>
              </div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Bilgi birikimi ve tecrübesiyle, hem bireysel hem de kurumsal çapta müşterilerimize yenilikçi ve özgün çözümler sunmaktayız. Dinamik ekibimizle teknolojiye ayak uydurarak, projelerinize değer katacak hareket kontrol bileşenlerini sizlerle buluşturuyoruz.
                </p>
                <p>
                  Linear ürünlere yönelik satış ve ithalat faaliyetlerimizin yanı sıra, HIWIN markasına ait linear kılavuzlar, raylar, vida ve somun sistemleri ile krameyer dişli çubuğu ve pinyon sistemleri ile endüstriyel çözümler sunmaktayız.
                </p>
                <p>
                  Müşterilerimizin ihtiyaçlarını en üst düzeyde karşılamak için kapsamlı mühendislik hizmetleri de sunarak, sektördeki yerimizi güçlendiriyoruz.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00b9bf] via-[#009aa0] to-[#007b80] rounded-3xl p-8 md:p-10 text-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Öne Çıkan Özelliklerimiz</h3>
                <div className="grid grid-cols-2 gap-6">
                  {features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium group-hover:text-white/90 transition-colors">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Image Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-[#e6f7f8] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-[#00b9bf]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#00b9bf]/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#00b9bf]/10 backdrop-blur-sm rounded-full border border-[#00b9bf]/20 mb-6">
              <Package className="w-4 h-4 text-[#00b9bf] mr-2" />
              <span className="text-sm font-medium text-[#00b9bf]">Hizmet Alanlarımız</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              6 Ana Hizmet Alanımızla{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Fark Yaratıyoruz
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sektörde öncü olan hizmet alanlarımızla müşterilerimize en iyi çözümleri sunuyoruz
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#00b9bf]/20 to-[#009aa0]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <Image
                src="/aboutUsImage/SpecialImage.png"
                alt="Hizmet Alanlarımız"
                width={1000}
                height={750}
                className="relative w-full h-auto max-w-5xl rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Endüstri 4.0 Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#e6f7f8] rounded-full text-sm font-medium text-[#00b9bf] mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Endüstri 4.0
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Endüstri 4.0{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                İzinde
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Yamanlar Mekatronik olarak, hareket kontrol sistemleri ve endüstriyel mekanik çözümler alanında Türkiye&apos;nin önde gelen şirketlerinden biri olmayı amaçlıyoruz. Sanayi ve endüstriyel üretim süreçlerinde verimlilik, hassasiyet ve dayanıklılık sağlamak için yenilikçi ürünler ve hizmetler sunuyoruz.
                </p>
                <p>
                  Uzman kadromuz ve geniş ürün yelpazemizle, müşterilerimizin ihtiyaçlarını karşılamak ve iş süreçlerini iyileştirmek için buradayız.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Kurulduğumuz günden bu yana, mühendislik yetkinliğimizi ve sektörel deneyimimizi birleştirerek, yerli ve uluslararası müşterilerimize hareket kontrol ve otomasyon çözümleri sunuyoruz.
                </p>
                <p>
                  Teknolojiyi yakından takip eden dinamik yapımız sayesinde, yalnızca mevcut gereksinimlerinizi karşılamakla kalmıyor, gelecekteki ihtiyaçlarınıza da yanıt verebilecek çözümler üretiyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-[#e6f7f8] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-[#00b9bf]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#00b9bf]/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Temel{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Değerlerimiz
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Çalışma prensiplerimizi şekillendiren temel değerlerimiz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00b9bf]/5 to-[#009aa0]/5 rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00b9bf] to-[#009aa0] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#00b9bf] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#00b9bf] via-[#009aa0] to-[#007b80] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Package className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Kaliteli Malzeme Tedariki</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            İhtiyacınız Olan{' '}
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Malzemeleri Tedarik Edelim
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            25 yıllık deneyimimizle, endüstriyel mekatronik malzemelerinizi güvenilir şekilde tedarik ediyoruz. HIWIN ve diğer önde gelen markaların ürünlerini stoktan hızlıca temin edebilirsiniz.
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

export default AboutPage; 