import { useState, useEffect, useRef } from "react";
import React from "react";
import { Bot, X, Send, Terminal } from "lucide-react";
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
          className: "underline text-green-400 hover:text-green-300 transition-colors",
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
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 items-center justify-center rounded-full bg-green-500 text-black border border-green-400 hover:bg-green-400 transition-all duration-200 cursor-none ${
          isChatOpen ? "hidden" : "flex"
        }`}
      >
        <Bot className="w-5 h-5" />
      </button>

      {isChatOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsChatOpen(false)}
        />
      )}

      <div
        className={`fixed z-40 transition-all duration-300 ease-in-out bottom-6 left-2 right-2 w-auto h-[85vh] md:bottom-10 md:left-auto md:right-6 md:w-[300px] md:h-[480px] md:rounded-xl md:max-w-[calc(100vw-3rem)] ${
          isChatOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col w-full h-full bg-gray-950 text-gray-100 border border-gray-800 rounded-t-2xl md:rounded-xl overflow-hidden">
          
          <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <Terminal className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-white">
                Amine's Assistant
              </span>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-400 hover:text-white transition-colors cursor-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 space-y-4 min-h-0">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <Bot className="w-3 h-3 text-green-400" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-green-500 text-black font-medium rounded-br-none"
                      : "bg-gray-800 text-gray-200 rounded-bl-none"
                  }`}
                >
                  {msg.sender === "bot" ? renderBotMessage(msg.text) : msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                  <Bot className="w-3 h-3 text-green-400" />
                </div>
                <div className="bg-gray-800 px-4 py-3 rounded-lg rounded-bl-none flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-t border-gray-800 flex-shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="flex-1 bg-gray-800 text-gray-100 text-sm px-3 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-green-500 placeholder:text-gray-500 disabled:opacity-50 transition-colors cursor-none"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-9 h-9 flex items-center justify-center flex-shrink-0 bg-green-500 text-black rounded-lg hover:bg-green-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-none"
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