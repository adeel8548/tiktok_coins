"use client"

import { useEffect, useState } from "react"

interface ProgressModalProps {
  isOpen: boolean
  username: string
  onComplete: () => void
}

export function ProgressModal({ isOpen, username, onComplete }: ProgressModalProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setProgress(0)
      setIsComplete(false)

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 1
        })
      }, 30)

      return () => clearInterval(interval)
    }
  }, [isOpen])

  useEffect(() => {
    if (progress === 100 && isOpen) {
      setTimeout(() => {
        setIsComplete(true)
        setTimeout(() => {
          onComplete()
        }, 3000)
      }, 500)
    }
  }, [progress, isOpen, onComplete])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in duration-300"
      onClick={onComplete}
    >
      <div
        className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-red-600 rounded-3xl p-12 max-w-2xl w-[90%] text-center shadow-[0_0_50px_rgba(255,0,0,0.3)] animate-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {isComplete ? (
          <>
            <div className="mb-6 inline-flex items-center justify-center w-24 h-24 bg-green-600 rounded-full animate-bounce">
              <svg
                className="w-16 h-16 text-white animate-in zoom-in duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-green-500">Coins Transferred Successfully</h2>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-8">Transferring Coins</h2>
            <div className="my-8 flex justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#1a1a1a" strokeWidth="8" />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                    className="transition-all duration-300"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#dc2626" />
                      <stop offset="100%" stopColor="#f87171" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Percentage text in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-red-600">{progress}%</span>
                </div>
              </div>
            </div>
            <p className="text-2xl text-gray-300 mt-6">
              Coins are being transferred to <span className="text-red-600 font-bold">{username}</span>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
