import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CollaborationStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const collaborations = [
    {
      id: 1,
      title: "ISRO Partnership: Quantum Navigation Systems",
      partner: "Indian Space Research Organisation",
      partnerLogo: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=100&h=100&fit=crop",
      sector: "Aerospace",
      duration: "2022 - Present",
      status: "Active",
      type: "Research Partnership",
      description: `Strategic collaboration with ISRO to develop next-generation quantum-enhanced navigation systems for deep space missions. This partnership combines Tech-Mystrix's quantum computing expertise with ISRO's space exploration experience.

The collaboration has resulted in breakthrough algorithms that provide unprecedented accuracy in spacecraft navigation, enabling more precise interplanetary missions and satellite positioning systems.`,
      achievements: [
        "Developed quantum navigation algorithm with 99.99% accuracy",
        "Successfully tested in 3 satellite missions",
        "Filed 4 joint patents for quantum navigation technology",
        "Reduced navigation errors by 95% compared to traditional systems"
      ],
      keyPersonnel: [
        { name: "Dr. Rajesh Kumar", role: "Lead Quantum Engineer", organization: "Tech-Mystrix" },
        { name: "Dr. Srinivas Rao", role: "Mission Director", organization: "ISRO" },
        { name: "Prof. Meera Sharma", role: "Quantum Systems Advisor", organization: "IIT Bombay" }
      ],
      milestones: [
        { date: "2022-03", event: "Partnership Agreement Signed", status: "completed" },
        { date: "2022-08", event: "First Prototype Development", status: "completed" },
        { date: "2023-02", event: "Satellite Testing Phase", status: "completed" },
        { date: "2023-09", event: "Commercial Implementation", status: "completed" },
        { date: "2024-06", event: "Deep Space Mission Integration", status: "in-progress" }
      ],
      impact: {
        technical: "Revolutionary quantum navigation accuracy",
        commercial: "$50M+ potential market value",
        strategic: "Positioned India as quantum space tech leader"
      },
      testimonial: {
        quote: "Tech-Mystrix\'s quantum navigation technology has transformed our mission capabilities. The precision and reliability achieved through this partnership exceed all our expectations.",
        author: "Dr. K. Sivan",
        position: "Former Chairman, ISRO"
      }
    },
    {
      id: 2,
      title: "AIIMS Collaboration: Neural Interface Prosthetics",
      partner: "All India Institute of Medical Sciences",
      partnerLogo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop",
      sector: "Medical Technology",
      duration: "2021 - Present",
      status: "Active",
      type: "Clinical Research Partnership",
      description: `Groundbreaking collaboration with AIIMS to develop advanced neural interface technology for prosthetic limbs. This partnership combines cutting-edge neuroscience research with innovative engineering solutions.

The project focuses on creating brain-computer interfaces that enable direct neural control of prosthetic devices with haptic feedback, significantly improving the quality of life for amputees and paralyzed patients.`,
      achievements: [
        "Developed first Indian neural interface prosthetic system",
        "Successfully implanted in 25+ patients with 95% success rate",
        "Reduced prosthetic control learning time by 70%",
        "Published 12 research papers in international journals"
      ],
      keyPersonnel: [
        { name: "Dr. Priya Reddy", role: "Biomedical Engineer", organization: "Tech-Mystrix" },
        { name: "Dr. Vikram Singh", role: "Neurosurgeon", organization: "AIIMS" },
        { name: "Dr. Anita Desai", role: "Neural Interface Specialist", organization: "Tech-Mystrix" }
      ],
      milestones: [
        { date: "2021-01", event: "Research Agreement Established", status: "completed" },
        { date: "2021-06", event: "First Prototype Testing", status: "completed" },
        { date: "2022-03", event: "Clinical Trials Initiated", status: "completed" },
        { date: "2023-01", event: "FDA Approval Process", status: "completed" },
        { date: "2024-01", event: "Commercial Production", status: "in-progress" }
      ],
      impact: {
        technical: "First neural interface system in India",
        commercial: "₹200Cr+ market potential in India",
        strategic: "Established India\'s medical device innovation capability"
      },
      testimonial: {
        quote: "The neural interface technology developed through this collaboration represents a quantum leap in prosthetic medicine. Our patients are experiencing unprecedented control and functionality.",
        author: "Dr. Randeep Guleria",
        position: "Director, AIIMS New Delhi"
      }
    },
    {
      id: 3,
      title: "DRDO Alliance: Autonomous Defense Systems",
      partner: "Defence Research and Development Organisation",
      partnerLogo: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=100&h=100&fit=crop",
      sector: "Defense Technology",
      duration: "2023 - Present",
      status: "Active",
      type: "Strategic Defense Partnership",
      description: `High-priority collaboration with DRDO to develop autonomous defense systems for border security and threat detection. This partnership leverages advanced AI and machine learning technologies for national security applications.

The project encompasses autonomous drones, threat detection systems, and intelligent surveillance networks that enhance India's defense capabilities while maintaining strategic autonomy in critical technologies.`,
      achievements: [
        "Deployed autonomous systems across 500+ km border area",
        "Achieved 98% threat detection accuracy",
        "Reduced response time by 80% for border incidents",
        "Developed indigenous AI algorithms for defense applications"
      ],
      keyPersonnel: [
        { name: "Col. Suresh Nair", role: "Defense Systems Lead", organization: "Tech-Mystrix" },
        { name: "Dr. Anil Kumar", role: "AI Research Director", organization: "DRDO" },
        { name: "Maj. Kavita Joshi", role: "Field Operations Specialist", organization: "DRDO" }
      ],
      milestones: [
        { date: "2023-01", event: "Strategic Partnership Signed", status: "completed" },
        { date: "2023-04", event: "Prototype Development", status: "completed" },
        { date: "2023-08", event: "Field Testing Initiated", status: "completed" },
        { date: "2024-01", event: "Border Deployment Phase 1", status: "completed" },
        { date: "2024-08", event: "Full Scale Implementation", status: "in-progress" }
      ],
      impact: {
        technical: "Indigenous autonomous defense technology",
        commercial: "₹1000Cr+ defense contract potential",
        strategic: "Enhanced national security capabilities"
      },
      testimonial: {
        quote: "Tech-Mystrix\'s autonomous defense systems have significantly enhanced our border security capabilities. The technology is world-class and perfectly suited for Indian conditions.",
        author: "Dr. G. Satheesh Reddy",
        position: "Former Chairman, DRDO"
      }
    },
    {
      id: 4,
      title: "Stanford Medical Partnership: Advanced Robotics",
      partner: "Stanford University Medical Center",
      partnerLogo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop",
      sector: "Medical Robotics",
      duration: "2022 - 2024",
      status: "Completed",
      type: "International Research Collaboration",
      description: `International collaboration with Stanford Medical Center to advance surgical robotics and medical automation technologies. This partnership brought together world-class medical expertise with innovative engineering solutions.

The collaboration focused on developing next-generation surgical robots with enhanced precision, AI-assisted decision making, and improved patient outcomes through minimally invasive procedures.`,
      achievements: [
        "Developed AI-assisted surgical robot with 99.5% precision",
        "Reduced surgery time by 40% for complex procedures",
        "Published joint research in Nature Medicine",
        "Established technology transfer agreement"
      ],
      keyPersonnel: [
        { name: "Dr. Meera Patel", role: "Robotics Engineer", organization: "Tech-Mystrix" },
        { name: "Dr. James Wilson", role: "Chief of Surgery", organization: "Stanford Medical" },
        { name: "Prof. Sarah Chen", role: "Medical AI Researcher", organization: "Stanford University" }
      ],
      milestones: [
        { date: "2022-02", event: "Collaboration Agreement", status: "completed" },
        { date: "2022-07", event: "Joint Research Initiated", status: "completed" },
        { date: "2023-03", event: "First Surgical Trial", status: "completed" },
        { date: "2023-10", event: "Clinical Validation", status: "completed" },
        { date: "2024-02", event: "Technology Transfer", status: "completed" }
      ],
      impact: {
        technical: "Advanced surgical robotics platform",
        commercial: "$100M+ global market opportunity",
        strategic: "Established international medical tech credibility"
      },
      testimonial: {
        quote: "The surgical robotics technology developed with Tech-Mystrix represents the future of precision medicine. The innovation and engineering excellence are truly remarkable.",
        author: "Dr. Lloyd Minor",
        position: "Dean, Stanford School of Medicine"
      }
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'text-green-600 bg-green-50',
      'Completed': 'text-blue-600 bg-blue-50',
      'Planning': 'text-yellow-600 bg-yellow-50'
    };
    return colors[status] || 'text-gray-600 bg-gray-50';
  };

  const getMilestoneStatus = (status) => {
    const colors = {
      'completed': 'text-green-600 bg-green-100',
      'in-progress': 'text-blue-600 bg-blue-100',
      'planned': 'text-gray-600 bg-gray-100'
    };
    return colors[status] || 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">ℹ️Collaboration Stories</h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Strategic partnerships with leading institutions and organizations that drive 
          innovation and create breakthrough technologies for global impact.
        </p>
      </div>

      {/* Collaborations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {collaborations.map((collaboration) => (
          <div key={collaboration.id} className="card hover:shadow-elevation transition-all duration-300">
            {/* Header */}
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={collaboration.partnerLogo}
                    alt={collaboration.partner}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(collaboration.status)}`}>
                    {collaboration.status}
                  </span>
                  <span className="text-xs text-text-secondary">{collaboration.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">{collaboration.title}</h3>
                <p className="text-sm text-text-secondary">{collaboration.partner}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                {collaboration.description}
              </p>
            </div>

            {/* Key Achievements */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Key Achievements</h4>
              <div className="space-y-1">
                {collaboration.achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-text-secondary">{achievement}</span>
                  </div>
                ))}
                {collaboration.achievements.length > 3 && (
                  <button
                    onClick={() => setSelectedStory(collaboration)}
                    className="text-xs text-primary hover:text-primary-600 font-medium"
                  >
                    +{collaboration.achievements.length - 3} more achievements
                  </button>
                )}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-3 gap-3 py-3 border-t border-border-light mb-4">
              <div className="text-center">
                <div className="text-sm font-semibold text-primary">{collaboration.sector}</div>
                <div className="text-xs text-text-secondary">Sector</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-primary">{collaboration.type}</div>
                <div className="text-xs text-text-secondary">Type</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-primary">{collaboration.keyPersonnel.length}</div>
                <div className="text-xs text-text-secondary">Key Personnel</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-text-secondary">
                <Icon name="Users" size={12} />
                <span>{collaboration.keyPersonnel.length} Team Members</span>
              </div>
              <button
                onClick={() => setSelectedStory(collaboration)}
                className="text-primary hover:text-primary-600 text-sm font-medium transition-colors duration-200"
              >
                View Full Story
                <Icon name="ArrowRight" size={14} className="inline ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 transition-opacity bg-black bg-opacity-75 backdrop-blur-sm"
              onClick={() => setSelectedStory(null)}
            ></div>

            {/* Modal */}
            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-surface shadow-xl rounded-2xl">
              {/* Header */}
              <div className="relative px-6 py-4 border-b border-border-light">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={selectedStory.partnerLogo}
                        alt={selectedStory.partner}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-text-primary">{selectedStory.title}</h2>
                      <p className="text-text-secondary">{selectedStory.partner}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="p-2 text-text-secondary hover:text-text-primary hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-6 max-h-96 overflow-y-auto space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Partnership Overview</h3>
                  <p className="text-text-secondary leading-relaxed">{selectedStory.description}</p>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Key Achievements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedStory.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-2 p-3 bg-green-50 rounded-lg">
                        <Icon name="CheckCircle" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Project Timeline</h3>
                  <div className="space-y-3">
                    {selectedStory.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          milestone.status === 'completed' ? 'bg-green-500' :
                          milestone.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                        }`}></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-text-primary">{milestone.event}</span>
                            <span className="text-xs text-text-secondary">{milestone.date}</span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMilestoneStatus(milestone.status)}`}>
                          {milestone.status.replace('-', ' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Partnership Impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-1">Technical Impact</h4>
                      <p className="text-sm text-blue-700">{selectedStory.impact.technical}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-1">Commercial Impact</h4>
                      <p className="text-sm text-green-700">{selectedStory.impact.commercial}</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-1">Strategic Impact</h4>
                      <p className="text-sm text-purple-700">{selectedStory.impact.strategic}</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Quote" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-text-primary italic mb-3">"{selectedStory.testimonial.quote}"</p>
                      <div>
                        <p className="font-medium text-text-primary">{selectedStory.testimonial.author}</p>
                        <p className="text-sm text-text-secondary">{selectedStory.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Partnership Stats */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-text-primary mb-2">ℹ️Partnership Impact</h3>
          <p className="text-text-secondary">Building the future through strategic collaborations</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">{collaborations.length}</div>
            <div className="text-sm text-text-secondary">Active Partnerships</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              {collaborations.filter(c => c.status === 'Active').length}
            </div>
            <div className="text-sm text-text-secondary">Ongoing Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-text-secondary">Joint Publications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">₹2000Cr+</div>
            <div className="text-sm text-text-secondary">Combined Value</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationStories;