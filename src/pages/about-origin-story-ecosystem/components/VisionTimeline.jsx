import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const VisionTimeline = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [viewMode, setViewMode] = useState('timeline'); // timeline or convergence

  const visionData = {
    2025: {
      year: '2025',
      title: 'Foundation & Validation',
      theme: 'Proof of Concept',
      color: 'from-blue-500 to-indigo-600',
      milestones: [
        {
          sector: 'Aerospace',
          achievement: 'First quantum communication satellite prototype',
          impact: 'Demonstrate feasibility of quantum-secured space communications',
          icon: 'Satellite'
        },
        {
          sector: 'Defense',
          achievement: 'Autonomous surveillance system deployment',
          impact: 'Reduce border security costs by 40% with AI-powered monitoring',
          icon: 'Shield'
        },
        {
          sector: 'Medical',
          achievement: 'Surgical robot clinical trials completion',
          impact: 'Achieve 99.7% precision in minimally invasive procedures',
          icon: 'Heart'
        },
        {
          sector: 'AI CAD',
          achievement: 'Generative design platform beta launch',
          impact: 'Accelerate engineering design cycles by 500%',
          icon: 'Brain'
        },
        {
          sector: 'Gaming',
          achievement: 'AI-generated world platform alpha release',
          impact: 'Enable infinite, personalized gaming experiences',
          icon: 'Gamepad2'
        }
      ],
      convergencePoints: [
        'AI algorithms from gaming enhance medical robot precision',
        'Aerospace navigation systems improve defense surveillance accuracy',
        'CAD optimization techniques reduce satellite manufacturing costs'
      ]
    },
    2026: {
      year: '2026',
      title: 'Market Penetration',
      theme: 'Commercial Scaling',
      color: 'from-green-500 to-teal-600',
      milestones: [
        {
          sector: 'Aerospace',
          achievement: 'Commercial satellite constellation launch',
          impact: 'Provide global internet coverage to 500M+ underserved users',
          icon: 'Rocket'
        },
        {
          sector: 'Defense',
          achievement: 'Multi-nation defense contracts secured',
          impact: 'Deploy autonomous systems across 15+ countries',
          icon: 'Globe'
        },
        {
          sector: 'Medical',
          achievement: 'FDA approval for surgical robotics platform',
          impact: 'Enable remote surgery capabilities in 100+ hospitals',
          icon: 'Award'
        },
        {
          sector: 'AI CAD',
          achievement: 'Enterprise adoption across major manufacturers',
          impact: 'Transform design workflows for Fortune 500 companies',
          icon: 'Building'
        },
        {
          sector: 'Gaming',
          achievement: '10M+ users on AI gaming platform',
          impact: 'Establish new paradigm for personalized entertainment',
          icon: 'Users'
        }
      ],
      convergencePoints: [
        'Gaming AI creates realistic training simulations for medical procedures',
        'Defense encryption protocols secure commercial satellite communications',
        'CAD optimization algorithms enhance spacecraft design efficiency'
      ]
    },
    2027: {
      year: '2027',
      title: 'Technology Leadership',
      theme: 'Innovation Dominance',
      color: 'from-purple-500 to-pink-600',
      milestones: [
        {
          sector: 'Aerospace',
          achievement: 'Deep space exploration mission launch',
          impact: 'First private company to achieve Mars communication relay',
          icon: 'Telescope'
        },
        {
          sector: 'Defense',
          achievement: 'Quantum-secured defense network deployment',
          impact: 'Unhackable military communications for allied nations',
          icon: 'Lock'
        },
        {
          sector: 'Medical',
          achievement: 'AI diagnostic system global deployment',
          impact: 'Reduce diagnostic errors by 90% worldwide',
          icon: 'Stethoscope'
        },
        {
          sector: 'AI CAD',
          achievement: 'Autonomous manufacturing integration',
          impact: 'Enable lights-out factories with AI-designed products',
          icon: 'Cog'
        },
        {
          sector: 'Gaming',
          achievement: 'Virtual world economy reaches $10B',
          impact: 'Create new economic opportunities for 1M+ creators',
          icon: 'DollarSign'
        }
      ],
      convergencePoints: [
        'Medical AI diagnostics enhance astronaut health monitoring',
        'Gaming virtual worlds train defense personnel in realistic scenarios',
        'Aerospace materials science improves medical device durability'
      ]
    },
    2028: {
      year: '2028',
      title: 'Global Expansion',
      theme: 'Worldwide Impact',
      color: 'from-orange-500 to-red-600',
      milestones: [
        {
          sector: 'Aerospace',
          achievement: 'Lunar base construction support systems',
          impact: 'Enable permanent human presence on the Moon',
          icon: 'Moon'
        },
        {
          sector: 'Defense',
          achievement: 'Global peacekeeping AI network',
          impact: 'Predict and prevent conflicts before they escalate',
          icon: 'Shield'
        },
        {
          sector: 'Medical',
          achievement: 'Universal healthcare AI deployment',
          impact: 'Provide quality healthcare access to 2B+ people',
          icon: 'HeartHandshake'
        },
        {
          sector: 'AI CAD',
          achievement: 'Sustainable design revolution',
          impact: 'Reduce global manufacturing waste by 50%',
          icon: 'Leaf'
        },
        {
          sector: 'Gaming',
          achievement: 'Educational metaverse platform',
          impact: 'Transform learning for 100M+ students globally',
          icon: 'GraduationCap'
        }
      ],
      convergencePoints: [
        'Lunar construction techniques improve Earth-based medical facilities',
        'Educational gaming platforms train next-generation engineers',
        'Sustainable design principles optimize space mission resource usage'
      ]
    },
    2029: {
      year: '2029',
      title: 'Convergence Mastery',
      theme: 'Unified Innovation',
      color: 'from-cyan-500 to-blue-600',
      milestones: [
        {
          sector: 'Aerospace',
          achievement: 'Interplanetary internet infrastructure',
          impact: 'Connect Earth, Moon, and Mars with quantum communications',
          icon: 'Wifi'
        },
        {
          sector: 'Defense',
          achievement: 'Space-based defense platform',
          impact: 'Protect Earth from asteroid threats and space debris',
          icon: 'Zap'
        },
        {
          sector: 'Medical',
          achievement: 'Longevity enhancement breakthrough',
          impact: 'Extend healthy human lifespan by 20+ years',
          icon: 'Clock'
        },
        {
          sector: 'AI CAD',
          achievement: 'Self-evolving design systems',
          impact: 'AI systems that improve themselves continuously',
          icon: 'RefreshCw'
        },
        {
          sector: 'Gaming',
          achievement: 'Consciousness simulation platform',
          impact: 'Create truly sentient AI companions and characters',
          icon: 'Brain'
        }
      ],
      convergencePoints: [
        'Space-based manufacturing uses gaming AI for quality control',
        'Medical longevity research enhances astronaut mission capabilities',
        'Defense platforms protect critical space-based infrastructure'
      ]
    },
    2030: {
      year: '2030',
      title: 'New Universe Unlocked',
      theme: 'Paradigm Transformation',
      color: 'from-violet-500 to-purple-600',
      milestones: [
        {
          sector: 'Aerospace',
          achievement: 'First human settlement on Mars',
          impact: 'Establish humanity as a multi-planetary species',
          icon: 'Rocket'
        },
        {
          sector: 'Defense',
          achievement: 'Global conflict elimination system',
          impact: 'Achieve unprecedented global peace through AI mediation',
          icon: 'Heart'
        },
        {
          sector: 'Medical',
          achievement: 'Disease eradication platform',
          impact: 'Eliminate major diseases through AI-designed treatments',
          icon: 'Shield'
        },
        {
          sector: 'AI CAD',
          achievement: 'Reality design interface',
          impact: 'Design and modify physical reality at molecular level',
          icon: 'Atom'
        },
        {
          sector: 'Gaming',
          achievement: 'Consciousness transfer technology',
          impact: 'Enable human consciousness to exist in digital realms',
          icon: 'Upload'
        }
      ],
      convergencePoints: [
        'All technologies converge to enable human transcendence',
        'Physical and digital realities become indistinguishable',
        'Ancient wisdom principles guide advanced technological integration'
      ]
    }
  };

  const sectorColors = {
    'Aerospace': 'bg-blue-500',
    'Defense': 'bg-red-500',
    'Medical': 'bg-green-500',
    'AI CAD': 'bg-purple-500',
    'Gaming': 'bg-yellow-500'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Vision 2030: Unlocking The New Technological Universe
        </h2>
        <p className="text-1xl text-gray-300 max-w-2xl mx-auto mb-6">
          Interactive timeline showing our planned technological convergence and milestone achievements from 2025 to 2030
        </p>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-center mb-10">
        <div className="bg-surface/20 backdrop-blur-sm rounded-lg p-2">
          <button
            onClick={() => setViewMode('timeline')}
            className={`px-6 py-2 inline-flex items-center rounded-lg font-semibold transition-all duration-300 ${
              viewMode === 'timeline' ?'bg-accent text-deep-space' :'text-white hover:bg-white/10'
            }`}
          >
            <Icon name="Calendar" size={16} className="mr-2"/>
            Timeline View
          </button>
          <button
            onClick={() => setViewMode('convergence')}
            className={`px-6 py-2 inline-flex items-center rounded-lg font-semibold transition-all duration-300 ${
              viewMode === 'convergence' ?'bg-accent text-deep-space' :'text-white hover:bg-white/10'
            }`}
          >
            <Icon name="GitMerge" size={16} className="mr-2" />
            Convergence View
          </button>
        </div>
      </div>

      {/* Year Selection */}
      <div className="flex flex-wrap justify-center gap-5 mb-8">
        {Object.keys(visionData).map((year) => {
          const data = visionData[year];
          return (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`flex flex-col items-center px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                selectedYear === year
                  ? `bg-gradient-to-r ${data.color} text-white shadow-glow`
                  : 'bg-surface/20 backdrop-blur-sm text-white hover:bg-surface/30'
              }`}
            >
              <span className="text-2xl font-bold">{year}</span>
              <span className="text-sm opacity-90">{data.theme}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Year Content */}
      <div className="space-y-12">
        {Object.entries(visionData)
          .filter(([year]) => year === selectedYear)
          .map(([year, data]) => (
            <div key={year} className="space-y-8">
              {/* Year Header */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">{data.title}</h3>
                <p className="text-xl text-gray-300">{data.theme}</p>
              </div>

              {viewMode === 'timeline' ? (
                /* Timeline View */
                <div className="space-y-8">
                  {/* Sector Milestones */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    {data.milestones.map((milestone, index) => (
                      <div key={index} className="bg-surface/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 ${sectorColors[milestone.sector]} rounded-full flex items-center justify-center mr-4`}>
                            <Icon name={milestone.icon} size={20} color="white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">{milestone.sector}</h4>
                            <span className="text-sm text-gray-300">{milestone.achievement}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{milestone.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Convergence View */
                <div className="space-y-8">
                  {/* Convergence Points */}
                  <div className="bg-surface/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                    <h4 className="text-2xl font-bold text-white mb-6 text-center">
                      Technology Convergence Points
                    </h4>
                    <div className="space-y-4">
                      {data.convergencePoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Icon name="GitMerge" size={16} color="white" />
                          </div>
                          <p className="text-gray-300 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sector Integration Diagram */}
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <div className="relative w-80 h-80">
                        {/* Center Hub */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-accent to-quantum-purple rounded-full flex items-center justify-center shadow-glow z-10">
                          <Icon name="Zap" size={24} color="white" />
                        </div>

                        {/* Sector Nodes */}
                        {data.milestones.map((milestone, index) => {
                          const angle = (index * 72) - 90; // 360/5 = 72 degrees apart
                          const radius = 120;
                          const x = Math.cos(angle * Math.PI / 180) * radius;
                          const y = Math.sin(angle * Math.PI / 180) * radius;

                          return (
                            <div
                              key={index}
                              className="absolute transform -translate-x-1/2 -translate-y-1/2"
                              style={{
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`
                              }}
                            >
                              <div className={`w-16 h-16 ${sectorColors[milestone.sector]} rounded-full flex items-center justify-center shadow-elevation`}>
                                <Icon name={milestone.icon} size={20} color="white" />
                              </div>
                              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
                                <p className="text-sm font-semibold text-white whitespace-nowrap">
                                  {milestone.sector}
                                </p>
                              </div>

                              {/* Connection Line */}
                              <div 
                                className="absolute w-0.5 bg-gradient-to-r from-accent to-white opacity-50"
                                style={{
                                  height: `${radius - 50}px`,
                                  left: '50%',
                                  top: '50%',
                                  transformOrigin: 'top center',
                                  transform: `translateX(-50%) rotate(${angle + 180}deg)`
                                }}
                              ></div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>

      {/* Future Impact Summary */}
      <div className="mt-16 bg-surface/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            The New Universe We're Unlocking
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            By 2030, the convergence of our five technology sectors will fundamentally transform 
            human civilization, creating new possibilities that seemed impossible just a decade earlier.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Infinity" size={24} color="white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Infinite Possibilities</h4>
              <p className="text-gray-300">Technology convergence creates exponential opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-quantum-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={24} color="white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Global Transformation</h4>
              <p className="text-gray-300">Solutions that address humanity's greatest challenges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-plasma-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={24} color="white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Human Transcendence</h4>
              <p className="text-gray-300">Unlocking new levels of human potential and capability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionTimeline;