'use client';

import { Cpu, Shield, TrendingUp, CheckCircle, ArrowRight, Wrench, Cog, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

const EngineeringPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Video autoplay failed:', e));
    }
  }, []);

  const services = [
    {
      icon: Wrench,
      title: 'Custom Part Production and Prototyping',
      description: 'Custom part production and prototype development services for your needs',
      features: [
        'Custom part design and production',
        'Prototype development',
        '3D printing and rapid prototyping',
        'Material selection and optimization',
        'Quality control and testing processes'
      ]
    },
    {
      icon: Shield,
      title: 'Maintenance and Support Plan Creation',
      description: 'Comprehensive maintenance plans for long-lasting systems',
      features: [
        'Preventive maintenance plans',
        'Maintenance schedule creation',
        'Spare parts management',
        'Fault analysis and solutions',
        'Performance monitoring systems'
      ]
    },
    {
      icon: Cpu,
      title: 'System Integration and Testing Services',
      description: 'Integration of complex systems and comprehensive testing processes',
      features: [
        'System integration',
        'Software and hardware integration',
        'Comprehensive testing processes',
        'Performance validation',
        'Security testing'
      ]
    },
    {
      icon: Cog,
      title: 'CNC Machine Design and Improvement',
      description: 'Design, optimization and improvement solutions for CNC machines',
      features: [
        'CNC machine design',
        'Improvement of existing machines',
        'Automation integration',
        'Precision optimization',
        'Efficiency improvement solutions'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Linear Motion Systems Design',
      description: 'Design and optimization of precision linear motion systems',
      features: [
        'Linear system design',
        'Precision optimization',
        'Load capacity calculations',
        'Material selection',
        'Performance analysis'
      ]
    },
    {
      icon: Smartphone,
      title: 'Industry 4.0 Compatibility',
      description: 'System integration compliant with Industry 4.0 standards',
      features: [
        'IoT integration',
        'Data collection systems',
        'Smart factory solutions',
        'Remote monitoring systems',
        'Digital twin technologies'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Needs Analysis',
      description: 'Detailed analysis of customer needs and determination of technical requirements'
    },
    {
      step: '02',
      title: 'Design and Planning',
      description: 'System design, technical drawings and project planning'
    },
    {
      step: '03',
      title: 'Development and Production',
      description: 'Prototype development, custom part production and testing processes'
    },
    {
      step: '04',
      title: 'Integration and Testing',
      description: 'System integration, comprehensive tests and performance validation'
    },
    {
      step: '05',
      title: 'Commissioning',
      description: 'System installation, training and commissioning processes'
    },
    {
      step: '06',
      title: 'Support and Maintenance',
      description: 'Continuous technical support, maintenance plans and improvement services'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/MuhendislikVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00b9bf]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#00b9bf]/10 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-6xl mx-auto px-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#00b9bf]/20 backdrop-blur-sm rounded-full border border-[#00b9bf]/30 mb-8">
              <Cpu className="w-4 h-4 text-[#00b9bf] mr-2" />
              <span className="text-sm font-medium">Engineering Services</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Engineering{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              With our 25 years of experience, we provide comprehensive engineering 
              services in the field of industrial mechatronics. We develop expert solutions 
              for all your needs, from custom part production to system integration.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/en/quote"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#00b9bf] text-white font-bold rounded-xl hover:bg-[#009aa0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Engineering{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive engineering solutions in the field of industrial mechatronics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#00b9bf] transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00b9bf] to-[#009aa0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900 group-hover:text-[#00b9bf] transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#00b9bf] mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#e6f7f8] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-[#00b9bf]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#00b9bf]/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Working{' '}
              <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring your projects to life with a systematic and professional approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00b9bf] to-[#009aa0] text-white rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-900 group-hover:text-[#00b9bf] transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for connection */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[#00b9bf]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Should You{' '}
                <span className="bg-gradient-to-r from-[#00b9bf] to-[#009aa0] bg-clip-text text-transparent">
                  Choose Us?
                </span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#00b9bf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      25+ Years Experience
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      With over 25 years of experience in the sector, we successfully 
                      complete even the most complex engineering projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#00b9bf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Expert Engineering Team
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team of experienced engineers develops custom solutions 
                      for each project.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#00b9bf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Quality-Focused Approach
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We aim for the highest quality standards in every project 
                      and prioritize customer satisfaction.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#00b9bf]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-[#00b9bf]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Continuous Technical Support
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We provide comprehensive technical support and maintenance 
                      services even after project completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00b9bf] via-[#009aa0] to-[#007b80] rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span>ISO 9001 Quality Management System</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span>CE Certified Products</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <span>Compliance with Safety Standards</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span>Industry 4.0 Compatibility</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                    <span>International Technology Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00b9bf] via-[#009aa0] to-[#007b80] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Cpu className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Engineering Expertise</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Let&apos;s Bring Your Engineering{' '}
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Project to Life
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            With our 25 years of experience, let&apos;s complete your projects 
            with the highest quality using our engineering expertise.
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

export default EngineeringPage; 