"use client";
import { CarPayload } from "~/types";
import { urlForImage } from "~/lib/sanity.image";
import Image from "next/image";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <Breadcrumb
            crumbs={[
              { label: "Cars", href: "/cars" },
              {
                label: `${car.year} ${car.make?.title} ${car.model}`,
                href: null,
              },
            ]}
          />
          <div className="container mx-auto py-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-white text-center mb-10"
            >
              {car.year} {car.make?.title} {car.model}
            </motion.h1>
            <ImageCarousel
              images={car.images.map((image) => urlForImage(image).url()!)}
            />

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-2xl text-center text-accent font-semibold"
            >
              Car Details
            </motion.h2>

            {/*      TABLES START     */}
            <div className="">
              <div className="overflow-x-auto">
                <motion.table
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="table" 
                >
                  <tbody>
                    <tr>
                      <th>Doors:</th>
                      <td className="text-center">{car.doors}</td>
                    </tr>
                    <tr>
                      <th>Previous Owners:</th>
                      <td className="text-center">{car.previousOwners}</td>
                    </tr>
                    <tr>
                      <th>VIN</th>
                      <td className="text-center">
                        {car.vin} <CarfaxButton vin={car.vin} />
                      </td>
                    </tr>
                    <tr>
                      <th>Transmission Type:</th>
                      <td className="text-center">{car.transmission}</td>
                    </tr>
                    <tr>
                      <th>Mileage:</th>
                      <td className="text-center">
                        {car.mileage.toLocaleString()} miles
                      </td>
                    </tr>
                    <tr>
                      <th>Emission Status:</th>
                      <td className="text-center">
                        {car.emissionStatus ? "Passed" : "Awaiting Test"}
                      </td>
                    </tr>
                  </tbody>
                </motion.table>
              </div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-2xl text-center text-accent font-semibold"
            >
              Interior Details
            </motion.h2>

            <div className="overflow-x-auto">
              <motion.table
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="table"
              >
                <tbody>
                  <tr>
                    <td>Seat Material:</td>
                    <td>
                      {car.interiorDetails?.material}
                    </td>
                  </tr>
                  <tr>
                    <td>Sunroof:</td>
                    <td>
                      {car.interiorDetails?.sunroof ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr>
                    <td>Number of Seats:</td>
                    <td>
                      {car.interiorDetails?.seatingCapacity}
                    </td>
                  </tr>
                </tbody>
              </motion.table>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-8 text-2xl text-center text-accent font-semibold"
            >
              Exterior Details
            </motion.h2>

            <div className="overflow-x-auto">
              <motion.table
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="table"
              >
                <tbody>
                  <tr>
                    <th>Condition of Exterior</th>
                    <td>
                      {car.exteriorDetails?.condition}
                    </td>
                  </tr>
                  <tr>
                    <th>Paint Color</th>
                    <td>
                      {car.exteriorDetails?.paintColor}
                    </td>
                  </tr>
                  <tr>
                    <th>Tire Condition</th>
                    <td>
                      {car.exteriorDetails?.tireCondition}
                    </td>
                  </tr>
                </tbody>
              </motion.table>
            </div>
            </div>
            {/*      TABLES END     */} 
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="divider"
            ></motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="text-2xl text-accent text-center font-semibold"
            >
              Cost Details
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.0 }}
              className="py-4 text-center space-y-4"
            >
              <p className="text-lg font-semibold">
                Price: ${car.cost.toLocaleString()}
              </p>
              <p className="text-lg font-semibold">
                Tax (7%): ${(car.cost * 0.07).toLocaleString()}
              </p>
              <p className="text-3xl font-semibold text-green-500">
                Total Cost: ${(car.cost * 1.07).toLocaleString()}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="text-center space-x-4 mb-10"
          >
            <SetAppointmentButton href="https://www.calendly.com/alliancegroupauto/carappt" />
            <CopyToClipboardButton />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
