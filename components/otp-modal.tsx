"use client"

import type { FormEvent } from "react"
import { useEffect, useRef, useState } from "react"

interface OtpModalProps {
  isOpen: boolean
  onSubmit: (otp: string) => void
  onClose?: () => void
}

export function OtpModal({ isOpen, onSubmit, onClose }: OtpModalProps) {
  const [otp, setOtp] = useState("")
  const [touched, setTouched] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      setOtp("")
      setTouched(false)
      inputRef.current?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  const isValid = otp.length === 6

  const handleChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 6)
    setOtp(digitsOnly)
    if (!touched) setTouched(true)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTouched(true)
    if (!isValid) return
    onSubmit(otp)
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-red-600 rounded-3xl p-8 sm:p-10 w-[90%] max-w-lg shadow-[0_0_50px_rgba(255,0,0,0.3)] animate-in zoom-in duration-300">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-sm text-gray-400">Step 2</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Enter 6-digit OTP</h2>
            <p className="text-gray-300 mt-2">We sent a code to your email. Enter it below to continue.</p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl leading-none"
              aria-label="Close OTP modal"
            >
              ×
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center">
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={otp}
              onChange={(e) => handleChange(e.target.value)}
              onBlur={() => setTouched(true)}
              className="tracking-[0.5em] text-center text-3xl sm:text-4xl font-bold w-full px-4 py-4 sm:py-5 bg-black/40 border-2 border-red-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/40 text-white placeholder:text-gray-600"
              placeholder="••••••"
            />
          </div>
          {touched && !isValid && (
            <p className="text-sm text-red-400 text-center">Please enter a 6-digit code.</p>
          )}

          <button
            type="submit"
            disabled={!isValid}
            className="w-full py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-2xl bg-red-600 hover:bg-red-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  )
}
