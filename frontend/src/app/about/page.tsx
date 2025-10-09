/**
 * About/Contact page with premium design
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/UI/Container";
import Button from "@/components/UI/Button";
import { submitContact } from "@/lib/api";
import type { ContactFormData } from "@/types";

export default function AboutPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      await submitContact(formData);
      setFormState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormState("idle"), 5000);
    } catch (error) {
      setFormState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20">
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-700 dark:text-blue-400 mb-4">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get in touch and learn more about my work and background.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">
              Hi, I&apos;m Olukunle Owolabi
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                I&apos;m a <strong className="text-blue-600 dark:text-blue-400">Lead AI Engineer & Applied Scientist</strong> with over 7 years of experience building and deploying large-scale, end-to-end ML systems.
              </p>
              <p>
                I previously worked as an engineer at <strong>Meta</strong> and hold a <strong>PhD from Tufts University</strong>, where I specialized in machine learning research.
              </p>
              <p>
                My expertise spans multiple domains including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Large Language Models (LLMs)</li>
                <li>Recommender Systems</li>
                <li>Anomaly & Fraud Detection</li>
                <li>Time Series Forecasting</li>
                <li>Optimization & Decision Systems</li>
              </ul>
              <p>
                I&apos;m passionate about building AI systems that solve real-world problems and creating tools that make ML more accessible to everyone.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "GitHub", icon: "🔗", href: "https://github.com" },
                  { name: "LinkedIn", icon: "💼", href: "https://linkedin.com" },
                  { name: "Twitter", icon: "🐦", href: "https://twitter.com" },
                  { name: "Email", icon: "📧", href: "mailto:contact@example.com" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold hover:from-blue-700 hover:to-sky-600 shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  >
                    <span className="text-xl">{link.icon}</span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <div className="mt-6">
              <Button
                as="a"
                href="/cv.pdf"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                📄 Download CV
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              {formState === "error" && (
                <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 text-red-700 dark:text-red-400">
                  {errorMessage}
                </div>
              )}

              {formState === "success" && (
                <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 text-green-700 dark:text-green-400">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={formState === "submitting"}
                className="w-full"
              >
                {formState === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
