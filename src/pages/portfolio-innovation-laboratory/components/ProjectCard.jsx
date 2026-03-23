import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProjectCard = ({ project, onViewDetails }) => {
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

  const getStageColor = (stage) => {
    const colors = {
      research: 'text-yellow-600 bg-yellow-50',
      development: 'text-blue-600 bg-blue-50',
      prototype: 'text-purple-600 bg-purple-50',
      testing: 'text-orange-600 bg-orange-50',
      beta: 'text-green-600 bg-green-50',
      production: 'text-emerald-600 bg-emerald-50'
    };
    return colors[stage] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="card group cursor-pointer transition-all duration-300 hover:shadow-elevation hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* 3D Model Badge */}
        {project.model3D && (
          <div className="absolute top-3 right-3 bg-accent text-deep-space px-2 py-1 rounded-full text-xs font-medium">
            <Icon name="Box" size={12} className="inline mr-1" />
            3D Model
          </div>
        )}

        {/* Progress Overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="bg-surface/90 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-text-secondary">Progress</span>
              <span className="text-text-primary font-medium">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSectorColor(project.sector)}`}>
              {project.sector.replace('-', ' ').toUpperCase()}
            </span>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStageColor(project.stage)}`}>
              {project.stage.toUpperCase()}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-primary-50 text-primary text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 py-3 border-t border-border-light">
          <div className="text-center">
            <div className="text-lg font-semibold text-primary">{project.patents}</div>
            <div className="text-xs text-text-secondary">Patents</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-primary">{project.timeline}</div>
            <div className="text-xs text-text-secondary">Timeline</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2 text-xs text-text-secondary">
            <Icon name="Users" size={12} />
            <span>{project.collaborators.length} Partners</span>
          </div>
          <button
            onClick={() => onViewDetails(project)}
            className="flex items-center space-x-1 text-primary hover:text-primary-600 text-sm font-medium transition-colors duration-300"
          >
            <span>View Details</span>
            <Icon name="ArrowRight" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;