'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { urlForImage } from "~/lib/sanity.image";
import Image from 'next/image'

const CarsImageCarousel = ({ images, car }) => {
  return (
    <Carousel showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
          src={urlForImage(car.image).url()!}
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