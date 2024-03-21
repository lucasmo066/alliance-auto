"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "../../shared/buttons/PrimaryButton";

const SellYourCarSection = () => {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Image Wrapper */}
      <div className="h-[30vh] md:h-[30vh] lg:h-[30vh] relative">
        <Image
          src="/handingkeysover.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Customer handing keys over to Alliance Group Autobrokers"
          priority // Optional: Marks this image as high priority to suggest to browsers it should be preloaded
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 absolute top-0 left-0 right-0 bottom-0 flex justify-end items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-2/3 text-center md:text-center"
        >
          <h2 className="text-3xl md:text-3xl font-semibold mb-4 text-black">
            Looking to Sell Your Car?
          </h2>
          <p className="text-md md:text-lg mb-6 text-black">
            Sell or qualify to trade-in your car with Alliance Group Autobrokers
            in three easy steps!
          </p>
          <PrimaryButton href="/tradein" label="Apply Today!" />
        </motion.div>
      </div>
    </section>
  );
};

export default SellYourCarSection;
