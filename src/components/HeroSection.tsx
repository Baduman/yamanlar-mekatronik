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
      <section className="relative min-h-screen">
        {/* Video Section */}
        <div className="relative h-screen overflow-hidden">
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
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#00b9bf]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-[#00b9bf]/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#00b9bf]/25 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Content Section */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            {/* Main Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Star className="w-4 h-4 text-[#00b9bf] mr-2" />
                <span className="text-sm font-medium">Endüstriyel Mekatronik Çözümleri</span>
              </div>

              {/* Main Title */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block">Mekatronik ve</span>
                  <span className="block" style={{ color: '#00b9bf' }}>Lineer Harekette</span>
                  <span className="block">Uzmanlık</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                  Kalite, yenilik ve mühendislik mükemmeliyetine odaklanarak, 
                  lineer hareket ve mekatronik ürünler alanında sunduğumuz 
                  çözümlerle müşterilerimizin ihtiyaçlarını karşılamak için varız.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/teklif-al"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-[#00b9bf] hover:bg-[#009aa0] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Teklif Alın
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/iletisim"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#00b9bf] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <Play className="mr-2 w-5 h-5" />
                  İletişime Geçin
                </Link>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-[#00b9bf]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Package className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Geniş Ürün Yelpazesi</h3>
                  <p className="text-sm text-white/80">HIWIN ve diğer lider markaların kapsamlı ürün gamı</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-[#00b9bf]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hızlı Teslimat</h3>
                  <p className="text-sm text-white/80">Stoktan hızlı ve güvenilir teslimat hizmeti</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-[#00b9bf]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Teknik Destek</h3>
                  <p className="text-sm text-white/80">Uzman ekibimizle sürekli teknik danışmanlık</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Misyonumuz
              </h2>
              <div className="w-24 h-1 bg-[#00b9bf] mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                <div className="text-center space-y-6">
                  <div className="text-lg lg:text-xl text-gray-700 leading-relaxed space-y-6">
                    <p className="text-xl font-medium text-gray-800">
                      Sektörümüzdeki en iyi uygulamaları ve teknolojileri benimseyerek, 
                      güvenilir ve yüksek performanslı ürünler sunmak; müşterilerimizle 
                      güçlü işbirlikleri geliştirerek, onların başarısına katkıda bulunmak.
                    </p>
                    <p className="text-lg text-gray-600">
                      Yüksek pazar payı ve güçlü stok yapısıyla sürdürülebilir büyümeyi 
                      sağlayarak devam edeceğiz.
                    </p>
                  </div>
                  
                  {/* Values */}
                  <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#e6f7f8] rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Star className="w-6 h-6 text-[#00b9bf]" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Kalite</h3>
                      <p className="text-sm text-gray-600">En yüksek kalite standartları</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#e6f7f8] rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Star className="w-6 h-6 text-[#00b9bf]" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Güvenilirlik</h3>
                      <p className="text-sm text-gray-600">Güvenilir çözüm ortaklığı</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#e6f7f8] rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Star className="w-6 h-6 text-[#00b9bf]" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Yenilik</h3>
                      <p className="text-sm text-gray-600">Sürekli yenilik ve gelişim</p>
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