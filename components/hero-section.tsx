"use client"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import logo from "@/app/Assests/imgs/main_logo.png"

interface HeroSectionProps {
  onUsernameSubmit: (username: string) => void
  showCoinsSection: boolean
  onGetCoins: () => void
  isUsernameVerified: boolean
}

export function HeroSection({ onUsernameSubmit, showCoinsSection, onGetCoins, isUsernameVerified }: HeroSectionProps) {
  const [username, setUsername] = useState("")
  const [emailPhone, setEmailPhone] = useState("")

  const handleVerifyClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username && emailPhone) {
      onUsernameSubmit(username)
    }
  }

  if (showCoinsSection) return null

  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-br from-black via-[#1a0000] to-red-600 px-4 sm:px-8 min-h-screen py-8">
      <div className="text-center max-w-2xl w-full">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <Image
            src={logo}
            alt="TikTok Coins Logo"
            width={80}
            height={80}
            className="object-contain rounded-full sm:w-[100px] sm:h-[100px]"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent px-2">
          Buy TikTok Coins Instantly
        </h1>

        <div className="flex items-center justify-center gap-3 sm:gap-4 text-base sm:text-lg md:text-2xl text-gray-300 mb-8 sm:mb-12">
          <span className="relative after:content-['•'] after:absolute after:-right-1.5 sm:after:-right-2.5 after:text-red-600">Fast</span>
          <span className="relative after:content-['•'] after:absolute after:-right-1.5 sm:after:-right-2.5 after:text-red-600">
            Secure
          </span>
          <span>Easy</span>
        </div>

        <form onSubmit={handleVerifyClick} className="flex flex-col gap-4 w-full">
          {/* Username and Email Inputs Row */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            {/* Username Input */}
            <div className="flex-1">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                disabled={isUsernameVerified}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-700 rounded-lg bg-white/5 text-white outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_15px_rgba(255,0,0,0.2)] disabled:opacity-70"
              />
            </div>

            {/* Email/Phone Input */}
            <div className="flex-1">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Email or Phone</label>
              <input
                type="text"
                value={emailPhone}
                onChange={(e) => setEmailPhone(e.target.value)}
                placeholder="Email or Phone"
                disabled={isUsernameVerified}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-gray-700 rounded-lg bg-white/5 text-white outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_15px_rgba(255,0,0,0.2)] disabled:opacity-70"
              />
            </div>

            {/* Verify Button */}
            <Button
              type="submit"
              disabled={!username || !emailPhone || isUsernameVerified}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-6 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 sm:self-end ${
                username && emailPhone && !isUsernameVerified
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-600 cursor-not-allowed opacity-50"
              }`}
            >
              {isUsernameVerified ? "✓ Verified" : "Verify"}
            </Button>
          </div>

          {/* Get Coins Button */}
          <Button
            type="button"
            onClick={onGetCoins}
            disabled={!isUsernameVerified}
            className={`px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              isUsernameVerified
                ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:-translate-y-0.5"
                : "bg-gradient-to-r from-gray-600 to-gray-700 cursor-not-allowed opacity-50"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="sm:w-6 sm:h-6">
              <circle cx="12" cy="12" r="10" fill="#FFD700" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="7" fill="#FFC700" />
            </svg>
            <span className="hidden sm:inline">{isUsernameVerified ? "Get Your Pack" : "Verify First"}</span>
            <span className="sm:hidden">{isUsernameVerified ? "Get Coins" : "Verify First"}</span>
          </Button>
        </form>
      </div>
    </section>
  )
}
