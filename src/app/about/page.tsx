'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About FAVCOM</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your favorite e-commerce platform with AI-powered recommendations, 
            exceptional service, and 40,000+ products to choose from.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To revolutionize online shopping by providing AI-powered recommendations, 
              seamless user experience, and exceptional customer service. We believe 
              technology should make shopping easier, more personalized, and more enjoyable.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become the world's most trusted e-commerce platform, where every 
              customer finds exactly what they're looking for through intelligent 
              recommendations and a user-friendly interface.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose FAVCOM?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Search</h3>
              <p className="text-gray-400">
                Find exactly what you're looking for with our intelligent search and recommendations.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-400">
                Optimized performance with virtual scrolling and smart caching for 40,000+ products.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure & Safe</h3>
              <p className="text-gray-400">
                Your data and transactions are protected with enterprise-grade security.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile First</h3>
              <p className="text-gray-400">
                Responsive design that works perfectly on all devices and screen sizes.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-400">
                AI-powered chatbot and human support available around the clock.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Personalized</h3>
              <p className="text-gray-400">
                Get recommendations tailored to your preferences and shopping history.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">support@favcom.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">123 E-commerce Street, Digital City, DC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockIcon className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">24/7 Customer Support</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full input"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
