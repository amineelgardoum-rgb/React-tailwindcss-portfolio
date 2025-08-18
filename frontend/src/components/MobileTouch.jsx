import { useState, useEffect } from 'react';

export const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // This check is the most reliable way to determine a touch device.
    // It's true for phones, tablets, and touch-screen laptops.
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // As a fallback, we can also check the screen width.
    const isMobileWidth = window.innerWidth < 768; // 768px is a common tablet breakpoint

    // We consider it a "touch device" for our purposes if it has touch capability
    // OR if it's a very narrow screen.
    if (hasTouch || isMobileWidth) {
      setIsTouch(true);
    }
  }, []); // The empty array ensures this check only runs once on mount.

  return isTouch;
};