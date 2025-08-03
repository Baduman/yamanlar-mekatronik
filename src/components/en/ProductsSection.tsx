import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    title: 'Linear Motion Systems',
    desc: 'We offer our customers many products such as linear support products, ball screws, linear rails, linear carriages and telescopic rails that provide high precision and durability, primarily HIWIN linear motion systems. Click on the products to get information and pricing about HIWIN and all other motion system solutions',
    img: '/productImage/Lineer Kızak ve Araballarr.png',
    button: 'Learn More',
    catalogButton: 'Catalog',
    pageUrl: '/en/products/linear-motion-systems',
    reverse: false,
  },
  {
    title: 'Rack and Pinion/Gear Systems',
    desc: 'Rack and pinion systems are important components that combine rotational motion with linear motion. Yamanlar Mechatronics provides flexibility in power transmission and motion control by offering gear systems with various gear ratios. They offer long life and reliability with their durable materials and robust structures. Click on the products to get information and pricing about all Rack and Pinion / Gear Systems solutions',
    img: '/productImage/Kremayer ve Dişli Pinyon.jpg',
    button: 'Learn More',
    catalogButton: 'Catalog',
    pageUrl: '/en/products/rack-pinion-systems',
    reverse: true,
  },
  {
    title: 'Power Transmission Products',
    desc: 'Power transmission products, which play a critical role in power transmission, provide an efficient connection between machines and equipment. As Yamanlar Mechatronics, we have a wide range of products such as gears, pulleys, belts and chains. These products increase energy efficiency while improving the performance of businesses. Click on the products to get information and pricing about power transmission solutions.',
    img: '/productImage/GucAktarimUrunleri.jpg',
    button: 'Learn More',
    catalogButton: 'Catalog',
    pageUrl: '/en/products/power-transmission-products',
    reverse: false,
  },
];

const ProductsSection = () => {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">Our Products</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 px-4 text-sm md:text-base">
          Our company, which is a pioneer in industrial engineering solutions, imports high-quality linear motion systems. Our product range includes proven brands, primarily HIWIN, one of the most reliable brands in the sector.
        </p>
        <div className="space-y-12 md:space-y-16">
          {products.map((product) => (
            <div
              key={product.title}
              className={`flex flex-col md:flex-row ${product.reverse ? 'md:flex-row-reverse' : ''} items-center md:items-stretch gap-6 md:gap-12`}
            >
              <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-0">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">{product.desc}</p>
                <div className="flex gap-3">
                  <Link
                    href={product.pageUrl}
                    className="inline-block bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium px-4 py-2 md:px-6 md:py-2 rounded-lg transition-colors text-sm md:text-base"
                  >
                    {product.catalogButton}
                  </Link>
                  <Link
                    href={`/en/quote?product=${encodeURIComponent(product.title)}`}
                    className="inline-block bg-[#00b9bf] hover:bg-[#009aa0] text-white font-medium px-4 py-2 md:px-6 md:py-2 rounded-lg transition-colors text-sm md:text-base"
                  >
                    {product.button}
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center items-center px-4 md:px-0">
                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-sm md:max-w-none">
                  <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-[#00b9bf] to-[#00d4da] rounded-full"></div>
                  <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-[#00b9bf] to-[#00d4da] rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-[#00b9bf] to-[#00d4da] rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-[#00b9bf] to-[#00d4da] rounded-full"></div>
                  
                  <div className="relative z-10">
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={600}
                      height={450}
                      className="w-full h-auto max-w-xs md:max-w-xl rounded-2xl object-contain"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00b9bf]/5 to-[#00d4da]/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 