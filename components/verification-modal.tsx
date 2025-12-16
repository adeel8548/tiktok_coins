"use client"

import { useEffect, useState } from "react"

interface VerificationModalProps {
  isOpen: boolean
}

export function VerificationModal({ isOpen }: VerificationModalProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      setShowSuccess(false)
      const timer = setTimeout(() => {
        setIsLoading(false)
        setShowSuccess(true)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-green-600 rounded-3xl p-12 max-w-lg w-[90%] text-center shadow-[0_0_50px_rgba(34,197,94,0.3)] animate-in zoom-in duration-300">
        {isLoading ? (
          <>
            <div className="mb-6 inline-flex items-center justify-center w-24 h-24 bg-green-600 rounded-full animate-spin">
              <svg className="w-16 h-16 text-white" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#1a1a1a"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="70 200"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-green-500">Verifying User...</h2>
            <p className="text-xl text-gray-300">Please wait while we verify your username</p>
          </>
        ) : showSuccess ? (
          <>
            <div className="mb-6 inline-flex items-center justify-center w-24 h-24 bg-green-600 rounded-full animate-bounce">
              <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-green-500">User Verified Successfully</h2>
            <p className="text-xl text-gray-300">You can now purchase TikTok coins</p>
          </>
        ) : null}
      </div>
    </div>
  )
}
