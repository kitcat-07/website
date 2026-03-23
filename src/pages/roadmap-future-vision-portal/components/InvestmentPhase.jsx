import React from 'react';


const InvestmentPhase = ({ yearData, sectorColors }) => {
  const totalInvestmentValue = parseFloat(yearData.totalInvestment.replace('$', '').replace('M', ''));
  const roiValue = yearData.expectedROI.replace('%', '').replace('+', '');

  return (
    <div className="bg-surface/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold text-white">{yearData.year}</div>
        <div className="text-right">
          <div className="text-2xl font-bold text-accent">{yearData.totalInvestment}</div>
          <div className="text-sm text-gray-300">Investment</div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
        {yearData.title}
      </h3>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">Expected ROI</span>
          <span className="text-quantum-purple font-semibold">{yearData.expectedROI}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">Convergence Points</span>
          <span className="text-plasma-orange font-semibold">{yearData.convergencePoints.length}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">Active Sectors</span>
          <span className="text-success font-semibold">{Object.keys(yearData.sectors).length}</span>
        </div>
      </div>

      {/* Investment Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-400">Investment Scale</span>
          <span className="text-xs text-gray-400">{Math.round((totalInvestmentValue / 273.7) * 100)}%</span>
        </div>
        <div className="w-full bg-surface/20 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-accent to-quantum-purple h-2 rounded-full transition-all duration-1000 group-hover:shadow-glow"
            style={{ width: `${Math.min((totalInvestmentValue / 273.7) * 100, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Sector Distribution */}
      <div className="grid grid-cols-5 gap-1">
        {Object.entries(yearData.sectors).map(([sectorKey, sectorData]) => {
          const sectorInvestment = parseFloat(sectorData.investment.replace('$', '').replace('M', ''));
          const percentage = (sectorInvestment / totalInvestmentValue) * 100;
          
          return (
            <div
              key={sectorKey}
              className={`h-2 rounded bg-gradient-to-r ${sectorColors[sectorKey]} opacity-70 hover:opacity-100 transition-opacity duration-300`}
              title={`${sectorKey}: ${sectorData.investment} (${Math.round(percentage)}%)`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default InvestmentPhase;