'use client';

import { Mail, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TopBar = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: '#',
      label: 'X (Twitter)'
    }
  ];

  return (
    <div className="bg-[#00b9bf] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center py-3">
          {/* Sol taraf - Ürünler */}
          <div className="flex items-center text-sm font-medium">
            <span className="text-center">{t('topBar.products')}</span>
          </div>

          {/* Orta - İletişim Bilgileri */}
          <div className="flex items-center space-x-32">
            {/* Email */}
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4" />
              <a 
                href={`mailto:${t('topBar.email')}`}
                className="hover:underline transition-colors"
              >
                {t('topBar.email')}
              </a>
            </div>

            {/* Telefon */}
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4" />
              <a 
                href={`tel:${t('topBar.phone').replace(/\s/g, '')}`}
                className="hover:underline transition-colors"
              >
                {t('topBar.phone')}
              </a>
            </div>
          </div>

          {/* Sağ taraf - Sosyal Medya */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:text-[#e6f7f8] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden py-2">
          {/* Üst satır - Ürünler yazısı */}
          <div className="flex justify-center items-center mb-2">
            <span className="text-xs font-medium text-center">{t('topBar.products')}</span>
          </div>
          
          {/* Alt satır - İletişim ve sosyal medya */}
          <div className="flex justify-between items-center">
            {/* İletişim Bilgileri */}
            <div className="flex items-center space-x-4">
              {/* Email */}
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <a 
                  href={`mailto:${t('topBar.email')}`}
                  className="text-xs hover:underline transition-colors truncate max-w-[120px]"
                >
                  {t('topBar.email')}
                </a>
              </div>

              {/* Telefon */}
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <a 
                  href={`tel:${t('topBar.phone').replace(/\s/g, '')}`}
                  className="text-xs hover:underline transition-colors"
                >
                  {t('topBar.phone')}
                </a>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-[#e6f7f8] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 