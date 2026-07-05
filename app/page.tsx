import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Education from "@/components/education/Education";
import Dashboard from "@/components/dashboard/Dashboard";
import Research from "@/components/research/Research";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Achievements from "@/components/achievements/Achievements";
// import Timeline from "@/components/timeline/Timeline";
import Hackathons from "@/components/hackathons/Hackathons";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";


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