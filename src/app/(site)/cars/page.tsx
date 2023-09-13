import { CarsPagePayload } from "~/types";
import { Metadata } from "next";
import { carsBySlugQuery, getAllCars } from "~/lib/sanity.queries";
import { getClient } from "~/lib/sanity.client";
import { draftMode } from "next/headers";
import { readToken } from "~/lib/sanity.api";
import { notFound } from "next/navigation";
import { CarsPage } from "~/components/cars/CarsPage";
import PreviewCarsPage from "~/components/cars/PreviewCarsPage";

export const dynamic = "force-dynamic";

export default async function CarsRoute() {
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined;
  const client = getClient(preview);
  const data = await client.fetch<CarsPagePayload | null>(getAllCars, {
    next: { revalidate: 10 },
  });

  if (!data && !preview) {
    notFound();
  }

  return preview ? <PreviewCarsPage cars={data} /> : <CarsPage cars={data} />;
}
