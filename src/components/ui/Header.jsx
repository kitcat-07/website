import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-quantum-gateway', icon: 'Home' },
    { name: 'About', path: '/about-origin-story-ecosystem', icon: 'Users' },
    { name: 'Technologies', path: '/services-technology-sectors-universe', icon: 'Zap' },
    { name: 'DT-M Lab', path: '/portfolio-innovation-laboratory', icon: 'Beaker' },
    { name: 'Future Vision', path: '/roadmap-future-vision-portal', icon: 'Telescope' },
    { name: 'Contact', path: '/contact-global-presence-hub', icon: 'Globe' }
    
  
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-90 transition-all duration-400 ${
      isScrolled 
        ? 'bg-surface/95 backdrop-blur-md shadow-subtle border-b border-border-light' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage-quantum-gateway" 
            className="flex items  space-x-0 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-quantum-purple rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl mb-1 mx-2 lg:text-2xl font-bold text-gradient">
                Deep Tech-Mystrix
              </h1>
              <p className="text-xs mx-2 text-text-secondary font-mono">
                "Unlocking the new Universe"
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.path)
                    ? 'text-quantum-purple bg-primary-50' :'text-text-secondary hover:text-primary hover:bg-primary-50/50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={item.icon} 
                    size={16} 
                    className={`transition-colors duration-300 ${
                      isActivePath(item.path) ? 'text-quantum-purple' : 'text-current'
                    }`}
                  />
                  <span>{item.name}</span>
                </div>
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-quantum-purple rounded-full"></div>
                )}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact-global-presence-hub"
              className="btn-primary animation-quantum"
            >
              Partnership Gateway
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center transition-all duration-300 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-primary transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-primary transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'top-3'
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-primary transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-400 ${
        isMenuOpen 
          ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-surface/95 backdrop-blur-md border-t border-border-light">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'text-quantum-purple bg-primary-50 shadow-subtle'
                    : 'text-text-secondary hover:text-primary hover:bg-primary-50/50'
                }`}
              >
                <Icon 
                  name={item.icon} 
                  size={20} 
                  className={`transition-colors duration-300 ${
                    isActivePath(item.path) ? 'text-quantum-purple' : 'text-current'
                  }`}
                />
                <span>{item.name}</span>
                {isActivePath(item.path) && (
                  <div className="ml-auto w-2 h-2 bg-quantum-purple rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-border-light">
              <Link
                to="/contact-global-presence-hub"
                onClick={closeMenu}
                className="w-full btn-primary text-center block"
              >
                Partnership Gateway
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;