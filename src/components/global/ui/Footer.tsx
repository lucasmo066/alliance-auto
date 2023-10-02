'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }} // Add this transition for ease
      className="footer footer-center p-10 mt-10 bg-neutral shadow-inner shadow-gray-800 text-primary-content"
    >
      <aside>
        <Image
          src="/2.png"
          alt="Alliance Group Auto Logo"
          width={200}
          height={50}
        />

        <p className="font-bold">
          Alliance Group Autobrokers. <br /> Providing trustworthy car sales since 2006
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <p className="font-bold -mb-6">Receive updates when we post new cars and deals!</p>
      <div className="relative">
        <input type="text" placeholder="email" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-error absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </motion.footer>
  );
};

export default Footer;
