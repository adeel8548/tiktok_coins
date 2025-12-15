/**
 * CoinFlow - TikTok Coins Purchase Service
 * Handles all coin-related operations and transactions
 */

export interface CoinPackage {
  coins: number
  price: number
}

export interface TransactionDetails {
  username: string
  emailPhone: string
  coins: number
  price: number
  paymentMethod: string
  bankName?: string
  verificationId: string
  timestamp: Date
}

export interface PaymentDetails {
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  contactNumber?: string
}

/**
 * CoinFlowService - Main service for handling TikTok coin purchases
 */
export class CoinFlowService {
  private static instance: CoinFlowService

  private constructor() {}

  /**
   * Get singleton instance of CoinFlowService
   */
  static getInstance(): CoinFlowService {
    if (!CoinFlowService.instance) {
      CoinFlowService.instance = new CoinFlowService()
    }
    return CoinFlowService.instance
  }

  /**
   * Generate a unique verification ID for a transaction
   */
  generateVerificationId(): string {
    return `VER-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
  }

  /**
   * Validate payment details based on payment method
   */
  validatePaymentDetails(
    paymentMethod: string,
    details: PaymentDetails
  ): { valid: boolean; error?: string } {
    if (paymentMethod === "card") {
      if (!details.cardNumber || details.cardNumber.replace(/\s/g, "").length !== 16) {
        return { valid: false, error: "Invalid card number" }
      }
      if (!details.expiryDate || !/^\d{2}\/\d{2}$/.test(details.expiryDate)) {
        return { valid: false, error: "Invalid expiry date" }
      }
      if (!details.cvv || details.cvv.length !== 3) {
        return { valid: false, error: "Invalid CVV" }
      }
    }

    if (paymentMethod === "mobilewallet" && !details.contactNumber) {
      return { valid: false, error: "Contact number is required" }
    }

    return { valid: true }
  }

  /**
   * Process a coin purchase transaction
   */
  async processCoinPurchase(
    transaction: TransactionDetails,
    paymentDetails: PaymentDetails
  ): Promise<{ success: boolean; message: string; verificationId?: string }> {
    try {
      // Validate payment details
      const validation = this.validatePaymentDetails(
        transaction.paymentMethod,
        paymentDetails
      )

      if (!validation.valid) {
        return { success: false, message: validation.error || "Payment validation failed" }
      }

      // Simulate API call to process payment
      return {
        success: true,
        message: `Successfully purchased ${transaction.coins} coins for $${transaction.price}`,
        verificationId: transaction.verificationId,
      }
    } catch (error) {
      return {
        success: false,
        message: "Transaction failed. Please try again.",
      }
    }
  }

  /**
   * Format coin amount for display
   */
  formatCoinAmount(coins: number): string {
    if (coins >= 1000000) {
      return `${(coins / 1000000).toFixed(1)}M`
    }
    if (coins >= 1000) {
      return `${(coins / 1000).toFixed(1)}k`
    }
    return coins.toString()
  }

  /**
   * Format price for display
   */
  formatPrice(price: number): string {
    return `$${price.toLocaleString()}`
  }

  /**
   * Get all available coin packages
   */
  getAvailablePackages(): CoinPackage[] {
    return [
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
    ]
  }

  /**
   * Clear all user data from storage
   */
  clearAllUserData(): void {
    localStorage.clear()
    sessionStorage.clear()

    // Clear all cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
    })
  }
}

export default CoinFlowService.getInstance()
