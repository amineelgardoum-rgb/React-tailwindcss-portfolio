import { useState, useEffect, useRef } from "react";
import React from "react";
import { Bot, X, Send, Terminal, ArrowUp } from "lucide-react";
import { askChatbot } from "../../services/api";

const linkify = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) => {
    if (urlRegex.test(part)) {
      return React.createElement(
        "a",
        {
          key: i,
          href: part,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline text-green-400 hover:text-green-300 transition-colors break-all",
        },
        part
      );
    }
    return part;
  });
};

const renderBotMessage = (text) => {
  const items = text
    .split("*")
    .map((i) => i.trim())
    .filter(Boolean);

  if (items.length <= 1) return React.createElement("span", null, linkify(text));

  const heading = items[0].includes(":") ? items[0].replace(":", "") : "";
  const bullets = heading ? items.slice(1) : items;

  return (
    <div className="space-y-1">
      {heading && (
        <p className="font-semibold text-green-300 mb-2">{heading}</p>
      )}
      <ul className="space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="text-green-500 mt-1 flex-shrink-0">›</span>
            <span>{linkify(b.replace(/\bBuilded\b/g, "Built"))}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Amine's assistant. Ask me anything about his skills, projects, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    messagesContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      setShowScrollTop(messagesContainerRef.current.scrollTop > 100);
    }
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isChatOpen]);

  useEffect(() => {
    document.body.style.overflow = isChatOpen ? "hidden" : "auto";
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
      const answer = await askChatbot(currentInput);
      setMessages((prev) => [...prev, { sender: "bot", text: answer }]);
    } catch (err) {
      console.error("Failed to get response:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Connection error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .chat-messages::-webkit-scrollbar { display: none; }
        .chat-messages { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Toggle Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 items-center justify-center rounded-full bg-green-500 text-black border border-green-400 hover:bg-green-400 transition-all duration-200 cursor-none ${
          isChatOpen ? "hidden" : "flex"
        }`}
      >
        <Bot className="w-5 h-5" />
      </button>

      {/* Backdrop on mobile */}
      {isChatOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsChatOpen(false)}
        />
      )}

      {/* Chat Window */}
      <div
        className={`fixed z-40 transition-all duration-300 ease-in-out
          bottom-20 left-2 right-2 w-auto h-[78vh]
          md:bottom-6 md:left-auto md:right-6 md:w-[420px] md:h-[580px] md:max-w-[calc(100vw-3rem)]
          rounded-2xl
          ${
            isChatOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col w-full h-full bg-gray-950 text-gray-100 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-green-900/20">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gray-900 border-b border-gray-800 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <Terminal className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-white tracking-wide">
                Amine's Assistant
              </span>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-400 hover:text-white hover:bg-gray-800 p-1 rounded transition-all cursor-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={messagesContainerRef}
            onScroll={handleScroll}
            className="chat-messages flex-1 overflow-y-auto px-5 py-5 space-y-5 min-h-0 relative"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <Bot className="w-3.5 h-3.5 text-green-400" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-green-500 text-black font-medium rounded-br-sm"
                      : "bg-gray-800/80 text-gray-200 rounded-bl-sm border border-gray-700/50"
                  }`}
                >
                  {msg.sender === "bot" ? renderBotMessage(msg.text) : msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                  <Bot className="w-3.5 h-3.5 text-green-400" />
                </div>
                <div className="bg-gray-800/80 border border-gray-700/50 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Scroll to top button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="absolute bottom-20 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 border border-gray-600 text-green-400 hover:bg-gray-700 hover:border-green-500 transition-all duration-200 shadow-lg cursor-none"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-3 px-5 py-4 bg-gray-900 border-t border-gray-800 flex-shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="flex-1 bg-gray-800 text-gray-100 text-sm px-4 py-2.5 rounded-xl border border-gray-700 focus:outline-none focus:border-green-500 placeholder:text-gray-500 disabled:opacity-50 transition-colors cursor-none"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-green-500 text-black rounded-xl hover:bg-green-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-none"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chatbot;