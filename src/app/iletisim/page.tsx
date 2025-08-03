'use client';

import { Phone, Mail, MapPin, Clock, Send, Package, Headphones, Building, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 232 250 35 00',
      href: 'tel:+902322503500',
      description: 'Pazartesi - Cuma: 08:00 - 18:00'
    },
    {
      icon: Mail,
      title: 'E-posta',
      value: 'info@yamanlarmekatronik.com',
      href: 'mailto:info@yamanlarmekatronik.com',
      description: '24 saat içinde yanıt alın'
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'Fatih Mahallesi, Ege Caddesi 14/1F Gaziemir/İzmir',
      href: 'https://maps.google.com/?q=Fatih+Mahallesi,+Ege+Caddesi+14/1F+Gaziemir+İzmir',
      description: 'Merkez ofisimiz'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      value: 'Pazartesi - Cuma: 08:00 - 18:00',
      href: '#',
      description: 'Cumartesi: 08:00 - 14:00'
    }
  ];

  const departments = [
    {
      name: 'Satış ve Teklif',
      email: 'satis@yamanlarmekatronik.com',
      phone: '+90 232 250 35 00',
      icon: Package
    },
    {
      name: 'Teknik Destek',
      email: 'destek@yamanlarmekatronik.com',
      phone: '+90 232 250 35 01',
      icon: Headphones
    },
    {
      name: 'Mühendislik',
      email: 'muhendislik@yamanlarmekatronik.com',
      phone: '+90 232 250 35 02',
      icon: Building
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      console.log('=== İLETİŞİM FORM BAŞLIYOR ===');
      console.log('Form data:', formData);
      
      const response = await fetch('https://us-central1-yamanlar-mekatronik.cloudfunctions.net/sendContactEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('HTTP Error:', response.status, errorText);
        setSubmitMessage(`HTTP Error: ${response.status}`);
        return;
      }
      
      const result = await response.json();
      console.log('Response data:', result);
      
      if (result.success) {
        setSubmitMessage('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
        // Formu temizle
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitMessage(result.message);
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-32" style={{ backgroundImage: 'url(/contactUs/contactImage.png)' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <Phone className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">İletişim</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
              Bizimle{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                İletişime Geçin
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              25 yıllık deneyimimizle, endüstriyel mekatronik malzemelerinizi güvenilir şekilde tedarik ediyoruz. 
              HIWIN ve diğer önde gelen markaların ürünlerini stoktan hızlıca temin edebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+902322503500"
                className="inline-flex items-center bg-[#00b9bf] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#009aa0] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </a>
              <a
                href="mailto:info@yamanlarmekatronik.com"
                className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              İletişim{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Bilgilerimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Malzeme tedariki ve teknik destek için bizimle iletişime geçin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00b9bf] to-[#009aa0] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.href !== '#' ? (
                  <a
                    href={info.href}
                    className="text-[#00b9bf] hover:text-[#009aa0] font-medium block mb-2 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium mb-2">
                    {info.value}
                  </p>
                )}
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#e6f7f8] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-[#00b9bf]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#00b9bf]/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Mesaj Gönderin
                </h2>
                <p className="text-gray-600">
                  Malzeme tedariki, teknik destek veya genel bilgi için bizimle iletişime geçin
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent transition-all"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent transition-all"
                      placeholder="Telefon numaranız"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent transition-all"
                    placeholder="E-posta adresiniz"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Şirket
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent transition-all"
                    placeholder="Şirket adınız"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konu *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent transition-all"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="malzeme-tedariki">Malzeme Tedariki</option>
                    <option value="teklif-talebi">Teklif Talebi</option>
                    <option value="teknik-destek">Teknik Destek</option>
                    <option value="muhendislik-hizmeti">Mühendislik Hizmeti</option>
                    <option value="genel-bilgi">Genel Bilgi</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent resize-none transition-all"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>
                
                {/* Submit Message */}
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.includes('başarıyla') ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00b9bf] to-[#009aa0] disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl hover:from-[#009aa0] hover:to-[#007b80] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Mesaj Gönder
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-[#00b9bf]/10 to-[#009aa0]/10 rounded-3xl p-8 h-64 flex items-center justify-center border border-[#00b9bf]/20">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#00b9bf] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ofis Konumumuz
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Fatih Mahallesi, Ege Caddesi 14/1F<br />
                    Gaziemir/İzmir
                  </p>
                  <a
                    href="https://maps.google.com/?q=Fatih+Mahallesi,+Ege+Caddesi+14/1F+Gaziemir+İzmir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00b9bf] hover:text-[#009aa0] font-medium transition-colors"
                  >
                    Haritada Görüntüle
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Departments */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Departmanlarımız
                </h3>
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-[#00b9bf]/10 rounded-xl flex items-center justify-center mr-3">
                          <dept.icon className="w-5 h-5 text-[#00b9bf]" />
                        </div>
                        <h4 className="font-bold text-gray-900">
                          {dept.name}
                        </h4>
                      </div>
                      <div className="space-y-2 text-sm ml-13">
                        <a
                          href={`mailto:${dept.email}`}
                          className="flex items-center text-[#00b9bf] hover:text-[#009aa0] transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {dept.email}
                        </a>
                        <a
                          href={`tel:${dept.phone}`}
                          className="flex items-center text-[#00b9bf] hover:text-[#009aa0] transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#00b9bf] to-[#009aa0] text-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Acil Malzeme İhtiyacı?
                </h3>
                <p className="mb-6 text-white/90">
                  Stoktan hızlı teslimat için hemen arayın
                </p>
                <a
                  href="tel:+902322503500"
                  className="inline-flex items-center bg-white text-[#00b9bf] font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Sık Sorulan{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Sorular
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Malzeme tedariki hakkında en çok sorulan sorular
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-3">
                  Malzeme teslimat süresi ne kadar?
                </h3>
                <p className="text-gray-600">
                  Stoktan malzemeler 1-3 iş günü içinde teslim edilir. Özel siparişler 
                  için 2-4 hafta süre gerekebilir.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-3">
                  Minimum sipariş miktarı var mı?
                </h3>
                <p className="text-gray-600">
                  Hayır, minimum sipariş miktarı yoktur. Küçük miktarlardan büyük 
                  siparişlere kadar tüm ihtiyaçlarınızı karşılıyoruz.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-3">
                  Teknik destek hizmeti sunuyor musunuz?
                </h3>
                <p className="text-gray-600">
                  Evet, tüm ürünlerimiz için teknik destek hizmeti sunuyoruz. 
                  Uzman ekibimiz size yardımcı olmaya hazır.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-3">
                  Garanti süresi nedir?
                </h3>
                <p className="text-gray-600">
                  Tüm ürünlerimiz için üretici garantisi geçerlidir. HIWIN ürünleri 
                  için 2 yıl, diğer markalar için 1 yıl garanti süresi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 