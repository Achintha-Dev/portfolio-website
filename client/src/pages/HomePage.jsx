

import heroImageDesktop from "../assets/background_image.png";
import heroImageMobile from "../assets/background_image_portrait.png";
import Contact from "../components/Contact";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import projects from "../data/projects";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import SkillsSection from "../components/SkillSection";
// import SkillsMarquee from "../components/SkillsMarquee";

function HomePage() {

  // A robust approach to track window resizing dynamically in React
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial state
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#F4F3F0] min-h-screen font-serif text-black antialiased ">
      
      {/* Top Nav Bar */}
      <Header />

      {/* Hero Section */}
      <section 
      className="relative bg-cover bg-no-repeat flex flex-col items-center justify-start text-center px-6 pt-16 md:pt-24 pb-48 md:pb-80 w-full min-h-screen"
      style={{ 
        backgroundImage: `url(${isMobile ? heroImageMobile : heroImageDesktop})`,
        backgroundPosition: 'center top',   // show top of image on mobile
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',      // fixes iOS Safari blank image bug
      }}
    >
        {/* Semi-transparent overlay to ensure extreme typography readability on small mobile layouts */}
        {
          isMobile && (
            <div className="absolute inset-0 bg-white/[0.15] pointer-events-none" />
          )
        }
  
        {/* Headline */}
        <h1 className="text-[2.6rem] text-xl md:text-6xl lg:text-7xl font-light leading-[1.05] md:leading-[0.95] text-black mb-6 md:mb-8 -mt-10 tracking-tight max-w-5xl uppercase">
          Where full-stack development<br />Meets Cybersecurity
        </h1>
        
        {/* Subtext */}
        <p className="text-sm md:text-xl text-black/90 max-w-xl md:max-w-2xl mb-8 md:mb-12 leading-relaxed mx-auto px-2">
          Building modern web applications and exploring cybersecurity.
          Focused on creating secure, scalable, and maintainable software
          through clean architecture and thoughtful engineering.
        </p>
        
        {/* View Work CTA Box (Matches image_6751f4.jpg style) */}
        <div className="border-y border-dashed border-black/60 py-3 px-8 hover:bg-black/5 transition-colors">
          <a href="#portfolio" className="text-base md:text-xl font-medium text-black flex items-center justify-center gap-3 tracking-wide">
            View My Work 
            <span className="text-xl md:text-2xl">→</span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/*Skill Section */}
      <SkillsSection />


      {/* Portfolio Section (Styled elegantly like the grid in image_67a4de.png) */}
      <section id="portfolio" className="bg-[#EBEAE5] px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-black/20 pb-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">Selected Work</h2>
            <p className="text-xs md:text-sm font-sans uppercase tracking-widest text-black/60 mt-2 md:mt-0">
              Fresh Developments, Lasting Performance ({projects.length})
            </p>
          </div>

          {/* Two-Column Project Grid */}
          <ProjectSection />

        </div>
      </section>

      {/* Contact Section */}
      <Contact />

    </div>
  );
}

export default HomePage;