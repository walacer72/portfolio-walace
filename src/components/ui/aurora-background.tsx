"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const [disableAnimation, setDisableAnimation] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const userAgent = navigator.userAgent;
    const isEdge = userAgent.includes("Edg/");

    console.log("AuroraBackground: userAgent =", userAgent);
    console.log("AuroraBackground: prefersReducedMotion =", prefersReducedMotion);
    console.log("AuroraBackground: isEdge =", isEdge);

    if (isEdge && !prefersReducedMotion) {
      console.log("AuroraBackground: Edge detected, enabling animation");
      setDisableAnimation(false);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const measureFPS = (now: number) => {
      frame++;
      if (now - start < 1500) {
        requestAnimationFrame(measureFPS);
      } else {
        const fps = (frame * 1000) / (now - start);
        console.log("AuroraBackground: measured FPS =", fps);
        if (fps >= 45 && !prefersReducedMotion) {
          setDisableAnimation(false);
        } else {
          setDisableAnimation(true);
        }
      }
    };

    requestAnimationFrame(measureFPS);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full min-h-screen flex flex-col bg-zinc-50 text-slate-950 dark:bg-zinc-900 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* FUNDO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {disableAnimation ? (
          <div
            className="w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/static/aurora-fallback.jpg')",
              opacity: 0.3,
            }}
          />
        ) : (
          <div
            className={cn(
              `w-full h-full blur-[4px] opacity-30 pointer-events-none 
              [background-image:var(--white-gradient),var(--aurora)] 
              [background-size:300%,_200%] 
              [background-position:50%_50%,50%_50%] 
              after:animate-aurora 
              after:absolute after:inset-0 
              after:[background-image:var(--white-gradient),var(--aurora)] 
              after:[background-size:200%,_100%] 
              after:mix-blend-difference after:content-[""] 
              dark:[background-image:var(--dark-gradient),var(--aurora)] 
              after:dark:[background-image:var(--dark-gradient),var(--aurora)] 
              dark:invert-0`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
            style={{
              "--aurora":
                "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
              "--blue-300": "#93c5fd",
              "--blue-400": "#60a5fa",
              "--blue-500": "#3b82f6",
              "--indigo-300": "#a5b4fc",
              "--violet-200": "#ddd6fe",
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties}
          />
        )}
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
