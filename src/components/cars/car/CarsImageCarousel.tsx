import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { urlForImage } from "~/lib/sanity.image";
import { CarPayload } from "~/types";
import Image from "next/image";

interface CarsImageCarouselProps {
  car: CarPayload | null;
}

const CarsImageCarousel: React.FC<CarsImageCarouselProps> = ({ car }) => {
  if (!car || !car.images || car.images.length === 0) {
    // Handle the case where car or images are not available
    return null;
  }

  return (
    <Carousel showThumbs={false}>
      {car.images.map((image, index) => (
        <div key={index}>
          <Image
            src={urlForImage(image).url()!}
            alt={car.name}
            width={500}
            height={500}
            className="rounded"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarsImageCarousel;
