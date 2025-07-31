'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductsPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Video autoplay failed:', e));
    }
  }, []);

  const products = [
    {
      name: 'Vidalı Mil ve Somunlar',
      description: 'Yüksek hassasiyet ve dayanıklılık sunan vidalı mil ve somun sistemleri.',
      image: '/productImage/Vidalı Mil ve Somunlar.avif',
      hasPage: true,
      hasCatalog: true,
      category: 'Lineer Hareket Sistemleri'
    },
    {
      name: 'Lineer Kızak ve Arabalar',
      description: 'Hassas lineer hareket için özel tasarlanmış kızak ve araba sistemleri.',
      image: '/productImage/Lineer Kızak ve Araballarr.png',
      hasPage: true,
      hasCatalog: true,
      category: 'Lineer Hareket Sistemleri'
    },
    {
      name: 'Uç Yatakları',
      description: 'Lineer sistemlerde güvenilir destek sağlayan uç yatakları.',
      image: '/productImage/Uç Yatakları.png',
      hasPage: true,
      hasCatalog: true,
      category: 'Lineer Hareket Sistemleri'
    },
    {
      name: 'Hassas Lineer Kızak',
      description: 'Mikron seviyesinde hassasiyet gerektiren uygulamalar için özel kızaklar.',
      image: '/productImage/Hassas Lineer Kızak.webp',
      hasPage: false,
      hasCatalog: false,
      category: 'Lineer Hareket Sistemleri'
    },
    {
      name: 'Teleskopik Raylar',
      description: 'Uzun mesafeli lineer hareketler için teleskopik ray sistemleri.',
      image: '/productImage/Teleskopik Raylar.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Lineer Hareket Sistemleri'
    },
    {
      name: 'Lineer Rulman',
      description: 'Yüksek yük kapasitesi ve uzun ömürlü lineer rulmanlar.',
      image: '/productImage/Lineer Rulman.webp',
      hasPage: false,
      hasCatalog: false,
      category: 'Lineer Hareket Sistemleri'
    },
    {
      name: 'Lineer Kılavuzlar ve Kavisli Kılavuzlar',
      description: 'Düz ve kavisli yüzeylerde hassas hareket sağlayan kılavuz sistemleri.',
      image: '/productImage/Lineer Kılavuzlar ve Kavisli Kılavuzlar.webp',
      hasPage: false,
      hasCatalog: false,
      category: 'Lineer Hareket Sistemleri'
    },
    {
      name: 'Raylı Kılavuz Tablaları',
      description: 'Çok eksenli hareket gerektiren uygulamalar için raylı tablalar.',
      image: '/productImage/Raylı Kılavuz Tablaları.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Lineer Hareket Sistemleri'
    },
    {
      name: 'Kremayer ve Dişli Pinyon',
      description: 'Dönüş hareketini lineer harekete çeviren kremayer-pinyon sistemleri.',
      image: '/productImage/Kremayer ve Dişli Pinyon.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Kremayer ve Pinyon Sistemleri'
    },
    {
      name: 'Kaplin',
      description: 'Mil bağlantılarında güvenilir ve esnek kaplin çözümleri.',
      image: '/productImage/Kaplin.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Güç Aktarım Ürünleri'
    },
    {
      name: 'Triger Dişliler ve Zincir Dişliler',
      description: 'Güç aktarımında verimli triger ve zincir dişli sistemleri.',
      image: '/productImage/Triger Dişliler ve Zincir Dişliler.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Güç Aktarım Ürünleri'
    },
    {
      name: 'Alt Destekli Miller',
      description: 'Uzun millerde sarkma önleyici alt destek sistemleri.',
      image: '/productImage/Alt Destekli Miller.webp',
      hasPage: false,
      hasCatalog: false,
      category: 'Güç Aktarım Ürünleri'
    },
    {
      name: 'Krom Kaplı İndüksiyonlu Mil',
      description: 'Yüksek sertlik ve aşınma direnci sunan krom kaplı miller.',
      image: '/productImage/Krom Kaplı İndüksiyonlu Mil.webp',
      hasPage: false,
      hasCatalog: false,
      category: 'Güç Aktarım Ürünleri'
    },
    {
      name: 'Vidalı Mil Somun Gövdeleri ve Mil Ucu Bağlantıları',
      description: 'Vidalı mil sistemlerinde güvenilir bağlantı elemanları.',
      image: '/productImage/Vidalı Mil Somun Gövdeleri ve Mil Ucu Bağlantıları.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Lineer Hareket Sistemleri'
    },
    {
      name: 'Bez Körük',
      description: 'Lineer sistemlerde toz ve kir koruması sağlayan bez körükler.',
      image: '/productImage/Bez Körük.png',
      hasPage: false,
      hasCatalog: false,
      category: 'Güç Aktarım Ürünleri'
    },
    {
      name: 'Trapez Vidalar ve Mafsallar',
      description: 'Yüksek yük kapasitesi sunan trapez vidalı sistemler.',
      image: '/productImage/Trapez Vidalar ve Mafsallar.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Güç Aktarım Ürünleri'
    },
    {
      name: 'Kayışlar ve Kasnaklar',
      description: 'Güç aktarımında verimli kayış ve kasnak sistemleri.',
      image: '/productImage/Kayışlar ve Kasnaklar.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Güç Aktarım Ürünleri'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Video Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/Mechatronics Careers_ A World of Possibilities! Your Ultimate Guide.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay Content */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Ürünlerimiz
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Endüstriyel mühendislik çözümlerinde öncü ürünlerimizle tanışın
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
              Ürün Kategorilerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Endüstriyel mühendislik çözümlerinde öncü olan firmamız, yüksek kaliteli lineer hareket sistemleri 
              ithalatı yapmaktadır. Ürün gamımız, sektördeki en güvenilir markalarından biri olan Başta HIWIN 
              olmak üzere bir çok kendini ispatlamış markaları sunmaktayız.
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
                      // İlk 3 ürün için sadece katalog butonu (HIWIN yeşili)
                      <Link
                        href={`/katalog/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors text-center"
                      >
                        Katalog
                      </Link>
                    ) : (
                      // Diğer ürünler için teklif al butonu
                      <Link
                        href={`/teklif-al?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category || '')}`}
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
            Malzeme Tedariki İçin İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            İhtiyacınız olan endüstriyel mekatronik malzemeleri güvenilir şekilde tedarik ediyoruz. 
            HIWIN ve diğer önde gelen markaların ürünlerini stoktan hızlıca temin edebilirsiniz.
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
};

export default ProductsPage; 