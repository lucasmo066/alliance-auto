import Image from "next/image";
import { urlForImage } from "~/lib/sanity.image";
import { ShortCar } from "~/types/index";

interface CarsCardProps {
  car: ShortCar;
}

export default function CarsCard({ car }: CarsCardProps) {
  console.log(car.name);
  if (!car) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col items-start justify-start p-4 bg-white rounded-lg shadow-xs lg:p-10">
        <div className="flex items-center justify-center max-w-[500px] mb-4 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
          <Image
            src={urlForImage(car.mainImage).url()!}
            alt={car.name}
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
        <div className="-mt-4 flex flex-col items-start justify-center">
          <h6 className="text-xl font-bold tracking-tight text-black">
            {car.name}
          </h6>
          <p className="font-normal text-gray-400">{car.year}</p>
        </div>
      </div>
    </>
  );
}
