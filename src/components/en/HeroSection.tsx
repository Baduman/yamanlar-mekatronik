'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Star, Package, Truck, Headphones } from 'lucide-react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <>
      <section className="relative min-h-screen md:min-h-screen">
        {/* Video Section */}
        <div className="relative h-screen md:h-screen overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Mechatronics Careers_ A World of Possibilities! Your Ultimate Guide.mp4" type="video/mp4" />
          </video>
          {/* Enhanced overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          
          {/* Floating elements - hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-[#00b9bf]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="hidden md:block absolute top-40 right-20 w-16 h-16 bg-[#00b9bf]/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="hidden md:block absolute bottom-40 left-20 w-24 h-24 bg-[#00b9bf]/25 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Content Section */}
        <div className="absolute inset-0 flex items-center justify-center px-4 py-8 md:py-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-20">
            {/* Main Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-[#00b9bf] mr-2" />
                <span className="text-xs md:text-sm font-medium">Industrial Mechatronics Solutions</span>
              </div>

              {/* Main Title */}
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block">Expertise in</span>
                  <span className="block" style={{ color: '#00b9bf' }}>Mechatronics and</span>
                  <span className="block">Linear Motion</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto px-4">
                                           Focusing on quality, innovation, and engineering excellence, 
                         we exist to meet our customers&apos; needs through the solutions 
                         we provide in linear motion and mechatronics products.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <Link
                  href="/en/quote"
                  className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-[#00b9bf] hover:bg-[#009aa0] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/en/contact"
                  className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#00b9bf] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-sm md:text-base"
                >
                  <Play className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  Contact Us
                </Link>
              </div>

              {/* Feature Highlights - Hidden on mobile to prevent overlap */}
              <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto pt-6 md:pt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00b9bf]/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Package className="w-5 h-5 md:w-6 md:h-6 text-[#00b9bf]" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">Wide Product Range</h3>
                  <p className="text-xs md:text-sm text-white/80">Comprehensive product portfolio from HIWIN and other leading brands</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00b9bf]/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Truck className="w-5 h-5 md:w-6 md:h-6 text-[#00b9bf]" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-xs md:text-sm text-white/80">Fast and reliable delivery service from stock</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00b9bf]/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Headphones className="w-5 h-5 md:w-6 md:h-6 text-[#00b9bf]" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">Technical Support</h3>
                  <p className="text-xs md:text-sm text-white/80">Continuous technical consultation with our expert team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-[#00b9bf] mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 border border-gray-100">
                <div className="text-center space-y-4 md:space-y-6">
                  <div className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed space-y-4 md:space-y-6">
                    <p className="text-lg md:text-xl font-medium text-gray-800">
                      By embracing the best practices and technologies in our sector, 
                      we provide reliable and high-performance products; developing 
                      strong partnerships with our customers to contribute to their success.
                    </p>
                    <p className="text-base md:text-lg text-gray-600">
                      We will continue by ensuring sustainable growth with high market 
                      share and strong stock structure.
                    </p>
                  </div>
                  
                  {/* Values */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-100">
                    <div className="text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e6f7f8] rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Star className="w-5 h-5 md:w-6 md:h-6 text-[#00b9bf]" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Quality</h3>
                      <p className="text-xs md:text-sm text-gray-600">Highest quality standards</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e6f7f8] rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Star className="w-5 h-5 md:w-6 md:h-6 text-[#00b9bf]" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Reliability</h3>
                      <p className="text-xs md:text-sm text-gray-600">Reliable solution partnership</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e6f7f8] rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Star className="w-5 h-5 md:w-6 md:h-6 text-[#00b9bf]" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Innovation</h3>
                      <p className="text-xs md:text-sm text-gray-600">Continuous innovation and development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection; 