import { useEffect, useState, useRef } from "react";
import { Background } from "../ui/Background";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Data/AI Enthusiast />";
  const index = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index.current < fullText.length) {
        index.current += 1;
        setText((prevText) => prevText + fullText[index.current - 1]);
      } else {
        clearInterval(intervalId);
        setTimeout(() => onComplete(), 1000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      {/* Background behind everything */}
      <Background />

      {/* Optional semi-transparent overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Loading content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-gray-100">
        <div className="mb-4 text-3xl  font-mono font-bold">
          {text}
          <span className="animate-blink ml-1">|</span>
        </div>
        <div className="w-[200px] h-[2px] bg-white rounded relative overflow-hidden">
          <div className="w-[40%] h-full bg-green-800 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};