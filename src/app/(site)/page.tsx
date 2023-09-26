import ContactUs from "~/components/ContactUs";
import Hero from "~/components/Hero/Hero";
import SellYourCarSection from "~/components/SellYourCarSection";
import Testimonials from "~/components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Testimonials />
      <SellYourCarSection />
      <ContactUs />
    </main>
  );
}
