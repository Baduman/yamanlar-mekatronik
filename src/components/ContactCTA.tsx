import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/homePageImage/baseImage2.webp)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
            Projenizi Hayata Geçirelim
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
            Mekatronik çözümleriniz için uzman ekibimizle iletişime geçin.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
          <Link
            href="/teklif-al"
            className="group inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-[#00b9bf] text-white font-semibold rounded-lg hover:bg-[#009aa0] transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          >
            Teklif Alın
            <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/iletisim"
            className="group inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#00b9bf] transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          >
            İletişime Geçin
            <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto px-4 md:px-0">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00b9bf]/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#00b9bf]" />
            </div>
            <h3 className="font-semibold mb-2 text-white text-sm md:text-base">Telefon</h3>
            <a
              href="tel:+902322503500"
              className="text-white/90 hover:text-white transition-colors text-sm md:text-base"
            >
              +90 232 250 35 00
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00b9bf]/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#00b9bf]" />
            </div>
            <h3 className="font-semibold mb-2 text-white text-sm md:text-base">E-posta</h3>
            <a
              href="mailto:info@yamanlarmekatronik.com"
              className="text-white/90 hover:text-white transition-colors text-sm md:text-base"
            >
              info@yamanlarmekatronik.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 