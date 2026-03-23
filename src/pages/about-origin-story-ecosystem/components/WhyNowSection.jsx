import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const WhyNowSection = () => {
  const [selectedAdvantage, setSelectedAdvantage] = useState('timing');

  const marketContext = {
    timing: {
      title: 'Perfect Market Timing',
      icon: 'Clock',
      color: 'from-blue-500 to-indigo-600',
      description: 'Convergence of multiple technology trends creates unprecedented opportunities',
      factors: [
        {
          trend: 'AI Revolution',
          impact: 'Enabling intelligent automation across all sectors',
          timeline: '2025-2030',
          opportunity: '$15.7T global economic impact'
        },
        {
          trend: 'Space Economy Boom',
          impact: 'Commercial space industry reaching maturity',
          timeline: '2025-2035',
          opportunity: '$1T space economy by 2040'
        },
        {
          trend: 'Healthcare Digitization',
          impact: 'Accelerated adoption of robotic and AI solutions',
          timeline: '2025-2030',
          opportunity: '$659B digital health market'
        },
        {
          trend: 'Gaming Metaverse',
          impact: 'Virtual worlds becoming mainstream platforms',
          timeline: '2025-2030',
          opportunity: '$800B metaverse economy'
        }
      ]
    },
    ecosystem: {
      title: 'Indian Deep-Tech Ecosystem',
      icon: 'MapPin',
      color: 'from-orange-500 to-red-600',
      description: 'India emerging as global deep-tech innovation hub with unique advantages',
      factors: [
        {
          trend: 'Talent Pool',
          impact: 'World\'s largest STEM graduate population',
          timeline: 'Current',
          opportunity: '2.6M STEM graduates annually'
        },
        {
          trend: 'Government Support',
          impact: 'Strategic initiatives for deep-tech development',
          timeline: '2024-2030',
          opportunity: '$10B+ government investment'
        },
        {
          trend: 'Cost Advantage',
          impact: 'R&D costs 60-70% lower than Silicon Valley',
          timeline: 'Ongoing',
          opportunity: '3-5x development efficiency'
        },
        {
          trend: 'Cultural Innovation',
          impact: 'Ancient wisdom traditions enhancing problem-solving',
          timeline: 'Timeless',
          opportunity: 'Unique competitive differentiation'
        }
      ]
    },
    convergence: {
      title: 'Technology Convergence',
      icon: 'GitMerge',
      color: 'from-purple-500 to-pink-600',
      description: 'Multiple technologies reaching maturity simultaneously enables breakthrough innovations',
      factors: [
        {
          trend: 'Quantum Computing',
          impact: 'Solving previously impossible computational problems',
          timeline: '2026-2030',
          opportunity: '$850B quantum advantage'
        },
        {
          trend: 'Advanced Materials',
          impact: 'Enabling new possibilities in aerospace and medical devices',
          timeline: '2026-2030',
          opportunity: '$315B advanced materials market'
        },
        {
          trend: 'Edge Computing',
          impact: 'Real-time processing for autonomous systems',
          timeline: '2026-2028',
          opportunity: '$250B edge computing market'
        },
        {
          trend: 'Biotechnology Integration',
          impact: 'Bio-tech convergence with robotics and AI',
          timeline: '2026-2033',
          opportunity: '$2.4T bioeconomy potential'
        }
      ]
    },
    competition: {
      title: 'Competitive Landscape',
      icon: 'Target',
      color: 'from-green-500 to-teal-600',
      description: 'Market gaps and opportunities where convergent innovation provides decisive advantages',
      factors: [
        {
          trend: 'Sector Silos',
          impact: 'Competitors focus on single domains, missing synergies',
          timeline: 'Current',
          opportunity: 'First-mover advantage in convergence'
        },
        {
          trend: 'Innovation Speed',
          impact: 'Traditional companies too slow for rapid tech evolution',
          timeline: 'Ongoing',
          opportunity: '10x faster innovation cycles'
        },
        {
          trend: 'Cultural Barriers',
          impact: 'Western companies lack systems thinking perspective',
          timeline: 'Structural',
          opportunity: 'Unique problem-solving approaches'
        },
        {
          trend: 'Resource Constraints',
          impact: 'High costs limiting experimentation in developed markets',
          timeline: 'Economic',
          opportunity: 'Lean innovation methodology'
        }
      ]
    }
  };

  const globalTrends = [
    {
      category: 'Technology Maturity',
      percentage: 85,
      description: 'Core technologies reaching commercial viability',
      color: 'bg-blue-500'
    },
    {
      category: 'Market Readiness',
      percentage: 78,
      description: 'Global markets prepared for deep-tech solutions',
      color: 'bg-green-500'
    },
    {
      category: 'Investment Climate',
      percentage: 92,
      description: 'Record levels of deep-tech investment available',
      color: 'bg-purple-500'
    },
    {
      category: 'Talent Availability',
      percentage: 88,
      description: 'Skilled workforce ready for complex challenges',
      color: 'bg-orange-500'
    }
  ];

  const competitiveAnalysis = [
    {
      company: 'Traditional Aerospace',
      sectors: ['Aerospace'],
      approach: 'Single-sector focus',
      limitation: 'Limited cross-pollination',
      ourAdvantage: 'Multi-sector synergies'
    },
    {
      company: 'Medical Device Giants',
      sectors: ['Medical'],
      approach: 'Incremental innovation',
      limitation: 'Slow adaptation cycles',
      ourAdvantage: 'Rapid convergent development'
    },
    {
      company: 'Defense Contractors',
      sectors: ['Defense'],
      approach: 'Government-dependent',
      limitation: 'Risk-averse culture',
      ourAdvantage: 'Agile innovation methodology'
    },
    {
      company: 'Gaming Studios',
      sectors: ['Gaming'],
      approach: 'Entertainment-focused',
      limitation: 'Limited real-world application',
      ourAdvantage: 'Cross-sector technology transfer'
    },
    {
      company: 'AI Companies',
      sectors: ['AI/Software'],
      approach: 'Software-centric',
      limitation: 'Lack of hardware integration',
      ourAdvantage: 'Full-stack innovation'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
          Why Now? The Perfect Storm
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Understanding the unique convergence of factors that make this the ideal moment for Tech-Mystrix's emergence
        </p>
      </div>

      {/* Market Context Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(marketContext).map(([key, context]) => (
          <button
            key={key}
            onClick={() => setSelectedAdvantage(key)}
            className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedAdvantage === key
                ? `bg-gradient-to-r ${context.color} text-white shadow-elevation`
                : 'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary'
            }`}
          >
            <Icon name={context.icon} size={20} />
            <span>{context.title}</span>
          </button>
        ))}
      </div>

      {/* Selected Context Details */}
      <div className="mb-16">
        {Object.entries(marketContext)
          .filter(([key]) => key === selectedAdvantage)
          .map(([key, context]) => (
            <div key={key} className="space-y-8">
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${context.color} rounded-full flex items-center justify-center mr-6`}>
                    <Icon name={context.icon} size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">{context.title}</h3>
                    <p className="text-lg text-text-secondary">{context.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {context.factors.map((factor, index) => (
                    <div key={index} className="p-6 bg-primary-50 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-text-primary">{factor.trend}</h4>
                        <span className="text-sm font-medium text-primary bg-white px-3 py-1 rounded-full">
                          {factor.timeline}
                        </span>
                      </div>
                      <p className="text-text-secondary mb-4">{factor.impact}</p>
                      <div className="p-3 bg-success-50 rounded-lg border-l-4 border-success">
                        <p className="text-sm font-semibold text-success">{factor.opportunity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Global Readiness Indicators */}
      <div className="mb-16">
        <div className="card">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Global Readiness Indicators
          </h3>
          <div className="space-y-6">
            {globalTrends.map((trend, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-text-primary">{trend.category}</span>
                  <span className="text-lg font-bold text-primary">{trend.percentage}%</span>
                </div>
                <div className="w-full bg-border-light rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${trend.color} transition-all duration-1000`}
                    style={{ width: `${trend.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-text-secondary">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitive Landscape Analysis */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Competitive Landscape Analysis
          </h3>
          <p className="text-lg text-text-secondary">
            How our convergent approach creates decisive competitive advantages
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-surface rounded-lg shadow-subtle">
            <thead>
              <tr className="bg-primary-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Competitor Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Focus Areas</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Approach</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Key Limitation</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Our Advantage</th>
              </tr>
            </thead>
            <tbody>
              {competitiveAnalysis.map((competitor, index) => (
                <tr key={index} className="border-t border-border-light hover:bg-primary-50/50 transition-colors duration-300">
                  <td className="px-6 py-4 text-sm font-medium text-text-primary">{competitor.company}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {competitor.sectors.map((sector, sIndex) => (
                        <span key={sIndex} className="px-2 py-1 bg-secondary-100 text-secondary text-xs rounded-full">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">{competitor.approach}</td>
                  <td className="px-6 py-4 text-sm text-error">{competitor.limitation}</td>
                  <td className="px-6 py-4 text-sm text-success font-medium">{competitor.ourAdvantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategic Positioning */}
      <div className="card bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-sky-500 mb-4">Our Strategic Position</h3>
          <p className="text-lg opacity-90">
            Positioned at the intersection of multiple high-growth markets with unique competitive advantages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Target" size={24} color="white" />
            </div>
            <h4 className="text-lg text-sky-500 font-semibold mb-2">Market Position</h4>
            <p className="opacity-90">First-mover advantage in convergent deep-tech innovation</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-quantum-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} color="white" />
            </div>
            <h4 className="text-lg text-sky-500 font-semibold mb-2">Innovation Speed</h4>
            <p className="opacity-90">10x faster development through cross-sector synergies</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-plasma-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Globe" size={24} color="white" />
            </div>
            <h4 className="text-lg text-sky-500 font-semibold mb-2">Global Reach</h4>
            <p className="opacity-90">Indian wisdom + global ambition = unique market approach</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Icon name="TrendingUp" size={24} className="mr-3" />
            <h4 className="text-lg font-semibold">Market Opportunity</h4>
          </div>
          <p className="text-lg mb-4">
            Combined addressable market across our five sectors exceeds <span className="font-bold text-accent">$5 Trillion</span> by 2030
          </p>
          <div className="grid grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-accent">$1T</div>
              <div className="text-sm opacity-90">Space</div>
            </div>
            <div>
              <div className="text-xl font-bold text-accent">$2.4T</div>
              <div className="text-sm opacity-90">Defense</div>
            </div>
            <div>
              <div className="text-xl font-bold text-accent">$659B</div>
              <div className="text-sm opacity-90">Medical</div>
            </div>
            <div>
              <div className="text-xl font-bold text-accent">$15.7T</div>
              <div className="text-sm opacity-90">AI Impact</div>
            </div>
            <div>
              <div className="text-xl font-bold text-accent">$800B</div>
              <div className="text-sm opacity-90">Gaming</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyNowSection;