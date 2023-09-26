import React from "react";
import { motion } from "framer-motion";

interface PrimaryButtonProps {
  href: string;
  label: string; // Add a label prop
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  href,
  label, // Receive and use the label prop
}) => {
  return (
    <a href={href}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn bg-primary hover:bg-blue-500 text-white shadow-xl"
      >
        {label}
      </motion.button>
    </a>
  );
};

export default PrimaryButton;
