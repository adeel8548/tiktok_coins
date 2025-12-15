"use client"

import { Button } from "@/components/ui/button"

interface PaymentSectionProps {
  coins: number
  price: number
  selectedPayment: string | null
  onPaymentSelect: (method: string) => void
  onPayNow: () => void
}

const paymentMethods = [
  { id: "bank", name: "Bank Transfer", icon: "🏦" },
  { id: "jazz", name: "JazzCash", icon: "📱" },
  { id: "easy", name: "EasyPaisa", icon: "💳" },
]

export function PaymentSection({ coins, price, selectedPayment, onPaymentSelect, onPayNow }: PaymentSectionProps) {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border-2 border-gray-700 animate-in slide-in-from-top duration-500">
      <div className="text-center mb-8 pb-8 border-b border-gray-700">
        <h3 className="text-2xl font-bold text-red-600 mb-2">{coins} Coins</h3>
        <p className="text-xl text-gray-300">{price} PKR</p>
      </div>

      <h3 className="text-center text-xl font-semibold mb-4">Select Payment Method</h3>

      <div className="flex flex-col gap-4 mb-8">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => onPaymentSelect(method.id)}
            className={`flex items-center gap-4 px-6 py-6 bg-white/[0.03] border-2 rounded-xl cursor-pointer transition-all duration-300 ${
              selectedPayment === method.id ? "border-red-600 bg-red-600/10" : "border-gray-700 hover:border-red-600"
            }`}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-lg text-2xl">
              {method.icon}
            </div>
            <div className="flex-1 text-xl font-semibold">{method.name}</div>
          </div>
        ))}
      </div>

      <Button
        onClick={onPayNow}
        disabled={!selectedPayment}
        className="w-full px-8 py-6 text-lg font-semibold rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        Pay Now
      </Button>
    </div>
  )
}
