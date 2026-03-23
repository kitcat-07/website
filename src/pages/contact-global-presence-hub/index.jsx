import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import ContactForm from './components/ContactForm';
import OfficeLocations from './components/OfficeLocations';
import TeamDirectory from './components/TeamDirectory';
import ResponseCommitments from './components/ResponseCommitments';
import CalendarIntegration from './components/CalendarIntegration';

const ContactGlobalPresenceHub = () => {
  const [activeTab, setActiveTab] = useState('contact');

  const tabs = [
    { id: 'contact', name: 'Contact Form', icon: 'MessageSquare' },
    { id: 'locations', name: 'Global Offices', icon: 'MapPin' },
    { id: 'team', name: 'Team Directory', icon: 'Users' },
    { id: 'schedule', name: 'Schedule Meeting', icon: 'Calendar' }
  ];

  const emergencyContacts = [
    {
      type: "Technical Emergency",
      contact: "+91-9876543210",
      email: "emergency.tech@tech-mystrix.com",
      availability: "24/7"
    },
    {
      type: "Partnership Urgent",
      contact: "+91-9876543211",
      email: "urgent.partnerships@tech-mystrix.com",
      availability: "Business Hours"
    }
  ];

  const socialChannels = [
    { name: 'LinkedIn', icon: 'Linkedin', url: '#', color: 'text-blue-600' },
    { name: 'Twitter', icon: 'Twitter', url: '#', color: 'text-blue-400' },
    { name: 'GitHub', icon: 'Github', url: '#', color: 'text-gray-800' },
    { name: 'YouTube', icon: 'Youtube', url: '#', color: 'text-red-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-quantum-white via-primary-50 to-secondary-50">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animation-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-quantum-purple/10 rounded-full blur-3xl animation-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-plasma-orange/10 rounded-full blur-2xl animation-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                <Icon name="Globe" size={16} className="mr-2" />
                Global Presence Hub
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Connect with the
              <br />
              <span className="text-quantum-purple">Future Builders</span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Multiple pathways to engage with Tech-Mystrix across investment opportunities, 
              strategic partnerships, technical collaborations, and innovation discussions.
            </p>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-text-secondary">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">&lt;2hrs</div>
                <div className="text-sm text-text-secondary">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5</div>
                <div className="text-sm text-text-secondary">Global Offices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-text-secondary">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-surface/95 backdrop-blur-md border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? 'text-quantum-purple border-quantum-purple bg-primary-50/50' :'text-text-secondary border-transparent hover:text-primary hover:border-primary-200'
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'contact' && <ContactForm />}
          {activeTab === 'locations' && <OfficeLocations />}
          {activeTab === 'team' && <TeamDirectory />}
          {activeTab === 'schedule' && <CalendarIntegration />}
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-deep-space text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Emergency & Urgent Contacts</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              For time-sensitive technical issues or urgent partnership matters
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-quantum-blue/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-accent">{contact.type}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={18} className="text-accent" />
                    <a href={`tel:${contact.contact}`} className="hover:text-accent transition-colors">
                      {contact.contact}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={18} className="text-accent" />
                    <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={18} className="text-accent" />
                    <span className="text-gray-300">{contact.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Contacts */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Connect on Social</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Follow our journey and engage with our community across platforms
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.url}
                className={`flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 hover:bg-primary-100 transition-all duration-300 hover:scale-110 ${channel.color}`}
                aria-label={`Connect on ${channel.name}`}
              >
                <Icon name={channel.icon} size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Response Commitments */}
      <ResponseCommitments />

      {/* Navigation Links */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Tech-Mystrix Universe</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Discover our technology sectors and innovation journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/services-technology-sectors-universe"
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              <Icon name="Zap" size={32} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Technology Universe</h3>
              <p className="text-primary-100">Explore our five cutting-edge sectors</p>
            </Link>

            <Link
              to="/portfolio-innovation-laboratory"
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              <Icon name="Beaker" size={32} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Innovation Lab</h3>
              <p className="text-primary-100">See our R&D projects and prototypes</p>
            </Link>

            <Link
              to="/about-origin-story-ecosystem"
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              <Icon name="Users" size={32} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Origin Story</h3>
              <p className="text-primary-100">Learn about our mission and team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactGlobalPresenceHub;