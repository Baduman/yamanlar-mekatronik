import { Package, Headphones, Cpu, Database, Zap, Users } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: 'Wide Product Range',
      description: 'Yamanlar Mechatronics offers a comprehensive product range for industrial mechanical applications.',
      features: [
        'Collaboration with the most reliable brands in the sector like HIWIN',
        'High-quality linear products and guides',
        'Ball screws and telescopic slides',
        'Gear systems and various components',
        'Customized system design'
      ],
      href: '/en/products'
    },
    {
      icon: Headphones,
      title: 'Strong Technical Support',
      description: 'With our 20 years of experience, we provide strong and reliable technical support to our customers.',
      features: [
        'Complete support from product installation to maintenance',
        'Quick solution generation with expert team',
        'Deep technical knowledge in linear products',
        'Comprehensive post-sales service',
        '24/7 technical consultation'
      ],
      href: '/en/contact'
    },
    {
      icon: Cpu,
      title: 'Industry 4.0',
      description: 'In the Industry 4.0 transformation process, we provide solutions to our customers using the latest technologies.',
      features: [
        'Smart systems and automation solutions',
        'Support in digitalization journey',
        'Technologies that increase competitive power',
        'Future-ready system integration',
        'IoT and sensor technologies'
      ],
      href: '/en/engineering'
    },
    {
      icon: Database,
      title: 'Extensive Stock Structure',
      description: 'Prioritizing customer satisfaction, we serve with an extensive stock structure.',
      features: [
        'Comprehensive stock in mechatronics field',
        'Quick solution for urgent needs',
        'Uninterrupted continuation of production processes',
        'Product diversity specific to different sectors',
        'Rapid implementation of projects'
      ],
      href: '/en/products'
    },
    {
      icon: Zap,
      title: 'Engineering Solutions',
      description: 'We develop special solutions for industrial applications with our expert engineering team.',
      features: [
        'Mechatronic system design',
        'Technical support during application phase',
        'Industrial automation solutions',
        'System integration services',
        'Performance optimization'
      ],
      href: '/en/engineering'
    },
    {
      icon: Users,
      title: 'Customer-Focused Service',
      description: 'We offer personalized solutions by prioritizing customer satisfaction.',
      features: [
        'Need analysis and solution proposal',
        'Personalized service approach',
        'Long-term partnerships',
        'Customer-focused product selection',
        'Continuous communication and support'
      ],
      href: '/en/contact'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
            <span className="text-gray-700 font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Do We Offer?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions in the mechatronics field. 
            We use innovative technologies and reliable systems in every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 hover:border-[#00b9bf] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00b9bf] group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#00b9bf] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#00b9bf] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Read More Button */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#00b9bf] hover:text-[#009aa0] font-semibold text-sm group-hover:underline"
                >
                  View Details
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b9bf]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Custom Solution for Your Project
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                   We develop mechatronic solutions specific to your needs. 
                     Let&apos;s bring your project to life with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00b9bf] text-white font-semibold rounded-xl hover:bg-[#009aa0] transition-colors transform hover:scale-105"
              >
                Get Quote
              </Link>
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#00b9bf] text-[#00b9bf] font-semibold rounded-xl hover:bg-[#00b9bf] hover:text-white transition-colors transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 