import React from 'react';
import { communities } from '../data/mock';
import { ChevronRight } from 'lucide-react';

const CommunitySection = () => {
  const browseCategories = [
    { title: 'Matrimony by Religion', items: ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Parsi'] },
    { title: 'Matrimony by City', items: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata'] },
    { title: 'Matrimony by Language', items: ['Hindi', 'Tamil', 'Telugu', 'Marathi', 'Bengali', 'Gujarati', 'Kannada'] },
    { title: 'Matrimony by Profession', items: ['Doctor', 'Engineer', 'Business', 'Government', 'Teacher', 'Lawyer', 'CA/CS'] },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Browse Matrimony Profiles By
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Find matches from across communities, cities, and professions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {browseCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-[#00bcd4] transition-colors flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item} Matrimony
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-gradient-to-r from-[#00bcd4]/5 to-[#e91e63]/5 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Join millions from your community
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {communities.map((community) => (
              <div
                key={community.id}
                className="bg-white px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <span className="text-gray-900 font-medium group-hover:text-[#00bcd4] transition-colors">
                  {community.name}
                </span>
                <span className="text-gray-500 text-sm ml-2">({community.count})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
