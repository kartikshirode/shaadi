import React from 'react';
import { BadgeCheck, Shield, Sparkles, HandCoins } from 'lucide-react';
import { features } from '../data/mock';
import { Button } from './ui/button';

const iconMap = {
  guarantee: HandCoins,
  verified: BadgeCheck,
  ai: Sparkles,
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
          The Shaadi Experience
        </h2>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="p-8 rounded-2xl border border-gray-100 hover:border-[#00bcd4]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#00bcd4]/10 flex items-center justify-center mb-6 group-hover:bg-[#00bcd4]/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-[#00bcd4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* VIP Section */}
        <div className="bg-gradient-to-r from-[#f8f0fc] to-[#f0f4ff] rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="h-16 w-16 text-purple-600 mx-auto mb-2" />
                  <span className="text-2xl font-bold text-purple-800">VIP</span>
                  <span className="text-sm text-purple-600 block">SHAADI.COM</span>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Experience the world of elite personalised matchmaking by Shaadi.com
              </h3>
            </div>
            <div>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-6 rounded-full text-lg">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
