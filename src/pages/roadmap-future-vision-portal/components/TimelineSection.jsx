import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import SectorTrack from './SectorTrack';
import ConvergencePoint from './ConvergencePoint';

const TimelineSection = ({ yearData, index, selectedSector, sectorColors, sectorIcons, isSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  const filteredSectors = selectedSector === 'all' 
    ? Object.entries(yearData.sectors)
    : Object.entries(yearData.sectors).filter(([key]) => key === selectedSector);

  return (
    <div 
      className={`relative mb-16 lg:mb-24 ${isEven ? 'lg:pr-1/2' : 'lg:pl-1/2'}`}
      data-year={yearData.year}
    >
      {/* Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 hidden lg:block z-20">
        <div className={`w-8 h-8 rounded-full border-4 transition-all duration-500 ${
          isSelected 
            ? 'bg-accent border-accent shadow-glow scale-125' 
            : 'bg-surface border-white/30'
        }`}>
          <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping"></div>
        </div>
      </div>

      {/* Content Card */}
      <div className={`relative ${isEven ? 'lg:mr-10' : 'lg:ml-10'}`}>
        <div className={`bg-surface/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:shadow-elevation ${
          isSelected ? 'border-sky-600 shadow-glow' : 'border-sky-700 hover:border-white/30'
        }`}>
          {/* Year Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {yearData.year}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                {yearData.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {yearData.description}
              </p>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-3 rounded-lg bg-accent/20 hover:bg-accent/20 transition-all duration-300 group"
            >
              <Icon 
                name={isExpanded ? "ChevronUp" : "ChevronDown"} 
                size={24} 
                className="text-accent group-hover:scale-110 transition-transform duration-300" 
              />
            </button>
          </div>

          {/* Investment Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-surface/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {yearData.totalInvestment}
              </div>
              <div className="text-sm text-gray-300">Total Investment</div>
            </div>
            <div className="bg-surface/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-quantum-purple mb-1">
                {yearData.expectedROI}
              </div>
              <div className="text-sm text-gray-300">Expected ROI</div>
            </div>
            <div className="bg-surface/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-plasma-orange mb-1">
                {yearData.convergencePoints.length}
              </div>
              <div className="text-sm text-gray-300">Convergence Points</div>
            </div>
          </div>

          {/* Sector Tracks */}
          <div className="space-y-4 mb-8">
            {filteredSectors.map(([sectorKey, sectorData]) => (
              <SectorTrack
                key={sectorKey}
                sectorKey={sectorKey}
                sectorData={sectorData}
                sectorColors={sectorColors}
                sectorIcons={sectorIcons}
                isExpanded={isExpanded}
              />
            ))}
          </div>

          {/* Convergence Points */}
          {isExpanded && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Icon name="Zap" size={20} className="text-accent mr-2" />
                  Technology Convergence Points
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {yearData.convergencePoints.map((point, pointIndex) => (
                    <ConvergencePoint
                      key={pointIndex}
                      point={point}
                      index={pointIndex}
                    />
                  ))}
                </div>
              </div>

              {/* Market Impact Projections */}
              <div className="bg-surface/20 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Icon name="TrendingUp" size={20} className="text-success mr-2" />
                  Market Impact Projections
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Industry Transformation</h5>
                    <p className="text-gray-300 text-sm">
                      Revolutionary changes expected across target sectors with {yearData.expectedROI} growth potential 
                      through breakthrough innovations and strategic partnerships.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Competitive Advantage</h5>
                    <p className="text-gray-300 text-sm">
                      First-mover advantage in quantum-enhanced technologies with patent portfolio 
                      protection and exclusive partnership agreements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;