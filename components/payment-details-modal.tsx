"use client"

import { useState } from "react"

interface PaymentDetailsModalProps {
  isOpen: boolean
  paymentMethod: string
  onConfirm: (bankName?: string) => void
  onClose: () => void
}

const banks = [
  { id: "habib", name: "Habib Bank", icon: "🏦" },
  { id: "ufone", name: "UBL Bank", icon: "💳" },
  { id: "nbp", name: "National Bank", icon: "🏛️" },
  { id: "allied", name: "Allied Bank", icon: "🏢" },
  { id: "hbl", name: "HBL", icon: "🏪" },
  { id: "mcb", name: "MCB Bank", icon: "🏪" },
]

export function PaymentDetailsModal({ isOpen, paymentMethod, onConfirm, onClose }: PaymentDetailsModalProps) {
  const [accountNumber, setAccountNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [selectedBank, setSelectedBank] = useState<string | null>(null)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const bankName = selectedBank ? banks.find(b => b.id === selectedBank)?.name : undefined
    onConfirm(bankName)
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "") // Remove all non-digits
    
    // Limit to 16 digits
    if (value.length > 16) {
      value = value.slice(0, 16)
    }
    
    // Format with spaces every 4 digits
    const formatted = value.replace(/(\d{4})(?=\d)/g, "$1 ")
    setAccountNumber(formatted)
  }

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "") // Remove all non-digits
    
    // Limit to 4 digits (MMYY)
    if (value.length > 4) {
      value = value.slice(0, 4)
    }
    
    // Auto-add "/" after MM
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2)
    }
    
    setExpiryDate(value)
  }

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "") // Remove all non-digits
    
    // Limit to 3 digits
    if (value.length > 3) {
      value = value.slice(0, 3)
    }
    
    setCvv(value)
  }

  const handleContactNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "") // Remove all non-digits
    
    // Limit to 11 digits
    if (value.length > 11) {
      value = value.slice(0, 11)
    }
    
    // Format: 03XX XXXXXXX
    let formatted = value
    if (value.length > 4) {
      formatted = value.slice(0, 4) + " " + value.slice(4)
    }
    
    setContactNumber(formatted)
  }

  const isBankOrCard = paymentMethod === "bank" || paymentMethod === "card"
  const isMobilePayment = paymentMethod === "jazz" || paymentMethod === "easy"

  const getHeading = () => {
    if (paymentMethod === "jazz") return "Enter your JazzCash mobile number"
    if (paymentMethod === "easy") return "Enter your EasyPaisa account number"
    return "Enter Card Details"
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[60] animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 max-w-md w-[90%] shadow-2xl animate-in zoom-in duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {getHeading()}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {paymentMethod === "bank" && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-4">Select Bank:</label>
              <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto">
                {banks.map((bank) => (
                  <button
                    key={bank.id}
                    type="button"
                    onClick={() => setSelectedBank(bank.id)}
                    className={`p-3 border-2 rounded-lg text-center transition-all duration-200 ${
                      selectedBank === bank.id
                        ? "border-red-600 bg-red-50"
                        : "border-gray-300 bg-white hover:border-red-300"
                    }`}
                  >
                    <div className="text-2xl mb-1">{bank.icon}</div>
                    <div className="text-xs font-semibold text-gray-900">{bank.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
          {isBankOrCard && (paymentMethod === "card" || selectedBank) && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-gray-900 focus:border-red-600 focus:outline-none font-mono text-lg tracking-widest"
                />
                <p className="text-xs text-gray-500 mt-1">{accountNumber.replace(/\s/g, "").length}/16 digits</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-gray-900 focus:border-red-600 focus:outline-none font-mono text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={handleCVVChange}
                    placeholder="123"
                    maxLength={3}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-gray-900 focus:border-red-600 focus:outline-none font-mono text-lg"
                  />
                </div>
              </div>
            </>
          )}

          {isMobilePayment && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                 JazzCash Account Number
                </label>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="03XX XXXXXXX"
                  maxLength={11
                  }
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-gray-900 focus:border-red-600 focus:outline-none font-mono text-lg"
                />
              </div>

             
            </>
          )}

          <div className="pt-4 space-y-3">
            <button
              type="submit"
              className="w-full py-4 text-lg font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all duration-300"
            >
              Confirm Payment
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-4 text-lg font-bold rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-900 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
