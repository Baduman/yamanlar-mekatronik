import Link from 'next/link';
import { ArrowLeft, Package } from 'lucide-react';
import Image from 'next/image';

export default function LinearMotionSystems() {
  const products = [
    {
      name: 'Ball Screws and Nuts',
      image: '/lineerHareketSistemleriImage/Vidalı Mil ve Somunlar.avif',
      description: 'High-quality ball screw and nut systems for precise linear motion.',
      hasCatalog: true,
      pageUrl: '/en/products/ball-screws-nuts'
    },
    {
      name: 'Linear Slides and Carriages',
      image: '/lineerHareketSistemleriImage/Lineer Kızak ve Araballarr.png',
      description: 'Low-friction and high-precision linear slide and carriage systems.',
      hasCatalog: true,
      pageUrl: '/en/products/linear-slides-carriages'
    },
    {
      name: 'End Supports',
      image: '/lineerHareketSistemleriImage/Uç Yatakları.png',
      description: 'High-quality end supports providing stability at shaft ends.',
      hasCatalog: true,
      pageUrl: '/en/products/end-supports'
    },
    {
      name: 'Precision Linear Slides',
      image: '/lineerHareketSistemleriImage/Hassas Lineer Kızak.webp',
      description: 'Specially designed linear slides for applications requiring high precision.',
      hasCatalog: false
    },
    {
      name: 'Telescopic Rails',
      image: '/lineerHareketSistemleriImage/Teleskopik Raylar.jpg',
      description: 'Telescopic rail systems for long-distance movements.',
      hasCatalog: false
    },
    {
      name: 'Linear Bearings',
      image: '/lineerHareketSistemleriImage/Lineer Rulman.webp',
      description: 'Low-friction and high-load capacity linear bearings.',
      hasCatalog: false
    },
    {
      name: 'Linear Guides and Curved Guides',
      image: '/lineerHareketSistemleriImage/Lineer Kılavuzlar ve Kavisli Kılavuzlar.webp',
      description: 'Guide systems for linear and curved movements.',
      hasCatalog: false
    },
    {
      name: 'Rail Guide Tables',
      image: '/lineerHareketSistemleriImage/Raylı Kılavuz Tablaları.jpg',
      description: 'Rail guide table systems for multi-axis movement.',
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
              href="/en/products"
              className="flex items-center text-[#00b9bf] hover:text-[#009aa0] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Products
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            Linear Motion Systems
          </h1>
          <p className="text-gray-600 mt-2">
            Linear motion systems offering high precision and durability
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e6f7f8] to-[#00b9bf]/20 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#00b9bf]/10 backdrop-blur-sm rounded-full border border-[#00b9bf]/20 mb-6">
              <Package className="w-4 h-4 text-[#00b9bf] mr-2" />
              <span className="text-sm font-medium text-[#00b9bf]">Linear Motion</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Linear Motion{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Systems
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer our customers many products such as linear support products, ball screws, linear rails, 
              linear carriages and telescopic rails that provide high precision and durability, primarily HIWIN linear motion systems. 
              Click on the products to get information and pricing about HIWIN and all other motion system solutions.
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
              Our Linear Motion Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer our customers many products such as linear support products, ball screws, linear rails, 
              linear carriages and telescopic rails that provide high precision and durability, primarily HIWIN linear motion systems.
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
                      // First 3 products have catalog button (HIWIN green)
                      <Link
                        href={product.pageUrl || '#'}
                        className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors text-center"
                      >
                        Catalog
                      </Link>
                    ) : (
                      // Other products have quote button
                      <Link
                        href={`/en/quote?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent('Linear Motion Systems')}`}
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
            Contact Us for Linear Motion Systems
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We supply linear motion systems from HIWIN and other leading brands from stock. 
            Our expert team is ready to offer you the most suitable solution.
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
} 