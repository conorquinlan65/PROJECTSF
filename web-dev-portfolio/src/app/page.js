import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-32 mx-auto px-12 py-4"> <HeroSection /> </div>
      <div className="container mt-32 mx-auto px-12 py-4"> <AboutSection /> </div>
      <div className="container mt-32 mx-auto px-12 py-4"> <ProjectsSection /> </div>
      <Footer />
    </main>
  );
}