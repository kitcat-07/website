import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const SectorCards = () => {
  const [hoveredSector, setHoveredSector] = useState(null);

  const sectors = [
    {
      id: 'aerospace',
      name: 'Aerospace',
      icon: 'Plane',
      description: 'Next-generation propulsion systems and space exploration technologies',
      color: 'from-blue-500 to-cyan-400',
      bgImage: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop',
      stats: '15+ Projects',
      highlight: 'Advanced Propulsion'
    },
    {
      id: 'defense',
      name: 'Defense',
      icon: 'Shield',
      description: 'Advanced defense systems and strategic security solutions',
      color: 'from-red-600 to-orange-400',
      bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      stats: '12+ Systems',
      highlight: 'AI-Powered Defense'
    },
    {
      id: 'medical',
      name: 'Medical Robotics',
      icon: 'Heart',
      description: 'Precision surgical robotics and medical automation systems',
      color: 'from-green-500 to-emerald-400',
      bgImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      stats: '8+ Innovations',
      highlight: 'Nano-Surgery Bots'
    },
    {
      id: 'ai-cad',
      name: 'AI CAD',
      icon: 'Brain',
      description: 'Intelligent design automation and generative engineering',
      color: 'from-purple-500 to-pink-400',
      bgImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      stats: '20+ Models',
      highlight: 'Generative Design'
    },
    {
      id: 'gameverse',
      name: 'Gameverse',
      icon: 'Gamepad2',
      description: 'Immersive gaming experiences and virtual reality platforms',
      color: 'from-indigo-500 to-purple-400',
      bgImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      stats: '5+ Worlds',
      highlight: 'Quantum Gaming'
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Five Dimensions of Innovation
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore our Futuristic technology sectors, each designed to solve humanity's 
            biggest challenges through the convergence of ancient wisdom and cutting-edge innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-quantum-purple mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={sector.id}
              className={`group relative overflow-hidden rounded-2xl bg-surface shadow-subtle hover:shadow-elevation transition-all duration-500 transform hover:scale-105 ${
                index === 2 ? 'lg:col-span-1 lg:mx-auto' : ''
              }`}
              onMouseEnter={() => setHoveredSector(sector.id)}
              onMouseLeave={() => setHoveredSector(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${sector.bgImage})` }}
                ></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-between text-white">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Icon name={sector.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {sector.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {sector.name}
                  </h3>
                  
                  <p className="text-white/90 leading-relaxed mb-4">
                    {sector.description}
                  </p>
                </div>

                {/* Footer */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full animation-quantum"></div>
                      <span className="text-sm font-medium text-accent">
                        {sector.highlight}
                      </span>
                    </div>
                    
                    <Link
                      to="/services-technology-sectors-universe"
                      className="flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300 group/link"
                    >
                      <span className="text-sm font-medium">Explore</span>
                      <Icon 
                        name="ArrowRight" 
                        size={16} 
                        className="transform group-hover/link:translate-x-1 transition-transform duration-300" 
                      />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                {hoveredSector === sector.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 animate-fade-in pointer-events-none"></div>
                )}
              </div>

              {/* Quantum Particles */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-accent rounded-full animation-float opacity-60"></div>
              <div className="absolute bottom-8 left-6 w-2 h-2 bg-white/40 rounded-full animation-quantum opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            to="/services-technology-sectors-universe"
            className="inline-flex items-center space-x-2 btn-primary text-lg px-8 py-4 animation-quantum"
          >
            <Icon name="Zap" size={24} />
            <span>Explore All Sectors</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectorCards;