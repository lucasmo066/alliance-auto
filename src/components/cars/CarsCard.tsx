import Image from "next/image";
import { urlForImage } from "~/lib/sanity.image";
import { ShortCar } from "~/types/index";

interface CarsCardProps {
  car: ShortCar;
}

export default function CarsCard({ car }: CarsCardProps) {
  if (!car) {
    return null;
  }

  const isSold = car.sold || false; // Default to false if 'sold' field is not present

  return (
    <div className="flex flex-col items-center justify-start bg-white bg-opacity-20 rounded-lg shadow-xs p-5 lg:p-10 h-full">
      <div className="flex items-center justify-center mb-4 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
        <Image
          src={urlForImage(car.mainImage).url()!}
          alt={car.name}
          width={500}
          height={500}
          className="rounded-full"
        />
      </div>
      <div className="-mt-4 flex flex-col items-center justify-center">
        <h6 className="text-xl font-bold tracking-tight text-black">
          {car.year} {car.name}
        </h6>
        <p className="font-normal text-gray-200">Mileage: {car.mileage} </p>
        <p className="font-bold text-green-400">Cost: ${car.cost}</p>
        <a href="">
  {isSold ? (
    <button className="btn btn-neutral">Sold!</button>
  ) : (
    <button className="btn btn-primary">See Details!</button>
  )}
</a>
      </div>
    </div>
  );
}
