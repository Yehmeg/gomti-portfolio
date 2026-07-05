import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Education from "@/components/education/Education";
import Dashboard from "@/components/dashboard/Dashboard";
import Research from "@/components/Research/Research";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/Projects/Projects";
import Achievements from "@/components/Achievements/Achievements";
// import Timeline from "@/components/Timeline/Timeline";
import Hackathons from "@/components/Hackathons/Hackathons";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Education />

      <Projects />

      <Dashboard /> 

      <Research />

      <Skills /> 

      {/* <Timeline /> */}

      <Achievements />

      <Hackathons />

      <Contact />

      <Footer />

      
    </>
  );
}
