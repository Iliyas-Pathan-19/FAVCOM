 export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
          <h1 className="text-3xl font-bold text-white mb-8">Returns & Exchanges</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Return Policy Overview</h2>
              <p className="text-gray-300 mb-4">
                At FAVCOM, we want you to be completely satisfied with your purchase. We offer a 
                hassle-free 30-day return policy for most items. If you're not happy with your 
                purchase, we'll make it right.
              </p>
              <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg">
                <p className="text-green-300">
                  <strong>Good News:</strong> Most returns are free! We provide prepaid return 
                  labels for eligible items.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Return Eligibility</h2>
              <p className="text-gray-300 mb-4">
                Items are eligible for return if they meet the following criteria:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Returned within 30 days of delivery</li>
                <li>In original condition with all tags and packaging</li>
                <li>Not used, worn, or damaged</li>
                <li>Includes original receipt or order confirmation</li>
                <li>Not a final sale or clearance item</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">How to Return an Item</h2>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Step 1: Initiate Return</h3>
                  <p className="text-gray-300">
                    Log into your account and go to "Order History" or contact our customer service team.
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Step 2: Get Return Label</h3>
                  <p className="text-gray-300">
                    We'll email you a prepaid return label (for eligible items) or provide return instructions.
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Step 3: Package Item</h3>
                  <p className="text-gray-300">
                    Pack the item securely in its original packaging with all accessories and documentation.
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Step 4: Ship Return</h3>
                  <p className="text-gray-300">
                    Drop off the package at the designated location or schedule a pickup.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Return Processing</h2>
              <p className="text-gray-300 mb-4">
                Once we receive your return:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>We'll inspect the item within 2-3 business days</li>
                <li>You'll receive an email confirmation of the return status</li>
                <li>Refunds are processed within 5-7 business days</li>
                <li>Original payment method will be credited</li>
                <li>You'll receive a tracking number for your refund</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Exchange Policy</h2>
              <p className="text-gray-300 mb-4">
                We offer exchanges for:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Different sizes of the same item</li>
                <li>Different colors of the same item</li>
                <li>Similar items of equal or greater value</li>
                <li>Items with manufacturing defects</li>
              </ul>
              <p className="text-gray-300 mb-4">
                Exchange requests must be made within 30 days of delivery. 
                Price differences will be charged or refunded accordingly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Non-Returnable Items</h2>
              <p className="text-gray-300 mb-4">
                The following items cannot be returned:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Personalized or custom-made items</li>
                <li>Perishable goods (food, flowers, etc.)</li>
                <li>Intimate or sanitary products</li>
                <li>Digital products and software</li>
                <li>Items marked as "Final Sale"</li>
                <li>Gift cards and vouchers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Defective or Damaged Items</h2>
              <p className="text-gray-300 mb-4">
                If you receive a defective or damaged item:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Contact us immediately (within 48 hours of delivery)</li>
                <li>Provide photos of the damage or defect</li>
                <li>We'll arrange for a free return pickup</li>
                <li>We'll send a replacement or provide a full refund</li>
                <li>No restocking fees apply for defective items</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">International Returns</h2>
              <p className="text-gray-300 mb-4">
                For international orders:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Return shipping costs are the customer's responsibility</li>
                <li>Customs duties and taxes are non-refundable</li>
                <li>Return process may take 2-3 weeks</li>
                <li>Contact customer service for specific instructions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">AI-Powered Return Processing</h2>
              <p className="text-gray-300 mb-4">
                FAVCOM uses AI technology to streamline returns:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Automated return approval for eligible items</li>
                <li>Smart routing to reduce processing time</li>
                <li>Predictive analytics to prevent return fraud</li>
                <li>Intelligent restocking recommendations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Returns Support</h2>
              <p className="text-gray-300 mb-4">
                Need help with a return or exchange?
              </p>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300">
                  <strong>Email:</strong> returns@favcom.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Live Chat:</strong> Available 24/7 on our website<br />
                  <strong>Hours:</strong> Monday-Friday 9 AM - 6 PM IST
                </p>
              </div>
            </section>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">
                This return policy is subject to change. Please check this page regularly for updates. 
                For specific return questions, contact our customer service team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
