import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [showTagline, setShowTagline] = useState();
  const fullText = '';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowTagline(true), 500);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Quantum Particle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-quantum-blue to-primary">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Animated Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animation-quantum"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-plasma-orange rounded-full animation-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-quantum-purple rounded-full animation-glow"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-accent rounded-full animation-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-2/3 w-1 h-1 bg-plasma-orange rounded-full animation-quantum" style={{ animationDelay: '5s' }}></div>
      </div>

    

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4 ">
            <p className="text-xl md:text-5xl text-sky-400 mb-2 ">
                Deep Tech-Mystix
              </p>
            
          </h1>
          
          
            <div className="animate-fade-in">
              <p className="text-xl md:text-2xl text-gray-200 mb-2 font-light">
                Engineering the Future | Powered by Wisdom, Driven by Innovation
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-quantum-purple mx-auto rounded-full"></div>
            </div>
        </div>

        {/* Description */}
        
          <div className="animate-none  mb-12">
            <p className="text-lg md:text-xl text-gray-300 max-w-6xl mx-auto leading-relaxed mb-20">
              Deep Tech-Mystix stands at the forefront of India’s deep-tech revolution—pioneering 
              breakthrough solutions across Aerospace, Defense, Medical Robotics, AI-driven Software, and Gaming.
              We don’t just follow trends; we create new paradigms
              that amplify human potential, redefine industries, and unlock dimensions of progress previously unimagined.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/homepage-quantum-gateway"
                className="inline-flex items-center space-x-2 btn-primary text-lg px-8 py-4 animation-quantum">
                <Icon name="Rocket" size={22} className="mr-2" />
                <span>Explore</span>
              </Link>

              <Link
                to="/services-technology-sectors-universe"
               className="inline-flex items-center space-x-2 btn-secondary text-lg px-8 py-4 animate-quantum-pulse"
              >
                <Icon name="Compass" size={22} className="mr-5" />
                Explore Technologies
              </Link>
            </div>
          </div>
        

        {/* Scroll Indicator */}
        {showTagline && (
          <div className="animate-fade-in animation-delay-1000 absolute bottom left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-white text-sm font-medium">Discover More</span>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center ">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce "></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;