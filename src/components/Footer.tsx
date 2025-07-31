import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/FooterLogo.png"
                alt="Yamanlar Mekatronik Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="ml-3 text-xl font-bold">
                Yamanlar Mekatronik
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Endüstriyel mekatronik ve lineer hareket sistemleri alanında 
              uzmanlaşmış, güvenilir tedarikçi ve çözüm ortağınız.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>+90 232 250 35 00</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@yamanlarmekatronik.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-gray-400 hover:text-[#00b9bf] transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler"
                  className="text-gray-400 hover:text-[#00b9bf] transition-colors"
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link
                  href="/muhendislik"
                  className="text-gray-400 hover:text-[#00b9bf] transition-colors"
                >
                  Mühendislik
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-gray-400 hover:text-[#00b9bf] transition-colors"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link
                  href="/teklif-al"
                  className="text-gray-400 hover:text-[#00b9bf] transition-colors"
                >
                  Teklif Al
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">İletişim & Sosyal Medya</h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>+90 232 250 35 00</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@yamanlarmekatronik.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Bizi Takip Edin</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#00b9bf] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#00b9bf] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#00b9bf] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Yamanlar Mekatronik. Tüm hakları saklıdır.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/gizlilik" className="text-gray-400 hover:text-[#00b9bf] transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-gray-400 hover:text-[#00b9bf] transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 