"use client"

import { useEffect, useRef } from "react"
import { CoinCard } from "@/components/coin-card"
import { PaymentSection } from "@/components/payment-section"

interface CoinsSectionProps {
  isVisible: boolean
  selectedCoinData: { coins: number; price: number } | null
  selectedPayment: string | null
  onCoinSelect: (coins: number, price: number) => void
  onPaymentSelect: (method: string) => void
  onPayNow: () => void
  onBuyNow: () => void
  isEmailVerified: boolean
}

const generateCoinOptions = () => {
  const options = []
  for (let coins = 100; coins <= 2000; coins += 500) {
    const price = Math.round(coins * 50)
    options.push({ coins, price })
  }
  return options
}

const coinOptions = generateCoinOptions()

export function CoinsSection({
  isVisible,
  selectedCoinData,
  selectedPayment,
  onCoinSelect,
  onPaymentSelect,
  onPayNow,
  onBuyNow,
  isEmailVerified,
}: CoinsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const paymentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [isVisible])

  useEffect(() => {
    if (selectedCoinData && paymentRef.current) {
      setTimeout(() => {
        paymentRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 100)
    }
  }, [selectedCoinData])

  if (!isVisible) return null

  return (
    <section ref={sectionRef} className="min-h-screen bg-black px-8 py-16 animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-red-600">Choose Your Coins</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-16 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-800 pr-2">
          {coinOptions.map((option) => (
            <CoinCard
              key={option.coins}
              coins={option.coins}
              price={option.price}
              isSelected={selectedCoinData?.coins === option.coins}
              onClick={() => onCoinSelect(option.coins, option.price)}
              onBuyNow={() => onBuyNow()}
              isEmailVerified={isEmailVerified}
            />
          ))}
        </div>

        {selectedCoinData && isEmailVerified && (
          <div ref={paymentRef}>
            <PaymentSection
              coins={selectedCoinData.coins}
              price={selectedCoinData.price}
              selectedPayment={selectedPayment}
              onPaymentSelect={onPaymentSelect}
              onPayNow={onPayNow}
            />
          </div>
        )}
      </div>
    </section>
  )
}
