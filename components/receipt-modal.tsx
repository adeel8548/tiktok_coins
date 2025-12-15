"use client"

interface ReceiptModalProps {
  isOpen: boolean
  registeredName: string
  coins: number
  price: number
  verificationId: string
  onClose: () => void
}

export function ReceiptModal({ isOpen, registeredName, coins, price, verificationId, onClose }: ReceiptModalProps) {
  if (!isOpen) return null

  const currentDate = new Date().toLocaleDateString()

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in duration-300 p-4">
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-green-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-2xl w-full relative shadow-[0_0_50px_rgba(34,197,94,0.3)] animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-green-500 mb-2 text-center pr-12">Payment Receipt</h2>
        <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8">Transaction Completed Successfully</p>

        <div className="bg-white/5 border border-gray-700 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 space-y-4 sm:space-y-6">
          {/* Registered Name and Date */}
          <div className="pb-4 sm:pb-6 border-b border-gray-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
              <span className="text-sm sm:text-base text-gray-400">Registered Name:</span>
              <span className="text-sm sm:text-base text-white font-semibold break-all">{registeredName}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="text-sm sm:text-base text-gray-400">Date:</span>
              <span className="text-sm sm:text-base text-white">{currentDate}</span>
            </div>
          </div>

          {/* Payment Details */}
          <div className="pb-4 sm:pb-6 border-b border-gray-700">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3 sm:mb-4">Payment Details</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="text-sm sm:text-base text-gray-400">Register Fees:</span>
                <span className="text-sm sm:text-base text-white font-mono">null</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="text-sm sm:text-base text-gray-400">Verification ID:</span>
                <span className="text-xs sm:text-sm text-white font-mono break-all">{verificationId}</span>
              </div>
            </div>
          </div>

          {/* Total and Status */}
          <div>
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <span className="text-base sm:text-lg text-gray-400">Total Coins:</span>
              <span className="text-xl sm:text-2xl text-red-600 font-bold">{coins}k</span>
            </div>
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <span className="text-base sm:text-lg text-gray-400">Total Price:</span>
              <span className="text-xl sm:text-2xl text-yellow-400 font-bold">${price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base sm:text-lg text-gray-400">Status:</span>
              <span className="text-lg sm:text-xl text-green-500 font-bold">Completed</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl bg-green-600 hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="sm:w-6 sm:h-6">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
          </svg>
          Done
        </button>
      </div>
    </div>
  )
}
