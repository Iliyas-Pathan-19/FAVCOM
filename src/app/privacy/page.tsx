export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                At FAVCOM, we collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Account preferences and settings</li>
                <li>Communication history with our support team</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Send you important updates about your orders and account</li>
                <li>Improve our products and services</li>
                <li>Provide personalized product recommendations using AI</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. AI and Machine Learning</h2>
              <p className="text-gray-300 mb-4">
                FAVCOM uses advanced AI and machine learning technologies to enhance your shopping experience:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Product recommendations based on your browsing and purchase history</li>
                <li>AI-powered search with semantic understanding</li>
                <li>Intelligent chatbot assistance</li>
                <li>Dynamic pricing and inventory optimization</li>
              </ul>
              <p className="text-gray-300 mb-4">
                Your data helps us improve these AI systems while maintaining your privacy and security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist us in operating our website</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-4">
                We use cookies and similar technologies to enhance your browsing experience, 
                analyze site traffic, and personalize content. You can control cookie settings 
                through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@favcom.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> FAVCOM Privacy Team, 123 Commerce Street, Tech City, TC 12345
                </p>
              </div>
            </section>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">
                This Privacy Policy may be updated from time to time. We will notify you of any 
                significant changes by posting the new Privacy Policy on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
