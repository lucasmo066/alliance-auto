import { CarsPagePayload, ShortCar } from "~/types";
import CarsList from "./CarsList";
import Breadcrumb from "../Breadcrumbs";

export interface CarsPageProps {
  cars: CarsPagePayload | null;
}

export function CarsPage({ cars }: CarsPageProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumb
        crumbs={[
          { label: "Cars", href: null },
        ]}
      />
      <h1 className="text-center text-5xl text-white font-bold mt-5 mb-5">
        Available Cars
      </h1>
      <div className="divider divider-center mb-8 mx-10"></div>
      {/* Cars List */}
      <CarsList cars={cars as ShortCar[]} />
    </>
  );
}
