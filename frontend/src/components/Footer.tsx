
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleProductLinkClick = (category: string) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-10">
      <div className="mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/logo.svg"
                alt="Aditya Horizon Logo"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-bold text-lg text-orange-400">Aditya Horizon</h3>
                <p className="text-sm text-gray-300">International LLP</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div className='mb-4'>
            <h4 className="font-semibold text-lg mb-4 text-orange-400">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.blogs')}
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-orange-400">{t('footer.products')}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleProductLinkClick('bearings')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Bearings
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProductLinkClick('clutch-brake-pads')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Clutch Brake Pads
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProductLinkClick('filter-bags')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Filter Bags
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-orange-400">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Block+D-432,+3rd+Floor,+Sumel+8,+Old+Bharat+Bobbin+Mill+Compound,+Char+Rasta,+Near+Ajit+Mill,+Ahmedabad+–+380023,+Gujarat,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center flex items-start space-x-3"
                style={{ animationDelay: '0.4s' }}
              >
                <MapPin className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm hover:text-white">
                  Gujarat, India
                </p>
              </a>
              {/* <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  +91 79906 50121
                </p>
              </div> */}
              <a
                href="tel:+917990650121"
                className="flex items-center space-x-3 text-gray-300 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>+91 79906 50121</span>
              </a>

              {/* <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-gray-300 text-sm break-words">
                    info@adityahorizoninternational.com
                  </p>
                </div>
              </div> */}
              <a
                href="mailto:info@adityahorizoninternational.com"
                className="flex items-start space-x-3 text-gray-300 hover:text-white text-sm transition-colors break-words"
              >
                <Mail className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                <span>info@adityahorizoninternational.com</span>
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Aditya Horizon International LLP. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
