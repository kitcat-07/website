import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

import HeroSection from './components/HeroSection';
import SectorCards from './components/SectorCards';
import TechnologyTimeline from './components/TechnologyTimeline';
import BreakthroughMoments from './components/BreakthroughMoments';
import SocialProof from './components/SocialProof';
import ProjectUpdates from './components/ProjectUpdates';

const HomepageQuantumGateway = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Quantum Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animation-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-quantum-purple/10 rounded-full blur-3xl animation-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-plasma-orange/10 rounded-full blur-3xl animation-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl animation-float" style={{ animationDelay: '1s' }}></div>
      </div>

    

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Sector Cards */}
        <SectorCards />

        {/* Technology Convergence Timeline */}
        <TechnologyTimeline />

        {/* Breakthrough Moments */}
        <BreakthroughMoments />

        {/* Real-time Project Updates */}
        <ProjectUpdates />

        {/* Social Proof */}
        <SocialProof />

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-deep-space via-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Unlock the New Universe?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join us in building tomorrow's impossible today. Whether you're an investor, partner, or visionary talent, 
                your journey into the quantum realm starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/contact-global-presence-hub"
                  className="inline-flex items-center space-x-2 btn-primary text-lg px-6 py-4 animate-quantum"
                >
                  <Icon name="Rocket" size={24} className="mr-2" />
                  Contact portal
                </Link>
                <Link
                  to="/services-technology-sectors-universe"
                  className="inline-flex items-center space-x-2 btn-secondary text-lg px-8 py-4 animate-quantum"
                >
                  <Icon name="Compass" size={24} className="mr-2" />
                  Explore Technologies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient">Deep Tech-Mystrix</h3>
                    <p className="text-sm text-gray-400 font-mono">Next-Gen Technology</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Unlocking the New Universe through the fusion of ancient Indian wisdom and quantum innovation. 
                  Building tomorrow's impossible today across aerospace, defense, medical robotics, AI, and gaming.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                    <Icon name="Linkedin" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                    <Icon name="Twitter" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                    <Icon name="Github" size={20} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sky-300 font-semibold mb-4">Quantum Navigation</h4>
                <ul className="space-y-2">
                  <li><Link to="/about-origin-story-ecosystem" className="text-gray-300 hover:text-accent transition-colors duration-300">About</Link></li>
                  <li><Link to="/services-technology-sectors-universe" className="text-gray-300 hover:text-accent transition-colors duration-300">Tech Domines</Link></li>
                  <li><Link to="/portfolio-innovation-laboratory" className="text-gray-300 hover:text-accent transition-colors duration-300">DT-M Lab</Link></li>
                  <li><Link to="/roadmap-future-vision-portal" className="text-gray-300 hover:text-accent transition-colors duration-300">Future Vision</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sky-300 font-semibold mb-4">Mission Control</h4>
                <ul className="space-y-2">
                  <li><Link to="/contact-global-presence-hub" className="text-gray-300 hover:text-accent transition-colors duration-300">DT-M Global Hub</Link></li>
                  <li><a href="mailto:contact@tech-mystrix.com" className="text-gray-300 hover:text-accent transition-colors duration-300">contact@deeptech-mystrix.com</a></li>
                  <li><a href="tel:+911234567890" className="text-gray-300 hover:text-accent transition-colors duration-300">+91 97903 8XXXX</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Tech-Mystrix. All rights reserved. Unlocking the New Universe.
              </p>
              <p className="text-0xl text-text-secondary max-w-6xl mx-2  text-center mt-4">
          (NOTE ℹ️: The data points such as "(50+ Projects", "25+ ", and "12+)" are prototype indicators to visualize our future goals and are not actual figures at this early stage.)
        </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomepageQuantumGateway;