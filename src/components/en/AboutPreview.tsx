import Link from 'next/link';
import { Award, Users, Clock, Target } from 'lucide-react';

const AboutPreview = () => {
  const stats = [
    {
      icon: Award,
      number: '1000+',
      label: 'Product Types',
      description: 'Wide product range'
    },
    {
      icon: Users,
      number: '200+',
      label: 'Active Customers',
      description: 'Reliable partnership'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Technical Support',
      description: 'Uninterrupted service'
    },
    {
      icon: Target,
      number: '100%',
      label: 'Stock Guarantee',
      description: 'Fast delivery'
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 px-4 lg:px-0">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Yamanlar Mechatronics
              </h2>
              <p className="text-lg md:text-xl text-[#00b9bf] font-semibold">
                Your Reliable Supplier and Solution Partner
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 text-gray-600">
              <p className="text-sm md:text-base">
                Our company, specialized in industrial mechatronics and linear motion systems, 
                offers our customers the highest quality products at the most suitable prices.
              </p>
              
              <p className="text-sm md:text-base">
                As the reliable supplier of world-leading brands like HIWIN in Turkey, 
                we are a pioneer in the sector with our wide product range and technical support services.
              </p>

              <p className="text-sm md:text-base">
                By prioritizing customer satisfaction, we offer personalized solutions 
                in every project and develop long-term partnerships.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">Our Values</h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Quality, reliability and customer focus are our core values.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">Our Goal</h4>
                <p className="text-xs md:text-sm text-gray-600">
                  To continue growing as the leading supplier in the sector.
                </p>
              </div>
            </div>

            <Link
              href="/en/about"
              className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-[#00b9bf] text-white font-semibold rounded-lg hover:bg-[#009aa0] transition-colors text-sm md:text-base"
            >
              Learn More
              <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 px-4 lg:px-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e6f7f8] rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-[#00b9bf]" />
                  </div>
                </div>
                
                <div className="space-y-1 md:space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-gray-900 text-sm md:text-base">
                    {stat.label}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview; 