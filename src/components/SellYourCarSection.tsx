"use client";

import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Image from "next/image";
import PrimaryButton from "./buttons/PrimaryButton";

const SellYourCarSection = () => {
  return (
    <section className="relative overflow-hidden w-full h-[30vh]">
      <motion.div // Wrap your content inside motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state for content
        animate={{ opacity: 1, y: 0 }} // Animate to this state
        transition={{ duration: 1.0 }} // Animation duration for content
        className="absolute inset-0"
      >
        <Image
          src="/handingkeysover.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Customer handing keys over to Alliance Group Autobrokers"
        />
      </motion.div>

      <div className="container mx-auto h-full flex justify-end items-center relative z-10">
        <motion.div // Wrap your content inside motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state for content
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          transition={{ duration: 0.5, delay: 0.6 }} // Animation duration for content with delay
          className="w-1/2 text-black text-center lg:text-left"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Looking to Sell Your Car?
          </h2>
          <p className="text-lg mb-6">
            Sell or qualify to trade-in your car with Alliance Group Autobrokers
            in three easy steps!
          </p>
          <PrimaryButton href="/tradein" label="Learn More" />
        </motion.div>
      </div>
    </section>
  );
};

export default SellYourCarSection;
