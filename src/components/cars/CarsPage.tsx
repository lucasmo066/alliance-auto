import { CarsPagePayload, ShortCar } from "~/types";
import CarsList from "./CarsList";


export interface CarsPageProps {
  cars: CarsPagePayload | null;
}

export function CarsPage({ cars }: CarsPageProps) {
  return (
    <>
    <h1 className="text-center text-5xl text-purple-500 font-bold mt-5 mb-10">Available Cars</h1>
      {/* Cars List */}
      <CarsList cars={cars as ShortCar[]} />
    </>
  );
}
