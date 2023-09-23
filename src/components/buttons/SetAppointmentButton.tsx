"use client";

import React from "react";
import { motion } from "framer-motion";

interface SetAppointmentButtonProps {
  href: string;
}

const SetAppointmentButton: React.FC<SetAppointmentButtonProps> = ({
  href,
}) => {
  return (
    <a href={href}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn bg-blue-700 hover:bg-blue-500 text-white shadow-xl"
      >
        Set an Appointment
      </motion.button>
    </a>
  );
};

export default SetAppointmentButton;
