'use client';

import { CarsPagePayload, ShortCar } from "~/types";
import CarsList from "./CarsList";
import Breadcrumb from "../Breadcrumbs";
import { motion } from "framer-motion";

export interface CarsPageProps {
  cars: CarsPagePayload | null;
}

export function CarsPage({ cars }: CarsPageProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Breadcrumb crumbs={[{ label: "Cars", href: null }]} />
      </motion.div>
      <motion.h1
        className="text-center text-5xl text-white font-bold mt-5 mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        Available Cars
      </motion.h1>
      <motion.div
        className="divider divider-center mb-8 mx-10"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
      ></motion.div>
      {/* Cars List */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <CarsList cars={cars as ShortCar[]} />
      </motion.div>
    </>
  );
}
