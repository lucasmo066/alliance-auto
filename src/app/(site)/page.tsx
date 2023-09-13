import Navbar from "~/components/Navbar/Navbar";
import Hero from "~/components/Hero/Hero";
import Testimonials from "~/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Testimonials />
    </main>
  );
}
