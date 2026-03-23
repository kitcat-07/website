import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const OfficeLocations = () => {
  const [selectedOffice, setSelectedOffice] = useState(0);

  const offices = [
    {
      id: 1,
      name: "Bangalore Headquarters",
      type: "Global HQ",
      address: "Tech Park, Electronic City Phase 1, Bangalore, Karnataka 560100, India",
      phone: "+91-80-4567-8900",
      email: "bangalore@tech-mystrix.com",
      timezone: "IST (UTC+5:30)",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM IST",
      lat: "12.8456",
      lng: "77.6632",
      specialties: ["R&D Hub", "Aerospace Division", "AI Development"],
      teamSize: "150+ Engineers",
      languages: ["English", "Hindi", "Kannada", "Tamil"]
    },
    {
      id: 2,
      name: "Mumbai Innovation Center",
      type: "Innovation Hub",
      address: "Bandra Kurla Complex, Mumbai, Maharashtra 400051, India",
      phone: "+91-22-6789-0123",
      email: "mumbai@tech-mystrix.com",
      timezone: "IST (UTC+5:30)",
      hours: "Monday - Friday: 9:30 AM - 6:30 PM IST",
      lat: "19.0596",
      lng: "72.8295",
      specialties: ["Defense Systems", "Medical Robotics", "Business Development"],
      teamSize: "80+ Professionals",
      languages: ["English", "Hindi", "Marathi", "Gujarati"]
    },
    {
      id: 3,
      name: "Hyderabad R&D Center",
      type: "Research Facility",
      address: "HITEC City, Madhapur, Hyderabad, Telangana 500081, India",
      phone: "+91-40-4567-8901",
      email: "hyderabad@tech-mystrix.com",
      timezone: "IST (UTC+5:30)",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM IST",
      lat: "17.4485",
      lng: "78.3908",
      specialties: ["Gaming Universe", "AI CAD Solutions", "Quantum Computing"],
      teamSize: "60+ Researchers",
      languages: ["English", "Hindi", "Telugu", "Tamil"]
    },
    {
      id: 4,
      name: "Silicon Valley Liaison",
      type: "US Operations",
      address: "Palo Alto, California 94301, United States",
      phone: "+1-650-555-0199",
      email: "siliconvalley@tech-mystrix.com",
      timezone: "PST (UTC-8)",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM PST",
      lat: "37.4419",
      lng: "-122.1430",
      specialties: ["Investor Relations", "Strategic Partnerships", "Market Expansion"],
      teamSize: "25+ Professionals",
      languages: ["English", "Spanish", "Mandarin"]
    },
    {
      id: 5,
      name: "London European Hub",
      type: "European Operations",
      address: "Canary Wharf, London E14 5AB, United Kingdom",
      phone: "+44-20-7946-0958",
      email: "london@tech-mystrix.com",
      timezone: "GMT (UTC+0)",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM GMT",
      lat: "51.5074",
      lng: "-0.1278",
      specialties: ["European Partnerships", "Regulatory Affairs", "Defense Contracts"],
      teamSize: "20+ Professionals",
      languages: ["English", "French", "German", "Spanish"]
    }
  ];

  const currentOffice = offices[selectedOffice];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Global Office Network</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Our strategic presence across key technology hubs enables 24/7 support and regional partnerships
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Office List */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-semibold text-text-primary mb-6">Select Office</h3>
          <div className="space-y-3">
            {offices.map((office, index) => (
              <button
                key={office.id}
                onClick={() => setSelectedOffice(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                  selectedOffice === index
                    ? 'border-primary bg-primary-50 shadow-subtle'
                    : 'border-border hover:border-primary-200 hover:bg-primary-50/50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-text-primary">{office.name}</h4>
                    <p className="text-sm text-text-secondary">{office.type}</p>
                    <p className="text-xs text-text-muted mt-1">{office.teamSize}</p>
                  </div>
                  {selectedOffice === index && (
                    <Icon name="MapPin" size={20} className="text-primary" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Office Details */}
        <div className="lg:col-span-2">
          <div className="bg-surface rounded-lg shadow-subtle overflow-hidden">
            {/* Map */}
            <div className="h-64 bg-gray-100 relative overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title={currentOffice.name}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${currentOffice.lat},${currentOffice.lng}&z=14&output=embed`}
                className="border-0"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <p className="text-sm font-medium text-text-primary">{currentOffice.name}</p>
                <p className="text-xs text-text-secondary">{currentOffice.type}</p>
              </div>
            </div>

            {/* Office Information */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text-primary mb-2">{currentOffice.name}</h3>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  {currentOffice.type}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Contact Information */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                    <Icon name="MapPin" size={18} className="mr-2 text-primary" />
                    Contact Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Icon name="MapPin" size={16} className="text-text-secondary mt-1 flex-shrink-0" />
                      <p className="text-sm text-text-secondary">{currentOffice.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-text-secondary flex-shrink-0" />
                      <a href={`tel:${currentOffice.phone}`} className="text-sm text-primary hover:underline">
                        {currentOffice.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-text-secondary flex-shrink-0" />
                      <a href={`mailto:${currentOffice.email}`} className="text-sm text-primary hover:underline">
                        {currentOffice.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                    <Icon name="Clock" size={18} className="mr-2 text-primary" />
                    Operating Hours
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Globe" size={16} className="text-text-secondary flex-shrink-0" />
                      <p className="text-sm text-text-secondary">{currentOffice.timezone}</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Calendar" size={16} className="text-text-secondary mt-1 flex-shrink-0" />
                      <p className="text-sm text-text-secondary">{currentOffice.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                  <Icon name="Zap" size={18} className="mr-2 text-primary" />
                  Specialties & Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentOffice.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                  <Icon name="Languages" size={18} className="mr-2 text-primary" />
                  Languages Supported
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentOffice.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent-100 text-accent-600 rounded-full text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team Size */}
              <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span className="font-medium text-text-primary">Team Size</span>
                </div>
                <span className="text-lg font-bold text-primary">{currentOffice.teamSize}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Coverage */}
      <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">24/7 Global Coverage</h3>
          <p className="text-primary-100 max-w-2xl mx-auto">
            Our strategically located offices ensure round-the-clock support and regional expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Icon name="Sun" size={32} className="text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Asia-Pacific</h4>
            <p className="text-primary-100 text-sm">Primary development and R&D operations</p>
          </div>
          <div className="text-center">
            <Icon name="Moon" size={32} className="text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Americas</h4>
            <p className="text-primary-100 text-sm">Strategic partnerships and market expansion</p>
          </div>
          <div className="text-center">
            <Icon name="Star" size={32} className="text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Europe</h4>
            <p className="text-primary-100 text-sm">Regulatory compliance and defense contracts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;