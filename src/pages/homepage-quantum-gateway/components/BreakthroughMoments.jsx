import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const BreakthroughMoments = () => {
  const [activeBreakthrough, setActiveBreakthrough] = useState(0);

  const breakthroughs = [
    {
      id: 0,
      title: 'Smart Magnetic-Planetary Hybrid (SMPH) Engine',
      sector: 'Aerospace',
      description: `Revolutionary propulsion system that harnesses quantum field fluctuations for unprecedented efficiency. Our prototype demonstrates 300% improvement in thrust-to-weight ratio compared to conventional engines.

The breakthrough combines ancient Indian mathematical principles with quantum mechanics, creating a propulsion paradigm that could transform space exploration and atmospheric flight.`,
      image: '/public/assets/images/engine 01.jpg',
      techSpecs: [
        'Thrust-to-weight ratio: 15:1',
        'Fuel efficiency: 300% improvement',
        'Operating temperature: -200°C to 2000°C',
        'Quantum field stability: 99.7%'
      ],
      status: 'Concept Developing',
      timeline: 'Q2 2025 Commercial Ready'
    },
    {
      id: 1,
      title: 'Neural Defense Matrix',
      sector: 'Defense',
      description: `AI-powered defense system that predicts and neutralizes threats before they materialize. Using advanced machine learning algorithms, it processes millions of data points in real-time.

The system integrates seamlessly with existing defense infrastructure while providing unprecedented situational awareness and response capabilities.`,
      image: '/public/assets/images/Missile & Hypersonic Technologies.jpg',
      techSpecs: [
        'Threat detection: 99.9% accuracy',
        'Response time: <0.1 seconds',
        'Data processing: 10TB/second',
        'Integration compatibility: 95%'
      ],
      status: 'Field Testing',
      timeline: 'Q4 2024 Deployment'
    },
    {
      id: 2,
      title: 'Nano-Surgical Precision Bot',
      sector: 'Medical Robotics',
      description: `Microscopic surgical robot capable of performing operations at the cellular level. The bot uses bio-compatible materials and AI-guided navigation for unprecedented surgical precision.

This breakthrough enables minimally invasive procedures with zero scarring and dramatically reduced recovery times, revolutionizing surgical medicine.`,
      image: '/public/assets/images/Nano_Micro-Robotics for Internal Surgery 04.jpg',
      techSpecs: [
        'Operating precision: 0.1 microns',
        'Bio-compatibility: 100%',
        'Battery life: 72 hours',
        'Success rate: 99.8%'
      ],
      status: 'Clinical Trials',
      timeline: 'Q3 2025 FDA Approval'
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animation-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-quantum-purple/5 rounded-full blur-2xl animation-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Featured Breakthrough Moments
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Witness the impossible becoming reality through our cutting-edge prototypes, 
            technical achievements, and revolutionary innovations that are reshaping entire industries.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-quantum-purple mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Breakthrough Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Preview */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-elevation group">
              <div className="aspect-video relative">
                <Image
                  src={breakthroughs[activeBreakthrough].image}
                  alt={breakthroughs[activeBreakthrough].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* 3D Model Indicator */}
                <div className="absolute top-4 right-4 bg-accent/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-2">
                  <Icon name="Box" size={16} className="text-white" />
                  <span className="text-white text-sm font-medium">3D Model</span>
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-4 left-4 bg-success/20 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-white text-sm font-medium">
                    {breakthroughs[activeBreakthrough].status}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 group-hover:scale-110">
                    <Icon name="Play" size={24} className="text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {breakthroughs[activeBreakthrough].techSpecs.map((spec, index) => (
                <div key={index} className="bg-surface rounded-lg p-4 shadow-subtle">
                  <div className="text-sm text-text-secondary mb-1">
                    {spec.split(':')[0]}
                  </div>
                  <div className="text-lg font-semibold text-text-primary">
                    {spec.split(':')[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Sector Badge */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-red-600 rounded-full animation-quantum"></div>
              <span className="text-red-600 font-medium text-sm uppercase tracking-wide">
                {breakthroughs[activeBreakthrough].sector}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              {breakthroughs[activeBreakthrough].title}
            </h3>

            <div className="prose prose-lg max-w-none text-text-secondary mb-8">
              <p className="mb-4">{breakthroughs[activeBreakthrough].description}</p>
            </div>

            {/* Timeline */}
            <div className="bg-primary-50 rounded-lg p-4 mb-8">
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={20} className="text-primary" />
                <div>
                  <div className="text-sm text-text-secondary">Timeline</div>
                  <div className="font-semibold text-text-primary">
                    {breakthroughs[activeBreakthrough].timeline}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {breakthroughs.map((breakthrough, index) => (
                <button
                  key={breakthrough.id}
                  onClick={() => setActiveBreakthrough(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeBreakthrough === index
                      ? 'bg-primary text-white shadow-subtle'
                      : 'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary'
                  }`}
                >
                  {breakthrough.title.split(' ')[0]} {breakthrough.title.split(' ')[1]}
                </button>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/portfolio-innovation-laboratory"
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <Icon name="ArrowRight" size={20} />
              <span>Explore Technologies</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakthroughMoments;