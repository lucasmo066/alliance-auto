'use client';

import React from "react";
import Image from "next/image";
import { urlForImage } from "~/lib/sanity.image";
import { ShortCar } from "~/types/index";
import { motion } from "framer-motion";
import AccentButton from "../../shared/buttons/AccentButton";

interface CarsCardProps {
  car: ShortCar;
}

export default function CarsCard({ car }: CarsCardProps) {
  if (!car) {
    return null;
  }

  const isSold = car.sold || false; // Default to false if 'sold' field is not present

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent the click event when the card is marked as sold
    if (isSold) {
      e.preventDefault();
    }
  };

  return (
    <motion.div
      className={`flex flex-col items-center justify-start bg-gray-500 bg-opacity-20 hover:bg-gray-500 rounded-lg shadow-xl shadow-gray-700 p-5 lg:p-10 h-full ${
        isSold ? "disabled" : ""
      }`}
      onClick={handleCardClick}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }} // Shine effect on hover
    >
      <div className="flex items-center justify-center mb-4 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
        <Image
          src={urlForImage(car.mainImage).url()!}
          alt={car.name}
          width={500}
          height={500}
          className="rounded"
        />
      </div>
      <div className="-mt-4 flex flex-col items-center justify-center">
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">
          {car.year} {car.name}
        </h2>
        <div className="mb-3 mt-1 badge badge-lg badge-outline text-secondary">
          {car.transmission}
        </div>
        <p className="text-lg text-white">
          {car.mileage.toLocaleString()} miles
        </p>
        <p className="text-2xl font-bold text-success mb-5">
          Cost: ${car.cost?.price.toLocaleString()}
        </p>
        <a>
          {isSold ? (
            <motion.button className="btn bg-white-500 my-5 px-10">
              Sold!
            </motion.button>
          ) : (
            <AccentButton href={`/cars/${car.slug}`} label="View Details" />
          )}
        </a>
      </div>
    </motion.div>
  );
}
