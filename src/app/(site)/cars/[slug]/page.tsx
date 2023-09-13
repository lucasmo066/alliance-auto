import "server-only";

import { CarPage } from "~/components/cars/car/CarPage";
import { carsBySlugQuery, carPaths } from "~/lib/sanity.queries";
import { getClient } from "~/lib/sanity.client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { defineMetadata } from "~/lib/utils.metadata";
import { draftMode } from "next/headers";
import { readToken } from "~/lib/sanity.api";
import { CarPayload } from "~/types";
import PreviewCarPage from "~/components/cars/car/PreviewCarPage";

export const revalidate = 1;

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const client = getClient();
  const slugs = await client.fetch<string[]>(carPaths);
  return slugs.map((slug) => ({ slug }));
}

export default async function CarSlugsRoute({ params }: Props) {
  const { slug } = params;
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined;
  const client = getClient(preview);
  const data = await client.fetch<CarPayload | null>(carsBySlugQuery, {
    slug,
    cache: "no-store",
    next: { revalidate: 1 },
  });

  if (!data && !preview) {
    notFound();
  }

  return preview ? <PreviewCarPage car={data} /> : <CarPage car={data} />;
}
