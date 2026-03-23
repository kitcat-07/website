import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    purpose: '',
    sector: '',
    message: '',
    budget: '',
    timeline: '',
    priority: 'normal'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');

  const purposeOptions = [
    { value: 'investment', label: 'Investment Discussion', icon: 'TrendingUp' },
    { value: 'partnership', label: 'Strategic Partnership', icon: 'Handshake' },
    { value: 'collaboration', label: 'Technical Collaboration', icon: 'Users' },
    { value: 'media', label: 'Media Inquiry', icon: 'Mic' },
    { value: 'general', label: 'General Question', icon: 'MessageCircle' },
    { value: 'careers', label: 'Career Opportunity', icon: 'Briefcase' }
  ];

  const sectorOptions = [
    'Aerospace Technology',
    'Defense Systems',
    'Medical Robotics',
    'AI CAD Solutions',
    'Gaming Universe',
    'Cross-Sector Innovation'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate mock tracking number
    const tracking = `TMX-${Date.now().toString().slice(-6)}`;
    setTrackingNumber(tracking);
    setIsSubmitted(true);
  };

  const getDynamicFields = () => {
    switch (formData.purpose) {
      case 'investment':
        return (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Investment Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select Range</option>
                  <option value="1-5M">$1M - $5M</option>
                  <option value="5-10M">$5M - $10M</option>
                  <option value="10-25M">$10M - $25M</option>
                  <option value="25M+">$25M+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Investment Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select Timeline</option>
                  <option value="immediate">Immediate (1-3 months)</option>
                  <option value="short">Short-term (3-6 months)</option>
                  <option value="medium">Medium-term (6-12 months)</option>
                  <option value="long">Long-term (12+ months)</option>
                </select>
              </div>
            </div>
          </>
        );
      case 'partnership':
        return (
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Partnership Type
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select Type</option>
              <option value="technology">Technology Integration</option>
              <option value="distribution">Distribution Partnership</option>
              <option value="joint-venture">Joint Venture</option>
              <option value="licensing">Licensing Agreement</option>
              <option value="research">Research Collaboration</option>
            </select>
          </div>
        );
      case 'collaboration':
        return (
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Collaboration Focus
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select Focus</option>
              <option value="research">Research & Development</option>
              <option value="product">Product Development</option>
              <option value="consulting">Technical Consulting</option>
              <option value="integration">System Integration</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-success-50 border border-success-200 rounded-lg p-8 mb-8">
          <Icon name="CheckCircle" size={48} className="text-success mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-success-600 mb-4">Message Sent Successfully!</h3>
          <p className="text-success-700 mb-6">
            Your inquiry has been received and assigned tracking number: <strong>{trackingNumber}</strong>
          </p>
          <div className="bg-white rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-text-primary mb-2">What happens next?</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• You'll receive a confirmation email within 5 minutes</li>
              <li>• Our team will review your inquiry within 2 business hours</li>
              <li>• We'll respond with next steps based on your inquiry type</li>
              <li>• Use your tracking number for any follow-up questions</li>
            </ul>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '', email: '', company: '', phone: '', purpose: '',
                sector: '', message: '', budget: '', timeline: '', priority: 'normal'
              });
            }}
            className="btn-primary"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Get in Touch</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Choose your inquiry type for intelligent routing to the right team member
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Purpose Selection */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-4">
            Purpose of Contact *
          </label>
          <div className="grid md:grid-cols-3 gap-4">
            {purposeOptions.map((option) => (
              <label
                key={option.value}
                className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                  formData.purpose === option.value
                    ? 'border-primary bg-primary-50 text-primary' :'border-border hover:border-primary-200 hover:bg-primary-50/50'
                }`}
              >
                <input
                  type="radio"
                  name="purpose"
                  value={option.value}
                  checked={formData.purpose === option.value}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <Icon name={option.icon} size={20} className="mr-3" />
                <span className="font-medium">{option.label}</span>
                {formData.purpose === option.value && (
                  <Icon name="Check" size={16} className="ml-auto text-primary" />
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter company name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter phone number"
            />
          </div>
        </div>

        {/* Sector Interest */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Technology Sector of Interest
          </label>
          <select
            name="sector"
            value={formData.sector}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select Sector</option>
            {sectorOptions.map((sector) => (
              <option key={sector} value={sector}>{sector}</option>
            ))}
          </select>
        </div>

        {/* Dynamic Fields */}
        {getDynamicFields()}

        {/* Priority Level */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Priority Level
          </label>
          <div className="flex space-x-4">
            {[
              { value: 'normal', label: 'Normal', color: 'text-gray-600' },
              { value: 'high', label: 'High', color: 'text-warning' },
              { value: 'urgent', label: 'Urgent', color: 'text-error' }
            ].map((priority) => (
              <label key={priority.value} className="flex items-center">
                <input
                  type="radio"
                  name="priority"
                  value={priority.value}
                  checked={formData.priority === priority.value}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className={`font-medium ${priority.color}`}>{priority.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
            placeholder="Describe your inquiry in detail..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="btn-primary px-8 py-4 text-lg animation-quantum"
          >
            <Icon name="Send" size={20} className="mr-2" />
            Send Message
          </button>
          <p className="text-sm text-text-secondary mt-4">
            We typically respond within 2 business hours
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;