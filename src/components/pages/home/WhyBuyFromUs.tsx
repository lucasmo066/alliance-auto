"use client";

import React from "react";
import { motion } from "framer-motion";

const WhyBuyFromUsSection: React.FC = () => {
  const headingVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  return (
    <section className="text-center py-10" id="whybuy" >
      <motion.h1
        className="text-5xl font-bold text-accent"
        variants={headingVariants}
        initial="initial"
        animate="animate"
      >
        Why Buy From Us?
      </motion.h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >
        <motion.div
          className="bg-neutral p-6 rounded-lg shadow-lg"
          variants={cardVariants}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-xl font-semibold text-secondary">
            Unmatched Quality, In-House Excellence
          </h2>
          <p className="mt-4 text-white">
            Experience unmatched quality with our in-house team of
            excellence-driven mechanics, setting us apart from other dealerships
            in the area.
          </p>
        </motion.div>
        <motion.div
          className="bg-neutral p-6 rounded-lg shadow-lg"
          variants={cardVariants}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-xl font-semibold text-secondary">
            Quality Cars, Transparent Deals
          </h2>
          <p className="mt-4 text-white">
            Our commitment to quality cars goes hand in hand with transparent
            and trustworthy deals.
          </p>
        </motion.div>
        <motion.div
          className="bg-neutral p-6 rounded-lg shadow-lg"
          variants={cardVariants}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-xl font-semibold text-secondary">
            Upgrade with Ease, Trade with Confidence
          </h2>
          <p className="mt-4 text-white">
            Upgrade your vehicle with ease and trade with confidence through our
            exceptional trade-in and sell-to-us program.
          </p>
        </motion.div>
        <motion.div
          className="bg-neutral p-6 rounded-lg shadow-lg"
          variants={cardVariants}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-xl font-semibold text-secondary">
            Peace of Mind, Included Free
          </h2>
          <p className="mt-4 text-white">
            Enjoy peace of mind with our comprehensive warranty coverage,
            included free for the first 30 days.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBuyFromUsSection;
