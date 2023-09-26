import React, { useState, useEffect } from "react";
import { CarPayload } from "~/types";
import { motion } from "framer-motion";

interface CostDetailsProps {
  car: CarPayload | null; // Replace with the actual type of your car data
}

const CostDetails: React.FC<CostDetailsProps> = ({ car }) => {
  const [includeMotorWarranty, setIncludeMotorWarranty] = useState(false);
  const [includeTransmissionWarranty, setIncludeTransmissionWarranty] = useState(false);
  const [totalCost, setTotalCost] = useState<number | null>(null);

  // Calculate the total cost including the warranties if checked
  useEffect(() => {
    const basePrice = car?.cost?.price || 0;
    const motorWarrantyPrice = includeMotorWarranty
      ? (car?.warranty?.motor?.price || 0)
      : 0;
    const transmissionWarrantyPrice = includeTransmissionWarranty
      ? (car?.warranty?.transmission?.price || 0)
      : 0;

    // Calculate the total cost
    const updatedTotalCost = basePrice + motorWarrantyPrice + transmissionWarrantyPrice;

    // Update the total cost state
    setTotalCost(updatedTotalCost);
  }, [includeMotorWarranty, includeTransmissionWarranty, car]);

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
        AGA Discount: $-
        {(car.cost?.kbbHigh - car.cost?.price).toLocaleString()}
      </p>
      <div className="divider px-10"></div>
      {/* Warranty info div with shine effect */}
      <motion.div
        className="w-3/4 border rounded border-yellow-400 bg-yellow-500 bg-opacity-20 p-4 mx-auto"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px 0px #FFFF00" }}
      >
        <p className="text-center text-yellow-400 text-lg mb-5">
          All cars sold by Alliance Group Autobrokers come with 30 days or 300 miles of free warranty with the first four oil changes included if conditions are met. Customers can choose to purchase additional warranties for 12,000 miles or one year.
        </p>
        {/* Checkbox for including the motor warranty */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-yellow-400">
              Motor Warranty: ${car.warranty?.motor?.price}
            </span>
            <input
              type="checkbox"
              className="checkbox checkbox-warning"
              checked={includeMotorWarranty}
              onChange={() => setIncludeMotorWarranty(!includeMotorWarranty)}
            />
          </label>
        </div>
        {/* Checkbox for including the transmission warranty */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-yellow-400">
              Transmission Warranty: ${car.warranty?.transmission?.price}
            </span>
            <input
              type="checkbox"
              className="checkbox checkbox-warning"
              checked={includeTransmissionWarranty}
              onChange={() => setIncludeTransmissionWarranty(!includeTransmissionWarranty)}
            />
          </label>
        </div>
      </motion.div>
      
      {/* Display the updated total cost */}
      <p className="text-4xl text-success pt-3 pb-10">
        Total Cost: ${(totalCost || 0).toLocaleString()} <small className="text-sm">+ tax</small>
      </p>
    </motion.div>
  );
};

export default CostDetails;
