/**
 * Premium hero section with striking visual design
 */

"use client";

import { motion } from "framer-motion";
import Button from "@/components/UI/Button";
import Link from "next/link";
import Image from "next/image";
import { useProfile } from "@/contexts/ProfileContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as any,
    },
  },
};

export default function Hero() {
  const profile = useProfile();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 dark:from-slate-900 dark:via-blue-900 dark:to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-96 -top-96 h-[800px] w-[800px] rounded-full bg-blue-500 opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-96 -right-96 h-[800px] w-[800px] rounded-full bg-sky-400 opacity-20 blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="text-left pl-0 lg:pl-8 order-2 lg:order-1">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500"
            >
              Hi, I&apos;m
              <br />
              <span className="text-white">Olukunle O., PhD</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl leading-relaxed text-slate-200 dark:text-slate-300 max-w-3xl mb-8"
            >
              Lead AI Engineer & Applied Scientist with{" "}
              <span className="text-sky-400 font-semibold">7+ years</span> of
              End-to-End AI & ML experience. Ex Meta Engineer, PhD at Tufts.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-slate-300 dark:text-slate-400 max-w-2xl mb-10"
            >
              I specialize in building and deploying large-scale end-to-end ML
              systems including LLMs, Recommender Systems, Anomaly/Fraud
              Detection, Forecasting, and Optimization.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/project"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 rounded-full shadow-lg shadow-blue-500/40 hover:shadow-blue-400/60 hover:from-blue-700 hover:to-sky-600 transition-all duration-300"
                >
                  View Projects
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="relative"
            >
              {/* Glowing background circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 opacity-20 blur-xl scale-110 animate-pulse" />
              
              {/* Main profile picture container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-blue-500/30 bg-gradient-to-br from-blue-500/20 to-sky-500/20 backdrop-blur-sm">
                <Image
                  src="/profile-pic.jpeg"
                  alt="Olukunle Owolabi - AI Engineer & Applied Scientist"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 384px"
                />
                
                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating tech badges around the profile picture */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg border-2 border-white/20"
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-sky-600 to-sky-800 flex items-center justify-center shadow-lg border-2 border-white/20"
              >
                <span className="text-2xl">📊</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute top-1/2 -left-8 w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-sky-700 flex items-center justify-center shadow-lg border-2 border-white/20"
              >
                <span className="text-lg">🔍</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-gradient-to-br from-sky-700 to-blue-900 flex items-center justify-center shadow-lg border-2 border-white/20"
              >
                <span className="text-lg">📈</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent" />
    </section>
  );
}
