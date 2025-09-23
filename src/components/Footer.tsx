import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-yellow-400">FAV</span>COM
            </h3>
            <p className="text-gray-300 mb-4">
              Your favorite e-commerce platform with 40,000+ products, AI-powered recommendations, and exceptional service.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links - TODO: Add actual social media links */}
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 FAVCOM. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* AI Features */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <h5 className="text-sm font-semibold text-blue-400 mb-2">AI-Powered Features:</h5>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• AI Recommendation Engine - Personalized product suggestions based on your preferences</li>
            <li>• AI Chatbot - 24/7 customer support with contextual product recommendations</li>
            <li>• Smart Search - AI-powered search with autocomplete and semantic understanding</li>
            <li>• Performance Monitoring - Real-time analytics and optimization</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
