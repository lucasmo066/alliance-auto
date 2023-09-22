import { CarPayload } from "~/types";
import CarsImageCarousel from "./CarsImageCarousel";

export interface CarPageProps {
  car: CarPayload | null;
}

export function CarPage({ car }: CarPageProps) {
  
  return (
    <>
      {car && (
        <div className="text-white py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-5">
              {car.year} {car.make?.title} {car.model}
            </h1>
            <CarsImageCarousel images={car.images} car={car} />
            <div className="my-4">
              <h2 className="text-xl text-accent font-semibold">Car Details</h2>
              <ul>
                <li>Doors: {car.doors}</li>
                <li>Previous Owners: {car.previousOwners}</li>
                <li>VIN: {car.vin}</li>
              </ul>
            </div>
            <div className="my-4">
              <h2 className="text-xl text-accent  font-semibold">Interior Details</h2>
              <p>Seat Material: {car.interiorDetails?.material}</p>
              <p>Sunroof: {car.interiorDetails?.sunroof ? "Yes" : "No"}</p>
               <p>Number of Seats: {car.interiorDetails?.seatingCapacity}</p>
            </div>
            <div className="my-4">
              <h2 className="text-xl text-accent  font-semibold">Exterior Details</h2>
              <p>Condition of Exterior: {car.exteriorDetails?.condition}</p>
            </div>
            <div className="border">
              <button className="btn btn-primary text-white font-bold py-2 px-4rounded-half">
                Set Appointment
              </button>
               {/* This button needs to be its own component, the component will copy the link to the clipboard and then shows a tag that read "link copied to clipboard"*/}
              <button className="btn btn-outline text-primary font-bold py-2 px-4 rounded-half">
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
