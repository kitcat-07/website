import React from 'react';
import Icon from 'components/AppIcon';

const SectorTrack = ({ sectorKey, sectorData, sectorColors, sectorIcons, isExpanded }) => {
  return (
    <div className={`bg-gradient-to-r ${sectorColors[sectorKey]} p-0.5 rounded-lg`}>
      <div className="bg-deep-space/90 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${sectorColors[sectorKey]} flex items-center justify-center`}>
              <Icon name={sectorIcons[sectorKey]} size={20} className="text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white capitalize">{sectorKey}</h4>
              <div className="text-sm text-gray-300">{sectorData.investment} Investment</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-300">Partnerships</div>
            <div className="text-white font-medium">{sectorData.partnerships.length}</div>
          </div>
        </div>

        {/* Milestones */}
        <div className="space-y-2 mb-4">
          {sectorData.milestones.map((milestone, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              <span className="text-gray-300 text-sm">{milestone}</span>
            </div>
          ))}
        </div>

        {/* Partnership Details */}
        {isExpanded && (
          <div className="border-t border-white/10 pt-4 animate-fadeIn">
            <h5 className="text-white font-medium mb-2">Strategic Partnerships</h5>
            <div className="flex flex-wrap gap-2">
              {sectorData.partnerships.map((partner, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-surface/20 rounded-full text-xs text-gray-300"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectorTrack;