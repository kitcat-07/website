import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const Model3DViewer = ({ projectId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('3d');

  // Simulate loading completion
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const viewModes = [
    { id: '3d', name: '3D Model', icon: 'Box' },
    { id: 'wireframe', name: 'Wireframe', icon: 'Grid3X3' },
    { id: 'xray', name: 'X-Ray', icon: 'Scan' }
  ];

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden h-64 relative">
      {/* View Mode Controls */}
      <div className="absolute top-3 left-3 z-10 flex space-x-1">
        {viewModes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setViewMode(mode.id)}
            className={`flex items-center space-x-1 px-2 py-1 rounded text-xs font-medium transition-colors duration-200 ${
              viewMode === mode.id
                ? 'bg-accent text-deep-space' :'bg-black/50 text-white hover:bg-black/70'
            }`}
          >
            <Icon name={mode.icon} size={12} />
            <span>{mode.name}</span>
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute top-3 right-3 z-10 flex space-x-1">
        <button className="p-2 bg-black/50 text-white rounded hover:bg-black/70 transition-colors duration-200">
          <Icon name="RotateCcw" size={16} />
        </button>
        <button className="p-2 bg-black/50 text-white rounded hover:bg-black/70 transition-colors duration-200">
          <Icon name="ZoomIn" size={16} />
        </button>
        <button className="p-2 bg-black/50 text-white rounded hover:bg-black/70 transition-colors duration-200">
          <Icon name="Maximize" size={16} />
        </button>
      </div>

      {/* 3D Model Container */}
      <div className="w-full h-full flex items-center justify-center relative">
        {isLoading ? (
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full mx-auto mb-2"></div>
            <p className="text-white text-sm">Loading 3D Model...</p>
          </div>
        ) : (
          <div className="relative w-full h-full">
            {/* Mock 3D Model Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Main 3D Object */}
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-quantum-purple rounded-lg transform rotate-12 animation-float">
                  <div className="absolute inset-2 bg-gradient-to-tl from-white/20 to-transparent rounded"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Icon name="Box" size={32} className="text-white" />
                  </div>
                </div>
                
                {/* Hotspots */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-plasma-orange rounded-full animate-pulse cursor-pointer">
                  <div className="absolute -top-8 -left-8 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Key Innovation Point
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-plasma-orange rounded-full animate-pulse cursor-pointer">
                  <div className="absolute -bottom-8 -right-8 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Technical Breakthrough
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
          </div>
        )}
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm rounded p-3">
        <div className="flex items-center justify-between text-white text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="MousePointer" size={12} />
              <span>Click & Drag to Rotate</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Move" size={12} />
              <span>Scroll to Zoom</span>
            </div>
          </div>
          <div className="text-accent text-xs">
            Interactive 3D Model
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model3DViewer;