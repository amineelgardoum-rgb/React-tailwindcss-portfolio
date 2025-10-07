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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(service_id, template_id, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, public_key);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err); // <-- See the real error
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative z-10 min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-transparent text-green-300">
      <div className="w-full max-w-2xl mx-auto">
        <RevealOnScroll>
          <div className="bg-transparent p-6 md:p-10 ">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-center text-transparent">
              Get In Touch
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name"
                className="w-full bg-black border cursor-none border-green-700 rounded-lg px-4 py-3 text-green-300 placeholder-green-500/70 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email Address"
                className="w-full bg-black border cursor-none border-green-700 rounded-lg px-4 py-3 text-green-300 placeholder-green-500/70 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your Message"
                className="w-full bg-black border cursor-none border-green-700 rounded-lg px-4 py-3 text-green-300 placeholder-green-500/70 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              ></textarea>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-green-400 cursor-none text-black py-3 px-6 font-bold tracking-wide rounded-lg transition-all duration-300 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500 disabled:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <div className="h-6 text-center">
                {status === "success" && <p className="text-green-400">Message sent successfully!</p>}
                {status === "error" && <p className="text-red-400">Oops! Something went wrong. Please try again.</p>}
              </div>
            </form>
          </div>
          <Footer />
        </RevealOnScroll>
      </div>
    </section>
  );
};
