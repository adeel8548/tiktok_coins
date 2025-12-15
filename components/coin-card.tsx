"use client"

import { Button } from "@/components/ui/button"

interface CoinCardProps {
  coins: number
  price: number
  isSelected: boolean
  onClick: () => void
  onBuyNow: () => void
  isEmailVerified: boolean
}

export function CoinCard({ coins, price, isSelected, onClick, onBuyNow, isEmailVerified }: CoinCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
        isSelected
          ? "border-red-600 shadow-[0_0_30px_rgba(255,0,0,0.5)] bg-gradient-to-br from-[#2a0000] to-[#1a0000]"
          : "border-gray-700 hover:border-red-600"
      }`}
    >
      <div className="mb-4 flex justify-center">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#FFD700" stroke="#FFA500" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="7" fill="#FFC700" stroke="#FFD700" strokeWidth="1" />
          <text x="12" y="16" fontSize="10" fontWeight="bold" fill="#B8860B" textAnchor="middle">
            C
          </text>
        </svg>
      </div>

      <div className="text-4xl font-extrabold text-red-600 mb-2">{coins}k</div>
      <div className="text-lg text-gray-400 mb-4">Coins</div>
      <div className="text-2xl font-bold text-white mb-4">{price} PKR</div>

      <Button
        onClick={(e) => {
          e.stopPropagation()
          onBuyNow()
        }}
        className="w-full px-6 py-3 text-base font-semibold rounded-xl bg-red-600 hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
        Buy Now
      </Button>
    </div>
  )
}
