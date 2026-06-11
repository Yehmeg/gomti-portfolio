import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Research from "@/components/Research/Research";
import Projects from "@/components/Projects/Projects";
import Achievements from "@/components/Achievements/Achievements";
import Timeline from "@/components/Timeline/Timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Research />
      <Projects />
      <Achievements />
      <Timeline />
    </>
  );
}