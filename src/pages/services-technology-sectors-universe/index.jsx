import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

import SectorShowcase from './components/SectorShowcase';
import TechnologyConvergence from './components/TechnologyConvergence';
import SectorNavigation from './components/SectorNavigation';

const TechnologySectorsUniverse = () => {
  const [activeSector, setActiveSector] = useState('aerospace');
  const [isLoading, setIsLoading] = useState(true);

  const sectors = [
    {
      id: 'aerospace',
      name: 'Aerospace',
      icon: 'Rocket',
      color: 'from-blue-600 to-indigo-700',
      description: 'Next-generation propulsion systems and satellite technologies',
      technologies: ['Ion Propulsion', 'Satellite Components', 'Space Exploration'],
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop',
      stats: { projects: 12, patents: 8, partnerships: 5 }
    },
    {
      id: 'defense',
      name: 'Defense',
      icon: 'Shield',
      color: 'from-red-600 to-orange-700',
      description: 'Advanced robotics and AI systems for strategic applications',
      technologies: ['Combat Robotics', 'AI Systems', 'Strategic Defense'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      stats: { projects: 15, patents: 12, partnerships: 8 }
    },
    {
      id: 'medical',
      name: 'Medical Robotics',
      icon: 'Heart',
      color: 'from-green-600 to-emerald-700',
      description: 'Surgical assistance and rehabilitation technologies',
      technologies: ['Surgical Robots', 'Rehabilitation Devices', 'Diagnostic Tools'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      stats: { projects: 18, patents: 15, partnerships: 10 }
    },
    {
      id: 'ai-cad',
      name: 'AI CAD',
      icon: 'Cpu',
      color: 'from-purple-600 to-violet-700',
      description: 'Next-generation design automation and workflow optimization',
      technologies: ['Design Automation', 'Workflow Optimization', 'AI Tools'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      stats: { projects: 22, patents: 18, partnerships: 12 }
    },
    {
      id: 'gameverse',
      name: 'Gameverse',
      icon: 'Gamepad2',
      color: 'from-pink-600 to-rose-700',
      description: 'Immersive gaming technologies and VR/AR innovations',
      technologies: ['VR/AR Gaming', 'Interactive Entertainment', 'Immersive Platforms'],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      stats: { projects: 25, patents: 20, partnerships: 15 }
    }
  ];

  const convergencePoints = [
    {
      id: 1,
      title: 'AI-Powered Medical Aerospace',
      sectors: ['aerospace', 'medical', 'ai-cad'],
      description: 'Combining space-grade materials with medical robotics and AI diagnostics for next-generation healthcare solutions in extreme environments.',
      applications: ['Space Medicine', 'Remote Surgery', 'Autonomous Medical Systems']
    },
    {
      id: 2,
      title: 'Defense Gaming Simulation',
      sectors: ['defense', 'gameverse', 'ai-cad'],
      description: 'Military training simulations using advanced gaming engines and AI-driven scenario generation for realistic combat preparation.',
      applications: ['Training Simulations', 'Strategic Planning', 'Combat Readiness']
    },
    {
      id: 3,
      title: 'Robotic Manufacturing Convergence',
      sectors: ['medical', 'defense', 'aerospace'],
      description: 'Cross-sector robotics platform enabling precision manufacturing for medical devices, defense systems, and aerospace components.',
      applications: ['Precision Manufacturing', 'Quality Control', 'Automated Assembly']
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSectorChange = (sectorId) => {
    setActiveSector(sectorId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-deep-space via-quantum-blue to-primary flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-quantum-purple rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">Initializing Technology Universe</h2>
          <p className="text-gray-300">Loading portals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-quantum-blue to-primary">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animation-float"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-quantum-purple/10 rounded-full blur-3xl animation-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-plasma-orange/10 rounded-full blur-3xl animation-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-300 font-bold  mb-8">
              Technology Sectors
              
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-accent to-quantum-purple mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Five distinct  portals leading to breakthrough innovations across Aerospace, Defense, Medical robotics, AI Powered softwares and immersive Gaming technologies.
            </p>
          </motion.div>

          {/* Sector Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">92+</div>
              <div className="text-gray-300 text-sm">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-quantum-purple mb-2">73+</div>
              <div className="text-gray-300 text-sm">Patents Filed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-plasma-orange mb-2">50+</div>
              <div className="text-gray-300 text-sm">Strategic Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5</div>
              <div className="text-gray-300 text-sm">Technology Sectors</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sector Navigation */}
      <SectorNavigation 
        sectors={sectors}
        activeSector={activeSector}
        onSectorChange={handleSectorChange}
      />

      {/* Active Sector Showcase */}
      <SectorShowcase 
        sector={sectors.find(s => s.id === activeSector)}
        sectors={sectors}
      />

      {/* Technology Convergence */}
      <TechnologyConvergence 
        convergencePoints={convergencePoints}
        sectors={sectors}
      />

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore Our Innovation Laboratory?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Dive deeper into our breakthrough technologies with interactive 3D models, development timelines, and real-world applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio-innovation-laboratory"
                className="inline-flex items-center btn-primary animation-quantum"
              >
                <Icon name="Beaker" size={20} className="mr-2" />
                Innovation Laboratory
              </Link>
              <Link
                to="/roadmap-future-vision-portal"
                className="inline-flex items-center btn-secondary"
              >
                <Icon name="Telescope" size={20} className="mr-2" />
                Future Roadmap
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnologySectorsUniverse;