'use client';

import { useState } from 'react';
import { 
  QuestionMarkCircleIcon, 
  ChatBubbleLeftRightIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState('faq');

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse our products, add items to your cart, and proceed to checkout. You can pay using various methods including credit/debit cards, UPI, or cash on delivery."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some items like electronics have a 7-day return policy."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. We also offer same-day delivery in select cities."
    },
    {
      question: "Can I track my order?",
      answer: "Yes! Once your order is shipped, you'll receive a tracking number via SMS and email. You can track your order in real-time on our website."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and cash on delivery. All payments are secure and encrypted."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us via live chat (available 24/7), email at support@favcom.com, or call our toll-free number 1800-123-4567."
    }
  ];

  const contactMethods = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Live Chat",
      description: "Get instant help from our AI assistant",
      action: "Start Chat",
      available: "24/7 Available"
    },
    {
      icon: PhoneIcon,
      title: "Phone Support",
      description: "Speak with our support team",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM"
    },
    {
      icon: EnvelopeIcon,
      title: "Email Support",
      description: "Send us your query",
      action: "Send Email",
      available: "Response within 24hrs"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-gray-400 text-lg">
            Find answers to your questions or get in touch with our support team
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                  <p className="text-sm text-gray-400">{method.available}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{method.description}</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8">
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
              activeTab === 'faq'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Frequently Asked Questions
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
              activeTab === 'contact'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What can we help you with?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us more about your question..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/products" className="block text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    Browse Products
                  </a>
                  <a href="/profile" className="block text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    My Account
                  </a>
                  <a href="/wishlist" className="block text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    My Wishlist
                  </a>
                  <a href="/cart" className="block text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    My Cart
                  </a>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}