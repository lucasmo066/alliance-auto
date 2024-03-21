'use client';

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import AccentButton from "../../../shared/buttons/AccentButton";

const Hero = () => {
  const headerText =
    "Discover Unmatched Quality in Used Cars at Marietta's Trusted Dealership";
  const paragraphText =
    "Welcome to Marietta's premier destination for exceptional pre-owned cars. With 15 years of unwavering commitment to great value, top-notch mechanics, transparent selling practices, and a reputation built on trust, we are your trusted choice for finding the perfect vehicle. Explore our vast inventory and experience top-quality customer service like never before.";

  const controls = useAnimation();

  useEffect(() => {
    // Sequence the animations one after the other
    const sequenceAnimations = async () => {
      await controls.start("visible");
      await controls.start("visible");
    };

    sequenceAnimations();
  }, [controls]);

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(/hero.webP)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mx-auto">
          {/* Logo Image Wrapper */}
          <div className="mb-6 hidden md:block" style={{ transform: 'translateX(27%)' }}>
            <Image
              src="/2.png"
              width={200}
              height={200}
              alt="logo"
            />
          </div>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.2,
                  staggerChildren: 0.04,
                },
              },
              hidden: { opacity: 0 },
            }}
            className="mb-5 text-5xl font-bold text-secondary typing-text"
          >
            {headerText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                },
              },
              hidden: { opacity: 0 },
            }}
            className="text-lg mb-5 text-white"
          >
            {paragraphText}
          </motion.p>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                },
              },
              hidden: { opacity: 0 },
            }}
          >
            <AccentButton href="/cars" label="View Inventory" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
