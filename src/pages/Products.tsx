
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Filter, Settings, Cog } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Products = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('bearings');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

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

  // Handle URL parameters for category selection
  useEffect(() => {
    const category = searchParams.get('category');
    const subCategory = searchParams.get('subcategory');
    
    if (category && productCategories[category as keyof typeof productCategories]) {
      setSelectedCategory(category);
      if (subCategory) {
        setSelectedSubCategory(subCategory);
      } else {
        setSelectedSubCategory('');
      }
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubCategory(''); // Reset subcategory when main category changes
  };

  const getFilteredProducts = () => {
    const category = productCategories[selectedCategory as keyof typeof productCategories];
    if (!category) return [];

    // If a subcategory is selected, show only that subcategory
    if (selectedSubCategory) {
      return [{ 
        name: selectedSubCategory, 
        category: category.name,
        icon: selectedCategory === 'bearings' ? Settings : selectedCategory === 'filter-bags' ? Filter : Cog
      }];
    }

    // Otherwise show all subcategories of the selected main category
    return category.subCategories.map(subCat => ({
      name: subCat,
      category: category.name,
      icon: selectedCategory === 'bearings' ? Settings : selectedCategory === 'filter-bags' ? Filter : Cog
    }));
  };

  const getIconColor = (category: string) => {
    switch (category) {
      case 'bearings': return 'from-slate-600 to-slate-700';
      case 'filter-bags': return 'from-blue-500 to-blue-600';
      case 'clutch-brake-pads': return 'from-orange-500 to-orange-600';
      default: return 'from-slate-600 to-slate-700';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">
      <Navbar />
      
      {/* Hero Section with animated background */}
      <section className="relative bg-gradient-to-br from-brand-primary-dark to-brand-primary-light py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary-light rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
              Our Products
            </h1>
            <p className="text-xl text-white/90 animate-fade-in">
              Industrial-grade solutions for demanding environments
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-slate-600">Category:</span>
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(productCategories).map(([key, category]) => (
                      <SelectItem key={key} value={key}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-slate-600">Subcategory:</span>
                <Select value={selectedSubCategory} onValueChange={setSelectedSubCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All subcategories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem key="all" value="all">All subcategories</SelectItem>
                    {productCategories[selectedCategory as keyof typeof productCategories]?.subCategories.map((subCat) => (
                      <SelectItem key={subCat} value={subCat}>
                        {subCat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-brand-secondary-light rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-brand-secondary-orange rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredProducts().map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <div key={`${product.name}-${index}`} className="bg-slate-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in group hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getIconColor(selectedCategory)} rounded-2xl flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{product.name}</h3>
                    <p className="text-slate-600 mb-1 text-sm font-medium">{product.category}</p>
                    <p className="text-slate-600">High-quality {product.name.toLowerCase()} for industrial applications.</p>
                    <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
