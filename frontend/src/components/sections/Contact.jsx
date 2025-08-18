import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { Footer } from "./Footer";
export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(service_id, template_id, e.target, public_key)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <>
    <section id="contact" className="relative z-10 min-h-screen flex items-center justify-center py-20 bg-transparent text-green-300">
      <RevealOnScroll>
        <div className="relative w-150 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-center text-transparent">
            Get In Touch
          </h2>

          <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name"
                className="w-full bg-black border border-green-700 rounded-lg px-4 py-3 text-green-300 placeholder-green-500 transition duration-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email Address"
                className="w-full bg-black border border-green-700 rounded-lg px-4 py-3 text-green-300 placeholder-green-500 transition duration-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your Message"
                className="w-full bg-black border border-green-700 rounded-lg px-4 py-3 text-green-300 placeholder-green-500 transition duration-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-green-600 text-black py-3 px-6 font-bold tracking-wide cursor-none rounded-lg transition-colors duration-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500 disabled:bg-gray-700  disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p className="text-green-400 text-center mt-4">Message sent successfully!</p>}
            {status === "error" && <p className="text-red-400 text-center mt-4">Oops! Something went wrong. Please try again.</p>}
          </form>
        </div>
        <Footer />
      </RevealOnScroll>
    </section>
    </>
  );
};
