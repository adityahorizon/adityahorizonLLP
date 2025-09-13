
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
    // <section
    //   className="relative h-screen overflow-hidden"
    //   style={{ backgroundImage: "url('/images/bg1.png')" }}
    // >

    //   <div className="absolute inset-0 bg-black opacity-40"></div>
    //   <div className="relative h-full max-w-4xl px-4 sm:px-6 lg:px-8 z-10 flex items-center justify-left">
    //     <div className="text-left">
    //       <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
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
    // <section
    //   className="relative h-screen overflow-hidden bg-center bg-no-repeat bg-cover"
    //   style={{ backgroundImage: "url('/images/bg1.png')" }}
    // >
    //   <div className="absolute inset-0 bg-black opacity-40"></div>

    //   <div className="relative h-full max-w-4xl px-4 sm:px-6 lg:px-8 z-10 flex items-center">
    //     <div className="text-left">
    //       <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
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

    //   {/* Decorative floating circle */}
    //   <div className="absolute top-1/2 left-10 w-32 h-32 bg-brand-secondary-orange opacity-20 rounded-full animate-pulse z-0"></div>
    //   <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce z-0"></div>
    // </section>
    <section
      className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/bg1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        marginTop: "30px"
      }}
    >
      <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-4xl">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[500px] text-white leading-tight mb-4 sm:mb-6 lg:mb-8">
            <span className="block">Unlocking The World</span>
            <span className="block mt-1 sm:mt-2">Potential</span>
          </h1>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
            Discover innovative solutions that transform possibilities into realities
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto">
            <Link
              to="/products"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center min-w-[160px] sm:min-w-[180px]"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 text-center min-w-[160px] sm:min-w-[180px]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute top-1/4 left-8 lg:left-12 w-16 h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 bg-orange-500 opacity-20 rounded-full animate-pulse"></div>
      <div className="hidden md:block absolute bottom-8 lg:bottom-12 right-8 lg:right-12 w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-white opacity-10 rounded-full animate-bounce"></div>

      <div className="md:hidden absolute top-20 right-6 w-8 h-8 bg-orange-500 opacity-30 rounded-full animate-pulse"></div>
      <div className="md:hidden absolute bottom-20 left-6 w-6 h-6 bg-white opacity-20 rounded-full animate-bounce"></div>
    </section>


  );
};

export default HeroSection;
