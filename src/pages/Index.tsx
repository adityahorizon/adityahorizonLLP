
import React from 'react';
import { Settings, Circle, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';

const Index = () => {
  const { t } = useTranslation();

  const products = [
    {
      icon: <ShoppingBag className="h-12 w-12 text-brand-secondary-orange" />,
      title: t('home.products.filterBags.title'),
      description: t('home.products.filterBags.description'),
      features: Array.isArray(t('home.products.filterBags.features', { returnObjects: true })) 
        ? t('home.products.filterBags.features', { returnObjects: true }) as string[]
        : ['Custom designs available', 'International quality standards', 'Multiple fabric options', 'Expert technical support']
    },
    {
      icon: <Circle className="h-12 w-12 text-brand-secondary-orange" />,
      title: t('home.products.rollBearings.title'),
      description: t('home.products.rollBearings.description'),
      features: Array.isArray(t('home.products.rollBearings.features', { returnObjects: true })) 
        ? t('home.products.rollBearings.features', { returnObjects: true }) as string[]
        : ['Forged and CNC machined', 'High-load capacity', 'Durable construction', 'Complete bearing solutions']
    },
    {
      icon: <Settings className="h-12 w-12 text-brand-secondary-orange" />,
      title: t('home.products.clutchBrakePads.title'),
      description: t('home.products.clutchBrakePads.description'),
      features: Array.isArray(t('home.products.clutchBrakePads.features', { returnObjects: true })) 
        ? t('home.products.clutchBrakePads.features', { returnObjects: true }) as string[]
        : ['High-performance materials', 'Long-lasting durability', 'Agricultural vehicle focus', 'Tested quality standards']
    }
  ];

  const industries = Array.isArray(t('home.industries', { returnObjects: true })) 
    ? t('home.industries', { returnObjects: true }) as string[]
    : [
        'Cement & Construction',
        'Power Generation',
        'Steel & Metallurgy',
        'Chemical Processing',
        'Pharmaceutical Manufacturing',
        'Textile Industries',
        'Mining & Mineral Handling',
        'General Manufacturing'
      ];

  const qualityPoints = Array.isArray(t('home.qualityPoints', { returnObjects: true })) 
    ? t('home.qualityPoints', { returnObjects: true }) as string[]
    : [
        'Custom filter bag designs tailored to your specifications',
        'Complete bearing solutions (forged, CNC-machined, and assembled)',
        'Reliable tractor clutch and brake parts'
      ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      {/* Company Introduction */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-brand-primary-dark mb-6">
              {t('home.partnerTitle')}
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-brand-dark-text leading-relaxed">
              <p>{t('home.partnerDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="products-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary-dark mb-6">
              {t('home.focusedTitle')}
            </h2>
            <p className="text-lg text-brand-medium-gray max-w-3xl mx-auto">
              {t('home.focusedDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-50 rounded-full mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary-dark mb-2">{product.title}</h3>
                  <p className="text-brand-medium-gray leading-relaxed">{product.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-brand-dark-text">
                      <div className="w-2 h-2 bg-brand-secondary-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-6 bg-brand-primary-dark hover:bg-brand-primary-light text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  {t('home.learnMore')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-brand-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('home.industryTitle')}</h2>
            <p className="text-lg text-brand-light-gray max-w-3xl mx-auto">
              Our products are trusted across a wide spectrum of industrial applications, 
              delivering reliability and performance where it matters most.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-brand-primary-light rounded-lg p-6 text-center hover:bg-brand-secondary-orange transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-white font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-brand-primary-dark mb-6">
                {t('home.manufacturingTitle')}
              </h2>
              <div className="space-y-4 text-lg text-brand-dark-text">
                <p>{t('home.manufacturingDescription')}</p>
                <ul className="space-y-3">
                  {qualityPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-brand-secondary-orange rounded-full mt-2 mr-4"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-semibold text-brand-primary-dark">
                  {t('home.qualityNote')}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <Settings className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
                <h3 className="font-bold text-brand-primary-dark mb-2">{t('home.qualityFeatures.qualityAssurance.title')}</h3>
                <p className="text-brand-medium-gray text-sm">{t('home.qualityFeatures.qualityAssurance.description')}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <Circle className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
                <h3 className="font-bold text-brand-primary-dark mb-2">{t('home.qualityFeatures.technicalExpertise.title')}</h3>
                <p className="text-brand-medium-gray text-sm">{t('home.qualityFeatures.technicalExpertise.description')}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <ShoppingBag className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
                <h3 className="font-bold text-brand-primary-dark mb-2">{t('home.qualityFeatures.customSolutions.title')}</h3>
                <p className="text-brand-medium-gray text-sm">{t('home.qualityFeatures.customSolutions.description')}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <Settings className="h-12 w-12 text-brand-secondary-orange mx-auto mb-4" />
                <h3 className="font-bold text-brand-primary-dark mb-2">{t('home.qualityFeatures.globalReach.title')}</h3>
                <p className="text-brand-medium-gray text-sm">{t('home.qualityFeatures.globalReach.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
