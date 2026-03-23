import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const CulturalValues = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [assessmentResults, setAssessmentResults] = useState(null);

  const coreValues = [
    {
      id: 'scientific-rigor',
      title: 'Data-Driven Truth',
      icon: 'Microscope',
      color: 'from-blue-500 to-indigo-600',
      description: 'Every innovation grounded in rigorous research and empirical validation',
      manifestation: `We approach every challenge with the discipline of scientific method. Our R&D processes include peer review, controlled testing, and iterative refinement. No claim goes unvalidated, no assumption goes untested.

This manifests in our daily operations through mandatory research documentation, cross-team technical reviews, and evidence-based decision making. Every team member is trained in scientific methodology and critical thinking.`,
      practices: [
        'Peer-reviewed research protocols',
        'Evidence-based decision making',
        'Rigorous testing methodologies',
        'Continuous hypothesis validation'
      ]
    },
    {
      id: 'creative-audacity',
      title: 'Creative Audacity',
      icon: 'Palette',
      color: 'from-purple-500 to-pink-600',
      description: 'Bold imagination to tackle impossible challenges and create breakthrough solutions',
      manifestation: `We encourage radical thinking and unconventional approaches. Our innovation labs are designed to foster creative collision between disciplines, where aerospace engineers collaborate with game designers, and medical roboticists work alongside AI researchers.

Creative audacity means we're not afraid to fail fast, learn quickly, and iterate boldly. We celebrate intelligent failures as stepping stones to breakthrough innovations.`,
      practices: [
        'Cross-disciplinary innovation sessions','Rapid prototyping and iteration','Failure celebration and learning','Unconventional problem-solving approaches'
      ]
    },
    {
      id: 'indian-heritage',
      title: 'India`s Feauter',
      icon: 'Crown',
      color: 'from-orange-500 to-red-600',
      description: 'Leveraging ancient wisdom and systems thinking for modern technological challenges',
      manifestation: `Our Indian heritage provides unique perspectives on systems thinking, holistic problem-solving, and sustainable innovation. We draw inspiration from ancient texts on mathematics, astronomy, and engineering while applying modern scientific methods.

This heritage manifests in our approach to resource optimization, our understanding of interconnected systems, and our commitment to solutions that benefit humanity as a whole.`,
      practices: [
        'Systems thinking approach','Resource optimization strategies','Holistic problem-solving methods','Sustainable innovation practices'
      ]
    },
    {
      id: 'global-ambition',
      title: 'Global Ambition',
      icon: 'Globe'
      ,color: 'from-green-500 to-teal-600',
      description: 'Scaling innovations to address worldwide challenges and opportunities',
      manifestation: `While rooted in Indian wisdom, our vision is global. We design solutions that can scale across cultures, geographies, and economic systems. Our team includes diverse perspectives from around the world, ensuring our innovations are globally relevant.

Global ambition means thinking beyond local markets to address universal human challenges through technology convergence.`,
      practices: [
        'Global market analysis and adaptation','Cross-cultural team collaboration','Universal design principles','International partnership development'
      ]
    },
    {
      id: 'human-impact',
      title: 'Human Impact',
      icon: 'Heart',
      color: 'from-red-500 to-pink-600',
      description: 'Technology that enhances human potential and addresses real-world problems',
      manifestation: `Every technology we develop is evaluated through the lens of human impact. We ask not just "can we build this?" but "should we build this?" and "how will this improve human life?"

Our human impact focus ensures that technical excellence serves meaningful purposes, from advancing space exploration to improving medical outcomes to enhancing human creativity through gaming.`,
      practices: [
        'Human-centered design methodology','Impact assessment frameworks','Ethical technology development','Community feedback integration'
      ]
    }
  ];

  const assessmentQuestions = [
    {
      id: 'research-approach',
      question: 'How do you approach complex problems?',
      options: [
        { value: 'scientific-rigor', text: 'Through systematic research and data analysis' },
        { value: 'creative-audacity', text: 'By thinking outside the box and exploring unconventional solutions' },
        { value: 'human-impact', text: 'By first understanding the human need and working backwards' }
      ]
    },
    {
      id: 'innovation-style',
      question: 'What drives your innovation process?',
      options: [
        { value: 'global-ambition', text: 'Desire to create solutions that scale globally' },
        { value: 'indian-heritage', text: 'Drawing wisdom from traditional knowledge systems' },
        { value: 'creative-audacity', text: 'Pushing boundaries and challenging assumptions' }
      ]
    },
    {
      id: 'decision-making',
      question: 'How do you make important decisions?',
      options: [
        { value: 'scientific-rigor', text: 'Based on evidence and rigorous analysis' },
        { value: 'human-impact', text: 'Considering the broader impact on people and society' },
        { value: 'global-ambition', text: 'Thinking about long-term global implications' }
      ]
    }
  ];

  const [assessmentAnswers, setAssessmentAnswers] = useState({});

  const handleAssessmentAnswer = (questionId, value) => {
    setAssessmentAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateAssessmentResults = () => {
    const scores = {};
    Object.values(assessmentAnswers).forEach(answer => {
      scores[answer] = (scores[answer] || 0) + 1;
    });

    const topValue = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const alignment = Math.round((scores[topValue] / Object.keys(assessmentAnswers).length) * 100);

    setAssessmentResults({
      primaryValue: topValue,
      alignment: alignment,
      scores: scores
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-50">
        <h2 className="text-6xl md:text-6xl font-bold text-gradient mb-6">
          The Mystrix Compass
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Five core principles that guide our visionary pragmatism and shape our daily operations
        </p>
      </div>

      {/* Interactive Mandala */}
      <div className="relative mb-20">
        <div className="flex items-center justify-center">
          <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-elevation z-10">
              <Icon name="Zap" size={30} color="white" />
            </div>

            {/* Value Circles */}
            {coreValues.map((value, index) => {
              const angle = (index * 72) - 90; // 360/5 = 72 degrees apart, starting from top
              const radius = 150;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;

              return (
                <div
                  key={value.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`
                  }}
                  onClick={() => setSelectedValue(selectedValue === value.id ? null : value.id)}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center shadow-elevation transition-all duration-300 group-hover:scale-110 ${
                    selectedValue === value.id ? 'scale-125 shadow-glow' : ''
                  }`}>
                    <Icon name={value.icon} size={24} color="white" />
                  </div>
                  
                  {/* Value Label */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
                    <p className="text-sm font-semibold text-text-primary whitespace-nowrap">
                      {value.title}
                    </p>
                  </div>

                  {/* Connection Line */}
                  <div 
                    className="absolute w-0.1 bg-gradient-to-r from-primary to-accent opacity-30"
                    style={{
                      height: `${radius - 60}px`,
                      left: '50%',
                      top: '50%',
                      transformOrigin: 'top center',
                      transform: `translateX(-10%) rotate(${angle + 160}deg)`
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Value Details */}
        {selectedValue && (
          <div className="mt-12 max-w-4xl mx-auto">
            {coreValues
              .filter(value => value.id === selectedValue)
              .map(value => (
                <div key={value.id} className="card animation-quantum">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mr-4`}>
                      <Icon name={value.icon} size={24} color="white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">{value.title}</h3>
                      <p className="text-text-secondary">{value.description}</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-text-primary leading-relaxed whitespace-pre-line">
                      {value.manifestation}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-4">Daily Practices:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {value.practices.map((practice, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-primary-50 rounded-lg">
                          <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                          <span className="text-sm text-text-primary">{practice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Values Assessment Tool */}
      <div className="max-w-4xl mx-auto">
        <div className="card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Values Alignment Assessment
            </h3>
            <p className="text-gray-700">
              Discover which of our core values resonates most with your approach to innovation and problem-solving
            </p>
          </div>

          {!assessmentResults ? (
            <div className="space-y-8">
              {assessmentQuestions.map((question, index) => (
                <div key={question.id} className="space-y-4">
                  <h4 className="text-lg font-semibold text-black">
                    {index + 1}. {question.question}
                  </h4>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-primary-50 transition-colors duration-300"
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          onChange={(e) => handleAssessmentAnswer(question.id, e.target.value)}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="text-text-primary">{option.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <div className="text-center pt-6">
                <button
                  onClick={calculateAssessmentResults}
                  disabled={Object.keys(assessmentAnswers).length < assessmentQuestions.length}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon name="BarChart" size={20} className="mr-2" />
                  Calculate My Alignment
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="inline-block p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                <h4 className="text-2xl font-bold text-text-primary mb-4">
                  Your Primary Value Alignment
                </h4>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  {coreValues
                    .filter(value => value.id === assessmentResults.primaryValue)
                    .map(value => (
                      <div key={value.id} className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center`}>
                          <Icon name={value.icon} size={20} color="white" />
                        </div>
                        <span className="text-xl font-semibold text-text-primary">{value.title}</span>
                      </div>
                    ))}
                </div>
                <p className="text-lg text-primary font-semibold">
                  {assessmentResults.alignment}% Alignment
                </p>
              </div>

              <p className="text-text-secondary max-w-2xl mx-auto">
                Your approach to innovation and problem-solving strongly aligns with our {
                  coreValues.find(v => v.id === assessmentResults.primaryValue)?.title
                } value. This suggests you would thrive in our culture of visionary pragmatism.
              </p>

              <button
                onClick={() => {
                  setAssessmentResults(null);
                  setAssessmentAnswers({});
                }}
                className="btn-secondary"
              >
                <Icon name="RotateCcw" size={20} className="mr-2" />
                Take Assessment Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CulturalValues;