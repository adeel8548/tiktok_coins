"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a0a" stopOpacity="1" />
            <stop offset="50%" stopColor="#1a0000" stopOpacity="1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </linearGradient>

          <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff0000" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
          </radialGradient>

          {/* Pattern for circuit board effect */}
          <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <line x1="0" y1="25" x2="100" y2="25" stroke="#8B0000" strokeWidth="0.5" opacity="0.3" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#8B0000" strokeWidth="0.5" opacity="0.3" />
            <line x1="0" y1="75" x2="100" y2="75" stroke="#8B0000" strokeWidth="0.5" opacity="0.3" />
            
            {/* Vertical lines */}
            <line x1="25" y1="0" x2="25" y2="100" stroke="#8B0000" strokeWidth="0.5" opacity="0.3" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="#8B0000" strokeWidth="0.5" opacity="0.3" />
            <line x1="75" y1="0" x2="75" y2="100" stroke="#8B0000" strokeWidth="0.5" opacity="0.3" />
            
            {/* Diagonal accents */}
            <line x1="0" y1="0" x2="100" y2="100" stroke="#cc0000" strokeWidth="0.3" opacity="0.2" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="#cc0000" strokeWidth="0.3" opacity="0.2" />
          </pattern>

          {/* Geometric pattern */}
          <pattern id="geometricPattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
            <circle cx="75" cy="75" r="3" fill="#ff0000" opacity="0.4" />
            <circle cx="0" cy="0" r="2" fill="#cc0000" opacity="0.3" />
            <circle cx="150" cy="150" r="2" fill="#cc0000" opacity="0.3" />
            <circle cx="0" cy="150" r="2" fill="#00ffff" opacity="0.2" />
            <circle cx="150" cy="0" r="2" fill="#00ffff" opacity="0.2" />
            <line x1="0" y1="75" x2="150" y2="75" stroke="#8B0000" strokeWidth="0.2" opacity="0.15" />
            <line x1="75" y1="0" x2="75" y2="150" stroke="#8B0000" strokeWidth="0.2" opacity="0.15" />
          </pattern>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main background gradient */}
        <rect width="1200" height="1200" fill="url(#mainGradient)" />

        {/* Circuit board pattern layer */}
        <rect width="1200" height="1200" fill="url(#circuitPattern)" />

        {/* Geometric pattern layer */}
        <rect width="1200" height="1200" fill="url(#geometricPattern)" />

        {/* Red glow orbs */}
        <circle cx="200" cy="300" r="400" fill="url(#redGlow)" filter="url(#glow)" />
        <circle cx="1000" cy="800" r="350" fill="url(#redGlow)" filter="url(#glow)" />
        <circle cx="600" cy="600" r="300" fill="url(#redGlow)" opacity="0.5" />

        {/* Cyan glow accents */}
        <circle cx="950" cy="150" r="300" fill="url(#cyanGlow)" filter="url(#glow)" />
        <circle cx="100" cy="900" r="250" fill="url(#cyanGlow)" filter="url(#glow)" />

        {/* Abstract network lines */}
        <g stroke="#8B0000" strokeWidth="1" opacity="0.25" strokeLinecap="round">
          {/* Horizontal network */}
          <line x1="50" y1="150" x2="400" y2="150" />
          <line x1="500" y1="250" x2="900" y2="250" />
          <line x1="100" y1="500" x2="650" y2="500" />
          <line x1="700" y1="700" x2="1100" y2="700" />
          <line x1="150" y1="900" x2="800" y2="900" />

          {/* Vertical network */}
          <line x1="300" y1="100" x2="300" y2="400" />
          <line x1="600" y1="200" x2="600" y2="700" />
          <line x1="950" y1="50" x2="950" y2="600" />
          <line x1="200" y1="600" x2="200" y2="1000" />
          <line x1="800" y1="400" x2="800" y2="1000" />

          {/* Diagonal accents */}
          <line x1="100" y1="200" x2="300" y2="400" />
          <line x1="700" y1="300" x2="900" y2="500" />
          <line x1="400" y1="800" x2="600" y2="1000" />
          <line x1="850" y1="600" x2="1000" y2="800" />
        </g>

        {/* Subtle white accent lines */}
        <g stroke="#ffffff" strokeWidth="0.5" opacity="0.08">
          <line x1="0" y1="600" x2="1200" y2="600" />
          <line x1="600" y1="0" x2="600" y2="1200" />
          <path d="M 100 100 Q 600 300 1100 100" fill="none" />
          <path d="M 100 1100 Q 600 900 1100 1100" fill="none" />
        </g>

        {/* TikTok-inspired red accents */}
        <g fill="none" stroke="#ff0000" strokeWidth="1.5" opacity="0.15">
          <rect x="100" y="100" width="300" height="300" />
          <rect x="800" y="700" width="250" height="250" />
          <circle cx="300" cy="800" r="80" />
          <circle cx="900" cy="300" r="100" />
        </g>

        {/* Animated pulse elements */}
        <g opacity="0.1">
          <circle cx="600" cy="150" r="50" fill="#ff0000">
            <animate
              attributeName="r"
              values="50;80;50"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.1;0.05;0.1"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="150" cy="600" r="40" fill="#00ffff">
            <animate
              attributeName="r"
              values="40;70;40"
              dur="5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.1;0.05;0.1"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="1050" cy="900" r="45" fill="#ff0000">
            <animate
              attributeName="r"
              values="45;75;45"
              dur="4.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.1;0.05;0.1"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  )
}
