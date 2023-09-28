import NewArrivalsList from "~/components/cars/NewArrivalsList";
import ContactUs from "~/components/home/ContactUs";
import Hero from "~/components/home/hero/Hero";
import SellYourCarSection from "~/components/home/SellYourCarSection";
import Testimonials from "~/components/home/Testimonials";
import WhyBuyFromUsSection from "~/components/home/WhyBuyFromUs";
import { CarsPagePayload } from "~/types";
import { Metadata } from "next";
import { carsBySlugQuery, getAllCars } from "~/lib/sanity.queries";
import { getClient } from "~/lib/sanity.client";
import { draftMode } from "next/headers";
import { readToken } from "~/lib/sanity.api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";




export default async function Home({ cars }: CarsPagePayload) {
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined;
  const client = getClient(preview);
  const data = await client.fetch<CarsPagePayload | null>(getAllCars, {
    next: { revalidate: 10 },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <NewArrivalsList />
      <WhyBuyFromUsSection />
      <Testimonials />
      <SellYourCarSection />
      <ContactUs />
    </main>
  );
}
