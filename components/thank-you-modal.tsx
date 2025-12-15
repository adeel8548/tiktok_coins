"use client"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-red-600 rounded-3xl p-12 max-w-2xl w-[90%] relative shadow-[0_0_50px_rgba(255,0,0,0.3)] animate-in zoom-in duration-300 text-center">
        {/* Animated checkmark */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-red-600/20 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-16 h-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-3">
          Thank You!
        </h2>
        
        <p className="text-xl text-gray-300 mb-6">
          Your TikTok coins have been successfully purchased and transferred to your account.
        </p>

        <div className="bg-white/5 border border-gray-700 rounded-2xl p-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">What's Next?</h3>
          <ul className="text-left space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Check your TikTok account for your coins</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Start enjoying exclusive content with your TikTok coins</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Need help? Contact our support team anytime</span>
            </li>
          </ul>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          We're excited to serve you! Thank you for choosing CoinFlow.
        </p>

        <button
          onClick={onClose}
          className="w-full px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 text-white"
        >
          Done
        </button>
      </div>
    </div>
  )
}
