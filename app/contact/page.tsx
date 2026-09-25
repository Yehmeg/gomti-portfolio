"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaArrowLeft, FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <h2 className="text-4xl font-black mb-2">Get In Touch</h2>
          <p className="text-gray-400 mb-8">Send me a message directly</p>

          <div className="text-left mb-6 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-cyan-400 font-medium">Direct Email</p>
            <p className="text-white mt-1">gomtikumari26@gmail.com</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={status === "loading"}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tell me about your project, opportunity, or just say hi..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {status === "loading" && <FaSpinner className="w-5 h-5 animate-spin" />}
              {status !== "loading" && <FaEnvelope className="w-5 h-5" />}
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-green-400 flex items-center justify-center gap-2">
                <FaCheckCircle className="w-5 h-5" />
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-center text-red-400 flex items-center justify-center gap-2">
                <FaExclamationCircle className="w-5 h-5" />
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}