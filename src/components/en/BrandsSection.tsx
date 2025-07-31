import React from 'react';
import Image from 'next/image';

const brands = [
  {
    name: 'PYG',
    image: '/homePageImage/Marka1.jpeg',
    description: 'Reliable partner in industrial mechatronics and automation solutions. Provides solutions that increase efficiency in production processes with high-quality products.',
    website: '#'
  },
  {
    name: 'HIWIN',
    image: '/homePageImage/Marka2.png',
    description: 'Leading brand worldwide in linear motion systems and automation solutions. Preferred reliable partner in industrial applications with products offering high precision and durability.',
    website: 'https://www.hiwin.com'
  },
  {
    name: 'YOSO',
    image: '/homePageImage/Marka3.jpeg',
    description: 'Innovative solutions in mechatronics and linear motion systems. Provides reliable performance in industrial applications with modern technology and quality manufacturing.',
    website: '#'
  }
];

const BrandsSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Brands We Work With
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          By working with world-leading brands in industrial engineering solutions, 
          we provide our customers with the highest quality products and services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Brand Image */}
              <div className="relative h-48 bg-gray-100 flex items-center justify-center p-6">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={200}
                  height={150}
                  className="max-h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Hover Overlay - Information */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-3">{brand.name}</h3>
                  <p className="text-sm leading-relaxed mb-4 opacity-90">
                    {brand.description}
                  </p>
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00b9bf] hover:bg-[#009aa0] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              
              {/* Brand Name (Normal State) */}
              <div className="p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-gray-900">{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection; 