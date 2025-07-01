
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { blogPosts } from "../data"
import BlogsModal from '@/components/blogsModal';

const Blogs = () => {
  const { t } = useTranslation();
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<any | null>(null);



  const blogCategories = {
    'filter-bags': 'Filter Bags',
    'bearings': 'Roll Bearings',
    'clutch-brake-pads': 'Clutch Brake Pads & Sleeves'
  };

  const getFilteredBlogs = () => {
    if (selectedCategory === 'all') {
      return Object.values(blogPosts).flat();
    }
    return blogPosts[selectedCategory as keyof typeof blogPosts] || [];
  };

  const togglePostExpansion = (index: number) => {
    setExpandedPosts((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">
      <Navbar />

      <section className="relative bg-gradient-to-br from-brand-primary-dark to-brand-primary-light mt-16 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary-light rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
              Industry Insights
            </h1>
            <p className="text-xl text-white/90 animate-fade-in">
              Expert knowledge and industry updates
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-slate-600">Category:</span>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {Object.entries(blogCategories).map(([key, name]) => (
                      <SelectItem key={key} value={key}>
                        {name}
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
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredBlogs().map((post, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group hover:scale-105">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{post.title}</h3>
                    <p className={`text-slate-600 mb-4 text-sm leading-relaxed ${expandedPosts.includes(index) ? '' : 'line-clamp-3'
                      }`}>
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-orange-600 font-medium mb-4">Target: {post.target}</p>
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="text-orange-600 hover:text-orange-800 font-semibold transition-colors"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <BlogsModal 
  isOpen={selectedPost !== null}
  onClose={() => setSelectedPost(null)}
  post={selectedPost}
/>
    </div>
  );
};

export default Blogs;
