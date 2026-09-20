"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[460px] md:min-h-[500px] flex-col items-center justify-center overflow-hidden w-full z-10 pt-6 pb-12",
        className
      )}
    >
      {/* Light Beams and Conic Glows with mix-blend-screen for real photographic overlay */}
      <div className="relative flex w-full flex-1 scale-y-110 items-center justify-center isolate z-10 pointer-events-none">
        {/* Left Conic Light Beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 0.9, width: "32rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-52 overflow-visible w-[32rem] bg-gradient-conic from-[#019934] via-[#019934]/30 to-transparent text-white [--conic-position:from_70deg_at_center_top] mix-blend-screen"
        >
          <div className="absolute w-[100%] left-0 h-36 bottom-0 z-20 [mask-image:linear-gradient(to_top,black,transparent)]" />
          <div className="absolute w-36 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,black,transparent)]" />
        </motion.div>

        {/* Right Conic Light Beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 0.9, width: "32rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-52 w-[32rem] bg-gradient-conic from-transparent via-[#019934]/30 to-[#019934] text-white [--conic-position:from_290deg_at_center_top] mix-blend-screen"
        >
          <div className="absolute w-36 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,black,transparent)]" />
          <div className="absolute w-[100%] right-0 h-36 bottom-0 z-20 [mask-image:linear-gradient(to_top,black,transparent)]" />
        </motion.div>

        {/* Central Ambient Glow */}
        <div className="absolute top-1/2 h-40 w-full translate-y-8 scale-x-150 bg-[#019934]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute inset-auto z-40 h-32 w-[28rem] -translate-y-1/2 rounded-full bg-[#019934]/30 blur-3xl pointer-events-none"></div>

        {/* Bright Lamp Core */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "18rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-32 w-72 -translate-y-[5rem] rounded-full bg-[#42e078]/35 blur-2xl pointer-events-none"
        />

        {/* Thin High-Intensity Lamp Edge */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "32rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[32rem] -translate-y-[6rem] bg-[#42e078] shadow-[0_0_20px_#42e078]"
        />
      </div>

      {/* Foreground Content Container */}
      <div className="relative z-30 flex -translate-y-16 md:-translate-y-20 flex-col items-center px-4 sm:px-6 w-full max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  );
};
