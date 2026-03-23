import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const SectorNavigation = ({ sectors, activeSector, onSectorChange }) => {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-surface/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Futuristic Portal Navigation
          </h2>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center space-x-4">
            {sectors.map((sector) => (
              <motion.button
                key={sector.id}
                onClick={() => onSectorChange(sector.id)}
                className={`relative px-6 py-4 rounded-xl transition-all duration-300 group ${
                  activeSector === sector.id
                    ? 'bg-gradient-to-r ' + sector.color + ' text-white shadow-lg'
                    : 'bg-surface/20 text-gray-300 hover:bg-surface/30 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-3">
                  <Icon 
                    name={sector.icon} 
                    size={24} 
                    className={`transition-colors duration-300 ${
                      activeSector === sector.id ? 'text-white' : 'text-current'
                    }`}
                  />
                  <div className="text-left">
                    <div className="font-semibold">{sector.name}</div>
                    <div className="text-xs opacity-80">{sector.technologies.length} Technologies</div>
                  </div>
                </div>
                
                {activeSector === sector.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {sectors.map((sector) => (
                <motion.button
                  key={sector.id}
                  onClick={() => onSectorChange(sector.id)}
                  className={`relative p-4 rounded-xl transition-all duration-300 ${
                    activeSector === sector.id
                      ? 'bg-gradient-to-r ' + sector.color + ' text-white shadow-lg'
                      : 'bg-surface/20 text-gray-300 hover:bg-surface/30'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <Icon 
                      name={sector.icon} 
                      size={24} 
                      className="text-current"
                    />
                    <div className="text-sm font-semibold text-center">{sector.name}</div>
                  </div>
                  
                  {activeSector === sector.id && (
                    <motion.div
                      layoutId="mobileActiveIndicator"
                      className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active Sector Preview */}
          <div className="text-center mt-6">
            <div className="text-lg text-gray-300">
              Currently Exploring: <span className="text-accent font-semibold">
                {sectors.find(s => s.id === activeSector)?.name}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectorNavigation;