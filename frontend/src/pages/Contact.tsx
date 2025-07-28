import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:5000/api/send', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const result = await response.json();

  //     if (result.success) {
  //       alert("Message sent successfully!");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         company: "",
  //         phone: "",
  //         subject: "",
  //         message: "",
  //       });
  //     } else {
  //       alert("Failed to send message.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("Something went wrong. Please try again later.");
  //   }
  // };


  return (
    <div className="min-h-screen bg-white font-inter">
      <section className="bg-gradient-to-r from-brand-primary-dark to-brand-primary-light mt-16 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary-light rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Ready to discuss your industrial component needs? We're here to help with expert guidance and reliable solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-secondary-orange rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-brand-accent-gray rounded-lg animate-fade-in border border-brand-light-gray">
              <Phone className="h-6 w-6 text-brand-secondary-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold text-brand-dark-text mb-2">Phone</h3>
              <a href="tel:+917990650121" className="text-sm text-brand-medium-gray">+91 79906 50121</a>
              <br />
              <a href="tel:+919875228078" className="text-sm text-brand-medium-gray">+91 98752 28078</a>
            </div>

            <div className="text-center p-6 bg-brand-accent-gray rounded-lg animate-fade-in border border-brand-light-gray" style={{ animationDelay: '0.2s' }}>
              <Mail className="h-6 w-6 text-brand-secondary-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold text-brand-dark-text mb-2">Email</h3>
              <a href="mailto:info@adityahorizoninternational.com" className="text-sm text-brand-medium-gray">info@adityahorizoninternational.com</a>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Block+D-432,+3rd+Floor,+Sumel+8,+Old+Bharat+Bobbin+Mill+Compound,+Char+Rasta,+Near+Ajit+Mill,+Ahmedabad+–+380023,+Gujarat,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-6 bg-brand-accent-gray rounded-lg animate-fade-in border border-brand-light-gray hover:shadow-lg transition duration-300"
              style={{ animationDelay: '0.4s' }}
            >
              <MapPin className="h-6 w-6 text-brand-secondary-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold text-brand-dark-text mb-2">Location</h3>
              <p className="text-sm text-brand-medium-gray">Block D-432, 3rd Floor, Sumel 8</p>
              <p className="text-sm text-brand-medium-gray">Near Ajit Mill Ahmedabad – 380023, Gujarat, India</p>
              <p className="text-sm text-brand-secondary-orange font-semibold mt-2">Click to open in Google Maps</p>
            </a>


          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-accent-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-primary-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-text mb-4">Send Us a Message</h2>
            <p className="text-base text-brand-medium-gray">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            <div className="rounded-lg overflow-hidden shadow-md border border-brand-light-gray">
              <div className="absolute top-32 left-12 z-10 bg-white p-4 rounded-lg shadow-md text-sm text-brand-dark-text max-w-xs w-full">
                <p className="font-semibold mb-1">📍Our Location</p>
                <p>Block D-432, 3rd Floor, Sumel 8</p>
                <p>Old Bharat Bobbin Mill Compound,</p>
                <p>Char Rasta, Near Ajit Mill,</p>
                <p>Ahmedabad – 380023, Gujarat, India</p>
              </div>
              <iframe
                title="Company Location"
                width="100%"
                height="100%"
                style={{ minHeight: "550px", border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Block+D-432,+3rd+Floor,+Sumel+8,+Ahmedabad&z=17&output=embed"
              ></iframe>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in border border-brand-light-gray">
              {/* onSubmit={handleSubmit} */}
              <form className="space-y-6" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-dark-text mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-light-gray rounded-lg focus:ring-2 focus:ring-brand-secondary-orange focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-dark-text mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-light-gray rounded-lg focus:ring-2 focus:ring-brand-secondary-orange focus:border-transparent text-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-dark-text mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-light-gray rounded-lg focus:ring-2 focus:ring-brand-secondary-orange focus:border-transparent text-sm"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-dark-text mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-light-gray rounded-lg focus:ring-2 focus:ring-brand-secondary-orange focus:border-transparent text-sm"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-dark-text mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-light-gray rounded-lg focus:ring-2 focus:ring-brand-secondary-orange focus:border-transparent text-sm"
                  >
                    <option value="">Select a subject</option>
                    <option value="filter-bags">Filter Bags Inquiry</option>
                    <option value="bearings">Roll Bearings Inquiry</option>
                    <option value="clutch-brake">Clutch Brake Pads Inquiry</option>
                    <option value="custom">Custom Manufacturing</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark-text mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-light-gray rounded-lg focus:ring-2 focus:ring-brand-secondary-orange focus:border-transparent text-sm"
                    placeholder="Tell us about your requirements, specifications, quantities, or any questions you have..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-brand-secondary-orange hover:bg-brand-secondary-light text-white px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-secondary-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-text mb-4">Business Hours</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-brand-accent-gray rounded-lg p-6 text-center animate-fade-in border border-brand-light-gray">
              <h3 className="text-xl font-bold text-brand-dark-text mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm text-brand-medium-gray">
                <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="bg-brand-accent-gray rounded-lg p-6 text-center animate-fade-in border border-brand-light-gray" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-brand-dark-text mb-4">Manufacturing</h3>
              <div className="space-y-2 text-sm text-brand-medium-gray">
                <p>24/7 Production Capability</p>
                <p>Emergency Support Available</p>
                <p>Quick Response Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
