import NewArrivalsList from "~/components/pages/home/NewArrivalsList";
import ContactUs from "~/components/pages/home/ContactUs";
import Hero from "~/components/pages/home/hero/Hero";
import SellYourCarSection from "~/components/pages/home/SellYourCarSection";
import Testimonials from "~/components/pages/home/Testimonials";
import WhyBuyFromUsSection from "~/components/pages/home/WhyBuyFromUs";
import { HomePagePayload } from "~/types";
import { Metadata } from "next";
import { carsBySlugQuery, getAllCars } from "~/lib/sanity.queries";
import { getClient } from "~/lib/sanity.client";
import { draftMode } from "next/headers";
import { readToken } from "~/lib/sanity.api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export interface HomePageProps {
    cars: HomePagePayload;
    }



export default async function HomePage({ cars }: HomePagePayload) {
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined;
  const client = getClient(preview);
  const data = await client.fetch<HomePagePayload | null>(getAllCars, {
    next: { revalidate: 10 },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <NewArrivalsList cars={data?.cars ?? []} />
      <WhyBuyFromUsSection />
      <Testimonials />
      <SellYourCarSection />
      <ContactUs />
    </main>
  );
}