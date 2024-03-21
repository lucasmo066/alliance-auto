import React from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <div className="carousel w-full overflow-hidden"> {/* Ensure the carousel container has overflow hidden */}
      {images.map((image, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full h-[500px] flex justify-center items-center" // Set a fixed height for each carousel item
        >
          {/* Using the Image component with layout fill and objectFit to contain */}
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={`Car Image ${index + 1}`}
              layout="fill"
              objectFit="contain" // This ensures the image will scale down to fit within the container without distorting aspect ratio
              className="w-full h-full"
            />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
            <a
              href={`#slide${index === 0 ? images.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
