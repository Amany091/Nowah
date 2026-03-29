import React from 'react'

export default function AnimatedLines() {
  return (
   <div className="absolute inset-0 overflow-hidden h-full pointer-events-none z-0">
  {[20, 30, 80, 90].map((left, i) => (
    <div
      key={i}
      className="absolute top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-green-400/40 to-transparent animate-line-move"
      style={{
        left: `${left}%`,
        animationDelay: `${i * 1.2}s`,
      }}
    />
  ))}
</div>
  )
}
