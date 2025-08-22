import { useState, useEffect, useRef } from "react";
import { HeroText } from "../TypeWriter"; 
import { Bot, X } from "lucide-react";

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Connection established. Awaiting your command..." },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  // Effect to lock body scroll when chat is open on mobile
  useEffect(() => {
    if (isChatOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to restore scroll
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isChatOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const encodedQuery = encodeURIComponent(currentInput);
      const apiUrl = "http://0.0.0.0:8000";
      const url = `${apiUrl}/ask?query=${encodedQuery}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Network response error: ${response.statusText}`);
      }

      const data = await response.json();
      const botMessage = { sender: "bot", text: data.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to get response:", error);
      const errorMessage = {
        sender: "bot",
        text: "Error: Connection to host failed. Please check the terminal and try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* --- FINAL RESPONSIVE BUTTON --- */}
      {/* This button is visible on all screens when the chat is closed. */}
      {/* When the chat is open, it's hidden on small screens but visible on medium screens and up. */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`fixed bottom-4 right-4 z-50 flex items-center justify-center
                   bg-green-500 text-black rounded-full border border-black 
                   p-3 md:py-3 md:px-5 md:rounded-md
                   shadow-[0_0_10px_rgba(0,255,65,0.7)]
                   hover:bg-black hover:text-green-500 hover:shadow-[0_0_15px_rgba(0,255,65,1)]
                   transition-all duration-300 cursor-none transform hover:scale-105
                   ${isChatOpen ? "hidden md:flex" : "flex"}`}
      >
        {isChatOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>

      {/* CHAT WINDOW */}
      <div
        className={`
          fixed z-40
          transition-all duration-500 ease-in-out
          bottom-0 right-0 w-full h-full
          md:bottom-20 md:right-5 md:w-[90%] md:max-w-lg md:h-[70vh] md:max-h-[700px] md:rounded-lg
          ${
            isChatOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full md:translate-y-10 pointer-events-none"
          }`}
      >
        <div className="font-mono bg-black/95 text-green-400 flex flex-col w-full h-full max-h-full border border-green-500 shadow-[0_0_15px_rgba(0,255,65,0.4),0_0_5px_rgba(0,255,65,1)_inset] border-rounded md:rounded-lg">
          
          <div className="bg-green-500 text-black border-rounded p-3 text-center uppercase tracking-widest border-b border-green-500/50 select-none flex-shrink-0">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold [text-shadow:0_0_3px_rgba(0,0,0,0.5)] mx-auto">
                <HeroText strings={["Amine", "Chatbot"]} />
              </h1>
              {/* This close button is only visible on mobile screens */}
              <button
                onClick={() => setIsChatOpen(false)}
                className="md:hidden hover:bg-black-600 hover:text-green text-black font-bold text-xl leading-none w-7 h-7 rounded-full transition-all-ease-in-out cursor-none"
              >
                &times;
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 min-h-0">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`px-4 py-3 bg-green-900/30 max-w-[85%] leading-relaxed text-sm md:text-base rounded-md ${
                  msg.sender === "user"
                    ? "self-end border border-cyan-500/50 text-cyan-400 [text-shadow:0_0_5px_#00ffff]"
                    : "self-start border border-green-500/50 [text-shadow:0_0_5px_#00ff41]"
                }`}
              >
                <span
                  className={`font-bold ${
                    msg.sender === "user" ? "text-cyan-400" : "text-green-400"
                  }`}
                >
                  {msg.sender === "user" ? "[USER]> " : "[BOT_RESPONSE]> "}
                </span>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="self-start px-4 py-3 border border-green-500/50 [text-shadow:0_0_5px_#00ff41]">
                <span className="font-bold">[BOT_RESPONSE] </span>
                <span className="animate-pulse">Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            className="flex items-center p-4 border-t border-green-500 bg-gray-900/50 gap-4 flex-shrink-0"
            onSubmit={handleSend}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command..."
              disabled={isLoading}
              className="flex-grow bg-black text-green-400 p-3 text-base caret-green-400 border-b border-green-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300 placeholder:text-green-500/60 cursor-none disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-transparent text-green-400 border border-green-400 px-6 py-3 font-mono uppercase tracking-wider transition-all duration-300 hover:enabled:bg-green-400 hover:enabled:text-black  hover:enabled:shadow-[0_0_10px_#00ff41] disabled:border-red-500 disabled:text-red-500 cursor-none disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chatbot;