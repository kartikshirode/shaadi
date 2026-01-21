import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = ({ onOpenRegister, onOpenLogin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-3xl font-bold text-[#00bcd4] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                shaadi
                <span className="text-[#e91e63] text-xl">.com</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-[#00bcd4] transition-colors font-medium">
              About us
            </a>
            <a href="#help" className="text-gray-700 hover:text-[#00bcd4] transition-colors font-medium">
              Help
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-gray-300 rounded-full px-6 hover:border-[#00bcd4] hover:text-[#00bcd4]">
                  Login <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={onOpenLogin} className="cursor-pointer">
                  Login with Email
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onOpenLogin} className="cursor-pointer">
                  Login with Phone
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#00bcd4] p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-[#00bcd4] font-medium">
                About us
              </a>
              <a href="#help" className="text-gray-700 hover:text-[#00bcd4] font-medium">
                Help
              </a>
              <Button 
                variant="outline" 
                onClick={onOpenLogin}
                className="border-gray-300 w-fit rounded-full px-6"
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
