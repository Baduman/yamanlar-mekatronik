import { ArrowRight, Star, Users, Target, Shield, Package, Truck, Headphones, Cpu, Heart, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  const features = [
    {
      icon: Headphones,
      title: 'Technical Support and Consulting',
      description: 'Continuous technical consultation with our expert team'
    },
    {
      icon: Star,
      title: 'Satisfaction',
      description: 'Customer satisfaction focused service approach'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Fast and reliable delivery from stock'
    },
    {
      icon: Users,
      title: 'After-Sales Service',
      description: 'Comprehensive after-sales support services'
    },
    {
      icon: Package,
      title: 'Strong Stock',
      description: 'Extensive and strong stock structure'
    },
    {
      icon: Cpu,
      title: 'Industry 4.0',
      description: 'Modern industrial solutions'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'We prioritize customer satisfaction in every project'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously improve our solutions by following technological developments'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We become your reliable solution partner with our 25 years of experience'
    },
    {
      icon: Target,
      title: 'Quality',
      description: 'We offer products and services at the highest quality standards'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/aboutUsImage/Endustri4-0.jpg)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00b9bf]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00b9bf]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#00b9bf]/20 backdrop-blur-sm rounded-full border border-[#00b9bf]/30 mb-8">
              <Star className="w-4 h-4 text-[#00b9bf] mr-2" />
              <span className="text-sm font-medium text-white">25 Years of Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Shaping the industry with{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                experience
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Yamanlar Mechatronics, as a distinguished company in the field of mechatronic engineering with 25 years of experience, aims to provide quality and innovative products. It conducts the import, export and sale of Linear and Circular Motion Groups used in machines in sectors such as Automotive, Food, Textile, especially the Machinery Sector.
            </p>
          </div>
        </div>
      </section>

      {/* Innovative Solutions Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 bg-[#e6f7f8] rounded-full text-sm font-medium text-[#00b9bf] mb-4">
                  Innovative Solutions
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Transforming{' '}
                  <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                    Industry
                  </span>
                </h2>
              </div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  With our knowledge and experience, we offer innovative and unique solutions to our customers both individually and corporately. With our dynamic team keeping up with technology, we bring you motion control components that will add value to your projects.
                </p>
                <p>
                  In addition to our sales and import activities for linear products, we offer industrial solutions with HIWIN brand linear guides, rails, screw and nut systems, and rack gear and pinion systems.
                </p>
                <p>
                  We strengthen our position in the sector by offering comprehensive engineering services to meet our customers&apos; needs at the highest level.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00b9bf] via-[#009aa0] to-[#007b80] rounded-3xl p-8 md:p-10 text-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Outstanding Features</h3>
                <div className="grid grid-cols-2 gap-6">
                  {features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium group-hover:text-white/90 transition-colors">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Image Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-[#e6f7f8] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-[#00b9bf]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#00b9bf]/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#00b9bf]/10 backdrop-blur-sm rounded-full border border-[#00b9bf]/20 mb-6">
              <Package className="w-4 h-4 text-[#00b9bf] mr-2" />
              <span className="text-sm font-medium text-[#00b9bf]">Our Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Making a Difference with{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                6 Main Service Areas
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer the best solutions to our customers with our pioneering service areas in the sector
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#00b9bf]/20 to-[#009aa0]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <Image
                src="/aboutUsImage/SpecialImage.png"
                alt="Our Service Areas"
                width={1000}
                height={750}
                className="relative w-full h-auto max-w-5xl rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry 4.0 Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#e6f7f8] rounded-full text-sm font-medium text-[#00b9bf] mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Industry 4.0
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              On the Path of{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Industry 4.0
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  As Yamanlar Mechatronics, we aim to be one of Turkey&apos;s leading companies in motion control systems and industrial mechanical solutions. We offer innovative products and services to ensure efficiency, precision and durability in industrial and industrial production processes.
                </p>
                <p>
                  With our expert staff and wide product range, we are here to meet our customers&apos; needs and improve business processes.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Since our establishment, we have been offering motion control and automation solutions to domestic and international customers by combining our engineering competence and sectoral experience.
                </p>
                <p>
                  Thanks to our dynamic structure that closely follows technology, we not only meet your current requirements, but also produce solutions that can respond to your future needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-[#e6f7f8] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-[#00b9bf]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#00b9bf]/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core values that shape our working principles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00b9bf]/5 to-[#009aa0]/5 rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00b9bf] to-[#009aa0] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#00b9bf] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#00b9bf] via-[#009aa0] to-[#007b80] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Package className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Quality Material Supply</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Let&apos;s Supply the{' '}
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Materials You Need
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            With our 25 years of experience, we reliably supply your industrial mechatronic materials. You can quickly obtain products from HIWIN and other leading brands from stock.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/en/quote"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#00b9bf] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/en/contact"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#00b9bf] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 