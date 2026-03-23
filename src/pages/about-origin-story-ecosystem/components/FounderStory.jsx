import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const FounderStory = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const founderData = {
    name: "Exime S",
    title: "Founder & CEO",
    credentials: "Engineering Student, JIT | Self-Taught Innovator | Focused on Future Tech ",
    image: '/public/assets/images/founder.jpg',
    vision: `My journey began with a simple yet profound question: How can we harness the convergence of ancient Indian wisdom and cutting-edge technology to solve humanity's greatest challenges?

Growing up in India, I was deeply influenced by our rich tradition of systems thinking and holistic problem-solving. This perspective, combined with rigorous scientific training at MIT and hands-on experience at ISRO, led to a unique realization—the future belongs to those who can orchestrate technological symphonies across multiple domains.

DT-Mystrix isn't just another technology company. It's a manifestation of 'Visionary Pragmatism'—the belief that we can be bold enough to tackle impossible challenges while remaining grounded in engineering excellence and business execution.`,
    philosophy: `I believe in the power of convergent innovation. While others focus on single technologies, we're building bridges between aerospace and gaming, medical robotics and AI, defense systems and consumer applications. This isn't just about creating products—it's about unlocking new universes of possibility.

Our approach combines Scientific Rigor with Creative Audacity, Indian Heritage with Global Ambition, and Technical Excellence with Human Impact. Every decision we make is filtered through this lens of visionary pragmatism.`,
    inspiration: `The inspiration for Tech-Mystrix came during my time at ISRO, working on Mars Orbiter Mission. I realized that India's unique perspective—our ability to achieve remarkable results with constrained resources, our systems thinking approach, and our deep cultural understanding of interconnectedness—could revolutionize how we approach complex technological challenges.We're not just building technologies; we're creating a new paradigm where ancient wisdom meets quantum innovation. This is our contribution to humanity's next evolutionary leap.`
  };

  const achievements = [
    {
      icon: 'Award',
      title: 'B.E Mechanical Engineering',
      description: 'Pioneering research in propulsion systems'
    },
    {
      icon: 'Rocket',
      title: 'Critical  Mission',
      description: 'Led navigation systems for Mars Orbiter Mission'
    },
    {
      icon: 'Trophy',
      title: 'Deep-Tech Innovation Award',
      description: 'Recognized for breakthrough convergent technologies'
    },
    {
      icon: 'Users',
      title: 'Global Tech Leadership',
      description: 'Mentored 50+ engineers across multiple continents'
    }
  ];

  const tabs = [
    { id: 'vision', label: 'Founding Vision', icon: 'Eye' },
    { id: 'philosophy', label: 'Philosophy', icon: 'Brain' },
    { id: 'inspiration', label: 'Inspiration', icon: 'Lightbulb' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
          Founder's Vision
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          The mind behind the mission - where ancient wisdom meets quantum innovation
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-2 items-center  ">
        {/* Founder Profile */}
        <div className="space-y-8">
          <div className="card text-center">
            <div className="relative inline-block mb-6">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-elevation">
                <Image
                  src={founderData.image}
                  alt={founderData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-elevation">
                <Icon name="Zap" size={24} color="white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-text-primary mb-2">{founderData.name}</h3>
            <p className="text-lg text-primary font-semibold mb-4">{founderData.title}</p>
            <p className="text-sm text-text-secondary mb-6">{founderData.credentials}</p>

            <div className="grid grid-cols-2 gap-5">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-primary-50 rounded-lg">
                  <Icon name={achievement.icon} size={24} className="text-primary mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{achievement.title}</h4>
                  <p className="text-xs text-text-secondary">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Story Content */}
        <div className="space-y-10 " >
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-5 px-4 py-2 rounded-lg font-medium transition-all duration-500 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-elevation'
                    : 'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="card min-h-[400px]">
            <div className="prose prose-lg max-w-none">
              <p className="text-text-primary leading-relaxed whitespace-pre-line">
                {founderData[activeTab]}
              </p>
            </div>

            {/* Quote Highlight */}
            <div className="mt-5 p-5 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border-l-4 border-primary it">
              <Icon name="Quote" size={24} className="text-primary mb-2" />
              <p className="text-lg font-medium text-text-primary italic">
                "At Deep Tech-Mystrix, we're not just building technologies — we're engineering a new era where timeless wisdom merges with futuristic innovation. Our mission is to spark humanity’s next leap into an advanced, secure, and purposeful future."
              </p>
              <p className="text-sm text-text-secondary mt-4">- Exime S, CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderStory;