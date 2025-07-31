import Link from 'next/link';
import { ArrowLeft, Package } from 'lucide-react';
import Image from 'next/image';

export default function RackPinionSystems() {
  const products = [
    {
      name: 'Rack',
      image: '/kremayerVePinyonImage/Kramayer.jpg',
      description: 'Precise rack systems that convert rotational motion to linear motion.',
      hasCatalog: false
    },
    {
      name: 'Pinion',
      image: '/kremayerVePinyonImage/Pinyon.png',
      description: 'High-quality pinion gears compatible with rack systems.',
      hasCatalog: false
    },
    {
      name: 'Gear Systems',
      image: '/kremayerVePinyonImage/Dişli Sistemler.jpeg',
      description: 'Complete gear systems and solutions.',
      hasCatalog: false
    },
    {
      name: 'Chain Gear',
      image: '/kremayerVePinyonImage/Zincir Dişli.jpg',
      description: 'Special gear solutions for chain drive systems.',
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
            Rack and Pinion Systems
          </h1>
          <p className="text-gray-600 mt-2">
            Systems that convert rotational motion to linear motion
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e6f7f8] to-[#00b9bf]/20 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#00b9bf]/10 backdrop-blur-sm rounded-full border border-[#00b9bf]/20 mb-6">
              <Package className="w-4 h-4 text-[#00b9bf] mr-2" />
              <span className="text-sm font-medium text-[#00b9bf]">Rack & Pinion</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Rack and Pinion{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Systems
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Rack and pinion systems are important components that combine rotational motion with linear motion. 
              Yamanlar Mechatronics provides flexibility in power transmission and motion control by offering gear systems 
              with various gear ratios. They offer long life and reliability with their durable materials and robust structures.
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
              Our Rack and Pinion Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rack and pinion systems are important components that combine rotational motion with linear motion. 
              Yamanlar Mechatronics provides flexibility in power transmission and motion control by offering gear systems 
              with various gear ratios.
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
                      href={`/en/quote?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent('Rack and Pinion Systems')}`}
                      className="w-full bg-[#00b9bf] hover:bg-[#009aa0] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors text-center"
                    >
                      Get Quote
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
            Contact Us for Rack and Pinion Systems
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our expert team to get information and pricing about all Rack and Pinion / Gear Systems solutions.
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