import React, { useState } from 'react';
import { Check, Crown } from 'lucide-react';
import { plans } from '../data/mock';
import { Button } from './ui/button';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Choose Your Plan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Upgrade to Premium and unlock all features to find your perfect match faster
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-[#00bcd4] shadow-2xl scale-105'
                  : 'border border-gray-200 hover:border-[#00bcd4]/50 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#00bcd4] to-[#00a5bb] text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                    <Crown className="h-4 w-4" /> Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.duration}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 line-through text-lg">₹{plan.originalPrice}</span>
                  <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
                </div>
                <p className="text-green-600 text-sm mt-1">
                  Save ₹{plan.originalPrice - plan.price}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 rounded-full text-lg transition-all ${
                  plan.popular
                    ? 'bg-[#00bcd4] hover:bg-[#00a5bb] text-white'
                    : 'bg-gray-100 hover:bg-[#00bcd4] text-gray-900 hover:text-white'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
