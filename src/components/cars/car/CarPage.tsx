import { CarPayload } from "~/types";
import { urlForImage } from "~/lib/sanity.image";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import CopyToClipboardButton from "~/components/buttons/CopyToClipboardButton";
import SetAppointmentButton from "~/components/buttons/SetAppointmentButton";
import CarfaxButton from "~/components/buttons/CarfaxButton";
import Breadcrumb from "~/components/Breadcrumbs";


export interface CarPageProps {
  car: CarPayload | null;
}

export function CarPage({ car }: CarPageProps) {
  return (
    <>
      {car && car.images && car.images.length > 0 && (
        <div className="text-white">
          <Breadcrumb
            crumbs={[
              { label: "Cars", href: "/cars" },
              { label: `${car.year} ${car.make?.title} ${car.model}`, href: null},
            ]} />
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-white text-center mb-5">
              {car.year} {car.make?.title} {car.model}
            </h1>
            <ImageCarousel images={car.images.map((image) => urlForImage(image).url()!)} />
            
              <h2 className="mt-8 text-2xl text-center text-accent font-semibold">
                Car Details
              </h2>
              
              <div className="overflow-x-auto">
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
                    <tr>
                      <th>Emission Status</th>
                      <td className="align-top">{car.emissionStatus ? "Passed" : "Awaiting Test"}</td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>

            <h2 className="mt-8 text-2xl text-accent text-center font-semibold">
              Interior Details
            </h2>

            <div className="overflow-x-auto">
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

              <h2 className="mt-8 text-2xl text-accent text-center  font-semibold">
                Exterior Details
              </h2>
              <div className="overflow-x-auto">
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
           
            
              <div className="divider"></div>
              <h2 className="text-2xl text-accent text-center font-semibold">
                Cost Details
              </h2>
              <div className="py-4">
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

            <div className="text-center space-x-4 mb-10">
            <SetAppointmentButton href="https://www.calendly.com/alliancegroupauto/carappt" />
              <CopyToClipboardButton />
            </div>
          </div>
      )}
    </>
  );
}
