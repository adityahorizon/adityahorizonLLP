
// import React, { useState } from 'react';
// import { Settings, Circle, ShoppingBag } from 'lucide-react';
// import { useTranslation } from 'react-i18next';
// import HeroSection from '../components/HeroSection';
// import ProductDetails from '../components/ProductDetails';

// const Index = () => {
//   const { t } = useTranslation();
//   const [selectedProduct, setSelectedProduct] = useState<'filter-bags' | 'roll-bearings' | 'clutch-brake-pads' | null>(null);


//   const products = [
//     {
//       icon: <ShoppingBag className="h-12 w-12 text-brand-secondary-orange" />,
//       title: t('home.products.filterBags.title'),
//       description: t('home.products.filterBags.description'),
//       features: Array.isArray(t('home.products.filterBags.features', { returnObjects: true })) 
//         ? t('home.products.filterBags.features', { returnObjects: true }) as string[]
//         : ['Custom designs available', 'International quality standards', 'Multiple fabric options', 'Expert technical support']
//     },
//     {
//       icon: <Circle className="h-12 w-12 text-brand-secondary-orange" />,
//       title: t('home.products.rollBearings.title'),
//       description: t('home.products.rollBearings.description'),
//       features: Array.isArray(t('home.products.rollBearings.features', { returnObjects: true })) 
//         ? t('home.products.rollBearings.features', { returnObjects: true }) as string[]
//         : ['Forged and CNC machined', 'High-load capacity', 'Durable construction', 'Complete bearing solutions']
//     },
//     {
//       icon: <Settings className="h-12 w-12 text-brand-secondary-orange" />,
//       title: t('home.products.clutchBrakePads.title'),
//       description: t('home.products.clutchBrakePads.description'),
//       features: Array.isArray(t('home.products.clutchBrakePads.features', { returnObjects: true })) 
//         ? t('home.products.clutchBrakePads.features', { returnObjects: true }) as string[]
//         : ['High-performance materials', 'Long-lasting durability', 'Agricultural vehicle focus', 'Tested quality standards']
//     }
//   ];

//   const industries = Array.isArray(t('home.industries', { returnObjects: true })) 
//     ? t('home.industries', { returnObjects: true }) as string[]
//     : [
//         'Cement & Construction',
//         'Power Generation',
//         'Steel & Metallurgy',
//         'Chemical Processing',
//         'Pharmaceutical Manufacturing',
//         'Textile Industries',
//         'Mining & Mineral Handling',
//         'General Manufacturing'
//       ];

//   const qualityPoints = Array.isArray(t('home.qualityPoints', { returnObjects: true })) 
//     ? t('home.qualityPoints', { returnObjects: true }) as string[]
//     : [
//         'Custom filter bag designs tailored to your specifications',
//         'Complete bearing solutions (forged, CNC-machined, and assembled)',
//         'Reliable tractor clutch and brake parts'
//       ];

//       const handleLearnMore = (productType: 'filter-bags' | 'roll-bearings' | 'clutch-brake-pads') => {
//     setSelectedProduct(productType);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <HeroSection />
      
//       {/* Company Introduction */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl font-bold text-brand-primary-dark mb-6">
//               {t('home.partnerTitle')}
//             </h2>
//             <div className="max-w-4xl mx-auto text-lg text-brand-dark-text leading-relaxed">
//               <p>{t('home.partnerDescription')}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Highlights */}
//       <section id="products-section" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-brand-primary-dark mb-6">
//               {t('home.focusedTitle')}
//             </h2>
//             <p className="text-lg text-brand-medium-gray max-w-3xl mx-auto">
//               {t('home.focusedDescription')}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((product, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="text-center mb-6">
//                   <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-50 rounded-full mb-4">
//                     {product.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-brand-primary-dark mb-2">{product.title}</h3>
//                   <p className="text-brand-medium-gray leading-relaxed">{product.description}</p>
//                 </div>
                
//                 <ul className="space-y-2">
//                   {product.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-sm text-brand-dark-text">
//                       <div className="w-2 h-2 bg-brand-secondary-orange rounded-full mr-3"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
                
