import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const PatentPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const patents = [
    {
      id: 1,
      title: "ℹ️Quantum-Enhanced Navigation Algorithm",
      patentNumber: "US11,234,567",
      category: "aerospace",
      status: "granted",
      filingDate: "2025-03-15",
      grantDate: "2026-01-20",
      inventors: ["Dr. Rajesh Kumar", "Dr. Priya Sharma", "Arjun Patel"],
      description: `Revolutionary quantum computing algorithm for spacecraft navigation that provides unprecedented accuracy in deep space missions. The invention combines quantum entanglement principles with traditional navigation systems to achieve sub-meter precision at interplanetary distances.

Key innovations include quantum error correction mechanisms, adaptive signal processing, and real-time calibration systems that maintain accuracy even in high-radiation environments.`,
      technicalField: "Quantum Computing, Aerospace Navigation",
      applications: ["Spacecraft Navigation", "Satellite Positioning", "Deep Space Exploration"],
      citationCount: 15,
      licensingStatus: "Available for Licensing"
    },
    {
      id: 2,
      title: "ℹ️Neural Interface for Prosthetic Control",
      patentNumber: "US11,345,678",
      category: "medical",
      status: "granted",
      filingDate: "2025-11-08",
      grantDate: "2026-09-12",
      inventors: ["Dr. Meera Reddy", "Prof. Vikram Singh", "Dr. Anita Desai"],
      description: `Advanced brain-computer interface system enabling direct neural control of prosthetic limbs with haptic feedback. The system uses machine learning algorithms to decode neural signals and translate them into precise motor commands.

The invention includes novel signal processing techniques, adaptive learning algorithms, and biocompatible electrode arrays that provide long-term stability and high-resolution neural signal acquisition.`,
      technicalField: "Biomedical Engineering, Neural Interfaces",
      applications: ["Prosthetic Limbs", "Rehabilitation Devices", "Neural Therapy"],
      citationCount: 23,
      licensingStatus: "Licensed to MedTech Corp"
    },
    {
      id: 3,
      title: "ℹ️Autonomous Threat Detection System",
      patentNumber: "US11,456,789",
      category: "defense",
      status: "pending",
      filingDate: "2025-02-10",
      grantDate: null,
      inventors: ["Col. Suresh Nair", "Dr. Kavita Joshi", "Rahul Gupta"],
      description: `AI-powered autonomous system for real-time threat detection and classification in defense applications. The system combines computer vision, machine learning, and sensor fusion to identify and track potential threats with high accuracy.

Features include multi-spectral imaging, behavioral analysis algorithms, and adaptive threat modeling that continuously improves detection capabilities based on environmental conditions and threat patterns.`,
      technicalField: "Artificial Intelligence, Defense Systems",
      applications: ["Border Security", "Surveillance Systems", "Threat Assessment"],
      citationCount: 8,
      licensingStatus: "Restricted - Defense Applications Only"
    },
    {
      id: 4,
      title: "ℹ️Immersive Physics Simulation Engine",
      patentNumber: "US11,567,890",
      category: "gaming",
      status: "granted",
      filingDate: "2025-07-22",
      grantDate: "2026-03-15",
      inventors: ["Amit Sharma", "Dr. Neha Agarwal", "Kiran Kumar"],
      description: `Next-generation physics simulation engine for immersive gaming experiences with photorealistic rendering and real-time physics calculations. The engine optimizes computational resources while maintaining high-fidelity simulations.

Innovations include parallel processing algorithms, adaptive level-of-detail systems, and predictive physics modeling that enables complex interactions in virtual environments with minimal computational overhead.`,
      technicalField: "Computer Graphics, Game Development",
      applications: ["Video Games", "VR Experiences", "Training Simulations"],
      citationCount: 12,
      licensingStatus: "Available for Licensing"
    },
    {
      id: 5,
      title: "ℹ️AI-Assisted Design Optimization",
      patentNumber: "US11,678,901",
      category: "ai-cad",
      status: "granted",
      filingDate: "2024-01-30",
      grantDate: "2025-11-08",
      ℹinventors: ["ℹDr. Sanjay Patel", "Ritu Malhotra", "Dr. Ashok Kumar"],
      description: `Intelligent CAD system that automatically optimizes engineering designs using machine learning algorithms and generative design principles. The system reduces design time while improving performance characteristics.

Key features include topology optimization, material selection algorithms, and performance prediction models that enable engineers to explore design spaces more efficiently and create optimized solutions for complex engineering challenges.`,
      technicalField: "Computer-Aided Design, Machine Learning",
      applications: ["Engineering Design", "Architecture", "Product Development"],
      citationCount: 19,
      licensingStatus: "Licensed to AutoCAD Solutions"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Patents', icon: 'FileText', count: patents.length },
    { id: 'aerospace', name: 'Aerospace', icon: 'Rocket', count: patents.filter(p => p.category === 'aerospace').length },
    { id: 'medical', name: 'Medical', icon: 'Heart', count: patents.filter(p => p.category === 'medical').length },
    { id: 'defense', name: 'Defense', icon: 'Shield', count: patents.filter(p => p.category === 'defense').length },
    { id: 'gaming', name: 'Gaming', icon: 'Gamepad2', count: patents.filter(p => p.category === 'gaming').length },
    { id: 'ai-cad', name: 'AI CAD', icon: 'Brain', count: patents.filter(p => p.category === 'ai-cad').length }
  ];

  const filteredPatents = selectedCategory === 'all' 
    ? patents 
    : patents.filter(patent => patent.category === selectedCategory);

  const getStatusColor = (status) => {
    return status === 'granted' ?'text-green-600 bg-green-50' :'text-yellow-600 bg-yellow-50';
  };

  const getCategoryColor = (category) => {
    const colors = {
      aerospace: 'text-blue-600 bg-blue-50',
      medical: 'text-green-600 bg-green-50',
      defense: 'text-red-600 bg-red-50',
      gaming: 'text-purple-600 bg-purple-50',
      'ai-cad': 'text-orange-600 bg-orange-50'
    };
    return colors[category] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Patent Portfolio</h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Our intellectual property achievements showcase breakthrough innovations 
          across multiple technology sectors, protecting key technical advances.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-primary text-white shadow-subtle'
                : 'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary border border-border-light'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span>{category.name}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              selectedCategory === category.id
                ? 'bg-white/20 text-white' :'bg-gray-100 text-text-muted'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Patents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredPatents.map((patent) => (
          <div key={patent.id} className="card hover:shadow-elevation transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(patent.category)}`}>
                    {patent.category.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(patent.status)}`}>
                    {patent.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-1">{patent.title}</h3>
                <p className="text-sm text-text-secondary font-mono">{patent.patentNumber}</p>
              </div>
              <Icon name="Award" size={24} className="text-primary flex-shrink-0" />
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-text-secondary text-sm leading-relaxed line-clamp-4">
                {patent.description}
              </p>
            </div>

            {/* Technical Details */}
            <div className="space-y-3 mb-4">
              <div>
                <h4 className="text-sm font-medium text-text-primary mb-1">Technical Field</h4>
                <p className="text-sm text-text-secondary">{patent.technicalField}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-text-primary mb-1">Applications</h4>
                <div className="flex flex-wrap gap-1">
                  {patent.applications.map((app, index) => (
                    <span
                      key={index}
                      className="inline-block bg-primary-50 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Inventors */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Inventors</h4>
              <div className="flex flex-wrap gap-2">
                {patent.inventors.map((inventor, index) => (
                  <div key={index} className="flex items-center space-x-1 bg-gray-50 rounded-full px-3 py-1">
                    <Icon name="User" size={12} className="text-text-secondary" />
                    <span className="text-xs text-text-secondary">{inventor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 py-3 border-t border-border-light">
              <div className="text-center">
                <div className="text-lg font-semibold text-primary">{patent.citationCount}</div>
                <div className="text-xs text-text-secondary">Citations</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-primary">
                  {new Date(patent.filingDate).getFullYear()}
                </div>
                <div className="text-xs text-text-secondary">Filed</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-primary">
                  {patent.grantDate ? new Date(patent.grantDate).getFullYear() : 'Pending'}
                </div>
                <div className="text-xs text-text-secondary">Granted</div>
              </div>
            </div>

            {/* Licensing Status */}
            <div className="mt-4 pt-3 border-t border-border-light">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-text-primary">Licensing Status</h4>
                  <p className="text-xs text-text-secondary">{patent.licensingStatus}</p>
                </div>
                <button className="text-primary hover:text-primary-600 text-sm font-medium transition-colors duration-200">
                  <Icon name="ExternalLink" size={16} className="inline mr-1" />
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-text-primary mb-2">Patent Portfolio Impact</h3>
          <p className="text-text-secondary">Protecting innovation and enabling technological advancement</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">{patents.length}</div>
            <div className="text-sm text-text-secondary">Total Patents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              {patents.filter(p => p.status === 'granted').length}
            </div>
            <div className="text-sm text-text-secondary">Granted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              {patents.reduce((sum, p) => sum + p.citationCount, 0)}
            </div>
            <div className="text-sm text-text-secondary">Total Citations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">5</div>
            <div className="text-sm text-text-secondary">Tech Sectors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentPortfolio;