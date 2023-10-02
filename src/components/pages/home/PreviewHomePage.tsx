"use client";

import { getAllCars } from "~/lib/sanity.queries";
import { useLiveQuery } from "next-sanity/preview";
import type { HomePagePayload } from "~/types";
import HomePage from "~/components/pages/home/HomePage";
import type { HomePageProps } from "~/components/pages/home/HomePage";

export default function PreviewMembers({ cars: initialData }: HomePageProps) {
  const [data] = useLiveQuery<HomePagePayload | null>(initialData, getAllCars);

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    );
  }

  return <HomePage cars={data} />;
}
