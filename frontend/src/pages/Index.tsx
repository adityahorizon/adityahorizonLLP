import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductDetails from '../components/ProductDetails';
import { Settings, Circle, ShoppingBag } from 'lucide-react';
import { products, industries } from '../data.ts'

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<'filter-bags' | 'roll-bearings' | 'clutch-brake-pads' | null>(null);

  const handleLearnMore = (productType: 'filter-bags' | 'roll-bearings' | 'clutch-brake-pads') => {
    setSelectedProduct(productType);
  };

  const handleGetQuote = () => {
    navigate('/contact');
  };

  const handleViewProducts = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <HeroSection />

      {/* <section className="py-12 bg-brand-accent-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary-light rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-brand-dark-text mb-6">
                Your Reliable Partner in Industrial Solutions
              </h2>
              <div className="max-w-2xl text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  At Aditya Horizon International LLP, we are committed to delivering
                  dependable, high-performance solutions for demanding industrial
                  environments. We specialize in the manufacturing, supply, and
                  export of industrial filter bags, roller bearings, and designed to
                  serve a wide range of critical applications across multiple sectors.
                </p>
                <p>
                  With years of hands-on industry experience and strong roots in
                  manufacturing, we have earned the trust of clients across India and
                  international markets—thanks to our consistent focus on quality,
                  technical support, and long-term partnerships.
                </p>
                <p>
                  Our products are engineered to perform in the most challenging
                  operating conditions, offering durability, precision, and efficiency
                  to enhance your plant's performance and reduce downtime.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/carouselImages/bearing1.jpeg"
                alt="Industrial Solutions"
                className="w-full max-w-md rounded-xl shadow-lg animate-float"
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="py-12 bg-brand-accent-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary-light rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark-text mb-8 leading-tight">
                Your Reliable Partner in Industrial Solutions
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  At Aditya Horizon International LLP, we are committed to delivering dependable, high-performance solutions for demanding industrial environments. We specialize in the manufacturing, supply, and export of industrial filter bags, roller bearings, and related products designed to serve a wide range of critical applications across multiple sectors. Along with our core products, we also source and supply multiple industrial products from India, catering to the needs of clients across global markets.
                </p>

              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <img
                  src="/images/carouselImages/bearing1.jpeg"
                  alt="Industrial Solutions"
                  className="w-full max-w-lg lg:max-w-xl h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl animate-float"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-secondary-orange opacity-20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-primary-light opacity-15 rounded-full blur-xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section> */}
      <section className="py-12 bg-brand-accent-gray relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary-light rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text Section */}
            <div className="animate-fade-in text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-text mb-6 leading-tight">
                Your Reliable Partner in Industrial Solutions
              </h2>
              <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  At Aditya Horizon International LLP, we are committed to delivering
                  dependable, high-performance solutions for demanding industrial
                  environments. We specialize in the manufacturing, supply, and export
                  of industrial filter bags, roller bearings, and related products
                  designed to serve a wide range of critical applications across
                  multiple sectors. Along with our core products, we also source and
                  supply multiple industrial products from India, catering to the
                  needs of clients across global markets.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <img
                  src="/images/carouselImages/bearing1.jpeg"
                  alt="Industrial Solutions"
                  className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-72 sm:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl animate-float"
                />
                {/* Decorative circles */}
                <div className="absolute -bottom-6 -right-6 w-20 sm:w-24 h-20 sm:h-24 bg-brand-secondary-orange opacity-20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-brand-primary-light opacity-15 rounded-full blur-xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Highlights */}
      {/* <section id="products-section" className="py-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark-text mb-6">
              Focused Industrial Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the essential role that clean air systems and precision mechanical components play
              in protecting valuable equipment and maintaining peak operational output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {products.map((product: any, index: any) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="relative rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in flex flex-col h-full"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover filter blur-[3px] scale-105 z-0"
                    style={{ backgroundImage: `url(${product.background})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/30 z-0"></div>

                  <div className="relative z-10 p-8 flex-grow flex flex-col">
                    <div className="text-center mb-6 flex-grow">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-accent-gray rounded-full mb-4">
                        <Icon className="h-12 w-12 text-brand-secondary-orange" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-white leading-relaxed mb-4">{product.description}</p>

                      <ul className="space-y-2 text-left">
                        {product.features.map((feature: any, featureIndex: any) => (
                          <li key={featureIndex} className="flex items-center text-sm text-white">
                            <div className="w-2 h-2 bg-brand-secondary-orange rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleLearnMore(product.type)}
                      className="w-full mt-6 bg-white hover:bg-brand-primary-light text-brand-primary-dark hover:text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section> */}

      {/* Industries We Serve */}
      <section className="py-12 bg-brand-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-lg text-brand-light-gray max-w-3xl mx-auto">
              Our products are trusted across a wide spectrum of industrial applications,
              delivering reliability and performance where it matters most.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-fr">
            {industries.map((industry: any, index: any) => (
              <div
                key={index}
                className="relative bg-brand-primary-light p-6 text-center hover:bg-brand-secondary-orange/20 
              transition-all duration-300 transform hover:scale-105 animate-fade-in 
              h-[10rem] flex items-center justify-center overflow-hidden rounded-[20px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-cover filter blur-[1px] scale-105 z-0"
                  style={{ backgroundImage: `url(${industry.background})` }}
                />

                <div className="absolute inset-0 bg-black/40" />

                <p className="relative z-10 text-xl font-bold text-center text-white">
                  {industry?.name}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* <section className="py-12 bg-brand-accent-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-primary-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-brand-dark-text mb-6">
                Manufacturing with Quality at the Core
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  All our products are manufactured in compliance with international quality standards and undergo strict
                  quality control at every stage of production. Backed by modern machinery and experienced technicians.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-secondary-orange rounded-full mt-2 mr-4"></div>
                    <span>Custom filter bag designs tailored to your specifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-secondary-orange rounded-full mt-2 mr-4"></div>
                    <span>Complete bearing solutions (forged, CNC-machined, and assembled)</span>
                  </li>
                </ul>
                <p className="font-semibold text-brand-dark-text">
                  Our flexible approach and fast response time ensure we meet your exact technical requirements, every time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <Settings className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
                <h3 className="font-bold text-brand-dark-text mb-2">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">International standards compliance</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <Circle className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
                <h3 className="font-bold text-brand-dark-text mb-2">Technical Expertise</h3>
                <p className="text-gray-600 text-sm">Decades of manufacturing experience</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <ShoppingBag className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
                <h3 className="font-bold text-brand-dark-text mb-2">Custom Solutions</h3>
                <p className="text-gray-600 text-sm">Tailored to your requirements</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <Settings className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
                <h3 className="font-bold text-brand-dark-text mb-2">Global Reach</h3>
                <p className="text-gray-600 text-sm">Serving India and international markets</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-12 bg-brand-accent-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-primary-light rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in lg:text-left text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark-text mb-6 leading-snug">
                Manufacturing with Quality at the Core
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-gray-700">
                <p>
                  All our products are manufactured in compliance with international
                  quality standards and undergo strict quality control at every stage
                  of production. Backed by modern machinery and experienced technicians.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 min-w-[0.5rem] bg-brand-secondary-orange rounded-full mt-2"></span>
                    <span className="ml-3">Custom filter bag designs tailored to your specifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 min-w-[0.5rem] bg-brand-secondary-orange rounded-full mt-2"></span>
                    <span className="ml-3">Complete bearing solutions (forged, CNC-machined, and assembled)</span>
                  </li>
                </ul>
                <p className="font-semibold text-brand-dark-text">
                  Our flexible approach and fast response time ensure we meet your
                  exact technical requirements, every time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 animate-fade-in">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Settings className="h-10 w-10 sm:h-12 sm:w-12 text-brand-secondary-orange mx-auto mb-3" />
                <h3 className="font-bold text-brand-dark-text mb-1 text-base sm:text-lg">Quality Assurance</h3>
                <p className="text-gray-600 text-sm sm:text-base">International standards compliance</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Circle className="h-10 w-10 sm:h-12 sm:w-12 text-brand-secondary-orange mx-auto mb-3" />
                <h3 className="font-bold text-brand-dark-text mb-1 text-base sm:text-lg">Technical Expertise</h3>
                <p className="text-gray-600 text-sm sm:text-base">Decades of manufacturing experience</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <ShoppingBag className="h-10 w-10 sm:h-12 sm:w-12 text-brand-secondary-orange mx-auto mb-3" />
                <h3 className="font-bold text-brand-dark-text mb-1 text-base sm:text-lg">Custom Solutions</h3>
                <p className="text-gray-600 text-sm sm:text-base">Tailored to your requirements</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Settings className="h-10 w-10 sm:h-12 sm:w-12 text-brand-secondary-orange mx-auto mb-3" />
                <h3 className="font-bold text-brand-dark-text mb-1 text-base sm:text-lg">Global Reach</h3>
                <p className="text-gray-600 text-sm sm:text-base">Serving India and international markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gradient-to-r from-brand-primary-dark to-brand-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enhance Your Industrial Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with Aditya Horizon International LLP for reliable, high-performance industrial solutions that drive success across global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetQuote}
              className="bg-brand-secondary-orange hover:bg-brand-secondary-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Quote Now
            </button>
            <button
              onClick={handleViewProducts}
              className="border-2 border-white text-white hover:bg-white hover:text-brand-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Products
            </button>
          </div>
        </div>
      </section>

      <ProductDetails
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        productType={selectedProduct}
      />
    </div>
  );
};

export default Index;