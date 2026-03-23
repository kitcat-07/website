import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const MissionImpact = () => {
  const [selectedSector, setSelectedSector] = useState('aerospace');

  const impactData = {
    aerospace: {
      title: 'Aerospace Innovation',
      icon: 'Rocket',
      color: 'from-blue-500 to-indigo-600',
      challenge: 'Inefficient propulsion, fuel limitations, High launch costs, limited reusability & Navigation failures in extreme conditions',
      globalImpact: 'High capital loss, Barriers to space access for emerging nations, Safety risks in aerospace defense & transport',
      solution: '"Next-generation hybrid propulsion systems,AI-controlled flight and autonomous navigation, Reusable hypersonic-ready launch systems, Supersonic propulsion with real-time fault handling and enabling ultra-fast, safe & sustainable aerospace travel"',
                  
      metrics: [
        { label: 'Thrust Efficiency Boost', value: '500%', description: 'Revolutionizing aerospace travel with hybrid propulsion breakthroughs' },
        { label: 'Cost Reduction', value: '60%', description: 'Reduced mission costs via reusability and energy-optimized engines' },
        { label: 'Performance Enhancement', value: '80%', description: 'Increased payload capacity and speed with low-emission propulsion' },
        { label: 'Reliability Rate', value: '99.8%', description: 'AI-assisted systems ensuring near-perfect mission execution' }
      ],
      technologies: [
        'AI-Controlled Flight & Navigation Systems',
        'Reusable Hypersonic-Ready Launch Vehicles',
        'Next-Gen Supersonic Jet Engine Architectures',
        'Quantum-Aided Simulation & Sensor Fusion'
      ],
      timeline: '2025-2028: Prototype → Testing → Commercial Deployment'
    },
    defense: {
      title: 'Defense Systems',
      icon: 'Shield',
      color: 'from-red-500 to-orange-600',
      challenge: 'Slow detection of threats, decision delays, Outdated missile systems, intercept accuracy Cyber vulnerabilities in aerospace platforms',
      globalImpact: 'Increased risk of cross-border attacks, Weak national defense resilience & Growing threat from autonomous drone warfare.',
      solution: '"AI-Powered Threat Detection Systems, Precision-targeted defense drones & smart missiles & Integrated threat intelligence with rapid response"',
      metrics: [
        { label: 'Threat Detection', value: '99.9%', description: 'AI-powered early warning systems' },
        { label: 'Response Time', value: '85%', description: 'Faster than traditional systems' },
        { label: 'Civilian Safety', value: '95%', description: 'Improved precision and reduced collateral impact' },
        { label: 'Cost Efficiency', value: '60%', description: 'Autonomous systems reduce operational costs' }
      ],
      technologies: [
        'Autonomous Surveillance Drones',
        'Predictive Threat Analysis AI',
        'Quantum Encryption for Secure Defense Networks',
        'Smart Border Security Systems'
      ],
      timeline: '2025-2028: Development → Field Testing → Strategic Deployment'
    },
    medical: {
      title: 'Medical Robotics',
      icon: 'Heart',
      color: 'from-green-500 to-teal-600',
      challenge: 'Surgical errors-limitations in human precision-Delays in emergency operations & Accessibility of top-tier medical procedures',
      globalImpact: '3.5B people lack access to quality healthcare',
      solution: '"We are developing precision robotics for micro-level surgery, enhanced by AI-assisted diagnosis and surgical planning, integrated with AR/VR for real-time operations and advanced medical training."',
      metrics: [
        { label: 'Surgical Precision', value: '99.7%', description: 'Robotic-assisted surgery accuracy' },
        { label: 'Recovery Time', value: '50%', description: 'Faster patient recovery with minimally invasive procedures' },
        { label: 'Healthcare Access', value: '400%', description: 'Telemedicine platform reach expansion' },
        { label: 'Cost Reduction', value: '65%', description: 'Automated diagnostics and treatment planning' }
      ],
      technologies: [
        'AI-Powered Surgical Robots',
        'Remote Surgery Platforms',
        'Diagnostic AI Systems',
        'Rehabilitation Robotics'
      ],
      timeline: '2025-2029: Clinical Trials → Regulatory Approval → Global Deployment'
    },
    ai: {
      title: 'AI CAD Systems',
      icon: 'Brain',
      color: 'from-purple-500 to-pink-600',
      challenge: 'Design & Engineering Efficiency',
      globalImpact: '80% of engineering time spent on repetitive design tasks',
      solution: 'Generative AI systems that automate complex design processes, Automated error detection and design optimization & Real-time prototyping previews with simulation',
      metrics: [
        { label: 'Design Speed', value: '1000%', description: 'Faster concept to prototype cycles' },
        { label: 'Innovation Rate', value: '300%', description: 'More design iterations and optimizations' },
        { label: 'Error Reduction', value: '95%', description: 'AI-validated designs minimize human error' },
        { label: 'Resource Efficiency', value: '70%', description: 'Optimized material usage and manufacturing' }
      ],
      technologies: [
        'Generative Design AI',
        'Automated Testing Simulations',
        'Real-Time Physics-Based Simulation Engines',
        'Cross-Domain Optimization',
        'Voice-Controlled Modeling Interfaces'
      ],
      timeline: '2024-2026: Beta Testing → Industry Integration → Global Licensing'
    },
    gaming: {
      title: 'Gameverse Platform',
      icon: 'Gamepad2',
      color: 'from-yellow-500 to-red-600',
      challenge: '"Today’s games lack realism, have high latency, and offer little emotional or neural interaction."',
      globalImpact: '3.2B gamers seeking more immersive experiences',
      solution: '"We’re building hyper-real AR/VR games that adapt to players and respond to emotions and brain signals."',
      metrics: [
        { label: 'Immersion Level', value: '500%', description: 'Enhanced virtual reality and AI interactions' },
        { label: 'Content Generation', value: '∞', description: 'Unlimited AI-generated game worlds and scenarios' },
        { label: 'Player Engagement', value: '250%', description: 'Personalized gaming experiences increase retention' },
        { label: 'Development Speed', value: '400%', description: 'AI-assisted game development and testing' }
      ],
      technologies: [
        'Neural-Responsive Gaming Interfaces',
        'Immersive VR/AR Experiences',
        'Intelligent NPCs and Storylines',
        'Cross-Platform Gaming Ecosystem',
        'Haptic Suits & Multi-Sensory Feedback Systems'
      ],
      timeline: '2024-2027: Alpha Release → Community Building → Global Launch'
    }
  };

  const sectors = Object.keys(impactData);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
          Mission Impact Visualization
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          How each technology sector addresses specific global challenges through convergent innovation
        </p>
      </div>

      {/* Sector Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {sectors.map((sector) => {
          const data = impactData[sector];
          return (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedSector === sector
                  ? `bg-gradient-to-r ${data.color} text-white shadow-elevation`
                  : 'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary'
              }`}
            >
              <Icon name={data.icon} size={20} />
              <span>{data.title}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Sector Impact */}
      <div className="space-y-12">
        {sectors
          .filter(sector => sector === selectedSector)
          .map(sector => {
            const data = impactData[sector];
            return (
              <div key={sector} className="space-y-8">
                {/* Challenge & Solution Overview */}
                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="card">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${data.color} rounded-full flex items-center justify-center mr-4`}>
                        <Icon name="AlertTriangle" size={20} color="white" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">Global Challenge</h3>
                    </div>
                    <h4 className="text-lg font-semibold text-text-primary mb-3">{data.challenge}</h4>
                    <p className="text-2xl font-bold text-error mb-4">{data.globalImpact}</p>
                    <p className="text-text-secondary">
                     This reflects one of humanity’s critical challenges—demanding next-generation engineering breakthroughs to redefine aerospace and defense innovation
                    </p>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${data.color} rounded-full flex items-center justify-center mr-4`}>
                        <Icon name="Lightbulb" size={20} color="white" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">Our Solution</h3>
                    </div>
                    <p className="text-lg text-text-primary mb-4">{data.solution}</p>
                    <div className="p-4 bg-success-50 rounded-lg border-l-4 border-success">
                      <p className="text-sm text-success font-semibold">Timeline: {data.timeline}</p>
                    </div>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="card">
                  <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
                    Projected Impact Metrics
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.metrics.map((metric, index) => (
                      <div key={index} className="text-center p-6 bg-primary-50 rounded-lg">
                        <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                        <h4 className="text-lg font-semibold text-text-primary mb-2">{metric.label}</h4>
                        <p className="text-sm text-text-secondary">{metric.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Timeline */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="card">
                    <h3 className="text-xl font-bold text-text-primary mb-6">Core Technologies</h3>
                    <div className="space-y-3">
                      {data.technologies.map((tech, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-surface rounded-lg border border-border-light">
                          <Icon name="Zap" size={16} className="text-primary flex-shrink-0" />
                          <span className="text-text-primary font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-xl font-bold text-text-primary mb-6">Development Roadmap</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-text-primary">Research & Development</p>
                          <p className="text-sm text-text-secondary">Core technology development and validation</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-4 h-4 bg-secondary rounded-full flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-text-primary">Prototype & Testing</p>
                          <p className="text-sm text-text-secondary">Real-world testing and optimization</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-4 h-4 bg-accent rounded-full flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-text-primary">Market Deployment</p>
                          <p className="text-sm text-text-secondary">Commercial launch and global scaling</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Global Impact Summary */}
      <div className="mt-16 card bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-6">
            Convergent Innovation Impact
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-3xl mx-auto">
            By developing technologies across multiple sectors simultaneously, we create synergistic effects 
            that amplify the impact of each individual innovation. This convergent approach allows us to 
            address interconnected global challenges more effectively than isolated solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <p className="text-text-primary font-semibold">Technology Sectors</p>
              <p className="text-sm text-text-secondary">Simultaneous innovation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">10B+</div>
              <p className="text-text-primary font-semibold">People Impacted</p>
              <p className="text-sm text-text-secondary">Global reach potential</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">∞</div>
              <p className="text-text-primary font-semibold">Possibilities Unlocked</p>
              <p className="text-sm text-text-secondary">Through convergent innovation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionImpact;