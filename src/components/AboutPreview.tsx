import Link from 'next/link';
import { Award, Users, Clock, Target, Shield } from 'lucide-react';

const AboutPreview = () => {
  const stats = [
    {
      icon: Award,
      number: '1000+',
      label: 'Ürün Çeşidi',
      description: 'Geniş ürün yelpazesi'
    },
    {
      icon: Users,
      number: '200+',
      label: 'Aktif Müşteri',
      description: 'Güvenilir iş ortaklığı'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Teknik Destek',
      description: 'Kesintisiz hizmet'
    },
    {
      icon: Target,
      number: '100%',
      label: 'Stok Garantisi',
      description: 'Hızlı teslimat'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Yamanlar Mekatronik
              </h2>
              <p className="text-xl text-[#00b9bf] font-semibold">
                Güvenilir Tedarikçi ve Çözüm Ortağınız
              </p>
            </div>

            <div className="space-y-6 text-gray-600">
              <p>
                Endüstriyel mekatronik ve lineer hareket sistemleri alanında 
                uzmanlaşmış firmamız, müşterilerimize en kaliteli ürünleri 
                en uygun fiyatlarla sunmaktadır.
              </p>
              
              <p>
                HIWIN gibi dünya lideri markaların Türkiye&apos;deki güvenilir 
                tedarikçisi olarak, geniş ürün yelpazemiz ve teknik destek 
                hizmetlerimizle sektörde öncü konumdayız.
              </p>

              <p>
                Müşteri memnuniyetini ön planda tutarak, her projede 
                kişiselleştirilmiş çözümler sunuyor ve uzun vadeli 
                işbirlikleri geliştiriyoruz.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Değerlerimiz</h4>
                <p className="text-sm text-gray-600">
                  Kalite, güvenilirlik ve müşteri odaklılık temel değerlerimizdir.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Hedefimiz</h4>
                <p className="text-sm text-gray-600">
                  Sektörde lider tedarikçi olarak büyümeye devam etmek.
                </p>
              </div>
            </div>

            <Link
              href="/hakkimizda"
              className="inline-flex items-center px-6 py-3 bg-[#00b9bf] text-white font-semibold rounded-lg hover:bg-[#009aa0] transition-colors"
            >
              Daha Fazla Bilgi
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#e6f7f8] rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-gray-900">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates & Awards */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sertifikalar ve Başarılar
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kalitemizi kanıtlayan sertifikalar ve ödüllerle sektörde 
              güvenilir bir partner olarak hizmet veriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e6f7f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#00b9bf]" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ISO 9001</h4>
              <p className="text-sm text-gray-600">Kalite Yönetim Sistemi</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e6f7f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#00b9bf]" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ISO 14001</h4>
              <p className="text-sm text-gray-600">Çevre Yönetim Sistemi</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e6f7f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#00b9bf]" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">OHSAS 18001</h4>
              <p className="text-sm text-gray-600">İş Sağlığı ve Güvenliği</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e6f7f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#00b9bf]" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Müşteri Memnuniyeti</h4>
              <p className="text-sm text-gray-600">%100 Başarı Oranı</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview; 