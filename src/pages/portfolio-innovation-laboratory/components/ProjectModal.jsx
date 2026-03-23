import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import Model3DViewer from './Model3DViewer';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'Info' },
    { id: 'technical', name: 'Technical Specs', icon: 'Settings' },
    { id: 'timeline', name: 'Development', icon: 'Clock' },
    { id: 'applications', name: 'Applications', icon: 'Target' }
  ];

  const getSectorColor = (sector) => {
    const colors = {
      aerospace: 'text-blue-600 bg-blue-50',
      medical: 'text-green-600 bg-green-50',
      defense: 'text-red-600 bg-red-50',
      gaming: 'text-purple-600 bg-purple-50',
      'ai-cad': 'text-orange-600 bg-orange-50'
    };
    return colors[sector] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="fixed inset-0 z-90 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 transition-opacity bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="inline-block w-full max-w-6xl my-8 overflow-hidden text-left align-middle transition-all transform bg-surface shadow-xl rounded-2xl">
          {/* Header */}
          <div className="relative px-6 py-4 border-b border-border-light">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSectorColor(project.sector)}`}>
                  {project.sector.replace('-', ' ').toUpperCase()}
                </span>
                <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-text-secondary hover:text-text-primary hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-text-secondary">Development Progress</span>
                <span className="text-text-primary font-medium">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border-light">
            <div className="flex space-x-1 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6 max-h-96 overflow-y-auto">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Main Image and 3D Model */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-lg h-64">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Video Demo */}
                    <div className="relative overflow-hidden rounded-lg h-48 bg-gray-100">
                      <iframe
                        src={project.videoUrl}
                        title={`${project.title} Demo`}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {project.model3D && <Model3DViewer projectId={project.id} />}
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-primary-50 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{value}</div>
                          <div className="text-sm text-text-secondary capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Project Description</h3>
                  <p className="text-text-secondary leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block bg-primary-50 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'technical' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4">Performance Metrics</h3>
                    <div className="space-y-3">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-text-secondary capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="font-semibold text-text-primary">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4">Technical Specifications</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-text-primary mb-2">Development Stage</h4>
                        <p className="text-text-secondary capitalize">{project.stage}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-text-primary mb-2">Project Type</h4>
                        <p className="text-text-secondary capitalize">{project.type}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-text-primary mb-2">Timeline</h4>
                        <p className="text-text-secondary">{project.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-text-primary">Development Timeline</h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200"></div>
                  <div className="space-y-6">
                    <div className="relative flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="CheckCircle" size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">Research & Conceptualization</h4>
                        <p className="text-text-secondary text-sm">Initial research and concept development completed</p>
                        <span className="text-xs text-text-muted">Completed</span>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="CheckCircle" size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">Prototype Development</h4>
                        <p className="text-text-secondary text-sm">First working prototype created and tested</p>
                        <span className="text-xs text-text-muted">Completed</span>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="Clock" size={16} className="text-deep-space" />
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">Testing & Validation</h4>
                        <p className="text-text-secondary text-sm">Comprehensive testing and performance validation</p>
                        <span className="text-xs text-accent font-medium">In Progress</span>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <Icon name="Circle" size={16} className="text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">Production Ready</h4>
                        <p className="text-text-secondary text-sm">Final optimization and production preparation</p>
                        <span className="text-xs text-text-muted">Upcoming</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Real-World Applications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.applications.map((application, index) => (
                      <div key={index} className="p-4 bg-primary-50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Target" size={16} className="text-primary" />
                          <h4 className="font-medium text-text-primary">{application}</h4>
                        </div>
                        <p className="text-text-secondary text-sm">
                          Advanced implementation in {application.toLowerCase()} sector with significant impact potential.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Collaboration Partners</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.collaborators.map((collaborator, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-surface border border-border-light rounded-lg px-4 py-2">
                        <Icon name="Building" size={16} className="text-primary" />
                        <span className="text-text-primary font-medium">{collaborator}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border-light bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Shield" size={16} />
                  <span>{project.patents} Patents</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={16} />
                  <span>{project.collaborators.length} Partners</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  Close
                </button>
                <button className="btn-primary">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Discuss Partnership
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;