import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';

const TechnologyConvergence = ({ convergencePoints, sectors }) => {
  const [selectedConvergence, setSelectedConvergence] = useState(null);

  const getSectorColor = (sectorId) => {
    const sector = sectors.find(s => s.id === sectorId);
    return sector ? sector.color : 'from-gray-600 to-gray-700';
  };

  const getSectorIcon = (sectorId) => {
    const sector = sectors.find(s => s.id === sectorId);
    return sector ? sector.icon : 'Circle';
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Technology Convergence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-quantum-purple mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Breakthrough innovations emerge at the intersection of our technology sectors, creating solutions that transcend traditional boundaries.
          </p>
        </motion.div>

        {/* Convergence Map */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {convergencePoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-surface/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-surface/20 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedConvergence(point)}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                
                {/* Sector Icons */}
                <div className="flex justify-center space-x-4 mb-4">
                  {point.sectors.map((sectorId, sectorIndex) => (
                    <div key={sectorId} className="relative">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getSectorColor(sectorId)} rounded-xl flex items-center justify-center`}>
                        <Icon name={getSectorIcon(sectorId)} size={20} className="text-white" />
                      </div>
                      {sectorIndex < point.sectors.length - 1 && (
                        <div className="absolute top-1/2 -right-6 w-4 h-0.5 bg-accent transform -translate-y-1/2"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-300 text-center mb-6 leading-relaxed">
                {point.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-accent mb-3">Key Applications:</h4>
                {point.applications.map((app, appIndex) => (
                  <div key={appIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-gray-300 text-sm">{app}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="text-accent hover:text-accent-300 transition-colors duration-300 text-sm font-medium">
                  Explore Convergence →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Connection Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-surface/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Cross-Sector Innovation Network
          </h3>
          
          <div className="relative">
            {/* Central Hub */}
            <div className="flex justify-center mb-12">
              <div className="w-24 h-24 bg-gradient-to-r from-accent to-quantum-purple rounded-full flex items-center justify-center relative">
                <Icon name="Zap" size={32} className="text-white" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-quantum-purple blur-xl opacity-50 animation-glow"></div>
              </div>
            </div>

            {/* Sector Connections */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${sector.color} rounded-xl flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300`}>
                    <Icon name={sector.icon} size={24} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-sm">{sector.name}</h4>
                  <p className="text-gray-400 text-xs mt-1">{sector.stats.projects} Projects</p>
                </motion.div>
              ))}
            </div>

            {/* Connection Lines (Visual Enhancement) */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--color-quantum-purple)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d="M50,30 Q25,50 20,70 Q50,60 80,70 Q75,50 50,30"
                  fill="none"
                  stroke="url(#connectionGradient)"
                  strokeWidth="0.5"
                  className="animation-float"
                />
              </svg>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our integrated approach enables breakthrough innovations by combining expertise across all technology sectors, creating solutions that are greater than the sum of their parts.
            </p>
          </div>
        </motion.div>

        {/* Convergence Detail Modal */}
        <AnimatePresence>
          {selectedConvergence && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedConvergence(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-surface/95 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{selectedConvergence.title}</h3>
                  <button
                    onClick={() => setSelectedConvergence(null)}
                    className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  >
                    <Icon name="X" size={16} className="text-white" />
                  </button>
                </div>

                <div className="flex justify-center space-x-6 mb-6">
                  {selectedConvergence.sectors.map((sectorId, index) => (
                    <div key={sectorId} className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${getSectorColor(sectorId)} rounded-xl flex items-center justify-center mb-2`}>
                        <Icon name={getSectorIcon(sectorId)} size={24} className="text-white" />
                      </div>
                      <span className="text-white text-sm font-medium">
                        {sectors.find(s => s.id === sectorId)?.name}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedConvergence.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Applications & Impact:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedConvergence.applications.map((app, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                        <Icon name="CheckCircle" size={16} className="text-accent" />
                        <span className="text-gray-300">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechnologyConvergence;