"use client"

interface VerificationModalProps {
  isOpen: boolean
}

export function VerificationModal({ isOpen }: VerificationModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-green-600 rounded-3xl p-12 max-w-lg w-[90%] text-center shadow-[0_0_50px_rgba(34,197,94,0.3)] animate-in zoom-in duration-300">
        <div className="mb-6 inline-flex items-center justify-center w-24 h-24 bg-green-600 rounded-full animate-bounce">
          <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-green-500">Email Verified Successfully</h2>
        <p className="text-xl text-gray-300">You can now purchase TikTok coins</p>
      </div>
    </div>
  )
}
