'use client'
import React from "react";
import { ShortCar } from "~/types";
import CarsCard from "../cars/CarsCard";
import Link from "next/link";

interface NewArrivalsListProps {
  cars: ShortCar[];
}

export default function NewArrivalsList({ cars }: NewArrivalsListProps) {
  // Filter and sort the cars by date to get the newest arrivals
  const currentDate = new Date();
  const sortedCars = cars
    .filter((car) => car.date && new Date(car.date) <= currentDate)
    .sort((a, b) => {
      return new Date(b.date!).getTime() - new Date(a.date!).getTime();
    });

  return (
    <div className="grid gap-4 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sortedCars.map((car) => (
        <Link href={`cars/${car.slug}`} key={car.slug}>
          <CarsCard car={car} />
        </Link>
      ))}
    </div>
  );
}

