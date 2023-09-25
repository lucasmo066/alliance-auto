import React from "react";
import { CarPayload } from "~/types";
import { motion } from "framer-motion";

interface CostDetailsProps {
  car: CarPayload | null;
}

const CostDetails: React.FC<CostDetailsProps> = ({ car }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2.0 }}
      className="py-2 text-center space-y-4 bg-neutral bg-opacity-80 shadow-lg rounded opacity-90"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="text-2xl text-accent text-center font-semibold"
      >
        Cost Details
      </motion.h2>
      <p className="text-lg">
        Kelley Blue Book: ${car.cost?.kbbHigh.toLocaleString()}
      </p>
      <p className="text-lg">
        AGA Discount: $-{(car.cost?.kbbHigh - car.cost?.price).toLocaleString()}
      </p>
      <div className="divider px-10"></div>
      <p className="text-xl text-success">
        AGA Price: ${car.cost?.price.toLocaleString()} + tax
      </p>
    </motion.div>
  );
};

export default CostDetails;
