import React from 'react';
import { Download, Star, Users, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { stats } from '../data/mock';

const AppDownloadSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#00bcd4] to-[#0097a7] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Find your perfect match on the go
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Download the Shaadi.com app and start connecting with verified profiles from anywhere.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                  <span className="text-2xl font-bold">{stats.playStoreRating}</span>
                </div>
                <p className="text-white/70 text-sm">Play Store Rating</p>
              </div>
              <div className="h-12 w-px bg-white/30 hidden sm:block"></div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="h-5 w-5" />
                  <span className="text-2xl font-bold">{stats.activeUsers}</span>
                </div>
                <p className="text-white/70 text-sm">Active Users</p>
              </div>
              <div className="h-12 w-px bg-white/30 hidden sm:block"></div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Heart className="h-5 w-5 text-[#e91e63] fill-[#e91e63]" />
                  <span className="text-2xl font-bold">{stats.successStories}</span>
                </div>
                <p className="text-white/70 text-sm">Success Stories</p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button className="bg-black hover:bg-gray-900 text-white px-6 py-6 rounded-xl flex items-center gap-3">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 2H6.477C3.476 2 2 3.476 2 6.477v11.046C2 20.524 3.476 22 6.477 22h11.046c3.001 0 4.477-1.476 4.477-4.477V6.477C22 3.476 20.524 2 17.523 2zM8.89 17.77L5 12l3.89-5.77c.15-.21.41-.33.66-.33.14 0 .29.04.42.12.34.23.44.69.21 1.03L7.04 12l3.14 4.95c.23.34.13.8-.21 1.03-.13.08-.28.12-.42.12-.25 0-.51-.12-.66-.33zm8.11-5.77l-3.89 5.77c-.15.21-.41.33-.66.33-.14 0-.29-.04-.42-.12-.34-.23-.44-.69-.21-1.03l3.14-4.95-3.14-4.95c-.23-.34-.13-.8.21-1.03.34-.23.8-.13 1.03.21L17 12z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-400">GET IT ON</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </Button>
              <Button className="bg-black hover:bg-gray-900 text-white px-6 py-6 rounded-xl flex items-center gap-3">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </Button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-[3rem] blur-3xl"></div>
              <div className="relative bg-gray-900 rounded-[2rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[1.5rem] overflow-hidden w-64 h-[500px]">
                  <div className="bg-[#00bcd4] p-4">
                    <div className="text-white text-center">
                      <span className="text-2xl font-bold">shaadi</span>
                      <span className="text-[#e91e63]">.com</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="bg-gray-100 rounded-xl p-4">
                      <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-3"></div>
                      <p className="text-center text-gray-800 font-medium">Find Your Match</p>
                      <p className="text-center text-gray-500 text-sm">Today!</p>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#00bcd4]/20"></div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2 mt-1"></div>
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#e91e63]/20"></div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2 mt-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
