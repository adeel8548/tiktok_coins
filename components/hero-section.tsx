"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onUsernameSubmit: (username: string) => void
  showCoinsSection: boolean
  onGetCoins: () => void
  isUsernameVerified: boolean
}

export function HeroSection({ onUsernameSubmit, showCoinsSection, onGetCoins, isUsernameVerified }: HeroSectionProps) {
  const [username, setUsername] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username) {
      onUsernameSubmit(username)
    }
  }

  if (showCoinsSection) return null

  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-br from-black via-[#1a0000] to-red-600 px-8 min-h-screen">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
          Buy TikTok Coins Instantly
        </h1>

        <div className="flex items-center justify-center gap-4 text-lg md:text-2xl text-gray-300 mb-12">
          <span className="relative after:content-['•'] after:absolute after:-right-2.5 after:text-red-600">Fast</span>
          <span className="relative after:content-['•'] after:absolute after:-right-2.5 after:text-red-600">
            Secure
          </span>
          <span>Easy</span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              className="w-full px-6 py-4 pr-32 text-lg border-2 border-gray-700 rounded-xl bg-white/5 text-white outline-none transition-all duration-300 focus:border-red-600 focus:shadow-[0_0_20px_rgba(255,0,0,0.3)]"
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 text-base font-semibold rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-300"
            >
              Verify
            </Button>
          </div>
          <Button
            type="button"
            onClick={onGetCoins}
            disabled={!isUsernameVerified}
            className={`px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              isUsernameVerified
                ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:-translate-y-0.5"
                : "bg-gradient-to-r from-gray-600 to-gray-700 cursor-not-allowed opacity-50"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="#FFD700" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="7" fill="#FFC700" />
            </svg>
            {isUsernameVerified ? "Get Coins" : "Verify Username First"}
          </Button>
        </form>
      </div>
    </section>
  )
}
