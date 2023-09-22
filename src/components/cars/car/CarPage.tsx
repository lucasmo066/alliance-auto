import { CarPayload } from "~/types";
import { urlForImage } from "~/lib/sanity.image";
import Image from "next/image";
import CopyToClipboardButton from "~/components/buttons/CopyToClipboardButton";
import SetAppointmentButton from "~/components/buttons/SetAppointmentButton";
import CarfaxButton from "~/components/buttons/CarfaxButton";


export interface CarPageProps {
  car: CarPayload | null;
}

export function CarPage({ car }: CarPageProps) {
  return (
    <>
      {car && car.images && car.images.length > 0 && (
        <div className="text-white py-8">
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
                      href={`#slide${
                        index === car.images.length - 1 ? 1 : index + 2
                      }`}
                      className="btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
              <h2 className="text-2xl text-center text-accent font-semibold">
                Car Details
              </h2>
              
              <div className="border overflow-x-auto">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Doors</th>
                      <td className="align-top">{car.doors}</td>
                    </tr>
                    <tr>
                      <th>Previous Owners</th>
                      <td className="align-top">{car.previousOwners}</td>
                    </tr>
                    <tr>
                      <th>VIN</th>
                      <td className="align-top">
                        {car.vin}{" "}
                        <CarfaxButton vin={car.vin} />
                      </td>
                    </tr>
                    <tr>
                      <th>Transmission Type</th>
                      <td className="align-top">{car.transmission}</td>
                    </tr>
                    <tr>
                      <th>Mileage</th>
                      <td className="align-top">
                        {car.mileage.toLocaleString()} miles
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
           

            <br />

            <h2 className="text-2xl text-accent font-semibold">
              Interior Details
            </h2>

            <div className="border overflow-x-auto">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Seat Material</td>
                    <td className="align-top">{car.interiorDetails?.material}</td>
                  </tr>
                  <tr>
                    <td>Sunroof</td>
                    <td className="align-top">
                      {car.interiorDetails?.sunroof ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr>
                    <td>Number of Seats</td>
                    <td className="align-top">{car.interiorDetails?.seatingCapacity}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br />
              <h2 className="text-2xl text-accent font-semibold">
                Exterior Details
              </h2>
              <div className="border overflow-x-auto">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Condition of Exterior</th>
                      <td className="align-top">{car.exteriorDetails?.condition}</td>
                    </tr>
                    <tr>
                      <th>Paint Color</th>
                      <td className="align-top">{car.exteriorDetails?.paintColor}</td>
                    </tr>
                    <tr>
                      <th>Tire Condition</th>
                      <td className="align-top">{car.exteriorDetails?.tireCondition}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
           
            <div className="my-4">
              <div className="divider"></div>
              <h2 className="text-2xl text-accent font-semibold">
                Cost Details
              </h2>
              <div className="border border-gray-300 py-4">
                <p className="text-lg font-semibold">
                  Price: ${car.cost.toLocaleString()}
                </p>
                <p className="text-lg font-semibold">
                  Dealer Fee: ${(car.cost * 0.05 ).toLocaleString()}
                </p>
                <p className="text-lg font-semibold">
                  Tag/Title: ${(car.cost * 0.1).toLocaleString()}
                </p>
                <p className="text-lg font-semibold">
                  Tax (7%): ${(car.cost * 0.07).toLocaleString()}
                </p>
                <p className="text-xl font-semibold text-green-500">
                  Total Cost: ${(car.cost * 1.13).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="text-center space-x-4">
            <SetAppointmentButton href="https://www.calendly.com/alliancegroupauto/carappt" />
              <CopyToClipboardButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
