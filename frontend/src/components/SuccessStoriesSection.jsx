import React from 'react';
import { Heart, MessageCircle, Eye, Star } from 'lucide-react';
import { successStories } from '../data/mock';
import { Button } from './ui/button';

const SuccessStoriesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Millions of Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real people finding real love. Here are some of our happy couples.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.names}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{story.names}</h3>
                  <p className="text-white/80 text-sm">{story.location}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  "{story.story}"
                </p>
                <div className="mt-4 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white px-8 py-6 rounded-full text-lg transition-all"
          >
            Read More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
