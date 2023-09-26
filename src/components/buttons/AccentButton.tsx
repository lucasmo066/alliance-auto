import React from "react";
import { motion } from "framer-motion";

interface AccentButtonProps {
  href: string;
  label: string; // Add a label prop
}

const AccentButton: React.FC<AccentButtonProps> = ({ href, label }) => {
  return (
    <a href={href}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn bg-accent hover:bg-red-400 text-white shadow-xl"
      >
        {label}
      </motion.button>
    </a>
  );
};

export default AccentButton;
