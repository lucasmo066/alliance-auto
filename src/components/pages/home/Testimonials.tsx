"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import avatarRebeccaJ from '/public/rebeccaJ.png'; 
import avatarCharlieH from '/public/CharlieH.png';
import avatarJoaoP from '/public/JoaoP.png';
import avatarKimmyV from '/public/KimmyV.png';
import avatarChrisP from '/public/ChrisP.png';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  message: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rebecca J.",
      avatar: avatarRebeccaJ.src,
      message:
        "A seamless car-buying experience. Their commitment to providing value and quality sets them apart from the rest.",
    },
    {
      id: 2,
      name: "Charlie H.",
      avatar: avatarCharlieH.src,
      message:
        "I appreciate the dedication to quality and trustworthiness. This dealership goes above and beyond to ensure customer satisfaction.",
    },
    {
      id: 3,
      name: "João P.",
      avatar: avatarJoaoP.src,
      message:
        "Transparency is key for me when buying a car. I found it here! No hidden fees or surprises. I knew exactly what I was getting, and that's why I keep coming back.",
    },
    {
      id: 4,
      name: "Kimmy V.",
      avatar: avatarKimmyV.src,
      message:
        "The free 30-day warranty is a game-changer. It gave me peace of mind knowing that if anything happened, I was covered.",
    },
    {
      id: 5,
      name: "Chris P.",
      avatar: avatarChrisP.src,
      message:
        "If you're looking for a dealership with a reputation built on trust, look no further. They've earned their stellar reputation, and I couldn't be happier with my purchase.",
    },
  ];

  return (
    <div className="w-full overflow-hidden pb-10" id="testimonials" >
      <motion.h2
        className="text-3xl font-semibold text-center text-accent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        Don&apos;t Believe Us?
      </motion.h2>
      <motion.h3
        className="text-2xl font-semibold text-center text-accent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        Hear It From Our Customers!
      </motion.h3>
      <Marquee direction="left" speed={45}>
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="flex flex-col items-center p-2 m-4 bg-neutral bg-opacity-80 shadow-lg rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
          >
            <div className="w-24 h-28 mt-2 rounded-full overflow-hidden">
              <Image
                src={testimonial.avatar}
                alt={`${testimonial.name}'s Avatar`}
                width={100}
                height={150}
                className="object-cover"
              />
            </div>
            <div className="text-center max-w-xs m-2">
              <p className="text-white mt-2 h-24 overflow-hidden">
                {testimonial.message}
              </p>
              <p className="text-secondary font-semibold mt-2 h-10 overflow-hidden">
                {testimonial.name}
              </p>
            </div>
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
}
