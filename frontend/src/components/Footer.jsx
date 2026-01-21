import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Blog', 'Contact Us'],
    },
    {
      title: 'Help & Support',
      links: ['FAQs', 'Safety Tips', 'Success Stories', 'Premium Plans', 'Customer Care'],
    },
    {
      title: 'Privacy & Terms',
      links: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Refund Policy', 'Report Abuse'],
    },
    {
      title: 'More Services',
      links: ['VIP Shaadi', 'Sangam', 'Jeevansathi', 'Elite Matrimony', 'Astro Match'],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-4">
              <span className="text-3xl font-bold text-[#00bcd4]" style={{ fontFamily: 'Georgia, serif' }}>
                shaadi
                <span className="text-[#e91e63] text-xl">.com</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm mb-6">
              The world's No.1 Matchmaking Service, trusted by millions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00bcd4] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00bcd4] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e91e63] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-[#00bcd4] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#00bcd4]" />
              <span>Mumbai, Delhi, Bangalore, Chennai</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#00bcd4]" />
              <span>1800-100-2323 (Toll Free)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#00bcd4]" />
              <span>support@shaadi.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shaadi.com. All rights reserved.</p>
          <p className="mt-2">
            Made with <span className="text-[#e91e63]">❤</span> in India | People Infocom Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
