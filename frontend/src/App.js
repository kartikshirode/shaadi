import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FounderSection from './components/FounderSection';
import FeaturesSection from './components/FeaturesSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import CommunitySection from './components/CommunitySection';
import PricingSection from './components/PricingSection';
import AppDownloadSection from './components/AppDownloadSection';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import LoginModal from './components/LoginModal';

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleOpenLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onOpenRegister={handleOpenRegister} 
        onOpenLogin={handleOpenLogin} 
      />
      
      <main>
        <HeroSection onOpenRegister={handleOpenRegister} />
        <FounderSection />
        <FeaturesSection />
        <SuccessStoriesSection />
        <CommunitySection />
        <PricingSection />
        <AppDownloadSection />
      </main>

      <Footer />

      {/* Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
        onSwitchToLogin={handleOpenLogin}
      />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleCloseLogin}
        onSwitchToRegister={handleOpenRegister}
      />
    </div>
  );
}

export default App;
