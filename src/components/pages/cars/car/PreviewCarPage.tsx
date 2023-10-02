"use client";

import { carsBySlugQuery } from "~/lib/sanity.queries";
import { useLiveQuery } from "next-sanity/preview";
import type { CarPayload } from "~/types";

import { CarPageProps, CarPage } from "./CarPage";

export default function PreviewCarPage({ car: initialData }: CarPageProps) {
  const [data] = useLiveQuery<CarPayload | null>(initialData, carsBySlugQuery, {
    slug: initialData?.slug,
  });

  return <CarPage car={data} />;
}
