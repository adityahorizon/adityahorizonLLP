import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { productCategories } from '../data.ts'

const Products = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("filter-bags");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");


  useEffect(() => {
    const category = searchParams.get("category");
    const subCategory = searchParams.get("subcategory");

    if (
      category &&
      productCategories[category as keyof typeof productCategories]
    ) {
      setSelectedCategory(category);
      if (subCategory) {
        setSelectedSubCategory(subCategory);
      } else {
        setSelectedSubCategory("");
      }
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubCategory("");
    navigate(`/products?category=${category}`);
  };
  const handleSubCategoryChange = (subCat: string) => {
    setSelectedSubCategory(subCat);
    navigate(`/products?category=${selectedCategory}&subcategory=${subCat}`);
  };


  const getFilteredProducts = () => {
    const category =
      productCategories[selectedCategory as keyof typeof productCategories];
    if (!category) return [];

    const subCategories = category.subCategories;

    let filteredProducts = [];

    if (selectedSubCategory && selectedSubCategory !== "all") {
      const subCat = subCategories.find((sc) => sc.name === selectedSubCategory);
      if (subCat) {
        filteredProducts = subCat.products || [];
      }
    } else {
      filteredProducts = subCategories.flatMap((subCat) => subCat.products || []);
    }

    return filteredProducts;
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">
      <section className="relative bg-gradient-to-br from-brand-primary-dark to-brand-primary-light mt-16 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-secondary-light rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-slate-600">
                  Category:
                </span>
                <Select
                  value={selectedCategory}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className="w-48 bg-white border-2 border-black focus:border-brand-secondary-orange transition-colors rounded-md">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(productCategories).map(
                      ([key, category]) => (
                        <SelectItem key={key} value={key}>
                          {category.name}
                        </SelectItem>
                      )
                    )}

                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-slate-600">
                  Subcategory:
                </span>
                <Select
                  value={selectedSubCategory}
                  onValueChange={handleSubCategoryChange}
                >
                  <SelectTrigger className="w-48 bg-white border-2 border-black focus:border-brand-secondary-orange transition-colors rounded-md">
                    <SelectValue placeholder="All subcategories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem key="all" value="all">
                      All subcategories
                    </SelectItem>
                    {productCategories[
                      selectedCategory as keyof typeof productCategories
                    ]?.subCategories.map((subCat) => (
                      <SelectItem key={subCat.name} value={subCat.name}>
                        {subCat.name}
                      </SelectItem>
                    ))}

                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-brand-secondary-light rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-brand-secondary-orange rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="px-8 relative z-10">
          <div className="max-w-8xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {getFilteredProducts().map((product, index) => {
                return (
                  <div
                    key={`${product.id}-${index}`}
                    className="bg-slate-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in group hover:scale-105 flex flex-col justify-between h-full"
                  >
                    <div>
                      <img
                        src={product.image || "/images/placeholder.png"}
                        alt={product.name}
                        className="w-full h-48 object-contain rounded-xl mb-4"
                      />
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 text-sm mb-2 line-clamp-1">
                        {product.description}
                      </p>
                      <p
                        className="text-slate-700 text-sm line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: product.description2 }}
                      ></p>
                    </div>

                    <div className="mt-4">
                      <button onClick={() =>
                        navigate(
                          `/product-detail?category=${selectedCategory}&subcategory=${selectedSubCategory}&id=${product.id}`
                        )
                      } className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                        View Details
                      </button>
                    </div>
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
