"use client"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-700 text-gray-400 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Service Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">CoinFlow</h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Your trusted TikTok coins purchasing service. Buy coins instantly and securely.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
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
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">Our Service</h4>
            <p className="text-xs sm:text-sm text-gray-400">
              Fast, secure TikTok coin transfers. Multiple payment methods available including bank transfers, credit cards, and mobile wallets.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-4 sm:pt-6">
          {/* Privacy Policy Section */}
          <div id="privacy" className="mb-4 sm:mb-6">
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Privacy Policy</h4>
            <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">
              We are committed to protecting your privacy. Your personal information is encrypted and securely stored. We do not share your data with third parties without your consent. All transactions are conducted through secure payment gateways. For more information, please contact our support team.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-3 sm:pt-4 border-t border-gray-700 gap-2">
            <p className="text-[10px] sm:text-xs text-gray-500 text-center sm:text-left">
              &copy; 2024 CoinFlow. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-xs text-gray-500">
              Developed by <span className="text-red-600 font-semibold">CoinFlow</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
