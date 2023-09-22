import { CarPayload } from "~/types";
import { urlForImage } from "~/lib/sanity.image";
import Image from 'next/image';

export interface CarPageProps {
  car: CarPayload | null;
}

export function CarPage({ car }: CarPageProps) {
  return (
    <>
      {car && car.images && car.images.length > 0 && (
        <div className="text-white text-center py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-purple-500 mb-5">
              {car.year} {car.make?.title} {car.model}
            </h1>
            <div className="carousel w-full">
              {car.images.map((image, index) => (
                <div
                  key={index}
                  id={`slide${index + 1}`}
                  className="carousel-item relative w-full"
                >
                  <Image
                    src={urlForImage(image).url()!}
                    alt={car.name}
                    width={500}
                    height={200}
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href={`#slide${index === 0 ? car.images.length : index}`}
                      className="btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href={`#slide${index === car.images.length - 1 ? 1 : index + 2}`}
                      className="btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-4">
              <h2 className="text-xl text-accent font-semibold">Car Details</h2>
              <ul>
                <li>Doors: {car.doors}</li>
                <li>Previous Owners: {car.previousOwners}</li>
                <li>VIN: {car.vin}</li>
              </ul>
            </div>
            <div className="my-4">
              <h2 className="text-xl text-accent font-semibold">
                Interior Details
              </h2>
              <p>Seat Material: {car.interiorDetails?.material}</p>
              <p>Sunroof: {car.interiorDetails?.sunroof ? "Yes" : "No"}</p>
              <p>Number of Seats: {car.interiorDetails?.seatingCapacity}</p>
            </div>
            <div className="my-4">
              <h2 className="text-xl text-accent font-semibold">
                Exterior Details
              </h2>
              <p>Condition of Exterior: {car.exteriorDetails?.condition}</p>
              <p>Paint Color: {car.exteriorDetails?.paintColor}</p>
              <p>Tire Condition: {car.exteriorDetails?.tireCondition}</p>
            </div>
            <div className="">
              <button className="btn bg-purple-500 text-white font-bold py-2 px-4 mx-2 rounded-half">
                Set Appointment
              </button>
              {/* This button needs to be its own component, the component will copy the link to the clipboard and then shows a tag that read "link copied to clipboard"*/}
              <button className="btn btn-outline text-purple-500 font-bold py-2 px-4 rounded-half">
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
