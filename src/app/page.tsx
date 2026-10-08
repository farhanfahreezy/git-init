const petals = Array.from({ length: 12 }, (_, i) => i * 30);

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 bg-gradient-to-b from-rose-50 via-pink-100 to-emerald-50 px-6 py-24 font-sans">
      <svg
        viewBox="0 0 200 300"
        className="w-64 drop-shadow-xl sm:w-80"
        role="img"
        aria-label="A blooming pink flower"
      >
        <defs>
          <radialGradient id="petal" cx="50%" cy="90%" r="90%">
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="60%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#be185d" />
          </radialGradient>
          <radialGradient id="center">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
        </defs>
        <path d="M100 110 C95 180 105 230 100 300" stroke="#15803d" strokeWidth="5" fill="none" />
        <path d="M100 210 C70 190 45 200 35 225 C65 230 85 225 100 210Z" fill="#22c55e" />
        <path d="M101 245 C130 225 155 235 165 260 C135 265 115 260 101 245Z" fill="#16a34a" />
        <g transform="translate(100 100)">
          <g className="origin-center [transform-box:fill-box] animate-[spin_40s_linear_infinite]">
            {petals.map((deg) => (
              <ellipse
                key={deg}
                rx="16"
                ry="46"
                cy="-40"
                fill="url(#petal)"
                opacity="0.9"
                transform={`rotate(${deg})`}
              />
            ))}
          </g>
          <circle r="22" fill="url(#center)" />
        </g>
      </svg>
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-rose-900 sm:text-5xl">
          Welcome
        </h1>
        <p className="mt-3 text-lg text-rose-700/80">Something lovely is blooming here.</p>
      </div>
    </main>
  );
}
