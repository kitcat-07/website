import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const ProjectUpdates = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const projectUpdates = [
    {
      id: 1,
      project: 'Advanced Propulsion Engine',
      sector: 'Aerospace',
      status: 'In Progress',
      progress: 78,
      lastUpdate: new Date(Date.now() - 1800000), // 30 minutes ago
      milestone: 'Thrust vectoring system integration completed',
      nextPhase: 'High-altitude testing phase',
      team: 'Dr. Rajesh Kumar & Team',
      priority: 'high',
      icon: 'Rocket'
    },
    {
      id: 2,
      project: 'Neural Defense Matrix',
      sector: 'Defense',
      status: 'Testing',
      progress: 92,
      lastUpdate: new Date(Date.now() - 3600000), // 1 hour ago
      milestone: 'Real-time threat detection accuracy: 99.9%',
      nextPhase: 'Field deployment preparation',
      team: 'Col. Priya Sharma & Team',
      priority: 'critical',
      icon: 'Shield'
    },
    {
      id: 3,
      project: 'Nano-Surgical Bot',
      sector: 'Medical Robotics',
      status: 'Clinical Trials',
      progress: 65,
      lastUpdate: new Date(Date.now() - 7200000), // 2 hours ago
      milestone: 'Phase II clinical trials approved',
      nextPhase: 'Extended patient testing',
      team: 'Dr. Anita Patel & Team',
      priority: 'high',
      icon: 'Heart'
    },
    {
      id: 4,
      project: 'Generative CAD Engine',
      sector: 'AI CAD',
      status: 'Development',
      progress: 45,
      lastUpdate: new Date(Date.now() - 10800000), // 3 hours ago
      milestone: 'Machine learning model training completed',
      nextPhase: 'User interface development',
      team: 'Arjun Singh & Team',
      priority: 'medium',
      icon: 'Brain'
    },
    {
      id: 5,
      project: 'Quantum Gaming Engine',
      sector: 'Gameverse',
      status: 'Alpha Testing',
      progress: 83,
      lastUpdate: new Date(Date.now() - 14400000), // 4 hours ago
      milestone: 'Immersive VR integration successful',
      nextPhase: 'Beta release preparation',
      team: 'Kavya Reddy & Team',
      priority: 'high',
      icon: 'Gamepad2'
    }
  ];

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else {
      const diffInHours = Math.floor(diffInMinutes / 60);
      return `${diffInHours}h ago`;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'text-red-500 bg-red-50';
      case 'high': return 'text-orange-500 bg-orange-50';
      case 'medium': return 'text-blue-500 bg-blue-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'text-blue-600 bg-blue-100';
      case 'Testing': return 'text-yellow-600 bg-yellow-100';
      case 'Clinical Trials': return 'text-purple-600 bg-purple-100';
      case 'Development': return 'text-indigo-600 bg-indigo-100';
      case 'Alpha Testing': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animation-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-quantum-purple/10 rounded-full blur-3xl animation-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-success rounded-full animation-quantum"></div>
            <span className="text-success font-medium text-sm uppercase tracking-wide">
              Live Updates
            </span>
            <div className="text-text-secondary text-sm">
              {currentTime.toLocaleTimeString()}
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Real-Time Project Progress
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Transparent development tracking across all five technology sectors. 
            Witness breakthrough moments as they happen and stay connected to our innovation journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-quantum-purple mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Project Updates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectUpdates.map((update) => (
            <div key={update.id} className="card hover:shadow-elevation transition-all duration-300 group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={update.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                      {update.project}
                    </h3>
                    <p className="text-sm text-text-secondary">{update.sector}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(update.status)}`}>
                    {update.status}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getPriorityColor(update.priority)}`}>
                    {update.priority.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-secondary">Progress</span>
                  <span className="text-sm font-semibold text-text-primary">{update.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-accent to-quantum-purple h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${update.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Latest Milestone */}
              <div className="mb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0 animation-quantum"></div>
                  <div>
                    <div className="text-sm font-medium text-text-primary mb-1">Latest Milestone</div>
                    <div className="text-sm text-text-secondary leading-relaxed">{update.milestone}</div>
                  </div>
                </div>
              </div>

              {/* Next Phase */}
              <div className="mb-4">
                <div className="flex items-start space-x-3">
                  <Icon name="ArrowRight" size={16} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-text-primary mb-1">Next Phase</div>
                    <div className="text-sm text-text-secondary leading-relaxed">{update.nextPhase}</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border-light">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">{update.team}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">{formatTimeAgo(update.lastUpdate)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { label: 'Active Projects', value: 'ℹ️15+', icon: 'Activity', color: 'from-blue-500 to-cyan-400' },
            { label: 'Team Members', value: 'ℹ️50+', icon: 'Users', color: 'from-green-500 to-emerald-400' },
            { label: 'Milestones This Month', value: 'ℹ️23', icon: 'Target', color: 'from-purple-500 to-pink-400' },
            { label: 'Innovation Hours', value: 'ℹ️2.4K', icon: 'Clock', color: 'from-orange-500 to-red-400' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3 animation-quantum`}>
                <Icon name={stat.icon} size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectUpdates;