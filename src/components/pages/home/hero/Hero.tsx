'use client';

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import AccentButton from "../../../shared/buttons/AccentButton";
import logo from '/public/2.png'; // Make sure this path is correct. It might need adjustment based on your project structure.

const Hero = () => {
  const headerText =
    "Discover Unmatched Quality in Used Cars at Marietta's Trusted Dealership";
  const paragraphText =
    "Welcome to Marietta's premier destination for exceptional pre-owned cars. With 15 years of unwavering commitment to great value, top-notch mechanics, transparent selling practices, and a reputation built on trust, we are your trusted choice for finding the perfect vehicle. Explore our vast inventory and experience top-quality customer service like never before.";

  const controls = useAnimation();

  useEffect(() => {
    // Start animations after a delay ensuring the first contentful paint occurs
    controls.start("visible");
  }, [controls]);

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: "url(/hero.webP)" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mx-auto">
          <div className="mb-6 hidden md:block" style={{ transform: 'translateX(27%)' }}>
            <Image src={logo} width={200} height={200} alt="logo" priority />
          </div>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 1, // Delay animations to ensure they start after initial content is painted
                  staggerChildren: 0.05,
                },
              },
              hidden: { opacity: 0 },
            }}
            className="mb-5 text-5xl font-bold text-secondary typing-text"
          >
            {headerText}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 1.2, // Further delay for subsequent content
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
                  duration: 0.7,
                  delay: 1.4, // Adjust delays as needed
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
