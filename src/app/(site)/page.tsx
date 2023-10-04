import { HomePagePayload } from "~/types";
import { carsBySlugQuery, getAllCars } from "~/lib/sanity.queries";
import { getClient } from "~/lib/sanity.client";
import { draftMode } from "next/headers";
import { readToken } from "~/lib/sanity.api";
import { notFound } from "next/navigation";
import { HomePage } from "~/components/pages/home/HomePage";
import PreviewHomePage from "~/components/pages/home/PreviewHomePage";
import { metadata } from "../layout";

export const dynamic = "force-dynamic";

export default async function HomeRoute() {
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined;
  const client = getClient(preview);
  const data = await client.fetch<HomePagePayload | null>(getAllCars, {
    next: { revalidate: 10 },
  });

  if (!data && !preview) {
    notFound();
  }

  return preview ? <PreviewHomePage cars={data} /> : <HomePage cars={data} />;
}
