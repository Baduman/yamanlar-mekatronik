'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SubMenuItem {
  name: string;
  href: string;
  icon: string;
  submenu?: SubMenuItem[];
}

interface MenuItem {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  
  // Timeout refs for hover delays
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems: MenuItem[] = [
    { name: t('nav.home'), href: '/' },
    { 
      name: t('nav.products'), 
      href: '/urunler',
      submenu: [
        { name: 'Güç Aktarım Ürünleri', href: '/urunler/guc-aktarim-urunleri', icon: '/productImage/GucAktarimUrunleri.jpg' },
        { name: 'Kremayer ve Pinyon', href: '/urunler/kremayer-pinyon', icon: '/productImage/Kremayer ve Dişli Pinyon.jpg' },
        { 
          name: 'Lineer Hareket Sistemleri', 
          href: '/urunler/lineer-hareket-sistemleri', 
          icon: '/menuImage/70_91019372221854362.JPG_1920986_buyuk.ico',
          submenu: [
            { name: 'Lineer Kızak ve Arabalar', href: '/urunler/lineer-kizak-arabalar', icon: '/productImage/Lineer Kızak ve Araballarr.png' },
            { name: 'Vidalı Mil ve Somunlar', href: '/urunler/vidali-mil-somunlar', icon: '/productImage/Vidalı Mil ve Somunlar.avif' },
            { name: 'Uç Yatakları', href: '/urunler/uc-yataklari', icon: '/productImage/Uç Yatakları.png' }
          ]
        }
      ]
    },
    { name: t('nav.about'), href: '/hakkimizda' },
    { name: t('nav.engineering'), href: '/muhendislik' },
    { name: t('nav.contact'), href: '/iletisim' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  // Handle products menu hover with delay
  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
      setHoveredSubmenu(null);
    }, 300); // 300ms delay
  };

  // Handle submenu hover with delay
  const handleSubmenuMouseEnter = (submenuName: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
    setHoveredSubmenu(submenuName);
  };

  const handleSubmenuMouseLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setHoveredSubmenu(null);
    }, 200); // 200ms delay for submenu
  };

  const renderSubmenu = (submenu: SubMenuItem[], isNested = false) => {
    return (
      <div 
        className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 ${isNested ? 'w-72' : 'w-64'}`}
        onMouseEnter={handleProductsMouseEnter}
        onMouseLeave={handleProductsMouseLeave}
      >
        {submenu.map((subItem) => (
          <div key={subItem.name} className="relative">
            <Link
              href={subItem.href}
              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-[#e6f7f8] hover:text-[#00b9bf] transition-colors"
              onMouseEnter={() => subItem.submenu && handleSubmenuMouseEnter(subItem.name)}
              onMouseLeave={() => subItem.submenu && handleSubmenuMouseLeave()}
            >
              <Image 
                src={subItem.icon} 
                alt={subItem.name}
                width={24}
                height={24}
                className="w-6 h-6 mr-3 object-cover rounded"
                onError={() => {
                  // Handle error silently
                }}
              />
              <span className="flex-1">{subItem.name}</span>
              {subItem.submenu && (
                <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
              )}
            </Link>
            
            {/* Nested Submenu */}
            {subItem.submenu && hoveredSubmenu === subItem.name && (
              <div 
                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                onMouseEnter={() => handleSubmenuMouseEnter(subItem.name)}
                onMouseLeave={handleSubmenuMouseLeave}
              >
                {subItem.submenu.map((nestedItem: SubMenuItem) => (
                  <Link
                    key={nestedItem.name}
                    href={nestedItem.href}
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-[#e6f7f8] hover:text-[#00b9bf] transition-colors"
                  >
                    <Image 
                      src={nestedItem.icon} 
                      alt={nestedItem.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 mr-3 object-cover rounded"
                      onError={() => {
                        // Handle error silently
                      }}
                    />
                    {nestedItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Yamanlar Mekatronik Logo" 
                width={96}
                height={96}
                className="h-24 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative flex items-center">
                {item.submenu ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer group"
                    onMouseEnter={handleProductsMouseEnter}
                    onMouseLeave={handleProductsMouseLeave}
                  >
                    <Link href={item.href} className="text-gray-700 hover:text-[#00b9bf] px-3 py-2 text-sm font-medium transition-colors">
                      {item.name}
                    </Link>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                    
                    {/* Dropdown Menu */}
                    {isProductsOpen && renderSubmenu(item.submenu)}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-[#00b9bf] px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Language and Quote Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#00b9bf] px-3 py-2 text-sm font-medium transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Quote Button */}
            <Link
              href="/teklif-al"
              className="bg-[#00b9bf] hover:bg-[#009aa0] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {t('nav.getQuote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#00b9bf] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-[#00b9bf] block px-3 py-2 text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className="flex items-center text-gray-600 hover:text-[#00b9bf] block px-3 py-2 text-sm transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Image 
                              src={subItem.icon} 
                              alt={subItem.name}
                              width={16}
                              height={16}
                              className="w-4 h-4 mr-2 object-cover rounded"
                              onError={() => {
                                // Handle error silently
                              }}
                            />
                            {subItem.name}
                          </Link>
                          {subItem.submenu && (
                            <div className="ml-4 space-y-1">
                              {subItem.submenu.map((nestedItem: SubMenuItem) => (
                                <Link
                                  key={nestedItem.name}
                                  href={nestedItem.href}
                                  className="flex items-center text-gray-500 hover:text-[#00b9bf] block px-3 py-2 text-xs transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <Image 
                                    src={nestedItem.icon} 
                                    alt={nestedItem.name}
                                    width={12}
                                    height={12}
                                    className="w-3 h-3 mr-2 object-cover rounded"
                                    onError={() => {
                                      // Handle error silently
                                    }}
                                  />
                                  {nestedItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Language and Quote */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-gray-700 hover:text-[#00b9bf] px-3 py-2 text-sm font-medium w-full transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>Dil: {language.toUpperCase()}</span>
                </button>
                <Link
                  href="/teklif-al"
                  className="bg-[#00b9bf] hover:bg-[#009aa0] text-white px-4 py-2 rounded-lg text-sm font-medium block text-center mt-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.getQuote')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 