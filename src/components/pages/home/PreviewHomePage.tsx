"use client";

import { getAllCars } from "~/lib/sanity.queries";
import { useLiveQuery } from "next-sanity/preview";
import type { HomePagePayload, ShortCar } from "~/types";
import { HomePage } from "~/components/pages/home/HomePage";


export default function PreviewMembers({ cars: initialData }: HomePagePayload) {
  const [data] = useLiveQuery<HomePagePayload | null>(initialData, getAllCars);

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    );
  }

  return <HomePage cars={data.cars} />;
}
