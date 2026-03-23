import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import FilterPanel from './components/FilterPanel';

import PatentPortfolio from './components/PatentPortfolio';
import CollaborationStories from './components/CollaborationStories';

const PortfolioInnovationLaboratory = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSector, setActiveSector] = useState('all');
  const [activeStage, setActiveStage] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "Quantum Navigation System",
      sector: "aerospace",
      stage: "prototype",
      type: "hardware",
      description: "Revolutionary quantum-enhanced navigation system for next-generation spacecraft with unprecedented accuracy and reliability.",
      image: "/public/assets/images/R&D.jpeg",
      technologies: ["Quantum Computing", "Aerospace Engineering", "Navigation Systems"],
      progress: 75,
      timeline: "24 months",
      applications: ["Spacecraft Navigation", "Satellite Positioning", "Deep Space Missions"],
      metrics: {
        accuracy: "99.99%",
        range: "10M km",
        power: "50W"
      },
      patents: 3,
      collaborators: ["ISRO", "IIT Bombay"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      model3D: true
    },
    {
      id: 2,
      title: "Neural Interface Prosthetics",
      sector: "medical",
      stage: "development",
      type: "biotech",
      description: "Advanced neural interface technology enabling direct brain control of prosthetic limbs with haptic feedback.",
      image: "/public/assets/images/Neural Interface.jpeg",
      technologies: ["Neural Networks", "Biomedical Engineering", "Haptic Technology"],
      progress: 60,
      timeline: "36 months",
      applications: ["Prosthetic Limbs", "Rehabilitation", "Neural Therapy"],
      metrics: {
        responseTime: "50ms",
        accuracy: "95%",
        batteryLife: "72h"
      },
      patents: 5,
      collaborators: ["AIIMS", "Stanford Medical"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      model3D: true
    },
    {
      id: 3,
      title: "Autonomous Defense Drone",
      sector: "defense",
      stage: "testing",
      type: "hardware",
      description: "AI-powered autonomous defense drone with advanced threat detection and neutralization capabilities.",
      image: "/public/assets/images/defense.jpeg",
      technologies: ["AI/ML", "Drone Technology", "Defense Systems"],
      progress: 85,
      timeline: "18 months",
      applications: ["Border Security", "Surveillance", "Threat Neutralization"],
      metrics: {
        range: "50km",
        flightTime: "8h",
        payload: "25kg"
      },
      patents: 4,
      collaborators: ["DRDO", "HAL"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      model3D: true
    },
    {
      id: 4,
      title: "Immersive Gaming Engine",
      sector: "gaming",
      stage: "production",
      type: "software",
      description: "Next-generation gaming engine with photorealistic rendering and advanced physics simulation.",
      image: "/public/assets/images/gaming.jpeg",
      technologies: ["Game Engine", "3D Graphics", "Physics Simulation"],
      progress: 95,
      timeline: "12 months",
      applications: ["AAA Games", "VR Experiences", "Simulation Training"],
      metrics: {
        fps: "120+",
        resolution: "8K",
        platforms: "5+"
      },
      patents: 2,
      collaborators: ["Unity", "Epic Games"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      model3D: false
    },
    {
      id: 5,
      title: "AI-Powered CAD Assistant",
      sector: "ai-cad",
      stage: "beta",
      type: "software",
      description: "Intelligent CAD assistant that automates design processes and optimizes engineering workflows.",
      image: "/public/assets/images/AIcad.jpeg",
      technologies: ["Machine Learning", "CAD Software", "Design Automation"],
      progress: 80,
      timeline: "15 months",
      applications: ["Engineering Design", "Architecture", "Product Development"],
      metrics: {
        efficiency: "300%",
        accuracy: "98%",
        timeReduction: "70%"
      },
      patents: 6,
      collaborators: ["Autodesk", "Siemens"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      model3D: false
    },
    {
      id: 6,
      title: "Quantum Encryption Module",
      sector: "defense",
      stage: "research",
      type: "hardware",
      description: "Unbreakable quantum encryption system for secure military and government communications.",
      image: "/public/assets/images/defense.jpeg",
      technologies: ["Quantum Cryptography", "Security Systems", "Communication"],
      progress: 40,
      timeline: "48 months",
      applications: ["Military Communications", "Government Security", "Financial Systems"],
      metrics: {
        keyLength: "2048-bit",
        speed: "1Gbps",
        security: "Quantum-safe"
      },
      patents: 8,
      collaborators: ["DRDO", "C-DAC"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      model3D: true
    }
  ];

  // Filter projects based on active filters
  const filteredProjects = projects.filter(project => {
    if (activeFilter !== 'all' && project.type !== activeFilter) return false;
    if (activeSector !== 'all' && project.sector !== activeSector) return false;
    if (activeStage !== 'all' && project.stage !== activeStage) return false;
    return true;
  });

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const sectionNavigation = [
    { id: 'projects', name: 'R&D Projects', icon: 'Beaker' },
    { id: 'patents', name: 'Patent Portfolio', icon: 'Shield' },
    { id: 'collaborations', name: 'Collaborations', icon: 'Users' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-deep-space via-quantum-blue to-primary overflow-hidden">
        {/* Quantum Animation Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animation-float"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-quantum-purple/10 rounded-full blur-3xl animation-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-plasma-orange/10 rounded-full blur-3xl animation-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-surface/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <Icon name="Beaker" size={20} className="text-accent" />
              <span className="text-white font-medium">Innovation Laboratory</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              R&D <span className="text-gradient">Breakthrough</span> Showcase
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore our cutting-edge research and development achievements through interactive 3D models, 
              prototype demonstrations, and detailed technical insights across five revolutionary sectors.
            </p>

            <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
              <button
                onClick={() => setActiveSection('projects')}
                className="btn-primary inline-flex items-cente animation-quantum"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Explore Projects
              </button>
              <Link
                to="/contact-global-presence-hub"
                className="btn-secondary inline-flex items-cente "
                className="bg-white/10 backdrop-blur-sm inline-flex items-center text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/20 border border-white/20"
            >
              
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Partnership Inquiry
              </Link>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-surface/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-white text-sm">Active Projects</div>
            </div>
            <div className="text-center p-6 bg-surface/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">18</div>
              <div className="text-white text-sm">Patents Filed</div>
            </div>
            <div className="text-center p-6 bg-surface/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">12</div>
              <div className="text-white text-sm">Collaborations</div>
            </div>
            <div className="text-center p-6 bg-surface/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <div className="text-white text-sm">Tech Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="bg-surface border-b border-border-light sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-1">
              {sectionNavigation.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-primary text-white' :'text-text-secondary hover:text-primary hover:bg-primary-50'
                  }`}
                >
                  <Icon name={section.icon} size={16} />
                  <span>{section.name}</span>
                </button>
              ))}
            </div>
            
            <div className="hidden md:flex items-center space-x-4 text-sm text-text-secondary">
              <span>Last Updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeSection === 'projects' && (
          <>
            {/* Filter Panel */}
            <FilterPanel
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              activeSector={activeSector}
              setActiveSector={setActiveSector}
              activeStage={activeStage}
              setActiveStage={setActiveStage}
            />

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={openProjectModal}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <Icon name="Search" size={48} className="text-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Found</h3>
                <p className="text-text-secondary">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </>
        )}

        {activeSection === 'patents' && <PatentPortfolio />}
        {activeSection === 'collaborations' && <CollaborationStories />}
      </main>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectModal}
        />
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Collaborate on the Future ?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join us in pushing the boundaries of technology and creating solutions 
            that will shape tomorrow's world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-global-presence-hub"
              className="btn-secondary inline-flex items-center"
            >
              <Icon name="Handshake" size={20} className="mr-2" />
              Partnership Opportunities
            </Link>
            <Link
              to="/roadmap-future-vision-portal"
              className="bg-white/10 backdrop-blur-sm inline-flex items-center text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/20 border border-white/20"
            >
              <Icon name="Telescope" size={20} className="mr-2" />
              View Roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioInnovationLaboratory;