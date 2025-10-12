/**
 * About/Contact page with premium design
 */

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/UI/Container";
import Button from "@/components/UI/Button";
import Spinner from "@/components/UI/Spinner";
import { submitContact } from "@/lib/api";
import { getPublicProfile } from "@/apis/About/api";
import type { ContactFormData } from "@/types";

interface ProfileData {
  name: string;
  designation: string;
  bio: string;
  image?: string;
  imageUrl?: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
}

export default function AboutPage() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getPublicProfile();
        if (response.success && response.data) {
          setProfileData(response.data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

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
              Hi, I&apos;m {profileData?.name || "Loading..."}
            </h2>
            {profileData?.designation && (
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {profileData.designation}
              </p>
            )}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              {profileData?.bio ? (
                <p className="whitespace-pre-wrap">{profileData.bio}</p>
              ) : (
                <p>No bio available yet.</p>
              )}
            </div>

            {/* Social Links */}
            {profileData?.socialLinks && Object.entries(profileData.socialLinks).some(([_, url]) => url && url.trim()) && (
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Connect with me
                </h3>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(profileData.socialLinks)
                    .filter(([_, url]) => url && url.trim())
                    .map(([platform, url]) => {
                      const icons: Record<string, string> = {
                        github: "🔗",
                        linkedin: "💼",
                        twitter: "🐦",
                        email: "📧"
                      };
                      const icon = icons[platform] || "🌐";
                      const href = platform === "email" && url && !url.startsWith("mailto:") 
                        ? `mailto:${url}` 
                        : url || "#";
                      
                      return (
                        <a
                          key={platform}
                          href={href}
                          target={platform === "email" ? undefined : "_blank"}
                          rel={platform === "email" ? undefined : "noopener noreferrer"}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold hover:from-blue-700 hover:to-sky-600 shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all capitalize"
                        >
                          <span className="text-xl">{icon}</span>
                          {platform}
                        </a>
                      );
                    })}
                </div>
              </div>
            )}
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
