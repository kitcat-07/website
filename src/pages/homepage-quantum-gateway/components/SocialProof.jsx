import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const SocialProof = () => {
  const founderCredentials = [
    {
      name: 'Exime Alaric S',
      title: 'Founder & Chief Executive Officer',
      credentials: 'BE.Mechanical Design Engineer | MIT  | ----',
      image: '/public/assets/images/founder.jpg',
      expertise: ['Quantum Physics', 'Aerospace Engineering', 'Deep Tech Innovation'],
      achievements: 'Led breakthrough research in Advanced propulsion systems'
    },
    {
      name: 'Niharika S',
      title: 'Co-Founder & CTO',
      credentials: 'MS AI/ML Stanford | Ex-Google DeepMind | 20+ Publications',
      image: '/public/assets/images/founder.jpg',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks'],
      achievements: 'Pioneer in AI-powered defense systems and medical robotics'
    }
  ];

  const partnerships = [
    {
      name: 'Indian Space Research Organisation',
      type: 'Strategic Partnership',
      logo: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=200&h=100&fit=crop',
      description: 'Collaborative research in quantum propulsion technologies'
    },
    {
      name: 'Defence Research & Development Organisation',
      type: 'Technology Alliance',
      logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=100&fit=crop',
      description: 'Joint development of next-generation defense systems'
    },
    {
      name: 'All India Institute of Medical Sciences',
      type: 'Research Collaboration',
      logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop',
      description: 'Clinical trials for nano-surgical robotics'
    }
  ];

  const communityMetrics = [
    { label: 'Community Members', value: '10K+', growth: '+25%', icon: 'Users' },
    { label: 'Research Papers', value: '50+', growth: '+40%', icon: 'FileText' },
    { label: 'Patent Applications', value: '25+', growth: '+60%', icon: 'Award' },
    { label: 'Industry Recognition', value: '15+', growth: '+80%', icon: 'Trophy' }
  ];

  const mediaHighlights = [
    {
      publication: 'TechCrunch India',
      headline: 'Tech-Mystrix Raises $10M for Quantum Innovation',
      date: '2024-01-15',
      type: 'Funding News'
    },
    {
      publication: 'IEEE Spectrum',
      headline: 'Breakthrough in Quantum Propulsion Technology',
      date: '2024-02-20',
      type: 'Technical Feature'
    },
    {
      publication: 'Economic Times',
      headline: 'Indian Deep-Tech Startup Disrupts Five Industries',
      date: '2024-03-10',
      type: 'Industry Analysis'
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animation-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-quantum-purple/5 rounded-full blur-2xl animation-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Credibility Through Excellence
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Built by visionaries, trusted by institutions, and recognized by the global tech community. 
            Our track record speaks to our commitment to transforming impossible ideas into reality.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-quantum-purple mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Founder Credentials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">Visionary Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founderCredentials.map((founder, index) => (
              <div key={index} className="card group hover:shadow-elevation transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={16} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-text-primary mb-1 group-hover:text-primary transition-colors duration-300">
                      {founder.name}
                    </h4>
                    <p className="text-blue-700 font-medium mb-2">{founder.title}</p>
                    <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                      {founder.credentials}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {founder.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-primary-50 text-primary px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm text-text-secondary italic">
                      {founder.achievements}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">Strategic Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="card text-center group hover:shadow-elevation transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </h4>
                <span className="inline-block text-sm bg-accent/10 text-zinc-950 px-3 py-1 rounded-full mb-3">
                  {partner.type}
                </span>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Metrics */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">Community Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animation-quantum">
                  <Icon name={metric.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-text-primary mb-1">{metric.value}</div>
                <div className="text-sm text-text-secondary mb-2">{metric.label}</div>
                <div className="flex items-center justify-center space-x-1">
                  <Icon name="TrendingUp" size={14} className="text-success" />
                  <span className="text-xs text-success font-medium">{metric.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Recognition */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">Media Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaHighlights.map((media, index) => (
              <div key={index} className="card group hover:shadow-elevation transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm font-medium text-slate-950 bg-accent/10 px-3 py-1 rounded-full">
                    {media.type}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {new Date(media.date).toLocaleDateString()}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {media.headline}
                </h4>
                <p className="text-sm text-text-secondary font-medium">
                  {media.publication}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Join the Quantum Revolution
            </h3>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Be part of a community that's building tomorrow's impossible today. 
              Connect with visionaries, investors, and innovators who share our quantum vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-global-presence-hub"
                className="inline-flex items-center space-x-2 btn-primary text-lg px-8 py-4 animate-quantum"
              >
                <Icon name="Users" size={20} className="mr-2" />
                Join Our Community
              </Link>
              <Link
                to="/about-origin-story-ecosystem"
                className="inline-flex items-center space-x-2 btn-secondary text-lg px-8 py-4 animate-quantum"
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;