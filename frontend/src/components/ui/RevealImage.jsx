import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const RevealImage = ({ src, overlaySrc, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative  group overflow-hidden cursor-none ${className}`}
    >
      {/* 1. Base Layer: The Bot Image - ALWAYS VISIBLE */}
      {overlaySrc && (
        <img 
          src={overlaySrc} 
          alt="Bot Identity" 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-60"
        />
      )}

      {/* 2. SVG Reveal Layer: Your Real Photo (revealed only in the spotlight) */}
      <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none">
        <defs>
          {/* Fractal Noise filter to deform the circle into a highly organic blob */}
          <filter id="organic-reveal-filter">
            <feTurbulence 
              type="turbulence" 
              baseFrequency="0.03" 
              numOctaves="8" 
              seed="15"
              result="noise" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="180" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>

          <mask id="organic-spotlight-mask">
            <motion.circle 
              cx={springX} 
              cy={springY} 
              animate={{
                r: isHovered ? 160 : 0,
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 120
              }}
              fill="white" 
              filter="url(#organic-reveal-filter)"
            />
          </mask>
        </defs>

        <image 
          href={src} 
          width="100%" 
          height="100%" 
          preserveAspectRatio="xMidYMid slice" 
          mask="url(#organic-spotlight-mask)" 
        />
      </svg>

      {/* Cybernetic HUD Overlays */}
      
      
      {/* Real-time Status Text */}
      
    </div>
  );
};
