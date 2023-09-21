import { CarPayload } from "~/types";
import CarsImageCarousel from "./CarsImageCarousel";

export interface CarPageProps {
  car: CarPayload | null;
}

export function CarPage({ car }: CarPageProps) {
  return (
    <>
      {car && (
        <div className="text-white  py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-5">
              {car.year} {car.make?.title} {car.model}
            </h1>
           <CarsImageCarousel />
            {/* Other car details go here */}
            <div className="my-4">
              <h2 className="text-xl font-semibold">Car Details</h2>
              <ul>
                <li>Doors: {car.doors}</li>
                <li>Color: {car.color}</li>
                <li>Previous Owners: {car.previousOwners}</li>
                <li>VIN: {car.vin}</li>
                {/* Add more details as needed */}
              </ul>
            </div>
            <div className="my-4">
              <h2 className="text-xl font-semibold">Interior Details</h2>
              <p>{car.interiorDetails}</p>
            </div>
            <div className="my-4">
              <h2 className="text-xl font-semibold">Exterior Details</h2>
              <p>{car.exteriorDetails}</p>
            </div>
            <div className="my-4">
              <h2 className="text-xl font-semibold">Emission Status</h2>
              <p>{car.emissionStatus}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Set an Appointment
            </button>
          </div>
        </div>
      )}
    </>
  );
}