//                 <button className="w-full mt-6 bg-brand-primary-dark hover:bg-brand-primary-light text-white py-3 rounded-lg font-semibold transition-colors duration-300">
//                   {t('home.learnMore')}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries We Serve */}
//       <section className="py-20 bg-brand-primary-dark">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-6">{t('home.industryTitle')}</h2>
//             <p className="text-lg text-brand-light-gray max-w-3xl mx-auto">
//               Our products are trusted across a wide spectrum of industrial applications, 
//               delivering reliability and performance where it matters most.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {industries.map((industry, index) => (
//               <div 
//                 key={index}
//                 className="bg-brand-primary-light rounded-lg p-6 text-center hover:bg-brand-secondary-orange transition-all duration-300 transform hover:scale-105 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <p className="text-white font-semibold">{industry}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quality Assurance */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="animate-slide-in-left">
//               <h2 className="text-4xl font-bold text-brand-primary-dark mb-6">
//                 {t('home.manufacturingTitle')}
//               </h2>
//               <div className="space-y-4 text-lg text-brand-dark-text">
//                 <p>{t('home.manufacturingDescription')}</p>
//                 <ul className="space-y-3">
//                   {qualityPoints.map((point, index) => (
//                     <li key={index} className="flex items-start">
//                       <div className="w-2 h-2 bg-brand-secondary-orange rounded-full mt-2 mr-4"></div>
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <p className="font-semibold text-brand-primary-dark">
//                   {t('home.qualityNote')}
//                 </p>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-2 gap-6 animate-fade-in">
//               <div className="bg-white rounded-lg p-6 shadow-lg text-center">
//                 <Settings className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
//                 <h3 className="font-bold text-brand-primary-dark mb-2">{t('home.qualityFeatures.qualityAssurance.title')}</h3>
//                 <p className="text-brand-medium-gray text-sm">{t('home.qualityFeatures.qualityAssurance.description')}</p>
//               </div>
//               <div className="bg-white rounded-lg p-6 shadow-lg text-center">
//                 <Circle className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
//                 <h3 className="font-bold text-brand-primary-dark mb-2">{t('home.qualityFeatures.technicalExpertise.title')}</h3>
//                 <p className="text-brand-medium-gray text-sm">{t('home.qualityFeatures.technicalExpertise.description')}</p>
//               </div>
//               <div className="bg-white rounded-lg p-6 shadow-lg text-center">
//                 <ShoppingBag className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
//                 <h3 className="font-bold text-brand-primary-dark mb-2">{t('home.qualityFeatures.customSolutions.title')}</h3>
//                 <p className="text-brand-medium-gray text-sm">{t('home.qualityFeatures.customSolutions.description')}</p>
//               </div>
//               <div className="bg-white rounded-lg p-6 shadow-lg text-center">
//                 <Settings className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
//                 <h3 className="font-bold text-brand-primary-dark mb-2">{t('home.qualityFeatures.globalReach.title')}</h3>
//                 <p className="text-brand-medium-gray text-sm">{t('home.qualityFeatures.globalReach.description')}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ProductDetails 
//         isOpen={selectedProduct !== null}
//         onClose={() => setSelectedProduct(null)}
//         productType={selectedProduct}
//       />
//     </div>
//   );
// };

// export default Index;


import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductDetails from '../components/ProductDetails';
import { Settings, Circle, ShoppingBag } from 'lucide-react';

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<'filter-bags' | 'roll-bearings' | 'clutch-brake-pads' | null>(null);

  const industries = [
    'Cement & Construction',
    'Power Generation',
    'Steel & Metallurgy',
    'Chemical Processing',
    'Pharmaceutical Manufacturing',
    'Textile Industries',
    'Mining & Mineral Handling',
    'General Manufacturing'
  ];

  const products = [
    {
      icon: <ShoppingBag className="h-12 w-12 text-brand-secondary-orange" />,
      title: 'Filter Bags',
      description: 'High-quality industrial filter bags engineered for dust collection, pollution control, and fluid separation in demanding environments.',
      features: ['Custom designs available', 'International quality standards', 'Multiple fabric options', 'Expert technical support'],
      type: 'filter-bags' as const
    },
    {
      icon: <Circle className="h-12 w-12 text-brand-secondary-orange" />,
      title: 'Roll Bearings',
      description: 'Precision-engineered bearings for high-load industrial applications, manufactured with CNC machining and strict quality control.',
      features: ['Forged and CNC machined', 'High-load capacity', 'Durable construction', 'Complete bearing solutions'],
      type: 'roll-bearings' as const
    },
    {
      icon: <Settings className="h-12 w-12 text-brand-secondary-orange" />,
      title: 'Clutch Brake Pads',
      description: 'Reliable tractor clutch and brake components designed for agricultural vehicles and heavy-duty applications.',
      features: ['High-performance materials', 'Long-lasting durability', 'Agricultural vehicle focus', 'Tested quality standards'],
      type: 'clutch-brake-pads' as const
    }
  ];

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
      
      {/* Company Introduction */}
      <section className="pt-20 bg-brand-accent-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary-light rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-brand-dark-text mb-6">
              Your Reliable Partner in Industrial Solutions
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                At Aditya Horizon International LLP, we are committed to delivering dependable, high-performance 
                solutions for demanding industrial environments. We specialize in the manufacturing, supply, and 
                export of industrial filter bags, roller bearings, and tractor clutch brake pads, designed to serve a 
                wide range of critical applications across multiple sectors.
              </p>
              <p>
                With years of hands-on industry experience and strong roots in manufacturing, we have earned the trust 
                of clients across India and international markets—thanks to our consistent focus on quality, technical 
                support, and long-term partnerships.
              </p>
              <p>
                Our products are engineered to perform in the most challenging operating conditions, offering 
                durability, precision, and efficiency to enhance your plant's performance and reduce downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="products-section" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark-text mb-6">
              Focused Industrial Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the essential role that clean air systems and precision mechanical components play 
              in protecting valuable equipment and maintaining peak operational output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in flex flex-col h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6 flex-grow">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-accent-gray rounded-full mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark-text mb-2">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 text-left">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-brand-secondary-orange rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => handleLearnMore(product.type)}
                  className="w-full mt-6 bg-brand-primary-dark hover:bg-brand-primary-light text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-brand-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-lg text-brand-light-gray max-w-3xl mx-auto">
              Our products are trusted across a wide spectrum of industrial applications, 
              delivering reliability and performance where it matters most.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-fr">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-brand-primary-light rounded-lg p-6 text-center hover:bg-brand-secondary-orange/20 
                          transition-all duration-300 transform hover:scale-105 animate-fade-in 
                          h-full flex items-center justify-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-white font-semibold">{industry}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-20 bg-brand-accent-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-primary-light rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-secondary-orange rounded-full mt-2 mr-4"></div>
                    <span>Reliable tractor clutch and brake parts</span>
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
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary-dark to-brand-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
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