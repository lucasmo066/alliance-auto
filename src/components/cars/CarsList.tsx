import Link from "next/link";
import { ShortCar } from "~/types";
import CarsCard from "./CarsCard";

interface CarsListProps {
  cars: ShortCar[];
}

export default function CarsList({ cars }: CarsListProps) {
  
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cars &&
        cars.map((car) => (
          <Link href={`cars/${car.slug}`} key={car.slug}>
            <CarsCard car={car} />
          </Link>
        ))}
    </div>
  );
}
