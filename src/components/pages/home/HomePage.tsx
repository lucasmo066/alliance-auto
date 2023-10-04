import NewArrivalsList from "~/components/pages/home/NewArrivalsList";
import ContactUs from "~/components/pages/home/ContactUs";
import Hero from "~/components/pages/home/hero/Hero";
import SellYourCarSection from "~/components/pages/home/SellYourCarSection";
import Testimonials from "~/components/pages/home/Testimonials";
import WhyBuyFromUsSection from "~/components/pages/home/WhyBuyFromUs";
import { HomePagePayload, ShortCar } from "~/types";
import { Metadata } from "next";
import { carsBySlugQuery, getAllCars } from "~/lib/sanity.queries";
import { getClient } from "~/lib/sanity.client";
import { draftMode } from "next/headers";
import { readToken } from "~/lib/sanity.api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface HomePageProps {
    cars: ShortCar[]; 
  }


export function HomePage({ cars }: HomePageProps) {
if (!cars) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <NewArrivalsList cars={cars as ShortCar[]} />
      <WhyBuyFromUsSection />
      <Testimonials />
      <SellYourCarSection />
      <ContactUs />
    </main>
  );
}