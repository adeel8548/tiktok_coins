"use client"

import { useState } from "react"

interface RegisterFeeModalProps {
  isOpen: boolean
  coins: number
  verificationId: string
  onPayRegisterFee: () => void
}

export function RegisterFeeModal({ isOpen, coins, verificationId, onPayRegisterFee }: RegisterFeeModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const currentDate = new Date().toLocaleDateString()
  const currentTime = new Date().toLocaleTimeString()

  const handlePayNow = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onPayRegisterFee()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-yellow-600 rounded-3xl p-4 md:p-12 max-w-2xl w-[90%] text-center shadow-[0_0_50px_rgba(234,179,8,0.3)] animate-in zoom-in duration-300">
        {isLoading ? (
          <>
            <h2 className="text-3xl font-bold mb-8">Payment Processing...</h2>
            <div className="my-8 flex justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full animate-spin" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="70 200"
                  />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-yellow-500 mb-8">Register Fee Required</h2>

            <div className="bg-white/5 border border-gray-700 rounded-xl p-6 mb-8 text-left space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="text-gray-400">Total Coins:</span>
                <span className="text-red-600 font-bold text-xl">{coins}k</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="text-gray-400">Verification ID:</span>
                <span className="text-white font-mono text-sm">{verificationId}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="text-gray-400">Date:</span>
                <span className="text-white">{currentDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Time:</span>
                <span className="text-white">{currentTime}</span>
              </div>
            </div>

            <button
              onClick={handlePayNow}
              className="w-full px-8 py-4 text-lg font-semibold rounded-xl bg-red-600 hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              Pay Now Register Fee
            </button>
          </>
        )}
      </div>
    </div>
  )
}
