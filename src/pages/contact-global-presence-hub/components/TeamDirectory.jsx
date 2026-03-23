import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TeamDirectory = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('leadership');

  const departments = [
    { id: 'leadership', name: 'Leadership', icon: 'Crown' },
    { id: 'aerospace', name: 'Aerospace', icon: 'Rocket' },
    { id: 'defense', name: 'Defense', icon: 'Shield' },
    { id: 'medical', name: 'Medical Robotics', icon: 'Heart' },
    { id: 'ai', name: 'AI & CAD', icon: 'Brain' },
    { id: 'gaming', name: 'Gaming', icon: 'Gamepad2' },
    { id: 'business', name: 'Business Dev', icon: 'Briefcase' }
  ];

  const teamMembers = {
    leadership: [
      {
        name: "Dr. Arjun Krishnamurthy",
        title: "Founder & CEO",
        email: "arjun.k@tech-mystrix.com",
        phone: "+91-98765-43210",
        expertise: ["Quantum Computing", "Aerospace Systems", "Strategic Vision"],
        bio: `Visionary leader with 15+ years in deep-tech innovation. Former ISRO scientist turned entrepreneur, leading Tech-Mystrix's mission to unlock new technological universes across multiple high-impact sectors.`,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        availability: "By appointment only",
        languages: ["English", "Hindi", "Tamil", "Sanskrit"]
      },
      {
        name: "Priya Sharma",
        title: "Chief Technology Officer",
        email: "priya.s@tech-mystrix.com",
        phone: "+91-98765-43211",
        expertise: ["AI Architecture", "System Integration", "R&D Strategy"],
        bio: `Technology architect with expertise in AI systems and cross-sector innovation. Leads our technical vision and ensures seamless integration across all technology domains.`,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        availability: "Monday-Friday, 10 AM - 4 PM IST",
        languages: ["English", "Hindi", "Punjabi"]
      }
    ],
    aerospace: [
      {
        name: "Wing Commander Rajesh Nair",
        title: "Head of Aerospace Division",
        email: "rajesh.n@tech-mystrix.com",
        phone: "+91-98765-43212",
        expertise: ["Satellite Systems", "Propulsion Technology", "Mission Planning"],
        bio: `Former Indian Air Force officer with 20+ years in aerospace technology. Leads our satellite and propulsion system development with deep expertise in mission-critical applications.`,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        availability: "Monday-Friday, 9 AM - 5 PM IST",
        languages: ["English", "Hindi", "Malayalam"]
      },
      {
        name: "Dr. Kavitha Reddy",
        title: "Senior Aerospace Engineer",
        email: "kavitha.r@tech-mystrix.com",
        phone: "+91-98765-43213",
        expertise: ["Orbital Mechanics", "Spacecraft Design", "Navigation Systems"],
        bio: `Aerospace engineer specializing in spacecraft design and orbital mechanics. PhD from IIT Bombay with extensive experience in satellite mission design and navigation systems.`,
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        availability: "Tuesday-Saturday, 10 AM - 6 PM IST",
        languages: ["English", "Telugu", "Hindi"]
      }
    ],
    defense: [
      {
        name: "Colonel Vikram Singh",
        title: "Defense Systems Director",
        email: "vikram.s@tech-mystrix.com",
        phone: "+91-98765-43214",
        expertise: ["Defense Strategy", "Tactical Systems", "Security Protocols"],
        bio: `Retired Army Colonel with extensive experience in defense technology and strategic planning. Leads our defense systems division with focus on next-generation tactical solutions.`,
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        availability: "Monday-Friday, 8 AM - 4 PM IST",
        languages: ["English", "Hindi", "Punjabi"]
      }
    ],
    medical: [
      {
        name: "Dr. Meera Patel",
        title: "Medical Robotics Lead",
        email: "meera.p@tech-mystrix.com",
        phone: "+91-98765-43215",
        expertise: ["Surgical Robotics", "Biomedical Engineering", "AI in Healthcare"],
        bio: `Biomedical engineer with specialization in surgical robotics and AI-driven healthcare solutions. Leading our medical robotics division with focus on precision surgery and patient care automation.`,
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
        availability: "Monday-Friday, 9 AM - 5 PM IST",
        languages: ["English", "Hindi", "Gujarati"]
      }
    ],
    ai: [
      {
        name: "Rohit Agarwal",
        title: "AI & CAD Solutions Head",
        email: "rohit.a@tech-mystrix.com",
        phone: "+91-98765-43216",
        expertise: ["Machine Learning", "CAD Automation", "Computer Vision"],
        bio: `AI researcher and CAD systems expert with focus on automated design solutions. Leads our AI-driven CAD platform development with expertise in machine learning and computer vision applications.`,
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        availability: "Monday-Friday, 11 AM - 7 PM IST",
        languages: ["English", "Hindi", "Bengali"]
      }
    ],
    gaming: [
      {
        name: "Ananya Iyer",
        title: "Gaming Universe Director",
        email: "ananya.i@tech-mystrix.com",
        phone: "+91-98765-43217",
        expertise: ["Game Development", "VR/AR Technology", "Interactive Design"],
        bio: `Game development expert with focus on immersive technologies and interactive experiences. Leads our gaming universe division, creating next-generation gaming platforms and VR/AR applications.`,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        availability: "Tuesday-Saturday, 12 PM - 8 PM IST",
        languages: ["English", "Tamil", "Hindi"]
      }
    ],
    business: [
      {
        name: "Suresh Kumar",
        title: "VP Business Development",
        email: "suresh.k@tech-mystrix.com",
        phone: "+91-98765-43218",
        expertise: ["Strategic Partnerships", "Investment Relations", "Market Expansion"],
        bio: `Business development leader with 12+ years in technology partnerships and investment relations. Manages strategic alliances and drives market expansion across all technology sectors.`,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        availability: "Monday-Friday, 9 AM - 6 PM IST",
        languages: ["English", "Hindi", "Kannada", "Marathi"]
      }
    ]
  };

  const currentMembers = teamMembers[selectedDepartment] || [];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Team Directory</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Connect directly with our experts across different technology sectors and departments
        </p>
      </div>

      {/* Department Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedDepartment === dept.id
                  ? 'bg-primary text-white shadow-subtle'
                  : 'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary border border-border'
              }`}
            >
              <Icon name={dept.icon} size={18} />
              <span>{dept.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentMembers.map((member, index) => (
          <div key={index} className="bg-surface rounded-lg shadow-subtle overflow-hidden hover:shadow-elevation transition-all duration-300">
            {/* Member Header */}
            <div className="p-6 border-b border-border-light">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{member.name}</h3>
                  <p className="text-sm text-text-secondary">{member.title}</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-text-secondary flex-shrink-0" />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm text-primary hover:underline truncate"
                  >
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-text-secondary flex-shrink-0" />
                  <a
                    href={`tel:${member.phone}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Member Details */}
            <div className="p-6">
              {/* Bio */}
              <div className="mb-4">
                <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
              </div>

              {/* Expertise */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-text-primary mb-2">Expertise</h4>
                <div className="flex flex-wrap gap-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary-100 text-primary-800 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                  <Icon name="Clock" size={14} className="mr-1" />
                  Availability
                </h4>
                <p className="text-xs text-text-secondary">{member.availability}</p>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                  <Icon name="Languages" size={14} className="mr-1" />
                  Languages
                </h4>
                <div className="flex flex-wrap gap-1">
                  {member.languages.map((language, langIndex) => (
                    <span
                      key={langIndex}
                      className="px-2 py-1 bg-accent-100 text-accent-800 rounded text-xs"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="flex space-x-2">
                <a
                  href={`mailto:${member.email}?subject=Inquiry from Tech-Mystrix Website`}
                  className="flex-1 btn-primary text-center text-sm py-2"
                >
                  <Icon name="Mail" size={14} className="mr-1" />
                  Email
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex-1 btn-secondary text-center text-sm py-2"
                >
                  <Icon name="Phone" size={14} className="mr-1" />
                  Call
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Department Overview */}
      <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing the Right Contact?</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Our team directory is organized by expertise areas. If you're unsure who to contact, 
            start with our Business Development team who can route your inquiry appropriately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setSelectedDepartment('business')}
              className="btn-secondary"
            >
              <Icon name="Users" size={18} className="mr-2" />
              Contact Business Development
            </button>
            <button
              onClick={() => setSelectedDepartment('leadership')}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <Icon name="Crown" size={18} className="mr-2" />
              Leadership Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDirectory;