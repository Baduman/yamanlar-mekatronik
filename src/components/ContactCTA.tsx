import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#00b9bf] to-[#009aa0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Projenizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Mekatronik çözümleriniz için uzman ekibimizle iletişime geçin.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/teklif-al"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#00b9bf] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Teklif Alın
          </Link>
          
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#00b9bf] transition-colors"
          >
            İletişime Geçin
          </Link>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Telefon</h3>
            <a
              href="tel:+902322503500"
              className="text-white/90 hover:text-white transition-colors"
            >
              +90 232 250 35 00
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">E-posta</h3>
            <a
              href="mailto:info@yamanlarmekatronik.com"
              className="text-white/90 hover:text-white transition-colors"
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