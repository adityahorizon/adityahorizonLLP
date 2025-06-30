import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { languages } from '../locales/index.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const productsRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  const productCategories = {
    'bearings': {
      name: 'Bearings',
      subCategories: ['Ball Bearings', 'Roller Bearings', 'Thrust Bearings', 'Pillow Block Bearings']
    },
    'clutch-brake-pads': {
      name: 'Clutch Brake Pads',
      subCategories: ['Tractor Clutch Pads', 'Brake Linings', 'Clutch Sleeves', 'Heavy Duty Pads']
    },
    'filter-bags': {
      name: 'Filter Bags',
      subCategories: ['Dust Collector Bags', 'Industrial Filter Bags', 'PTFE Bags', 'Polyester Bags']
    }
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setShowProductsDropdown(false);
        setActiveSubMenu(null);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleProductCategoryClick = (categoryKey: string, subCategory: string) => {
    setShowProductsDropdown(false);
    setActiveSubMenu(null);
    setIsOpen(false);
    navigate(`/products?category=${categoryKey}&subcategory=${encodeURIComponent(subCategory)}`);
  };

  const handleMainCategoryClick = (categoryKey: string) => {
    setShowProductsDropdown(false);
    setActiveSubMenu(null);
    setIsOpen(false);
    navigate(`/products?category=${categoryKey}`);
  };

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
    setShowLanguageDropdown(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Aditya Horizon Logo" 
              className="w-10 h-10"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-brand-primary-dark">Aditya Horizon</span>
              <div className="text-sm text-brand-secondary-orange">International LLP</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 text-base font-medium transition-all duration-300 relative group ${
                isActive('/') 
                  ? 'text-brand-secondary-orange' 
                  : 'text-brand-primary-dark hover:text-brand-secondary-orange'
              }`}
            >
              {t('nav.home')}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-secondary-orange transform transition-transform duration-300 ${
                isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-base font-medium transition-all duration-300 relative group ${
                isActive('/about') 
                  ? 'text-brand-secondary-orange' 
                  : 'text-brand-primary-dark hover:text-brand-secondary-orange'
              }`}
            >
              {t('nav.about')}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-secondary-orange transform transition-transform duration-300 ${
                isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>

            {/* Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                className="px-3 py-2 text-base font-medium transition-all duration-300 relative group flex items-center text-brand-primary-dark hover:text-brand-secondary-orange"
              >
                {t('nav.products')}
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>

              {showProductsDropdown && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                  {Object.entries(productCategories).map(([key, category]) => (
                    <div
                      key={key}
                      className="relative"
                      onMouseEnter={() => setActiveSubMenu(key)}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <button
                        onClick={() => handleMainCategoryClick(key)}
                        className="w-full text-left px-4 py-3 hover:bg-orange-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-brand-primary-dark font-medium">{category.name}</span>
                      </button>

                      {activeSubMenu === key && (
                        <div className="absolute left-full top-0 w-56 bg-white border border-gray-200 rounded-lg shadow-xl ml-1">
                          {category.subCategories.map((subCategory) => (
                            <button
                              key={subCategory}
                              onClick={() => handleProductCategoryClick(key, subCategory)}
                              className="block w-full text-left px-4 py-3 text-brand-medium-gray hover:bg-orange-50 hover:text-brand-secondary-orange transition-colors border-b border-gray-100 last:border-b-0"
                            >
                              {subCategory}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3 py-2 text-base font-medium transition-all duration-300 relative group ${
                isActive('/contact') 
                  ? 'text-brand-secondary-orange' 
                  : 'text-brand-primary-dark hover:text-brand-secondary-orange'
              }`}
            >
              {t('nav.contact')}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-secondary-orange transform transition-transform duration-300 ${
                isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>

            <Link
              to="/blogs"
              className={`px-3 py-2 text-base font-medium transition-all duration-300 relative group ${
                isActive('/blogs') 
                  ? 'text-brand-secondary-orange' 
                  : 'text-brand-primary-dark hover:text-brand-secondary-orange'
              }`}
            >
              {t('nav.blogs')}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-secondary-orange transform transition-transform duration-300 ${
                isActive('/blogs') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>

            <Link
              to="/glossary"
              className={`px-3 py-2 text-base font-medium transition-all duration-300 relative group ${
                isActive('/glossary') 
                  ? 'text-brand-secondary-orange' 
                  : 'text-brand-primary-dark hover:text-brand-secondary-orange'
              }`}
            >
              {t('nav.glossary')}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-secondary-orange transform transition-transform duration-300 ${
                isActive('/glossary') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>

            {/* Language Dropdown */}
            <div className="relative" ref={languageRef}>
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium transition-colors text-brand-primary-dark hover:text-brand-secondary-orange"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage.nativeName}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showLanguageDropdown && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-3 transition-colors border-b border-gray-100 last:border-b-0 ${
                        lang.code === i18n.language 
                          ? 'bg-orange-50 text-brand-secondary-orange' 
                          : 'text-brand-primary-dark hover:bg-orange-50 hover:text-brand-secondary-orange'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{lang.nativeName}</span>
                        <span className="text-xs text-gray-500">{lang.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 transition-colors text-brand-primary-dark hover:text-brand-secondary-orange"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-lg max-h-96 overflow-y-auto">
            <div className="flex flex-col space-y-1 pt-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') ? 'text-brand-secondary-orange bg-orange-50' : 'text-brand-primary-dark hover:text-brand-secondary-orange'
                }`}
              >
                {t('nav.home')}
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/about') ? 'text-brand-secondary-orange bg-orange-50' : 'text-brand-primary-dark hover:text-brand-secondary-orange'
                }`}
              >
                {t('nav.about')}
              </Link>

              {/* Mobile Products */}
              <div className="px-3 py-2">
                <span className="text-base font-medium text-brand-primary-dark">{t('nav.products')}</span>
                <div className="ml-4 mt-2 space-y-2">
                  {Object.entries(productCategories).map(([key, category]) => (
                    <div key={key}>
                      <button
                        onClick={() => handleMainCategoryClick(key)}
                        className="text-sm font-medium text-brand-medium-gray mb-1 hover:text-brand-secondary-orange transition-colors"
                      >
                        {category.name}
                      </button>
                      <div className="ml-4 space-y-1">
                        {category.subCategories.map((subCategory) => (
                          <button
                            key={subCategory}
                            onClick={() => handleProductCategoryClick(key, subCategory)}
                            className="block text-sm text-brand-medium-gray hover:text-brand-secondary-orange transition-colors"
                          >
                            {subCategory}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') ? 'text-brand-secondary-orange bg-orange-50' : 'text-brand-primary-dark hover:text-brand-secondary-orange'
                }`}
              >
                {t('nav.contact')}
              </Link>

              <Link
                to="/blogs"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/blogs') ? 'text-brand-secondary-orange bg-orange-50' : 'text-brand-primary-dark hover:text-brand-secondary-orange'
                }`}
              >
                {t('nav.blogs')}
              </Link>

              <Link
                to="/glossary"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/glossary') ? 'text-brand-secondary-orange bg-orange-50' : 'text-brand-primary-dark hover:text-brand-secondary-orange'
                }`}
              >
                {t('nav.glossary')}
              </Link>

              {/* Mobile Language Selection */}
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="w-4 h-4 text-brand-primary-dark" />
                  <span className="text-base font-medium text-brand-primary-dark">{t('nav.language')}</span>
                </div>
                <div className="ml-6 space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`block text-sm transition-colors ${
                        lang.code === i18n.language 
                          ? 'text-brand-secondary-orange font-medium' 
                          : 'text-brand-medium-gray hover:text-brand-secondary-orange'
                      }`}
                    >
                      {lang.nativeName}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
