"use client";

import React from "react";
import Image from "next/image";
import PrimaryButton from "./buttons/PrimaryButton";

const SellYourCarSection = () => {
  return (
    <section className="relative overflow-hidden w-full h-[30vh]">
      <Image
        src="/handingkeysover.jpeg"
        layout="fill"
        objectFit="cover"
        alt="Background Image"
        className=""
      />

      <div className="container mx-auto h-full flex justify-end items-center relative z-10">
        <div className="lg:w-1/2 text-black text-end lg:text-left">
          <h2 className="text-3xl font-semibold mb-4">
            Looking to Sell Your Car?
          </h2>
          <p className="text-lg mb-6">
            Sell or qualify to trade-in your car with Alliance Group Autobrokers
            in three easy steps!
          </p>
          <PrimaryButton href="/sell-your-car" label="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default SellYourCarSection;
