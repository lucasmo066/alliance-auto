import Link from "next/link";
import { ShortCar } from "~/types";
import CarsCard from "./CarsCard";

interface CarsListProps {
  cars: ShortCar[];
}

export default function CarsList({ cars }: CarsListProps) {
  
  // Sort the cars array to move sold cars to the end
  const sortedCars = cars.sort((a, b) => {
    if (a.sold && !b.sold) return 1; // Move sold cars to the end
    if (!a.sold && b.sold) return -1; // Keep unsold cars at the front
    return 0; // Maintain the original order for unsold cars
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
