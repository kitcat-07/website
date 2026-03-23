import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import TimelineSection from './components/TimelineSection';
import InvestmentPhase from './components/InvestmentPhase';

const RoadmapFutureVisionPortal = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedSector, setSelectedSector] = useState('all');
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);

  const roadmapData = [
    {
      year: 2025,
      title: "Foundation & Launch Phase",
      description: "Establishing core infrastructure and launching initial products across all sectors",
      sectors: {
        aerospace: {
          milestones: ["Drone prototype completion", "Flight testing certification", "First commercial partnerships"],
          investment: "$2.5M",
          partnerships: ["Defense contractors", "Agricultural tech companies"]
        },
        defense: {
          milestones: ["Security system MVP", "Government pilot programs", "Compliance certifications"],
          investment: "$3.2M",
          partnerships: ["Government agencies", "Security firms"]
        },
        medical: {
          milestones: ["Surgical robot prototype", "Clinical trial approvals", "Hospital partnerships"],
          investment: "$4.1M",
          partnerships: ["Medical institutions", "Healthcare providers"]
        },
        ai: {
          milestones: ["CAD platform beta", "AI model optimization", "Industry integrations"],
          investment: "$2.8M",
          partnerships: ["Engineering firms", "Software companies"]
        },
        gaming: {
          milestones: ["VR platform launch", "Gaming studio partnerships", "Hardware prototypes"],
          investment: "$3.5M",
          partnerships: ["Gaming studios", "Hardware manufacturers"]
        }
      },
      convergencePoints: [
        "AI-powered drone navigation systems",
        "VR-based medical training platforms"
      ],
      totalInvestment: "$16.1M",
      expectedROI: "25-30%"
    },
    {
      year: 2026,
      title: "Market Penetration & Scaling",
      description: "Expanding market presence and scaling successful products with strategic partnerships",
      sectors: {
        aerospace: {
          milestones: ["Commercial drone fleet deployment", "International market entry", "Advanced autopilot systems"],
          investment: "$5.2M",
          partnerships: ["International distributors", "Logistics companies"]
        },
        defense: {
          milestones: ["Multi-tier security solutions", "Export license acquisition", "Advanced threat detection"],
          investment: "$6.8M",
          partnerships: ["International defense contractors", "Cybersecurity firms"]
        },
        medical: {
          milestones: ["FDA approval processes", "Robotic surgery commercialization", "Telemedicine integration"],
          investment: "$8.5M",
          partnerships: ["Global hospital networks", "Medical device companies"]
        },
        ai: {
          milestones: ["Enterprise CAD solutions", "Machine learning optimization", "Cloud platform scaling"],
          investment: "$4.7M",
          partnerships: ["Enterprise clients", "Cloud providers"]
        },
        gaming: {
          milestones: ["AAA game development", "Esports platform launch", "Hardware manufacturing"],
          investment: "$7.3M",
          partnerships: ["Major gaming publishers", "Esports organizations"]
        }
      },
      convergencePoints: [
        "AI-enhanced medical robotics",
        "Defense-grade gaming hardware",
        "Aerospace simulation gaming"
      ],
      totalInvestment: "$32.5M",
      expectedROI: "35-40%"
    },
    {
      year: 2027,
      title: "Innovation Breakthrough Phase",
      description: "Achieving major technological breakthroughs and establishing market leadership",
      sectors: {
        aerospace: {
          milestones: ["Autonomous aircraft systems", "Space technology development", "Green propulsion research"],
          investment: "$8.7M",
          partnerships: ["Space agencies", "Environmental tech companies"]
        },
        defense: {
          milestones: ["AI-powered defense systems", "Quantum encryption technology", "Autonomous security platforms"],
          investment: "$12.3M",
          partnerships: ["Military research institutions", "Quantum computing companies"]
        },
        medical: {
          milestones: ["Nano-robotics development", "AI diagnostic systems", "Personalized medicine platforms"],
          investment: "$15.6M",
          partnerships: ["Pharmaceutical companies", "Research hospitals"]
        },
        ai: {
          milestones: ["Quantum-enhanced AI models", "Real-time design optimization", "Predictive engineering systems"],
          investment: "$9.4M",
          partnerships: ["Tech giants", "Research universities"]
        },
        gaming: {
          milestones: ["Neural interface gaming", "Metaverse platform development", "Haptic feedback systems"],
          investment: "$11.8M",
          partnerships: ["Tech companies", "Entertainment conglomerates"]
        }
      },
      convergencePoints: [
        "Quantum-powered medical diagnostics",
        "Neural gaming interfaces for therapy",
        "AI-driven aerospace design optimization"
      ],
      totalInvestment: "$57.8M",
      expectedROI: "45-50%"
    },
    {
      year: 2028,
      title: "Global Expansion & Dominance",
      description: "Establishing global market presence and technological dominance across sectors",
      sectors: {
        aerospace: {
          milestones: ["Global drone network deployment", "Commercial space ventures", "Sustainable aviation solutions"],
          investment: "$15.2M",
          partnerships: ["International airlines", "Space exploration companies"]
        },
        defense: {
          milestones: ["Global security network", "Advanced warfare systems", "Peacekeeping technologies"],
          investment: "$22.7M",
          partnerships: ["NATO allies", "UN peacekeeping forces"]
        },
        medical: {
          milestones: ["Global healthcare network", "Robotic surgery standardization", "AI-powered drug discovery"],
          investment: "$28.9M",
          partnerships: ["WHO", "Global pharmaceutical networks"]
        },
        ai: {
          milestones: ["Universal design platform", "Quantum computing integration", "Autonomous engineering systems"],
          investment: "$18.5M",
          partnerships: ["Global engineering firms", "Quantum computing leaders"]
        },
        gaming: {
          milestones: ["Global metaverse platform", "Neural gaming standardization", "Entertainment ecosystem"],
          investment: "$24.3M",
          partnerships: ["Global entertainment companies", "Social media platforms"]
        }
      },
      convergencePoints: [
        "Global AI-powered healthcare network",
        "Quantum-enhanced defense systems",
        "Metaverse-based professional training"
      ],
      totalInvestment: "$109.6M",
      expectedROI: "55-60%"
    },
    {
      year: 2029,
      title: "Technological Singularity Preparation",
      description: "Preparing for and leading the next wave of technological evolution",
      sectors: {
        aerospace: {
          milestones: ["Interplanetary transportation", "Zero-emission flight systems", "Space colonization support"],
          investment: "$25.8M",
          partnerships: ["Space colonization companies", "Environmental organizations"]
        },
        defense: {
          milestones: ["Predictive threat prevention", "Quantum-secured communications", "Autonomous peacekeeping"],
          investment: "$35.4M",
          partnerships: ["Global security alliances", "Quantum technology leaders"]
        },
        medical: {
          milestones: ["Regenerative medicine platforms", "Consciousness-machine interfaces", "Longevity enhancement systems"],
          investment: "$42.7M",
          partnerships: ["Longevity research institutes", "Biotech companies"]
        },
        ai: {
          milestones: ["Artificial General Intelligence", "Quantum-biological computing", "Universal problem-solving systems"],
          investment: "$38.2M",
          partnerships: ["AGI research consortiums", "Quantum biology labs"]
        },
        gaming: {
          milestones: ["Reality-indistinguishable experiences", "Consciousness uploading platforms", "Digital immortality systems"],
          investment: "$31.9M",
          partnerships: ["Consciousness research institutes", "Digital reality companies"]
        }
      },
      convergencePoints: [
        "AGI-powered universal problem solving",
        "Quantum-biological medical systems",
        "Consciousness-machine gaming interfaces"
      ],
      totalInvestment: "$174.0M",
      expectedROI: "70-80%"
    },
    {
      year: 2030,
      title: "New Universe Unlocked",
      description: "Achieving the ultimate vision of unlocking new dimensions of human potential",
      sectors: {
        aerospace: {
          milestones: ["Faster-than-light communication", "Dimensional travel research", "Universal transportation network"],
          investment: "$45.6M",
          partnerships: ["Theoretical physics institutes", "Advanced propulsion companies"]
        },
        defense: {
          milestones: ["Dimensional security systems", "Quantum threat prevention", "Universal peace maintenance"],
          investment: "$52.3M",
          partnerships: ["Interdimensional research groups", "Universal security alliances"]
        },
        medical: {
          milestones: ["Cellular regeneration mastery", "Consciousness preservation", "Universal health optimization"],
          investment: "$68.9M",
          partnerships: ["Consciousness research centers", "Universal health organizations"]
        },
        ai: {
          milestones: ["Universal intelligence network", "Reality manipulation systems", "Omniscient problem solving"],
          investment: "$59.7M",
          partnerships: ["Universal intelligence consortiums", "Reality research institutes"]
        },
        gaming: {
          milestones: ["Universal experience platforms", "Reality creation systems", "Infinite possibility engines"],
          investment: "$47.2M",
          partnerships: ["Reality creation companies", "Infinite possibility research groups"]
        }
      },
      convergencePoints: [
        "Universal intelligence-powered reality manipulation",
        "Consciousness-preserving medical systems",
        "Dimensional travel gaming experiences"
      ],
      totalInvestment: "$273.7M",
      expectedROI: "100%+"
    }
  ];

  const sectorColors = {
    aerospace: "from-blue-500 to-cyan-400",
    defense: "from-red-500 to-orange-400",
    medical: "from-green-500 to-emerald-400",
    ai: "from-purple-500 to-violet-400",
    gaming: "from-pink-500 to-rose-400",
    all: "from-primary to-secondary"
  };

  const sectorIcons = {
    aerospace: "Plane",
    defense: "Shield",
    medical: "Heart",
    ai: "Brain",
    gaming: "Gamepad2"
  };

  const riskMitigationStrategies = [
    {
      risk: "Technology Development Delays",
      mitigation: "Parallel development tracks with fallback solutions and agile methodology implementation",
      probability: "Medium",
      impact: "High"
    },
    {
      risk: "Market Competition",
      mitigation: "Continuous innovation cycles and strategic patent portfolio development",
      probability: "High",
      impact: "Medium"
    },
    {
      risk: "Regulatory Challenges",
      mitigation: "Early engagement with regulatory bodies and compliance-first development approach",
      probability: "Medium",
      impact: "High"
    },
    {
      risk: "Funding Shortfalls",
      mitigation: "Diversified funding sources and milestone-based investment structure",
      probability: "Low",
      impact: "High"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const yearElements = document.querySelectorAll('[data-year]');
      
      yearElements.forEach((element) => {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        
        if (scrollPosition >= elementTop - windowHeight / 2 && 
            scrollPosition < elementTop + elementHeight - windowHeight / 2) {
          const year = parseInt(element.getAttribute('data-year'));
          if (year !== selectedYear) {
            setSelectedYear(year);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedYear]);

  const scrollToYear = (year) => {
    const element = document.querySelector(`[data-year="${year}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-quantum-blue to-primary">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-space/90 to-primary/80"></div>
        
        {/* Quantum Animation Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animation-float"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-quantum-purple/10 rounded-full blur-2xl animation-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-plasma-orange/10 rounded-full blur-xl animation-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-surface/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Icon name="Telescope" size={20} className="text-accent" />
              <span className="text-white font-medium">Future Vision Portal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Roadmap to the
              <span className="text-6xl mb-12 block text-blue-400">New Universe</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Journey through our strategic timeline from 2025-2030, where breakthrough innovations 
              converge to unlock unprecedented human potential across aerospace, defense, medical robotics, AI and gaming.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <Link
                to="/portfolio-innovation-laboratory"
                className="inline-flex items-center btn-primary animation-quantum"
              >
                <Icon name="Beaker" size={20} className="mr-2" />
                Explore Innovation Lab
              </Link>
              <Link
                to="/contact-global-presence-hub"
                className="inline-flex items-center btn-secondary"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Join the Mission
              </Link>
            </div>
          </div>

          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-5 mb-10">
            {roadmapData.map((item) => (
              <button
                key={item.year}
                onClick={() => scrollToYear(item.year)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedYear === item.year
                    ? 'bg-accent text-deep-space shadow-glow'
                    : 'bg-surface/10 text-white hover:bg-surface/20'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Sector Filter */}
          <div className="flex flex-wrap justify-center gap-5 mb-15">
            <button
              onClick={() => setSelectedSector('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedSector === 'all' ?'bg-gradient-to-r from-primary to-secondary text-white' :'bg-surface/10 text-gray-300 hover:bg-surface/20'
              }`}
            >
              <Icon name="Globe" size={16} />
              <span>All Sectors</span>
            </button>
            {Object.entries(sectorIcons).map(([sector, icon]) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 capitalize ${
                  selectedSector === sector
                    ? `bg-gradient-to-r ${sectorColors[sector]} text-white`
                    : 'bg-surface/10 text-gray-300 hover:bg-surface/20'
                }`}
              >
                <Icon name={icon} size={16} />
                <span>{sector}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Sections */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-600 via-gray-600 to-gray-600 rounded-full hidden lg:block"></div>
            
            {roadmapData.map((yearData, index) => (
              <TimelineSection
                key={yearData.year}
                yearData={yearData}
                index={index}
                selectedSector={selectedSector}
                sectorColors={sectorColors}
                sectorIcons={sectorIcons}
                isSelected={selectedYear === yearData.year}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-16 bg-surface/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investment & Growth Projections
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic funding phases designed to maximize ROI while maintaining sustainable growth across all technology sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {roadmapData.map((yearData) => (
              <InvestmentPhase
                key={yearData.year}
                yearData={yearData}
                sectorColors={sectorColors}
              />
            ))}
          </div>

          {/* Total Investment Summary */}
          <div className="bg-surface/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">$663.7M</div>
                <div className="text-gray-300">Total Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-quantum-purple mb-2">100%+</div>
                <div className="text-gray-300">Peak ROI Expected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-plasma-orange mb-2">6 Years</div>
                <div className="text-gray-300">Timeline to Dominance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success mb-2">5 Sectors</div>
                <div className="text-gray-300">Technology Convergence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Risk Mitigation Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent planning with comprehensive risk assessment and mitigation strategies for sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskMitigationStrategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-surface/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{strategy.risk}</h3>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      strategy.probability === 'High' ? 'bg-error/20 text-error' :
                      strategy.probability === 'Medium'? 'bg-warning/20 text-warning' : 'bg-success/20 text-success'
                    }`}>
                      {strategy.probability}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      strategy.impact === 'High' ? 'bg-error/20 text-error' :
                      strategy.impact === 'Medium'? 'bg-warning/20 text-warning' : 'bg-success/20 text-success'
                    }`}>
                      {strategy.impact}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300">{strategy.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in unlocking the new universe. Whether you're an investor, partner, or visionary, 
            there's a place for you in our journey to transform human potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-global-presence-hub"
              className="inline-flex items-center btn-primary animation-quantum"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Partner with Us
            </Link>
            <Link
              to="/services-technology-sectors-universe"
              className="inline-flex items-center btn-secondary"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Explore Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadmapFutureVisionPortal;