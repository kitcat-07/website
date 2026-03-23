import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const CalendarIntegration = () => {
  const [selectedMeetingType, setSelectedMeetingType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    agenda: '',
    timezone: 'IST'
  });
  const [isScheduled, setIsScheduled] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState(null);

  const meetingTypes = [
    {
      id: 'investment',
      title: 'Investment Discussion',
      duration: '45 minutes',
      description: 'Discuss investment opportunities, funding rounds, and strategic partnerships',
      icon: 'TrendingUp',
      color: 'text-success',
      bgColor: 'bg-success-50',
      borderColor: 'border-success-200',
      availability: 'Monday-Friday, 10 AM - 4 PM IST'
    },
    {
      id: 'partnership',
      title: 'Strategic Partnership',
      duration: '60 minutes',
      description: 'Explore collaboration opportunities and strategic alliances',
      icon: 'Handshake',
      color: 'text-primary',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      availability: 'Monday-Friday, 9 AM - 5 PM IST'
    },
    {
      id: 'technical',
      title: 'Technical Consultation',
      duration: '30 minutes',
      description: 'Technical discussions, R&D collaboration, and solution architecture',
      icon: 'Cog',
      color: 'text-secondary',
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
      availability: 'Tuesday-Saturday, 11 AM - 6 PM IST'
    },
    {
      id: 'demo',
      title: 'Product Demonstration',
      duration: '30 minutes',
      description: 'Live demonstration of our technology solutions and prototypes',
      icon: 'Monitor',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200',
      availability: 'Monday-Friday, 2 PM - 6 PM IST'
    },
    {
      id: 'career',
      title: 'Career Discussion',
      duration: '30 minutes',
      description: 'Career opportunities, role discussions, and team introductions',
      icon: 'Briefcase',
      color: 'text-quantum-purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      availability: 'Monday-Friday, 10 AM - 5 PM IST'
    }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM'
  ];

  const timezones = [
    { value: 'IST', label: 'India Standard Time (IST)', offset: '+05:30' },
    { value: 'PST', label: 'Pacific Standard Time (PST)', offset: '-08:00' },
    { value: 'EST', label: 'Eastern Standard Time (EST)', offset: '-05:00' },
    { value: 'GMT', label: 'Greenwich Mean Time (GMT)', offset: '+00:00' },
    { value: 'JST', label: 'Japan Standard Time (JST)', offset: '+09:00' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleScheduleMeeting = (e) => {
    e.preventDefault();
    const selectedMeeting = meetingTypes.find(type => type.id === selectedMeetingType);
    const meetingId = `TMX-MEET-${Date.now().toString().slice(-6)}`;
    
    setMeetingDetails({
      id: meetingId,
      type: selectedMeeting,
      date: selectedDate,
      time: selectedTime,
      timezone: formData.timezone,
      attendee: formData
    });
    setIsScheduled(true);
  };

  const generateCalendarDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        }),
        disabled: date.getDay() === 0 // Disable Sundays
      });
    }
    return dates;
  };

  if (isScheduled && meetingDetails) {
    return (
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-success-50 border border-success-200 rounded-lg p-8 mb-8">
          <Icon name="Calendar" size={48} className="text-success mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-success-600 mb-4">Meeting Scheduled Successfully!</h3>
          
          <div className="bg-white rounded-lg p-6 mb-6 text-left">
            <h4 className="font-semibold text-text-primary mb-4">Meeting Details:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-text-secondary mb-1">Meeting ID:</p>
                <p className="font-mono text-primary">{meetingDetails.id}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Type:</p>
                <p className="font-medium">{meetingDetails.type.title}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Date & Time:</p>
                <p className="font-medium">{meetingDetails.date} at {meetingDetails.time}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Duration:</p>
                <p className="font-medium">{meetingDetails.type.duration}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Timezone:</p>
                <p className="font-medium">{meetingDetails.timezone}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Platform:</p>
                <p className="font-medium">Google Meet / Zoom</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-text-primary mb-2">What's Next?</h4>
            <ul className="text-sm text-text-secondary space-y-1 text-left">
              <li>• Calendar invitation sent to {meetingDetails.attendee.email}</li>
              <li>• Meeting link will be included in the calendar invite</li>
              <li>• Confirmation call 1 hour before the meeting</li>
              <li>• Preparation materials will be shared 24 hours prior</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setIsScheduled(false);
                setSelectedMeetingType('');
                setSelectedDate('');
                setSelectedTime('');
                setFormData({
                  name: '', email: '', company: '', phone: '', agenda: '', timezone: 'IST'
                });
              }}
              className="btn-primary"
            >
              Schedule Another Meeting
            </button>
            <a
              href={`mailto:${meetingDetails.attendee.email}?subject=Meeting Confirmation - ${meetingDetails.id}`}
              className="btn-secondary"
            >
              <Icon name="Mail" size={18} className="mr-2" />
              Email Confirmation
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Schedule a Meeting</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Book a video call with our experts for investment discussions, partnerships, 
          technical consultations, or product demonstrations.
        </p>
      </div>

      <form onSubmit={handleScheduleMeeting} className="space-y-8">
        {/* Meeting Type Selection */}
        <div>
          <h3 className="text-xl font-semibold text-text-primary mb-6">Select Meeting Type</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meetingTypes.map((type) => (
              <label
                key={type.id}
                className={`relative p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedMeetingType === type.id
                    ? `${type.borderColor} ${type.bgColor} shadow-subtle`
                    : 'border-border hover:border-primary-200 hover:bg-primary-50/50'
                }`}
              >
                <input
                  type="radio"
                  name="meetingType"
                  value={type.id}
                  checked={selectedMeetingType === type.id}
                  onChange={(e) => setSelectedMeetingType(e.target.value)}
                  className="sr-only"
                  required
                />
                <div className="flex items-start space-x-3">
                  <Icon name={type.icon} size={24} className={type.color} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-1">{type.title}</h4>
                    <p className="text-sm text-text-secondary mb-2">{type.description}</p>
                    <div className="flex items-center justify-between text-xs text-text-muted">
                      <span>{type.duration}</span>
                      {selectedMeetingType === type.id && (
                        <Icon name="Check" size={16} className={type.color} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-text-secondary">
                    <Icon name="Clock" size={12} className="inline mr-1" />
                    {type.availability}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        {selectedMeetingType && (
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-6">Select Date</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {generateCalendarDates().map((date) => (
                <button
                  key={date.value}
                  type="button"
                  disabled={date.disabled}
                  onClick={() => setSelectedDate(date.value)}
                  className={`p-3 text-center rounded-lg border transition-all duration-300 ${
                    date.disabled
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : selectedDate === date.value
                      ? 'border-primary bg-primary text-white shadow-subtle'
                      : 'border-border hover:border-primary-200 hover:bg-primary-50'
                  }`}
                >
                  <div className="text-sm font-medium">{date.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Time Selection */}
        {selectedDate && (
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-6">Select Time</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 text-center rounded-lg border transition-all duration-300 ${
                    selectedTime === time
                      ? 'border-primary bg-primary text-white shadow-subtle'
                      : 'border-border hover:border-primary-200 hover:bg-primary-50'
                  }`}
                >
                  <div className="text-sm font-medium">{time}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Contact Information */}
        {selectedTime && (
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-6">Your Information</h3>
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
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Preferred Timezone
                </label>
                <select
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {timezones.map((tz) => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label} ({tz.offset})
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Meeting Agenda (Optional)
                </label>
                <textarea
                  name="agenda"
                  value={formData.agenda}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                  placeholder="Brief description of topics you'd like to discuss..."
                />
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        {selectedTime && (
          <div className="text-center">
            <button
              type="submit"
              className="btn-primary px-8 py-4 text-lg animation-quantum"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Schedule Meeting
            </button>
            <p className="text-sm text-text-secondary mt-4">
              You'll receive a calendar invitation within 5 minutes
            </p>
          </div>
        )}
      </form>

      {/* Meeting Guidelines */}
      <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Meeting Guidelines</h3>
          <p className="text-primary-100 max-w-2xl mx-auto">
            To ensure productive meetings, please review our guidelines
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Icon name="Clock" size={32} className="text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Punctuality</h4>
            <p className="text-primary-100 text-sm">Please join 2-3 minutes early to test your connection</p>
          </div>
          <div className="text-center">
            <Icon name="FileText" size={32} className="text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Preparation</h4>
            <p className="text-primary-100 text-sm">Prepare your questions and relevant documents in advance</p>
          </div>
          <div className="text-center">
            <Icon name="Users" size={32} className="text-accent mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Participation</h4>
            <p className="text-primary-100 text-sm">Ensure a quiet environment for clear communication</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarIntegration;