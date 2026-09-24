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
  const dynamicSize = isExpanded ? baseSize * 6 : baseSize * 2;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
      style={{
        width: dynamicSize + 20,
        height: dynamicSize + 20,
        transform: `translate(${position.x - (dynamicSize + 20) / 2}px, ${position.y - (dynamicSize + 20) / 2}px)`,
      }}
    >
      {/* Outer ring */}
      <div
        className={`rounded-full border-2 transition-all duration-300 ease-out ${
          isExpanded
            ? "border-green-500 bg-green-500/20 scale-125 shadow-[0_0_20px_rgba(34,197,94,0.6)]"
            : "border-green-400 bg-transparent"
        }`}
        style={{
          width: dynamicSize,
          height: dynamicSize,
          transitionProperty: "all",
        }}
      />
      </div>
  );
};