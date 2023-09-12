import Navbar from "~/components/Navbar/Navbar";
import { CarPayload } from "~/types";

export interface CarPageProps {
  car: CarPayload | null;
}

export function CarPage({ car }: CarPageProps) {
  return (
    <>
      {car && (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white text-black">
          {car.name}
        </div>
      )}
    </>
  );
}
