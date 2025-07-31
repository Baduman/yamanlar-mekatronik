import Link from 'next/link';
import { ArrowLeft, Package } from 'lucide-react';
import Image from 'next/image';

export default function LineerKizakArabalar() {
  const products = [
    {
      name: 'WE Serisi Dört Sıralı Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/WE-Serisi-Dort-Sirali-Tip.webp',
      description: 'Yüksek yük kapasitesi için dört sıralı bilyalı lineer kızak sistemi.',
      hasCatalog: false
    },
    {
      name: 'EG Serisi Alçak Profil Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/EG-Serisi-Alcak-Profil-Tip.webp',
      description: 'Sınırlı alan uygulamaları için alçak profil lineer kızak.',
      hasCatalog: false
    },
    {
      name: 'SE Serisi Metal Uç Kapaklı Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/SE-Serisi-Metal-Uc-Kapakli-Tip.webp',
      description: 'Metal uç kapaklı, dayanıklı lineer kızak sistemi.',
      hasCatalog: false
    },
    {
      name: 'E2 Serisi Kendinden Yağlamalı Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/E2-Serisi-Kendinden-Yaglamali-Tip.webp',
      description: 'Bakım gerektirmeyen kendinden yağlamalı lineer kızak.',
      hasCatalog: false
    },
    {
      name: 'AG Serisi Çapraz Konfigürasyonlu Açılı Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/AG-Serisi-Capraz-Konfigurasyonlu-Acili-Tip.webp',
      description: 'Çapraz konfigürasyonlu açılı lineer kızak sistemi.',
      hasCatalog: false
    },
    {
      name: 'QR Serisi Sessiz Makaralı Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/QR-Serisi-Sessiz-Makarali-Tip.webp',
      description: 'Sessiz çalışma için makaralı lineer kızak sistemi.',
      hasCatalog: false
    },
    {
      name: 'QW Serisi Sessiz Geniş Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/QW-Serisi-Sessiz-Genis-Tip.webp',
      description: 'Geniş yüzeyli sessiz lineer kızak sistemi.',
      hasCatalog: false
    },
    {
      name: 'QE Serisi Alçak Profilli Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/QE-Serisi-Alcak-Profilli-Tip.webp',
      description: 'Alçak profilli sessiz lineer kızak sistemi.',
      hasCatalog: false
    },
    {
      name: 'CG Serisi Anti-Tork Bilyalı Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/CG-Serisi-Anti-Tork-Bilyali-Tip.webp',
      description: 'Anti-tork özellikli bilyalı lineer kızak sistemi.',
      hasCatalog: false
    },
    {
      name: 'MG Serisi Minyatür Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/MG-Serisi-Minyatur-Tip.webp',
      description: 'Kompakt uygulamalar için minyatür lineer kızak.',
      hasCatalog: false
    },
    {
      name: 'RG Serisi Makaralı Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/RG-Serisi-Makarali-Tip.webp',
      description: 'Yüksek hassasiyetli makaralı lineer kızak sistemi.',
      hasCatalog: false
    },
    {
      name: 'HG Serisi Bilyalı Tip',
      image: '/lineerHareketSistemleriImage/Lineer-Kizak-ve-Arabalar/HG-Serisi-Bilyali-Tip.webp',
      description: 'Standart bilyalı lineer kızak sistemi.',
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
              href="/urunler/lineer-hareket-sistemleri"
              className="flex items-center text-[#00b9bf] hover:text-[#009aa0] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Lineer Hareket Sistemlerine Dön
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            Lineer Kızak ve Arabalar
          </h1>
          <p className="text-gray-600 mt-2">
            Düşük sürtünmeli ve yüksek hassasiyetli lineer kızak ve araba sistemleri
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e6f7f8] to-[#00b9bf]/20 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#00b9bf]/10 backdrop-blur-sm rounded-full border border-[#00b9bf]/20 mb-6">
              <Package className="w-4 h-4 text-[#00b9bf] mr-2" />
              <span className="text-sm font-medium text-[#00b9bf]">Lineer Kızak & Araba</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Lineer Kızak ve{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Arabalar
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Düşük sürtünmeli ve yüksek hassasiyetli lineer kızak ve araba sistemleri. 
              Farklı uygulama ihtiyaçları için çeşitli seriler sunuyoruz. 
              Bilyalı, makaralı, sessiz ve minyatür tipler dahil geniş ürün yelpazesi.
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
              Lineer Kızak ve Araba Ürün Kategorilerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Farklı uygulama ihtiyaçları için çeşitli seriler sunuyoruz. 
              Bilyalı, makaralı, sessiz ve minyatür tipler dahil geniş ürün yelpazesi.
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
                    <Link
                      href={`/teklif-al?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent('Lineer Kızak ve Arabalar')}`}
                      className="w-full bg-[#00b9bf] hover:bg-[#009aa0] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors text-center"
                    >
                      Teklif Al
                    </Link>
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
            Lineer Kızak ve Arabalar İçin İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Düşük sürtünmeli ve yüksek hassasiyetli lineer kızak ve araba sistemlerimiz için 
            uzman ekibimizle iletişime geçin.
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