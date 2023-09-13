import { CarsPagePayload, ShortCar } from "~/types";
import CarsList from "./CarsList";
import Navbar from "../Navbar/Navbar";

export interface CarsPageProps {
  cars: CarsPagePayload | null;
}

export function CarsPage({ cars }: CarsPageProps) {
  return (
    <>
      {/* Cars List */}
      <CarsList cars={cars as ShortCar[]} />
    </>
  );
}
