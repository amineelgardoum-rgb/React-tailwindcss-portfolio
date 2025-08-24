import { useEffect, useState, useRef } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Data Engineer />";
  const index = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index.current < fullText.length) {
        index.current += 1;
        setText((prevText) => prevText + fullText[index.current - 1]);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-green-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
