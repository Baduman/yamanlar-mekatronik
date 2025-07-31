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
      name: 'Ball Screws and Nuts',
      description: 'Ball screw and nut systems offering high precision and durability.',
      image: '/productImage/Vidalı Mil ve Somunlar.avif',
      hasPage: true,
      hasCatalog: true,
      category: 'Linear Motion Systems'
    },
    {
      name: 'Linear Slides and Carriages',
      description: 'Slide and carriage systems specially designed for precise linear motion.',
      image: '/productImage/Lineer Kızak ve Araballarr.png',
      hasPage: true,
      hasCatalog: true,
      category: 'Linear Motion Systems'
    },
    {
      name: 'End Supports',
      description: 'End supports providing reliable support in linear systems.',
      image: '/productImage/Uç Yatakları.png',
      hasPage: true,
      hasCatalog: true,
      category: 'Linear Motion Systems'
    },
    {
      name: 'Precision Linear Slides',
      description: 'Special slides for applications requiring micron-level precision.',
      image: '/productImage/Hassas Lineer Kızak.webp',
      hasPage: false,
      hasCatalog: false,
      category: 'Linear Motion Systems'
    },
    {
      name: 'Telescopic Rails',
      description: 'Telescopic rail systems for long-distance linear movements.',
      image: '/productImage/Teleskopik Raylar.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Linear Motion Systems'
    },
    {
      name: 'Linear Bearings',
      description: 'High load capacity and long-lasting linear bearings.',
      image: '/productImage/Lineer Rulman.webp',
      hasPage: false,
      hasCatalog: false,
      category: 'Linear Motion Systems'
    },
    {
      name: 'Linear Guides and Curved Guides',
      description: 'Guide systems providing precise movement on flat and curved surfaces.',
      image: '/productImage/Lineer Kılavuzlar ve Kavisli Kılavuzlar.webp',
      hasPage: false,
      hasCatalog: false,
      category: 'Linear Motion Systems'
    },
    {
      name: 'Rail Guide Tables',
      description: 'Rail tables for applications requiring multi-axis movement.',
      image: '/productImage/Raylı Kılavuz Tablaları.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Linear Motion Systems'
    },
    {
      name: 'Rack and Pinion Gears',
      description: 'Rack-pinion systems converting rotational motion to linear motion.',
      image: '/productImage/Kremayer ve Dişli Pinyon.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Rack and Pinion Systems'
    },
    {
      name: 'Couplings',
      description: 'Reliable and flexible coupling solutions for shaft connections.',
      image: '/productImage/Kaplin.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Power Transmission Products'
    },
    {
      name: 'Timing Gears and Chain Gears',
      description: 'Efficient timing and chain gear systems in power transmission.',
      image: '/productImage/Triger Dişliler ve Zincir Dişliler.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Power Transmission Products'
    },
    {
      name: 'Bottom Supported Shafts',
      description: 'Bottom support systems preventing sagging in long shafts.',
      image: '/productImage/Alt Destekli Miller.webp',
      hasPage: false,
      hasCatalog: false,
      category: 'Power Transmission Products'
    },
    {
      name: 'Chrome Plated Induction Shafts',
      description: 'Chrome plated shafts offering high hardness and wear resistance.',
      image: '/productImage/Krom Kaplı İndüksiyonlu Mil.webp',
      hasPage: false,
      hasCatalog: false,
      category: 'Power Transmission Products'
    },
    {
      name: 'Ball Screw Nut Bodies and Shaft End Connections',
      description: 'Reliable connection elements in ball screw systems.',
      image: '/productImage/Vidalı Mil Somun Gövdeleri ve Mil Ucu Bağlantıları.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Linear Motion Systems'
    },
    {
      name: 'Fabric Bellows',
      description: 'Fabric bellows providing dust and dirt protection in linear systems.',
      image: '/productImage/Bez Körük.png',
      hasPage: false,
      hasCatalog: false,
      category: 'Power Transmission Products'
    },
    {
      name: 'Trapezoidal Screws and Joints',
      description: 'Trapezoidal screw systems offering high load capacity.',
      image: '/productImage/Trapez Vidalar ve Mafsallar.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Power Transmission Products'
    },
    {
      name: 'Belts and Pulleys',
      description: 'Efficient belt and pulley systems in power transmission.',
      image: '/productImage/Kayışlar ve Kasnaklar.jpg',
      hasPage: false,
      hasCatalog: false,
      category: 'Power Transmission Products'
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
              Our Products
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Discover our pioneering products in industrial engineering solutions
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
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our company, which is a pioneer in industrial engineering solutions, imports high-quality linear motion systems. 
              Our product range includes proven brands, primarily HIWIN, one of the most reliable brands in the sector.
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
                      // First 3 products have catalog button only (HIWIN green)
                      <Link
                        href={`/en/catalog/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors text-center"
                      >
                        Catalog
                      </Link>
                    ) : (
                      // Other products have quote button
                      <Link
                        href={`/en/quote?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category || '')}`}
                        className="w-full bg-[#00b9bf] hover:bg-[#009aa0] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors text-center"
                      >
                        Get Quote
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
            Contact Us for Material Supply
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We reliably supply the industrial mechatronic materials you need. 
            You can quickly obtain products from HIWIN and other leading brands from stock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00b9bf] hover:bg-[#009aa0] text-white font-semibold rounded-lg transition-colors"
            >
              Get Quote
            </Link>
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#00b9bf] text-[#00b9bf] font-semibold rounded-lg hover:bg-[#00b9bf] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage; 