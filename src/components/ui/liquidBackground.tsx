"use client";
import { useEffect, useRef } from "react";

export default function LiquidBackground() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let t = 0;

    const animate = () => {
      t += 0.02;

      const amplitude = 80;
      const frequency = 0.02;

      let d = "M0 300 ";

      for (let x = 0; x <= 800; x += 20) {
        const y =
          300 +
          Math.sin(x * frequency + t) * amplitude +
          Math.cos(x * 0.01 + t) * 40;

        d += `L ${x} ${y} `;
      }

      d += "L 800 600 L 0 600 Z";

      if (pathRef.current) {
        pathRef.current.setAttribute("d", d);
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <svg viewBox="0 0 800 600" className="w-full h-full">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="25" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          ref={pathRef}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="40"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}