import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const TechnologyTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const convergencePhases = [
    {
      id: 0,
      year: '2024-2025',
      title: 'Foundation Phase',
      description: 'Establishing core technologies and initial prototypes across all five sectors',
      achievements: [
        'Advanced propulsion prototype development',
        'AI-powered defense system architecture',
        'Medical robotics precision testing',
        'Generative CAD model training',
        'Immersive gaming engine creation'
      ],
      icon: 'Rocket',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 1,
      year: '2025-2026',
      title: 'Integration Phase',
      description: 'Cross-sector technology convergence and synergy development',
      achievements: [
        'AI systems integration across sectors',
        'Shared quantum computing infrastructure',
        'Cross-platform data analytics',
        'Unified user experience design',
        'Strategic partnership formations'
      ],
      icon: 'Zap',
      color: 'from-purple-500 to-pink-400'
    },
    {
      id: 2,
      year: '2026-2027',
      title: 'Acceleration Phase',
      description: 'Rapid scaling and market deployment of integrated solutions',
      achievements: [
        'Commercial product launches',
        'Global market expansion',
        'Advanced R&D initiatives',
        'Talent ecosystem development',
        'Innovation lab establishment'
      ],
      icon: 'TrendingUp',
      color: 'from-green-500 to-emerald-400'
    },
    {
      id: 3,
      year: '2027-2030',
      title: 'Transformation Phase',
      description: 'Industry leadership and paradigm-shifting innovations',
      achievements: [
        'Market category creation',
        'Global technology standards',
        'Ecosystem platform launch',
        'Next-gen breakthrough research',
        'Quantum leap achievements'
      ],
      icon: 'Crown',
      color: 'from-yellow-500 to-orange-400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-quantum-white to-gray-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-quantum-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15 relative z-10 ">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-11">
            Technology Convergence Timeline
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Witness how our five technology sectors interconnect and evolve to solve humanity's 
            biggest challenges through strategic convergence and quantum innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-quantum-purple mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-quantum-purple to-plasma-orange rounded-full hidden lg:block"></div>

          {/* Timeline Phases */}
          <div className="space-y-16 lg:space-y-24">
            {convergencePhases.map((phase, index) => (
              <div
                key={phase.id}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                onMouseEnter={() => setActivePhase(phase.id)}
              >
                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-elevation transition-all duration-300 ${
                    activePhase === phase.id ? 'scale-110 shadow-glow' : ''
                  }`}>
                    <Icon name={phase.icon} size={30} className="text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-6/12  ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className={`card transition-all mb-1 duration-500 ${
                    activePhase === phase.id ? 'shadow-elevation mb-0 scale-105' : ''
                  }`}>
                    {/* Mobile Timeline Node */}
                    <div className="lg:hidden flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center mr-4`}>
                        <Icon name={phase.icon} size={20} className="text-white" />
                      </div>
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {phase.year}
                      </span>
                    </div>

                    {/* Desktop Year Badge */}
                    <div className="hidden lg:block mb-8">
                      <span className="text-sm font-medium text-blue-900 bg-accent/10 px-3 py-1 rounded-full">
                        {phase.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-text-primary mb-3">
                      {phase.title}
                    </h3>
                    
                    <p className="text-text-secondary mb-5 leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Achievements List */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      {phase.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-text-secondary text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { label: 'Technology Sectors', value: '5+', icon: 'Layers' },
            { label: 'Innovation Years', value: '6+', icon: 'Calendar' },
            { label: 'Convergence Points', value: '15+', icon: 'GitMerge' },
            { label: 'Breakthrough Goals', value: '50+', icon: 'Target' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat.icon} size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyTimeline;