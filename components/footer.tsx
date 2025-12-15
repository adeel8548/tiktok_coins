"use client"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-700 text-gray-400 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Service Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">CoinFlow</h3>
            <p className="text-sm text-gray-400">
              Your trusted TikTok coins purchasing service. Buy coins instantly and securely.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-red-600 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-red-600 transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-600 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Service Details */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Our Service</h4>
            <p className="text-sm text-gray-400">
              Fast, secure TikTok coin transfers. Multiple payment methods available including bank transfers, credit cards, and mobile wallets.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          {/* Privacy Policy Section */}
          <div id="privacy" className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-2">Privacy Policy</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We are committed to protecting your privacy. Your personal information is encrypted and securely stored. We do not share your data with third parties without your consent. All transactions are conducted through secure payment gateways. For more information, please contact our support team.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-500 text-center sm:text-left">
              &copy; 2024 CoinFlow. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2 sm:mt-0">
              Developed by <span className="text-red-600 font-semibold">CoinFlow</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
