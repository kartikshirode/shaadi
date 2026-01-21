import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from './ui/button';
import { stats } from '../data/mock';

const HeroSection = ({ onOpenRegister }) => {
  return (
    <section className="relative min-h-screen pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/30723691/pexels-photo-30723691.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Find your forever{' '}
            <Heart className="inline-block h-12 w-12 text-[#e91e63] fill-[#e91e63] animate-pulse" />
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
            Discover a world beyond matrimony
          </p>
          <Button 
            onClick={onOpenRegister}
            className="bg-[#00bcd4] hover:bg-[#00a5bb] text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Find Your Match
          </Button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-4 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">#1 Matchmaking Service</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">Ratings on Playstore by {stats.playStoreReviews} users</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">{stats.successStories} Success Stories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
