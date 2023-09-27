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
          src="/3.png"
          alt="Alliance Group Auto Logo"
          width={200}
          height={50}
        />

        <p className="font-bold">
          Alliance Group Autobrokers. <br /> Providing trustworthy car sales since 2006
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
    </motion.footer>
  );
};

export default Footer;
