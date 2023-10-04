'use client';

import { getAllCars } from "~/lib/sanity.queries";
import { useLiveQuery } from "next-sanity/preview";
import type { CarsPagePayload } from "~/types";
import { CarsPage } from "~/components/pages/cars/CarsPage";
import type { CarsPageProps } from "~/components/pages/cars/CarsPage";

export default function PreviewMembers({ cars: initialData }: CarsPageProps) {
  const [data] = useLiveQuery<CarsPagePayload | null>(initialData, getAllCars);

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    );
  }

  return <CarsPage cars={data} />;
}
