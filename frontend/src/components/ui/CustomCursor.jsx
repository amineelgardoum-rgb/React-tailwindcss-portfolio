import { useEffect, useState } from "react";

export const CustomCursor = ({ size = "normal" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverTarget, setHoverTarget] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Hide cursor on touch devices (phones & tablets)
    const checkTouch = () => {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      const target = e.target;
      setHoverTarget(
        target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-pointer"
        )
      );
    };

    if (!window.matchMedia("(pointer: coarse)").matches) {
      window.addEventListener("mousemove", move, { passive: true });
      window.addEventListener("mouseover", handleHover);
      document.body.style.cursor = "none";
    }

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleHover);
      document.body.style.cursor = "";
    };
  }, []);

  // Don't render on touch devices
  if (isTouch) return null;

  const tagName = hoverTarget?.tagName?.toLowerCase();
  const isExpanded = tagName === "a" || tagName === "button" || tagName === "link";

  const baseSize = size === "small" ? 4 : size === "large" ? 10 : 6;
  const dynamicSize = isExpanded ? baseSize * 3 : baseSize * 2;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
      style={{
        transform: `translate(${position.x - dynamicSize / 2}px, ${position.y - dynamicSize / 2}px)`,
        transition: "transform 0s",
        width: dynamicSize,
        height: dynamicSize,
      }}
    >
      {/* Main Square Frame */}
      <div
        className={`border-2 ${isExpanded ? "border-green-500 bg-green-500/20 scale-125" : "border-green-400 bg-transparent"}`}
        style={{
          width: "100%",
          height: "100%",
          transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
          borderRadius: isExpanded ? '2px' : '0px'
        }}
      />
      
      {/* Center Point */}
      <div 
        className={`absolute w-1 h-1 bg-green-500 rounded-full transition-opacity duration-200 ${isExpanded ? "opacity-0" : "opacity-100"}`}
      />

      {/* Optional: Corner accents for a more "Data/Targeting" look */}
      {!isExpanded && (
        <div className="absolute inset-0 border border-green-500/30 -m-1" />
      )}
    </div>
  );
};