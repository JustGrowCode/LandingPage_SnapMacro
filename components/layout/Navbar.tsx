import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border border-white/20 rounded-full mx-4 mt-2' : ''}`}>
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-semibold text-gray-900 tracking-tight text-lg">SnapMacro</span>
          </div>
          
          <div className="flex items-center gap-4">
             <a 
               href="#how-it-works" 
               onClick={(e) => scrollToSection(e, 'how-it-works')}
               className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:block transition-colors"
             >
                Como Funciona
             </a>
             <a 
               href="#pricing" 
               onClick={(e) => scrollToSection(e, 'pricing')}
               className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:block transition-colors mr-2"
             >
                Preços
             </a>
            <Button size="sm" variant="primary">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};