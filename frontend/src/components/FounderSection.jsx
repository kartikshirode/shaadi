import React from 'react';
import { Quote } from 'lucide-react';

const FounderSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#fdf6f0] via-[#fef9f5] to-[#fff5ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Quote Section */}
          <div className="flex-1 order-2 lg:order-1">
            <Quote className="h-16 w-16 text-[#e91e63]/20 mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              At Shaadi.com, it is our life's mission to use technology for good and bring back deep and meaningful relationships.
            </h2>
            <p className="text-gray-600 text-lg">
              - Anupam Mittal, Founder & CEO
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00bcd4]/20 to-[#e91e63]/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="CEO"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
