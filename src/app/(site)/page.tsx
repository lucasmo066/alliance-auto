import ContactUs from "~/components/ContactUs";
import Hero from "~/components/Hero/Hero";
import SellYourCarSection from "~/components/SellYourCarSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <SellYourCarSection />
      <ContactUs />
    </main>
  );
}
