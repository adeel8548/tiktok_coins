"use client";

import { useEffect, useRef } from "react";
import { CoinCard } from "@/components/coin-card";
import { PaymentSection } from "@/components/payment-section";

interface CoinsSectionProps {
  isVisible: boolean;
  selectedCoinData: { coins: number; price: number } | null;
  selectedPayment: string | null;
  onCoinSelect: (coins: number, price: number) => void;
  onPaymentSelect: (method: string) => void;
  onPayNow: () => void;
  onBuyNow: () => void;
  isEmailVerified: boolean;
  onBack: () => void;
}

const coinOptions = [
  { coins: 10, price: 50 },
  { coins: 20, price: 100 },
  { coins: 30, price: 150 },
  { coins: 40, price: 200 },
  { coins: 50, price: 250 },
  { coins: 60, price: 300 },
  { coins: 70, price: 350 },
  { coins: 80, price: 400 },
  { coins: 90, price: 450 },
  { coins: 100, price: 500 },
  { coins: 150, price: 750 },
  { coins: 200, price: 1000 },
  { coins: 250, price: 1250 },
  { coins: 300, price: 1500 },
  { coins: 350, price: 1750 },
  { coins: 400, price: 2000 },
  { coins: 450, price: 2250 },
  { coins: 500, price: 2500 },
  { coins: 600, price: 3000 },
  { coins: 700, price: 3500 },
  { coins: 800, price: 4000 },
  { coins: 900, price: 4500 },
  { coins: 1000, price: 5000 },
  { coins: 2000, price: 10000 },
  { coins: 3000, price: 15000 },
  { coins: 4000, price: 20000 },
  { coins: 5000, price: 25000 },
];

export function CoinsSection({
  isVisible,
  selectedCoinData,
  selectedPayment,
  onCoinSelect,
  onPaymentSelect,
  onPayNow,
  onBuyNow,
  isEmailVerified,
  onBack,
}: CoinsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const paymentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedCoinData && paymentRef.current) {
      setTimeout(() => {
        paymentRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 0);
    }
  }, [selectedCoinData]);

  if (!isVisible) return null;

  return (
    <section ref={sectionRef} className=" bg-black px-4 py-16 animate-slide-up">
      <div className="w-full relative">
        <div className="fixed w-full left-0">
          <button
            onClick={onBack}
            className="absolute top-0 left-4 text-white hover:text-red-600 text-3xl font-bold transition-colors duration-200 z-10"
          >
            ←
          </button>
          <h2 className="text-center text-4xl font-bold mb-12 text-red-600">
            Choose Your Pack
          </h2>
        </div>
        <div className="pt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-16  overflow-y-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-800 pr-2">
          {coinOptions.map((option) => (
            <CoinCard
              key={option.coins}
              coins={option.coins}
              price={option.price}
              isSelected={selectedCoinData?.coins === option.coins}
              onClick={() => onCoinSelect(option.coins, option.price)}
              onBuyNow={() => {
                onCoinSelect(option.coins, option.price);
                onBuyNow();
              }}
              isEmailVerified={isEmailVerified}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
