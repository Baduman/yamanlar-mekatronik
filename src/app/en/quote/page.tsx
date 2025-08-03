'use client';

import { Send, Clock, Package, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { sendQuoteEmail } from '@/lib/emailService';

const QuotePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [urgency, setUrgency] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Get product and category parameters from URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const productParam = urlParams.get('product');
      const categoryParam = urlParams.get('category');
      
      if (categoryParam) {
        const decodedCategory = decodeURIComponent(categoryParam);
        setSelectedCategory(decodedCategory);
      }
      
      if (productParam) {
        const decodedProduct = decodeURIComponent(productParam);
        setSelectedProduct(decodedProduct);
        
        // If category parameter is not present, automatically select category based on product name
        if (!categoryParam) {
          const category = getCategoryFromProduct(decodedProduct);
          if (category) {
            setSelectedCategory(category);
          }
        }
      }
    }
  }, []);

  const getCategoryFromProduct = (productName: string) => {
    // Determine category based on product name
    if (productName.includes('Ball Screw') || productName.includes('FSZ') || productName.includes('FSI') || productName.includes('FSC')) {
      return 'Linear Motion Systems';
    }
    if (productName.includes('Linear Slide') || productName.includes('WE Series') || productName.includes('EG Series') || productName.includes('SE Series') || productName.includes('E2 Series') || productName.includes('AG Series') || productName.includes('QR Series') || productName.includes('QW Series') || productName.includes('QE Series') || productName.includes('CG Series') || productName.includes('MG Series') || productName.includes('RG Series') || productName.includes('HG Series')) {
      return 'Linear Motion Systems';
    }
    if (productName.includes('End Support') || productName.includes('WBK') || productName.includes('FF') || productName.includes('BF') || productName.includes('FK') || productName.includes('BK')) {
      return 'Linear Motion Systems';
    }
    if (productName.includes('Rack') || productName.includes('Pinion') || productName.includes('Gear') || productName.includes('Chain')) {
      return 'Rack and Pinion Systems';
    }
    if (productName.includes('Cable') || productName.includes('Belt') || productName.includes('Trapezoidal') || productName.includes('Fabric') || productName.includes('Chrome') || productName.includes('Bottom Supported')) {
      return 'Power Transmission Products';
    }
    return '';
  };

  const benefits = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Get price quote within 24 hours'
    },
    {
      icon: Package,
      title: 'Stock Delivery',
      description: 'Fast delivery with our extensive stock'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'HIWIN and other leading brands'
    }
  ];

  const productCategories = {
    'Linear Motion Systems': [
      'Ball Screws and Nuts',
      'Linear Slides and Carriages',
      'End Supports',
      'Precision Linear Slides',
      'Telescopic Rails',
      'Linear Bearings',
      'Linear Guides and Curved Guides',
      'Rail Guide Tables'
    ],
    'Ball Screws and Nuts': [
      'FSZ DIN Flanged Ball Screws',
      'FSI DIN Flanged Ball Screws',
      'FSC DIN Flanged Type'
    ],
    'Linear Slides and Carriages': [
      'WE Series Four Row Type',
      'EG Series Low Profile Type',
      'SE Series Metal End Cap Type',
      'E2 Series Self-Lubricating Type',
      'AG Series Cross Configuration Angular Type',
      'QR Series Silent Roller Type',
      'QW Series Silent Wide Type',
      'QE Series Low Profile Type',
      'CG Series Anti-Torque Ball Type',
      'MG Series Miniature Type',
      'RG Series Roller Type',
      'HG Series Ball Type'
    ],
    'End Supports': [
      'WBK TYPE SHAFT END SUPPORT',
      'FF TYPE SHAFT END SUPPORT',
      'BF TYPE SHAFT END SUPPORT',
      'FK TYPE SHAFT END SUPPORT',
      'BK TYPE SHAFT END SUPPORT'
    ],
    'Rack and Pinion Systems': [
      'Rack',
      'Pinion',
      'Gear Systems',
      'Chain Gear'
    ],
    'Power Transmission Products': [
      'Cable Carriers',
      'Belts and Pulleys',
      'Trapezoidal Screws',
      'Fabric Bellows',
      'Chrome Plated Induction Shafts',
      'Bottom Supported Shafts'
    ]
  };

  const brands = [
    'HIWIN',
    'PYG',
    'YOSO',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Collect form data
      const formData = {
        company: (e.target as HTMLFormElement).company?.value || '',
        name: (e.target as HTMLFormElement).contactPerson?.value || '',
        email: (e.target as HTMLFormElement).email?.value || '',
        phone: (e.target as HTMLFormElement).phone?.value || '',
        category: selectedCategory,
        product: selectedProduct,
        brand: (e.target as HTMLFormElement).brand?.value || '',
        quantity: quantity,
        urgency: urgency,
        technicalDetails: (e.target as HTMLFormElement).technicalDetails?.value || '',
        additionalNotes: (e.target as HTMLFormElement).additionalNotes?.value || ''
      };

      const result = await sendQuoteEmail(formData);
      
      if (result.success) {
        setSubmitMessage('Your quote request has been sent successfully. We will get back to you as soon as possible.');
        // Clear form
        (e.target as HTMLFormElement).reset();
        setSelectedCategory('');
        setSelectedProduct('');
        setQuantity('');
        setUrgency('');
      } else {
        setSubmitMessage(result.message);
      }
    } catch {
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e6f7f8] to-[#00b9bf]/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Material Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get fast and reliable quotes for the industrial mechatronic materials you need. 
              We supply products from HIWIN and other leading brands from stock.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#00b9bf]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[#00b9bf]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quote Form
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    placeholder="Full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              {/* Product Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Material Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Category *
                    </label>
                    <select
                      required
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setSelectedProduct(''); // Reset product when category changes
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    >
                      <option value="">Select category</option>
                      {Object.keys(productCategories).map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product *
                    </label>
                    <select
                      required
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    >
                      <option value="">Select category first</option>
                      {selectedCategory && productCategories[selectedCategory as keyof typeof productCategories]?.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Brand
                    </label>
                    <select
                      name="brand"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                    >
                      <option value="">Select brand</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity/Amount *
                    </label>
                    <input
                      type="text"
                      required
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                      placeholder="Quantity or amount"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Urgency
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                  >
                    <option value="">Select urgency level</option>
                    <option value="urgent">Urgent (1-3 days)</option>
                    <option value="normal">Normal (1 week)</option>
                    <option value="flexible">Flexible (2-4 weeks)</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technical Specifications / Details
                  </label>
                  <textarea
                    name="technicalDetails"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent resize-none"
                    placeholder="Product technical specifications, dimensions, special requirements, etc."
                  ></textarea>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Files
                  </label>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    You can add technical drawings, photos or other documents
                  </p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Additional Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b9bf] focus:border-transparent resize-none"
                    placeholder="Additional information, special requests or your notes..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('successfully') ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00b9bf] hover:bg-[#009aa0] disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Quote Request
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Process Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quote Process
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            The process from quote request to material delivery
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quote Request
              </h3>
              <p className="text-gray-600 text-sm">
                Fill and submit the form
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Stock Check
              </h3>
              <p className="text-gray-600 text-sm">
                Product stock status is checked
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Price Quote
              </h3>
              <p className="text-gray-600 text-sm">
                Price quote within 24 hours
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00b9bf] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                Fast delivery after approval
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage; 