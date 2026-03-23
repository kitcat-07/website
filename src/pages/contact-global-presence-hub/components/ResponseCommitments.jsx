import React from 'react';
import Icon from 'components/AppIcon';

const ResponseCommitments = () => {
  const responseCommitments = [
    {
      type: "Investment Inquiries",
      icon: "TrendingUp",
      responseTime: "< 2 hours",
      sla: "Same business day",
      process: "Direct routing to investment team → Initial assessment → Scheduled call within 24 hours",
      color: "text-success",
      bgColor: "bg-success-50",
      borderColor: "border-success-200"
    },
    {
      type: "Partnership Opportunities",
      icon: "Handshake",
      responseTime: "< 4 hours",
      sla: "Within 1 business day",
      process: "Business development review → Compatibility assessment → Partnership discussion setup",
      color: "text-primary",
      bgColor: "bg-primary-50",
      borderColor: "border-primary-200"
    },
    {
      type: "Technical Collaboration",
      icon: "Users",
      responseTime: "< 6 hours",
      sla: "Within 1-2 business days",
      process: "Technical team evaluation → Expertise matching → Collaboration framework discussion",
      color: "text-secondary",
      bgColor: "bg-secondary-50",
      borderColor: "border-secondary-200"
    },
    {
      type: "Media Inquiries",
      icon: "Mic",
      responseTime: "< 3 hours",
      sla: "Same business day",
      process: "Media team review → Information gathering → Response or interview scheduling",
      color: "text-accent-600",
      bgColor: "bg-accent-50",
      borderColor: "border-accent-200"
    },
    {
      type: "General Questions",
      icon: "MessageCircle",
      responseTime: "< 8 hours",
      sla: "Within 2 business days",
      process: "Initial triage → Appropriate team routing → Comprehensive response preparation",
      color: "text-text-secondary",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    },
    {
      type: "Career Inquiries",
      icon: "Briefcase",
      responseTime: "< 12 hours",
      sla: "Within 3 business days",
      process: "HR team review → Role matching → Interview process initiation if suitable",
      color: "text-quantum-purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  const trackingFeatures = [
    {
      icon: "Hash",
      title: "Unique Tracking Number",
      description: "Every inquiry receives a unique tracking number for easy follow-up and status checking"
    },
    {
      icon: "Bell",
      title: "Automated Confirmations",
      description: "Instant email confirmation with tracking details and expected response timeline"
    },
    {
      icon: "BarChart3",
      title: "Status Updates",
      description: "Regular updates on inquiry status with transparent progress tracking"
    },
    {
      icon: "Clock",
      title: "SLA Monitoring",
      description: "Real-time monitoring of response times to ensure we meet our commitments"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Response Time Commitments</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We understand the importance of timely communication. Here are our response commitments 
            for different types of inquiries with transparent SLAs.
          </p>
        </div>

        {/* Response Time Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {responseCommitments.map((commitment, index) => (
            <div
              key={index}
              className={`${commitment.bgColor} ${commitment.borderColor} border rounded-lg p-6 hover:shadow-subtle transition-all duration-300`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 ${commitment.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon name={commitment.icon} size={20} className={commitment.color} />
                </div>
                <h3 className="font-semibold text-text-primary">{commitment.type}</h3>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">Initial Response:</span>
                  <span className={`font-semibold ${commitment.color}`}>{commitment.responseTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">Full Response SLA:</span>
                  <span className={`font-semibold ${commitment.color}`}>{commitment.sla}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-medium text-text-primary mb-2">Process Flow:</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{commitment.process}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry Tracking System */}
        <div className="bg-gradient-to-r from-deep-space to-quantum-blue rounded-lg p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Inquiry Tracking System</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our advanced tracking system ensures transparency and accountability in all communications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackingFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={feature.icon} size={24} className="text-accent" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours & Timezone Coverage */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Clock" size={24} className="mr-3 text-primary" />
              Business Hours Coverage
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-text-secondary">India (IST):</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">US West (PST):</span>
                <span className="font-medium">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Europe (GMT):</span>
                <span className="font-medium">9:00 AM - 5:00 PM</span>
              </div>
              <div className="border-t border-primary-200 pt-3 mt-4">
                <p className="text-sm text-text-secondary">
                  <strong>Emergency Support:</strong> 24/7 for critical technical and partnership matters
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Target" size={24} className="mr-3 text-secondary" />
              Quality Assurance
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm">95%+ response time adherence</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm">Dedicated team for each inquiry type</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm">Follow-up until resolution</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm">Satisfaction tracking & feedback</span>
              </div>
            </div>
          </div>
        </div>

        {/* Escalation Process */}
        <div className="mt-12 bg-warning-50 border border-warning-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Icon name="AlertTriangle" size={24} className="text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Escalation Process</h3>
              <p className="text-text-secondary mb-4">
                If you don't receive a response within our committed timeframe, or if your inquiry requires urgent attention:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Standard Escalation:</h4>
                  <p className="text-sm text-text-secondary">
                    Email: escalation@tech-mystrix.com<br />
                    Include your tracking number and original inquiry details
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Urgent Escalation:</h4>
                  <p className="text-sm text-text-secondary">
                    Phone: +91-98765-43200<br />
                    Available 24/7 for critical matters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponseCommitments;