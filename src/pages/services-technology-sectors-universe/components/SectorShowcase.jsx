import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const SectorShowcase = ({ sector, sectors }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const mockTechnicalSpecs = {
    aerospace: [
      { name: 'Ion Propulsion Efficiency', value: '95.2%', unit: 'efficiency' },
      { name: 'Satellite Component Durability', value: '25+', unit: 'years' },
      { name: 'Space-Grade Materials', value: '12', unit: 'certified types' },
      { name: 'Orbital Precision', value: '±0.001°', unit: 'accuracy' }
    ],
    defense: [
      { name: 'Combat Robot Response Time', value: '<50ms', unit: 'reaction' },
      { name: 'AI Decision Accuracy', value: '99.7%', unit: 'precision' },
      { name: 'Strategic Defense Range', value: '500km', unit: 'coverage' },
      { name: 'System Reliability', value: '99.9%', unit: 'uptime' }
    ],
    medical: [
      { name: 'Surgical Precision', value: '±0.1mm', unit: 'accuracy' },
      { name: 'Patient Recovery Time', value: '-40%', unit: 'improvement' },
      { name: 'Diagnostic Accuracy', value: '98.5%', unit: 'precision' },
      { name: 'Device Sterilization', value: '99.99%', unit: 'effectiveness' }
    ],
    'ai-cad': [
      { name: 'Design Generation Speed', value: '10x', unit: 'faster' },
      { name: 'Workflow Optimization', value: '65%', unit: 'efficiency gain' },
      { name: 'Error Reduction', value: '85%', unit: 'improvement' },
      { name: 'Processing Capability', value: '1M+', unit: 'designs/hour' }
    ],
    gameverse: [
      { name: 'VR Frame Rate', value: '120fps', unit: 'smooth experience' },
      { name: 'Latency Reduction', value: '<5ms', unit: 'response time' },
      { name: 'Immersion Score', value: '9.8/10', unit: 'user rating' },
      { name: 'Platform Compatibility', value: '15+', unit: 'devices' }
    ]
  };

  const mockDevelopmentTimeline = {
    aerospace: [
      { phase: 'Research & Development', status: 'completed', date: '2023-Q1' },
      { phase: 'Prototype Testing', status: 'completed', date: '2023-Q3' },
      { phase: 'Space Qualification', status: 'in-progress', date: '2024-Q2' },
      { phase: 'Commercial Launch', status: 'planned', date: '2024-Q4' }
    ],
    defense: [
      { phase: 'Security Clearance', status: 'completed', date: '2023-Q1' },
      { phase: 'Combat Simulation', status: 'completed', date: '2023-Q4' },
      { phase: 'Field Testing', status: 'in-progress', date: '2024-Q1' },
      { phase: 'Military Deployment', status: 'planned', date: '2024-Q3' }
    ],
    medical: [
      { phase: 'Clinical Research', status: 'completed', date: '2023-Q2' },
      { phase: 'FDA Approval Process', status: 'in-progress', date: '2024-Q1' },
      { phase: 'Hospital Trials', status: 'planned', date: '2024-Q3' },
      { phase: 'Market Release', status: 'planned', date: '2025-Q1' }
    ],
    'ai-cad': [
      { phase: 'Algorithm Development', status: 'completed', date: '2023-Q1' },
      { phase: 'Beta Testing', status: 'completed', date: '2023-Q4' },
      { phase: 'Enterprise Integration', status: 'in-progress', date: '2024-Q2' },
      { phase: 'Global Rollout', status: 'planned', date: '2024-Q4' }
    ],
    gameverse: [
      { phase: 'Engine Development', status: 'completed', date: '2023-Q2' },
      { phase: 'VR/AR Integration', status: 'completed', date: '2023-Q4' },
      { phase: 'Platform Testing', status: 'in-progress', date: '2024-Q1' },
      { phase: 'Consumer Launch', status: 'planned', date: '2024-Q3' }
    ]
  };

  const mockApplications = {
    aerospace: [
      'Deep Space Exploration Missions',
      'Commercial Satellite Deployment',
      'International Space Station Support',
      'Mars Colony Infrastructure'
    ],
    defense: [
      'Border Security Automation',
      'Strategic Military Operations',
      'Cybersecurity Defense Systems',
      'Intelligence Gathering Platforms'
    ],
    medical: [
      'Minimally Invasive Surgery',
      'Remote Patient Monitoring',
      'Rehabilitation Therapy',
      'Emergency Medical Response'
    ],
    'ai-cad': [
      'Automotive Design Optimization',
      'Architectural Planning Systems',
      'Manufacturing Process Automation',
      'Product Development Acceleration'
    ],
    gameverse: [
      'Immersive Educational Platforms',
      'Virtual Training Simulations',
      'Entertainment Experiences',
      'Social VR Communities'
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'Eye' },
    { id: 'specifications', name: 'Technical Specs', icon: 'Settings' },
    { id: 'timeline', name: 'Development', icon: 'Clock' },
    { id: 'applications', name: 'Applications', icon: 'Target' }
  ];

  if (!sector) return null;

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={sector.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-surface/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Sector Header */}
            <div className={`bg-gradient-to-r ${sector.color} p-8 md:p-12`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name={sector.icon} size={32} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {sector.name}
                    </h2>
                    <p className="text-white/80 text-lg">
                      {sector.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">{sector.stats.projects}</div>
                    <div className="text-white/80 text-sm">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{sector.stats.patents}</div>
                    <div className="text-white/80 text-sm">Patents</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{sector.stats.partnerships}</div>
                    <div className="text-white/80 text-sm">Partners</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-white/10">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-accent border-b-2 border-accent bg-accent/10' :'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon name={tab.icon} size={16} />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                          Breakthrough Technologies
                        </h3>
                        <div className="space-y-4 mb-8">
                          {sector.technologies.map((tech, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="text-gray-300 text-lg">{tech}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-surface/20 rounded-xl p-6 border border-white/10">
                          <h4 className="text-lg font-semibold text-white mb-4">
                            Innovation Highlights
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            Our {sector.name.toLowerCase()} division represents the cutting edge of technological advancement, combining years of research with practical applications that solve real-world challenges. Each breakthrough is designed to push the boundaries of what's possible while maintaining the highest standards of safety and reliability.
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                          <Image
                            src={sector.image}
                            alt={`${sector.name} Technology`}
                            className="w-full h-96 object-cover rounded-xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                        </div>
                        
                        {/* 3D Model Placeholder */}
                        <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <div className="flex items-center space-x-2 text-white">
                            <Icon name="Box" size={16} />
                            <span className="text-sm font-medium">3D Model Available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'specifications' && (
                  <motion.div
                    key="specifications"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-8">
                      Technical Specifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {mockTechnicalSpecs[sector.id]?.map((spec, index) => (
                        <div key={index} className="bg-surface/20 rounded-xl p-6 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-white">{spec.name}</h4>
                            <Icon name="Zap" size={20} className="text-accent" />
                          </div>
                          <div className="flex items-baseline space-x-2">
                            <span className="text-3xl font-bold text-accent">{spec.value}</span>
                            <span className="text-gray-300 text-sm">{spec.unit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'timeline' && (
                  <motion.div
                    key="timeline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-8">
                      Development Timeline
                    </h3>
                    <div className="space-y-6">
                      {mockDevelopmentTimeline[sector.id]?.map((phase, index) => (
                        <div key={index} className="flex items-center space-x-6">
                          <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                            phase.status === 'completed' ? 'bg-green-500' :
                            phase.status === 'in-progress' ? 'bg-accent' : 'bg-gray-500'
                          }`}></div>
                          <div className="flex-1 bg-surface/20 rounded-xl p-4 border border-white/10">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                              <span className="text-sm text-gray-300">{phase.date}</span>
                            </div>
                            <div className={`text-sm mt-1 ${
                              phase.status === 'completed' ? 'text-green-400' :
                              phase.status === 'in-progress' ? 'text-accent' : 'text-gray-400'
                            }`}>
                              {phase.status.charAt(0).toUpperCase() + phase.status.slice(1).replace('-', ' ')}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'applications' && (
                  <motion.div
                    key="applications"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-8">
                      Real-World Applications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {mockApplications[sector.id]?.map((application, index) => (
                        <div key={index} className="bg-surface/20 rounded-xl p-6 border border-white/10 hover:bg-surface/30 transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon name="Target" size={20} className="text-accent" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-2">{application}</h4>
                              <p className="text-gray-300 text-sm">
                                Advanced implementation showcasing the practical benefits and real-world impact of our {sector.name.toLowerCase()} technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SectorShowcase;