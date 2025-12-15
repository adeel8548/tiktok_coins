"use client"

import { useEffect, useState } from "react"

interface TransferProgressModalProps {
  isOpen: boolean
  coins: number
  verificationId: string
  onComplete: () => void
}

export function TransferProgressModal({ isOpen, coins, verificationId, onComplete }: TransferProgressModalProps) {
  const [progress, setProgress] = useState(0)

  const currentDate = new Date().toLocaleDateString()
  const currentTime = new Date().toLocaleTimeString()

  useEffect(() => {
    if (isOpen) {
      setProgress(0)

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => onComplete(), 1000)
            return 100
          }
          return prev + 1
        })
      }, 30)

      return () => clearInterval(interval)
    }
  }, [isOpen, onComplete])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-red-600 rounded-3xl p-12 max-w-2xl w-[90%] text-center shadow-[0_0_50px_rgba(255,0,0,0.3)] animate-in zoom-in duration-300">
        <h2 className="text-3xl font-bold mb-8">Transferring Coins</h2>

        <div className="my-8 flex justify-center">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#1a1a1a" strokeWidth="8" />
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
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-red-600">{progress}%</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-800 h-2 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="bg-white/5 border border-gray-700 rounded-xl p-6 text-left space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Coins:</span>
            <span className="text-red-600 font-bold text-xl">{coins}k</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Verification ID:</span>
            <span className="text-white font-mono text-sm">{verificationId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Date:</span>
            <span className="text-white">{currentDate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Time:</span>
            <span className="text-white">{currentTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
