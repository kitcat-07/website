import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

import FounderStory from './components/FounderStory';
import CulturalValues from './components/CulturalValues';
import MissionImpact from './components/MissionImpact';
import CompanyCulture from './components/CompanyCulture';
import WhyNowSection from './components/WhyNowSection';
import VisionTimeline from './components/VisionTimeline';

const AboutOriginStoryEcosystem = () => {
  const [activeSection, setActiveSection] = useState('genesis');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineData = [
    {
      id: 'genesis',
      year: '2024',
      title: 'The Genesis',
      description: 'Vision crystallized to bridge ancient wisdom with innovation Technology',
      icon: 'Lightbulb',
      details: `An unshakable belief was born — to bridge the gap between scientific breakthroughs and human empowerment. Deep Tech-Mystrix (DT-M) was envisioned not just as a company, but as a movement to build sovereign, futuristic technologies for India and the world. The aim: solve critical aerospace challenges, redefine industries, and open new frontiers through deep R&D.`
    },
    {
      id: 'foundation',
      year: '2025',
      title: 'Foundation Laid',
      description: 'Multi-sector deep-tech architecture established',
      icon: 'Building',
      details: `The master blueprint was drawn to simultaneously innovate across five deep-tech domains — Aerospace, Supersonic Propulsion, Defense Systems, Precision Robotics, and Immersive Gaming. A leadership team was formed, uniting talent with passion, while Tech-Mystrix’s first R&D zones and digital infrastructure came to life.`
    },
    {
      id: 'expansion',
      year: '2025',title: 'Rapid Expansion',
      description: 'Team assembly and R&D infrastructure development',
      icon: 'Rocket',
      details: `Team expansion accelerated. Labs activated. Key R&D projects kicked off: jet engines, AI-CAD systems, medical-grade robotics, and real-time AR/VR systems. From the first prototype sketches to internal concept tests, every division moved toward engineering powerful, scalable, and reality-driven solutions.`
    },
    {
      id: 'breakthrough',
      year: '2026',
      title: 'Breakthrough Phase',
      description: 'First-generation prototypes and market validation',
      icon: 'Zap',
      details: `Deep Tech-Mystrix(DT-M) enters its first live validation phase. Functional demos across aerospace, AI software, and gaming prove viability. Investors and global collaborators take notice. This marks the transition from concept to execution — a new deep-tech ecosystem powered by Indian ingenuity begins to rise.`
    }
  ];

  const navigationSections = [
    { id: 'genesis', label: 'Genesis Story', icon: 'Star' },
    { id: 'founder', label: 'Founder Vision', icon: 'User' },
    { id: 'values', label: 'Cultural Values', icon: 'Heart' },
    { id: 'mission', label: 'Mission Impact', icon: 'Target' },
    { id: 'culture', label: 'Company Culture', icon: 'Users' },
    { id: 'why-now', label: 'Why Now', icon: 'Clock' },
    { id: 'timeline', label: 'Vision 2030', icon: 'Calendar' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-border-light z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-quantum-blue to-primary">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animation-float"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-quantum-purple/10 rounded-full blur-3xl animation-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-plasma-orange/10 rounded-full blur-3xl animation-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              Origin Story
              <span className="block text-gradient text-4xl"></span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-accent to-quantum-purple mx-auto rounded-full mb-15"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-20 max-w-4xl mx-auto leading-relaxed">
            Where ancient Indian wisdom meets Innovation Tchnology to unlock new universes of possibility. 
            This is the story of visionary pragmatism in action.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-15">
            <button
              onClick={() => scrollToSection('genesis')}
              className="inline-flex items-center btn-primary animation-quantum"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Begin the Journey
            </button>
            <Link
              to="/services-technology-sectors-universe"
              className="inline-flex items-center btn-secondary"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Explore Technology Universe
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animation-float">
          <Icon name="ChevronDown" size={32} color="white" className="opacity-60" />
        </div>
      </section>

      {/* Navigation Sidebar */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-surface/90 backdrop-blur-md rounded-lg p-2 shadow-elevation">
          {navigationSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 transition-all duration-300 group relative ${
                activeSection === section.id
                  ? 'bg-primary text-white' :'hover:bg-primary-50 text-text-secondary hover:text-primary'
              }`}
              title={section.label}
            >
              <Icon name={section.icon} size={20} />
              <div className="absolute left-full ml-3 px-3 py-1 bg-deep-space text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {section.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Genesis Timeline Section */}
      <section id="genesis" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              The Evolutionary Roadmap
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From vision to reality - the key moments that shaped Tech-Mystrix into a multi-sector deep-tech powerhouse
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>

            {timelineData.map((item, index) => (
              <div key={item.id} className={`relative flex items-center mb-0 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-elevation z-10">
                  <Icon name={item.icon} size={30} color="white" />
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="card hover:shadow-elevation shadow-gray-400 transition-all duration-300 group">
                    <div className="flex items-center mb-5">
                      <span className="text-2xl font-bold text-primary mr-4">{item.year}</span>
                      <h3 className="text-xl font-semibold text-text-primary">{item.title}</h3>
                    </div>
                    <p className="text-text-secondary mb-4">{item.description}</p>
                    <p className="text-sm text-text-muted leading-relaxed">{item.details}</p>
                    
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="founder" className="py-20 bg-primary-50">
        <FounderStory />
      </section>

      {/* Cultural Values Section */}
      <section id="values" className="py-20 bg-background">
        <CulturalValues />
      </section>

      {/* Mission Impact Section */}
      <section id="mission" className="py-20 bg-surface">
        <MissionImpact />
      </section>

      {/* Company Culture Section */}
      <section id="culture" className="py-20 bg-primary-50">
        <CompanyCulture />
      </section>

      {/* Why Now Section */}
      <section id="why-now" className="py-20 bg-background">
        <WhyNowSection />
      </section>

      {/* Vision Timeline Section */}
      <section id="timeline" className="py-20 bg-gradient-to-br from-deep-space to-quantum-blue">
        <VisionTimeline />
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Ready to Unlock New Universes?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join us in building tomorrow's impossible today through visionary pragmatism and convergent innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/portfolio-innovation-laboratory"
              className="inline-flex items-center btn-primary animation-quantum"
            >
              <Icon name="Beaker" size={20} className="mr-2" />
              Explore DT-M Lab
            </Link>
            <Link
              to="/contact-global-presence-hub"
              className="inline-flex items-center btn-secondary"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Start Partnership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutOriginStoryEcosystem;