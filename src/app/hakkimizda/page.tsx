import { Users, Target, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Kalite',
      description: 'Her projede en yüksek kalite standartlarını hedefliyoruz.'
    },
    {
      icon: Shield,
      title: 'Güvenilirlik',
      description: 'Müşterilerimizin güvenini kazanmak için çalışıyoruz.'
    },
    {
      icon: TrendingUp,
      title: 'İnovasyon',
      description: 'Sürekli gelişim ve yenilikçi çözümler üretiyoruz.'
    },
    {
      icon: Users,
      title: 'Müşteri Odaklılık',
      description: 'Müşteri memnuniyeti bizim önceliğimizdir.'
    }
  ];

  const milestones = [
    { year: '2014', title: 'Kuruluş', description: 'Yamanlar Mekatronik kuruldu' },
    { year: '2016', title: 'İlk Büyük Proje', description: 'Endüstriyel otomasyon projesi tamamlandı' },
    { year: '2018', title: 'Genişleme', description: 'Ekip genişletildi ve yeni ofis açıldı' },
    { year: '2020', title: 'Teknoloji Merkezi', description: 'AR-GE merkezi kuruldu' },
    { year: '2022', title: 'Uluslararası', description: 'İlk uluslararası proje tamamlandı' },
    { year: '2024', title: 'Liderlik', description: 'Sektörde lider konuma ulaştık' }
  ];

  const team = [
    {
      name: 'Ahmet Yamanlar',
      position: 'Kurucu & CEO',
      description: 'Mekatronik mühendisi, 15+ yıl deneyim',
      image: '/team/ceo.jpg'
    },
    {
      name: 'Fatma Kaya',
      position: 'Teknik Direktör',
      description: 'Otomasyon uzmanı, 12+ yıl deneyim',
      image: '/team/technical.jpg'
    },
    {
      name: 'Mehmet Demir',
      position: 'Proje Müdürü',
      description: 'Proje yönetimi uzmanı, 10+ yıl deneyim',
      image: '/team/project.jpg'
    },
    {
      name: 'Ayşe Özkan',
      position: 'AR-GE Müdürü',
      description: 'İnovasyon ve geliştirme uzmanı, 8+ yıl deneyim',
      image: '/team/rnd.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2014 yılından bu yana mekatronik alanında yenilikçi çözümler geliştiren, 
              güvenilir ve kaliteli hizmet sunan bir şirketiz.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Yamanlar Mekatronik, 2014 yılında mekatronik mühendisi Ahmet Yamanlar 
                  tarafından kuruldu. Endüstriyel otomasyon ve kontrol sistemleri alanında 
                  uzmanlaşarak, müşterilerine yenilikçi çözümler sunmaya başladık.
                </p>
                <p>
                  İlk yıllarımızda küçük ölçekli projelerle başlayarak, zamanla büyük 
                  endüstriyel tesisler için kapsamlı otomasyon sistemleri geliştirdik. 
                  Deneyimimiz arttıkça, sensör teknolojileri ve kontrol sistemleri 
                  alanlarında da uzmanlaştık.
                </p>
                <p>
                  Bugün, 50&apos;den fazla başarılı proje tamamlamış, 10+ yıllık deneyime 
                  sahip bir ekiple, mekatronik alanında güvenilir bir partner olarak 
                  hizmet vermeye devam ediyoruz.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Vizyonumuz</h3>
                <p className="text-lg mb-6">
                  Mekatronik alanında öncü teknolojiler geliştiren, 
                  güvenilir ve sürdürülebilir çözümler sunan bir marka olmak.
                </p>
                <h4 className="text-xl font-semibold mb-4">Misyonumuz</h4>
                <p className="text-lg">
                  Müşterilerimize en yüksek kalitede mekatronik çözümler sunarak 
                  rekabet avantajı sağlamak ve endüstriyel verimliliği artırmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Çalışma prensiplerimizi oluşturan temel değerlerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Yolculuğumuz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kuruluşumuzdan bugüne kadar geçen süreçteki önemli dönüm noktalarımız
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50" id="ekip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ekibimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deneyimli ve uzman ekibimizle projelerinizi hayata geçiriyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Projenizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Deneyimli ekibimizle tanışın ve projeleriniz için en uygun çözümü birlikte tasarlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              İletişime Geçin
            </Link>
            <Link
              href="/teklif-al"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Teklif Alın
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 