"use client"

import React, { useState, useEffect } from "react"

export function OceanScene() {
  const [bubbles, setBubbles] = useState([])

  // Генерируем случайные пузырьки только на клиенте
  useEffect(() => {
    const generatedBubbles = [...Array(8)].map(() => ({
      width: Math.random() * 10 + 5,
      height: Math.random() * 10 + 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: Math.random() * 4 + 4,
    }))
    setBubbles(generatedBubbles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Ocean Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d2847] to-[#1a4d6f]" />

      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="wave absolute bottom-0 w-[200%] h-32 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#2dd4bf"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        <svg
          className="wave-reverse absolute bottom-0 w-[200%] h-40 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#06b6d4"
            fillOpacity="0.4"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Floating Whale */}
      <div className="swim absolute top-1/3 left-0">
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="float"
        >
          {/* Whale body */}
          <ellipse cx="60" cy="50" rx="45" ry="25" fill="#2dd4bf" opacity="0.9" />
          <ellipse cx="45" cy="48" rx="35" ry="20" fill="#14b8a6" opacity="0.8" />

          {/* Whale tail */}
          <path d="M10 50 Q5 45 8 40 Q10 45 10 50 Q10 55 8 60 Q5 55 10 50Z" fill="#2dd4bf" opacity="0.9" />

          {/* Whale eye */}
          <circle cx="75" cy="45" r="3" fill="#0a1628" />

          {/* Water spout */}
          <path d="M85 35 Q87 25 85 20 Q83 25 85 35Z" fill="#06b6d4" opacity="0.6" />
          <path d="M90 33 Q93 23 91 18 Q89 23 90 33Z" fill="#06b6d4" opacity="0.5" />

          {/* Container boxes */}
          <rect x="50" y="35" width="8" height="8" fill="#0ea5e9" opacity="0.8" rx="1" />
          <rect x="60" y="35" width="8" height="8" fill="#0ea5e9" opacity="0.8" rx="1" />
          <rect x="55" y="27" width="8" height="8" fill="#0ea5e9" opacity="0.8" rx="1" />
        </svg>
      </div>

      {/* Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((c, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/20 float"
            style={{
              width: `${c.width}px`,
              height: `${c.height}px`,
              left: `${c.left}%`,
              top: `${c.top}%`,
              animationDelay: `${c.animationDelay}s`,
              animationDuration: `${c.animationDuration}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
