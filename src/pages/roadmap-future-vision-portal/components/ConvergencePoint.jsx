import React from 'react';
import Icon from 'components/AppIcon';

const ConvergencePoint = ({ point, index }) => {
  const convergenceIcons = ["Zap", "Atom", "Cpu", "Dna", "Orbit"];
  const convergenceColors = [
    "from-accent to-cyan-300",
    "from-quantum-purple to-violet-300",
    "from-plasma-orange to-orange-300",
    "from-success to-green-300",
    "from-pink-500 to-rose-300"
  ];

  return (
    <div className="bg-surface/20 rounded-lg p-4 hover:bg-surface/30 transition-all duration-300 group">
      <div className="flex items-start space-x-3">
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${convergenceColors[index % convergenceColors.length]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <Icon 
            name={convergenceIcons[index % convergenceIcons.length]} 
            size={16} 
            className="text-white" 
          />
        </div>
        <div>
          <p className="text-white font-medium text-sm group-hover:text-accent transition-colors duration-300">
            {point}
          </p>
          <div className="text-xs text-gray-400 mt-1">
            Cross-sector innovation breakthrough
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvergencePoint;