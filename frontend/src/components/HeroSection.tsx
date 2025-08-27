
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// const HeroSection = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="relative bg-gradient-to-br from-brand-primary-dark via-brand-primary-light to-brand-secondary-orange mt-12 py-18 lg:py-60 overflow-hidden">
//       <div className="absolute inset-0 bg-black opacity-10"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
//             {t('hero.title')}
//           </h1>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay mt-3">
//             <Link
//               to="/products"
//               className="bg-brand-secondary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               {t('hero.exploreProducts')}
//             </Link>
//             <Link
//               to="/contact"
//               className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
//             >
//               {t('hero.getInTouch')}
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute top-1/2 left-10 w-32 h-32 bg-brand-secondary-orange opacity-20 rounded-full animate-pulse"></div>
//       <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce"></div>
//     </section>
//   );
// };

// export default HeroSection;


import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    // <section className="relative mt-16 py-24 lg:py-64 overflow-hidden">
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     className="absolute inset-0 w-full h-full object-cover"
    //   >
    //     <source src="/videos/herosection.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>

    //   <div className="absolute inset-0 bg-black opacity-40"></div>

    //   {/* Content */}
    //   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    //     <div className="text-center">
    //       <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
    //         {t('hero.title')}
    //       </h1>

    //       <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay mt-3">
    //         <Link
    //           to="/products"
    //           className="bg-brand-secondary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
    //         >
    //           {t('hero.exploreProducts')}
    //         </Link>
    //         <Link
    //           to="/contact"
    //           className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
    //         >
    //           {t('hero.getInTouch')}
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Optional Decorative floating circles */}
    //   <div className="absolute top-1/2 left-10 w-32 h-32 bg-brand-secondary-orange opacity-20 rounded-full animate-pulse z-0"></div>
    //   <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce z-0"></div>
    // </section>
    // <section className="relative h-screen overflow-hidden">
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     className="absolute inset-0 w-full h-full object-cover"
    //   >
    //     <source src="/videos/herosection.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>

    //   <div className="absolute inset-0 bg-black opacity-40"></div>

    //   {/* Content - Centered vertically and horizontally */}
    //   <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-center justify-center">
    //     <div className="text-center">
    //       <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
    //         {t('hero.title')}
    //       </h1>

    //       <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay mt-3">
    //         <Link
    //           to="/products"
    //           className="bg-brand-secondary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
    //         >
    //           {t('hero.exploreProducts')}
    //         </Link>
    //         <Link
    //           to="/contact"
    //           className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
    //         >
    //           {t('hero.getInTouch')}
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Optional Decorative floating circles */}
    //   <div className="absolute top-1/2 left-10 w-32 h-32 bg-brand-secondary-orange opacity-20 rounded-full animate-pulse z-0"></div>
    //   <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce z-0"></div>
    // </section>
    // <section className="relative mt-16 overflow-hidden" style={{ height: 'calc(100vh - 2rem)' }}>
    <section
      className="relative mt-16 h-screen overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/herosection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content - Centered vertically and horizontally */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay mt-3">
            <Link
              to="/products"
              className="bg-brand-secondary-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('hero.exploreProducts')}
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.getInTouch')}
            </Link>
          </div>
        </div>
      </div>

      {/* Optional Decorative floating circles */}
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-brand-secondary-orange opacity-20 rounded-full animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce z-0"></div>
    </section>
  );
};

export default HeroSection;
