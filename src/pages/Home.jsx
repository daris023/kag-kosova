import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Status from "@/components/Status";
import About from "@/components/About";
import Products from "@/components/Products";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-ink text-cream font-body antialiased min-h-screen">
      <Header />
      <Hero />
      <Status />
      <About />
      <Products />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
