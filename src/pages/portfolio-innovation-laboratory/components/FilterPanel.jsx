import React from 'react';
import Icon from 'components/AppIcon';

const FilterPanel = ({ 
  activeFilter, 
  setActiveFilter, 
  activeSector, 
  setActiveSector, 
  activeStage, 
  setActiveStage 
}) => {
  const filterOptions = [
    { id: 'all', name: 'All Types', icon: 'Grid3X3' },
    { id: 'hardware', name: 'Hardware', icon: 'Cpu' },
    { id: 'software', name: 'Software', icon: 'Code' },
    { id: 'biotech', name: 'Biotech', icon: 'Dna' }
  ];

  const sectorOptions = [
    { id: 'all', name: 'All Sectors', icon: 'Globe' },
    { id: 'aerospace', name: 'Aerospace', icon: 'Rocket' },
    { id: 'medical', name: 'Medical', icon: 'Heart' },
    { id: 'defense', name: 'Defense', icon: 'Shield' },
    { id: 'gaming', name: 'Gaming', icon: 'Gamepad2' },
    { id: 'ai-cad', name: 'AI CAD', icon: 'Brain' }
  ];

  const stageOptions = [
    { id: 'all', name: 'All Stages', icon: 'Layers' },
    { id: 'research', name: 'Research', icon: 'Search' },
    { id: 'development', name: 'Development', icon: 'Code' },
    { id: 'prototype', name: 'Prototype', icon: 'Box' },
    { id: 'testing', name: 'Testing', icon: 'TestTube' },
    { id: 'beta', name: 'Beta', icon: 'Beaker' },
    { id: 'production', name: 'Production', icon: 'CheckCircle' }
  ];

  return (
    <div className="bg-surface rounded-lg shadow-subtle p-6 mb-8 border border-border-light">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary">Filter Projects</h2>
        <button
          onClick={() => {
            setActiveFilter('all');
            setActiveSector('all');
            setActiveStage('all');
          }}
          className="text-primary hover:text-primary-600 text-sm font-medium transition-colors duration-200"
        >
          Clear All Filters
        </button>
      </div>

      <div className="space-y-6">
        {/* Type Filter */}
        <div>
          <h3 className="text-sm font-medium text-text-secondary mb-3">Project Type</h3>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === option.id
                    ? 'bg-primary text-white shadow-subtle'
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200 hover:text-text-primary'
                }`}
              >
                <Icon name={option.icon} size={16} />
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sector Filter */}
        <div>
          <h3 className="text-sm font-medium text-text-secondary mb-3">Technology Sector</h3>
          <div className="flex flex-wrap gap-2">
            {sectorOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveSector(option.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSector === option.id
                    ? 'bg-secondary text-white shadow-subtle'
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200 hover:text-text-primary'
                }`}
              >
                <Icon name={option.icon} size={16} />
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stage Filter */}
        <div>
          <h3 className="text-sm font-medium text-text-secondary mb-3">Development Stage</h3>
          <div className="flex flex-wrap gap-2">
            {stageOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveStage(option.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeStage === option.id
                    ? 'bg-accent text-deep-space shadow-subtle'
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200 hover:text-text-primary'
                }`}
              >
                <Icon name={option.icon} size={16} />
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {(activeFilter !== 'all' || activeSector !== 'all' || activeStage !== 'all') && (
        <div className="mt-6 pt-6 border-t border-border-light">
          <h3 className="text-sm font-medium text-text-secondary mb-3">Active Filters</h3>
          <div className="flex flex-wrap gap-2">
            {activeFilter !== 'all' && (
              <span className="inline-flex items-center space-x-1 bg-primary-50 text-primary px-3 py-1 rounded-full text-sm">
                <span>Type: {filterOptions.find(f => f.id === activeFilter)?.name}</span>
                <button onClick={() => setActiveFilter('all')}>
                  <Icon name="X" size={12} />
                </button>
              </span>
            )}
            {activeSector !== 'all' && (
              <span className="inline-flex items-center space-x-1 bg-secondary-50 text-secondary px-3 py-1 rounded-full text-sm">
                <span>Sector: {sectorOptions.find(s => s.id === activeSector)?.name}</span>
                <button onClick={() => setActiveSector('all')}>
                  <Icon name="X" size={12} />
                </button>
              </span>
            )}
            {activeStage !== 'all' && (
              <span className="inline-flex items-center space-x-1 bg-accent-50 text-accent-600 px-3 py-1 rounded-full text-sm">
                <span>Stage: {stageOptions.find(s => s.id === activeStage)?.name}</span>
                <button onClick={() => setActiveStage('all')}>
                  <Icon name="X" size={12} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;