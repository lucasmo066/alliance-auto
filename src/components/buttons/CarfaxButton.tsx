"use client";
import React from "react";
import { motion } from "framer-motion";

interface CarfaxButtonProps {
  vin: string;
}

const CarfaxButton: React.FC<CarfaxButtonProps> = ({ vin }) => {
  return (
    <a
      href={`https://www.carfax.com/vehicle-history-reports/?vin=${vin}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.button
        whileHover={{ scale: 1.11 }}
        whileTap={{ scale: 1.11 }}
        className="btn btn-outline text-secondary hover:bg-blue-300 mx-2"
      >
        Carfax
      </motion.button>
    </a>
  );
};

export default CarfaxButton;
