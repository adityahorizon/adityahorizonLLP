
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import glossaryData from "../data"
const Glossary = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('filter-bags');

  const currentGlossary = glossaryData[selectedCategory as keyof typeof glossaryData];

  const termsByLetter = currentGlossary.terms.reduce((acc, term) => {
    if (!acc[term.letter]) {
      acc[term.letter] = [];
    }
    acc[term.letter].push(term);
    return acc;
  }, {} as Record<string, typeof currentGlossary.terms>);

  const letters = Object.keys(termsByLetter).sort();

  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">
      <Navbar />
      
      <section className="relative bg-gradient-to-br from-brand-primary-dark to-brand-primary-light mt-16 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary-light rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
              {t('glossary.title')}
            </h1>
            <p className="text-xl text-white/90 animate-fade-in">
              {t('glossary.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full bg-white border-2 border-brand-secondary-orange focus:border-brand-primary-dark shadow-lg">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="filter-bags">{t('glossary.filterBags')}</SelectItem>
                    <SelectItem value="bearings">{t('glossary.bearings')}</SelectItem>
                    <SelectItem value="clutch-brake-pads">{t('glossary.clutchBrakePads')}</SelectItem>
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
          <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-brand-secondary-orange rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
              <CardHeader className="text-center bg-brand-primary-dark text-white py-8">
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  {currentGlossary.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {letters.map((letter) => (
                    <div key={letter} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <h3 className="text-2xl font-bold text-brand-secondary-orange mb-4 flex items-center">
                        <span className="bg-slate-50 text-brand-primary-dark w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-md">
                          {letter}
                        </span>
                      </h3>
                      <div className="grid gap-4">
                        {termsByLetter[letter].map((term, index) => (
                          <div key={index} className="bg-slate-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 hover:shadow-md border border-gray-200">
                            <h4 className="text-lg font-semibold text-brand-primary-dark mb-2">
                              {term.term}
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              {term.definition}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Glossary;
