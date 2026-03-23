import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CompanyCulture = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [selectedProcess, setSelectedProcess] = useState('innovation');

  const cultureHighlights = [
    {
      id: 'collaboration',
      title: 'Cross-Sector Collaboration',
      description: 'Daily interactions between aerospace engineers, medical roboticists, AI researchers, and game developers',
      image: 'public/assets/images/defense.jpeg',
      stats: { teams: 'ℹ️15+', projects: '50+', disciplines: '8' }
    },
    {
      id: 'innovation',
      title: 'Innovation Labs',
      description: 'State-of-the-art facilities designed for rapid prototyping and breakthrough thinking',
      image: 'public/assets/images/defense.jpeg',
      stats: { labs: 'ℹ️5', prototypes: '200+', patents: '25+' }
    },
    {
      id: 'learning',
      title: 'Continuous Learning',
      description: 'Regular knowledge sharing sessions, technical workshops, and cross-training programs',
      image: 'public/assets/images/defense.jpeg',
      stats: { sessions: 'ℹ️100+', hours: '2000+', certifications: '150+' }
    },
    {
      id: 'diversity',
      title: 'Global Diversity',
      description: 'Team members from 12+ countries bringing diverse perspectives to problem-solving',
      image: 'public/assets/images/defense.jpeg',
      stats: { countries: 'ℹ️12+', languages: '20+', cultures: '15+' }
    }
  ];

  const innovationProcesses = {
    innovation: {
      title: 'Innovation Sprint Process',
      description: 'Our 5-day innovation sprint methodology for breakthrough thinking',
      steps: [
        {
          day: 'Day 1',
          title: 'Problem Definition',
          description: 'Cross-sector teams identify and frame complex challenges',
          icon: 'Target',
          activities: ['Stakeholder interviews', 'Problem mapping', 'Challenge prioritization']
        },
        {
          day: 'Day 2',
          title: 'Ideation & Exploration',
          description: 'Divergent thinking sessions with ancient wisdom integration',
          icon: 'Lightbulb',
          activities: ['Brainstorming sessions', 'Wisdom tradition research', 'Concept sketching']
        },
        {
          day: 'Day 3',
          title: 'Convergent Design',
          description: 'Synthesizing ideas into viable technical solutions',
          icon: 'Zap',
          activities: ['Solution synthesis', 'Technical feasibility', 'Resource planning']
        },
        {
          day: 'Day 4',
          title: 'Rapid Prototyping',
          description: 'Building working prototypes with available resources',
          icon: 'Wrench',
          activities: ['Prototype development', 'Initial testing', 'Iteration cycles']
        },
        {
          day: 'Day 5',
          title: 'Validation & Planning',
          description: 'Testing with stakeholders and planning next steps',
          icon: 'CheckCircle',
          activities: ['User testing', 'Feedback integration', 'Roadmap planning']
        }
      ]
    },
    collaboration: {
      title: 'Cross-Sector Collaboration Framework',
      description: 'How we facilitate meaningful collaboration across diverse technology domains',
      steps: [
        {
          day: 'Phase 1',
          title: 'Domain Mapping',
          description: 'Understanding each sector\'s unique challenges and opportunities',
          icon: 'Map',
          activities: ['Sector analysis', 'Challenge identification', 'Opportunity mapping']
        },
        {
          day: 'Phase 2',
          title: 'Intersection Discovery',
          description: 'Finding convergence points between different technology sectors',
          icon: 'GitMerge',
          activities: ['Technology overlap analysis', 'Synergy identification', 'Integration planning']
        },
        {
          day: 'Phase 3',
          title: 'Team Formation',
          description: 'Assembling diverse teams with complementary expertise',
          icon: 'Users',
          activities: ['Skill assessment', 'Team composition', 'Role definition']
        },
        {
          day: 'Phase 4',
          title: 'Collaborative Development',
          description: 'Working together on integrated solutions',
          icon: 'Cog',
          activities: ['Joint development', 'Regular sync meetings', 'Progress tracking']
        },
        {
          day: 'Phase 5',
          title: 'Integration & Scaling',
          description: 'Combining sector-specific innovations into unified solutions',
          icon: 'Rocket',
          activities: ['Solution integration', 'Testing & validation', 'Scaling strategy']
        }
      ]
    },
    learning: {
      title: 'Continuous Learning Ecosystem',
      description: 'Our approach to fostering continuous growth and knowledge sharing',
      steps: [
        {
          day: 'Weekly',
          title: 'Tech Talks',
          description: 'Team members share latest research and breakthrough discoveries',
          icon: 'Presentation',
          activities: ['Research presentations', 'Industry updates', 'Q&A sessions']
        },
        {
          day: 'Monthly',
          title: 'Cross-Training',
          description: 'Learning about other sectors to enhance collaboration',
          icon: 'BookOpen',
          activities: ['Sector deep-dives', 'Hands-on workshops', 'Skill exchanges']
        },
        {
          day: 'Quarterly',
          title: 'Innovation Challenges',
          description: 'Company-wide challenges to solve real problems creatively',
          icon: 'Trophy',
          activities: ['Challenge definition', 'Team competitions', 'Solution showcases']
        },
        {
          day: 'Annually',
          title: 'Knowledge Summit',
          description: 'Comprehensive review and planning for future learning',
          icon: 'Mountain',
          activities: ['Year review', 'Trend analysis', 'Learning roadmap']
        },
        {
          day: 'Ongoing',
          title: 'Mentorship Program',
          description: 'Peer-to-peer learning and guidance across all levels',
          icon: 'Users',
          activities: ['Mentor matching', 'Regular check-ins', 'Growth planning']
        }
      ]
    }
  };

  const teamTestimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "ℹ️Lead Medical Robotics Engineer",
      image: '/public/assets/images/founder.jpg',
      quote: `Working at Tech-Mystrix has been transformative. The cross-sector collaboration has opened my eyes to applications of medical robotics I never imagined. When our aerospace team shared their precision navigation algorithms, it revolutionized our surgical robot accuracy.`,
      highlight: "Cross-sector innovation breakthrough"
    },
    {
      name: "Marcus Chen",
      role: "ℹ️AI Systems Architect",
      image: '/public/assets/images/founder.jpg',
      quote: `The culture here encourages bold thinking while maintaining scientific rigor. Our AI systems benefit from insights drawn from ancient Indian mathematical traditions, creating unique approaches that our competitors can't replicate.`,
      highlight: "Ancient wisdom meets modern AI"
    },
    {
      name: "Sarah Johnson",
      role: "ℹ️Aerospace Systems Designer",
      image: '/public/assets/images/founder.jpg',
      quote: `I've never worked in an environment where failure is celebrated as learning. Our rapid prototyping culture means we can test 10 ideas in the time it used to take for one. This has accelerated our innovation cycles dramatically.`,
      highlight: "Rapid innovation culture"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
          Company Culture in Action
        </h2>
        <p className="text-xl text-slate-900 max-w-3xl mx-auto">
          Behind-the-scenes insights into how our values manifest in daily operations and team collaboration
        </p>
        <p className="text-0xl text-text-secondary max-w-6xl mx-2  text-center mt-4">
          (NOTE ℹ️: The data points such as "50+ Projects", "25+ Patents", and "12+ Countries" are prototype indicators to visualize our future goals and are not actual figures at this early stage.)
        </p>
      </div>

      {/* Culture Highlights */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {cultureHighlights.map((highlight) => (
          <div key={highlight.id} className="card group hover:shadow-elevation transition-all duration-300">
            <div className="relative overflow-hidden rounded-lg mb-6">
              <Image
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">{highlight.title}</h3>
              </div>
            </div>

            <p className="text-text-secondary mb-6">{highlight.description}</p>

            <div className="grid grid-cols-3 gap-4">
              {Object.entries(highlight.stats).map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-primary-50 rounded-lg">
                  <div className="text-lg font-bold text-primary">{value}</div>
                  <div className="text-xs text-text-secondary capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Innovation Process Deep Dive */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-text-primary mb-4">
            Our Innovation Processes
          </h3>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Detailed look at the methodologies that drive our breakthrough innovations
          </p>
        </div>

        {/* Process Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(innovationProcesses).map(([key, process]) => (
            <button
              key={key}
              onClick={() => setSelectedProcess(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedProcess === key
                  ? 'bg-primary text-white shadow-elevation'
                  : 'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary'
              }`}
            >
              {process.title}
            </button>
          ))}
        </div>

        {/* Selected Process Details */}
        <div className="card">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-text-primary mb-4">
              {innovationProcesses[selectedProcess].title}
            </h4>
            <p className="text-lg text-text-secondary">
              {innovationProcesses[selectedProcess].description}
            </p>
          </div>

          <div className="space-y-6">
            {innovationProcesses[selectedProcess].steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-primary-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name={step.icon} size={20} color="white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center mb-3">
                    <span className="text-sm font-bold text-primary mr-3">{step.day}</span>
                    <h5 className="text-lg font-semibold text-text-primary">{step.title}</h5>
                  </div>
                  <p className="text-text-secondary mb-4">{step.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {step.activities.map((activity, actIndex) => (
                      <span
                        key={actIndex}
                        className="px-3 py-1 bg-surface text-text-primary text-sm rounded-full border border-border-light"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Testimonials */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-text-primary mb-4">
            Voices from Our Team
          </h3>
          <p className="text-lg text-text-secondary">
            Real experiences from team members across different sectors
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {teamTestimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4">
                <Icon name="Quote" size={24} className="text-primary mb-3" />
                <p className="text-text-primary italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              <div className="p-3 bg-accent-50 rounded-lg border-l-4 border-accent">
                <p className="text-sm font-semibold text-accent">
                  {testimonial.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Culture Metrics */}
      <div className="card bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Culture by the Numbers
          </h3>
          <p className="text-text-secondary">
            Quantifying our commitment to fostering an innovative and inclusive environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-text-primary font-semibold">Employee Satisfaction</p>
            <p className="text-sm text-text-secondary">Annual culture survey</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">40hrs</div>
            <p className="text-text-primary font-semibold">Learning per Month</p>
            <p className="text-sm text-text-secondary">Average per team member</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-800 mb-2">15+</div>
            <p className="text-text-primary font-semibold">Cross-Sector Projects</p>
            <p className="text-sm text-text-secondary">Active collaborations</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-text-primary font-semibold">Innovation Success Rate</p>
            <p className="text-sm text-text-secondary">Prototype to product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCulture;