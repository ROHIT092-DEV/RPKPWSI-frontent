import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero1";
// import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}
