import Link from 'next/link';
import { ArrowLeft, Package } from 'lucide-react';
import Image from 'next/image';

export default function LineerHareketSistemleri() {
  const products = [
    {
      name: 'Vidalı Mil ve Somunlar',
      image: '/lineerHareketSistemleriImage/Vidalı Mil ve Somunlar.avif',
      description: 'Hassas lineer hareket için yüksek kaliteli vidalı mil ve somun sistemleri.',
      hasCatalog: true,
      pageUrl: '/urunler/vidali-mil-somunlar'
    },
    {
      name: 'Lineer Kızak ve Arabalar',
      image: '/lineerHareketSistemleriImage/Lineer Kızak ve Araballarr.png',
      description: 'Düşük sürtünmeli ve yüksek hassasiyetli lineer kızak ve araba sistemleri.',
      hasCatalog: true,
      pageUrl: '/urunler/lineer-kizak-arabalar'
    },
    {
      name: 'Uç Yatakları',
      image: '/lineerHareketSistemleriImage/Uç Yatakları.png',
      description: 'Millerin uçlarında stabilite sağlayan yüksek kaliteli uç yatakları.',
      hasCatalog: true,
      pageUrl: '/urunler/uc-yataklari'
    },
    {
      name: 'Hassas Lineer Kızak',
      image: '/lineerHareketSistemleriImage/Hassas Lineer Kızak.webp',
      description: 'Yüksek hassasiyet gerektiren uygulamalar için özel tasarım lineer kızaklar.',
      hasCatalog: false
    },
    {
      name: 'Teleskopik Raylar',
      image: '/lineerHareketSistemleriImage/Teleskopik Raylar.jpg',
      description: 'Uzun mesafeli hareketler için teleskopik ray sistemleri.',
      hasCatalog: false
    },
    {
      name: 'Lineer Rulman',
      image: '/lineerHareketSistemleriImage/Lineer Rulman.webp',
      description: 'Düşük sürtünmeli ve yüksek yük kapasiteli lineer rulmanlar.',
      hasCatalog: false
    },
    {
      name: 'Lineer Kılavuzlar ve Kavisli Kılavuzlar',
      image: '/lineerHareketSistemleriImage/Lineer Kılavuzlar ve Kavisli Kılavuzlar.webp',
      description: 'Doğrusal ve kavisli hareketler için kılavuz sistemleri.',
      hasCatalog: false
    },
    {
      name: 'Raylı Kılavuz Tablaları',
      image: '/lineerHareketSistemleriImage/Raylı Kılavuz Tablaları.jpg',
      description: 'Çok eksenli hareket için raylı kılavuz tabla sistemleri.',
      hasCatalog: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="flex items-center space-x-4">
            <Link
              href="/urunler"
              className="flex items-center text-[#00b9bf] hover:text-[#009aa0] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Ürünlere Dön
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            Lineer Hareket Sistemleri
          </h1>
          <p className="text-gray-600 mt-2">
            Yüksek hassasiyet ve dayanıklılık sunan lineer hareket sistemleri
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e6f7f8] to-[#00b9bf]/20 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#00b9bf]/10 backdrop-blur-sm rounded-full border border-[#00b9bf]/20 mb-6">
              <Package className="w-4 h-4 text-[#00b9bf] mr-2" />
              <span className="text-sm font-medium text-[#00b9bf]">Lineer Hareket</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Lineer Hareket{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Sistemleri
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Başta HIWIN olmak üzere Lineer hareket sistemleri yüksek hassasiyet ve dayanıklılık sunan lineer destek ürünleri, 
              vidalı miller, Lineer raylar, lineer arabalar ve teleskopik raylar gibi birçok ürünleri müşterilerimize sunuyoruz. 
              HIWIN ve tüm diğer hareket sistemleri çözümleri hakkında bilgi ve fiyat almak için ürünlere tıklayınız.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lineer Hareket Ürün Kategorilerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Başta HIWIN olmak üzere Lineer hareket sistemleri yüksek hassasiyet ve dayanıklılık sunan lineer destek ürünleri, 
              vidalı miller, Lineer raylar, lineer arabalar ve teleskopik raylar gibi birçok ürünleri müşterilerimize sunuyoruz.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {index < 3 ? (
                      // İlk 3 ürün için katalog butonu (HIWIN yeşili)
                      <Link
                        href={product.pageUrl || '#'}
                        className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors text-center"
                      >
                        Katalog
                      </Link>
                    ) : (
                      // Diğer ürünler için teklif al butonu
                      <Link
                        href={`/teklif-al?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent('Lineer Hareket Sistemleri')}`}
                        className="w-full bg-[#00b9bf] hover:bg-[#009aa0] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors text-center"
                      >
                        Teklif Al
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Lineer Hareket Sistemleri İçin İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            HIWIN ve diğer önde gelen markaların lineer hareket sistemlerini stoktan tedarik ediyoruz. 
            Uzman ekibimiz size en uygun çözümü sunmak için hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teklif-al"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00b9bf] hover:bg-[#009aa0] text-white font-semibold rounded-lg transition-colors"
            >
              Teklif Alın
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#00b9bf] text-[#00b9bf] font-semibold rounded-lg hover:bg-[#00b9bf] hover:text-white transition-colors"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 