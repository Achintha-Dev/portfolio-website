import { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { TbFileCvFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToAbout = (place) => {
    const aboutSection = document.getElementById(place);
    aboutSection?.scrollIntoView({ 
      behavior: "smooth",
      block: "start" // 'start', 'center', 'end', or 'nearest'
    });
  };

  return (
    <header id="header" className="w-full px-6 md:px-12 py-4 md:py-6 flex items-center justify-between sticky bg-[#E8E6E1] bg-gradient-to-b from-white via-white/80 to-transparent backdrop-blur-sm top-0 z-50 ">
      
      <div className="bg-[#F5F3B0] px-4 py-2 border border-black/10">
        <span className="text-black font-semibold text-sm md:text-base tracking-wider uppercase">
          Achintha Bandara
        </span>
      </div>
      
      <nav className="hidden lg:flex gap-3">
        <a 
          href="#about" 
          className="bg-[#C6E7D1] px-6 py-2.5 rounded-full text-sm text-black font-medium hover:bg-[#b5dec2] transition-colors inline-flex items-center gap-2"
        >
          <BiInfoCircle size={16} /> 
          About
        </a>
        
        <a 
          href="#portfolio" 
          className="bg-[#C6E7D1] px-6 py-2.5 rounded-full text-sm text-black font-medium hover:bg-[#b5dec2] transition-colors inline-flex items-center gap-2"
        >
          <GoProject size={16} /> 
          Portfolio
        </a>
        
        <a 
          href="#contact" 
          className="bg-[#C6E7D1] px-6 py-2.5 rounded-full text-sm text-black font-medium hover:bg-[#b5dec2] transition-colors inline-flex items-center gap-2"
        >
          <BsWhatsapp size={16} /> 
          Contact
        </a>

        <a 
          href="#skills" 
          className="bg-[#C6E7D1] px-6 py-2.5 rounded-full text-sm text-black font-medium hover:bg-[#b5dec2] transition-colors inline-flex items-center gap-2"
        >
          <GrTechnology size={16} /> 
          Skills
        </a>
        
        <a 
          href="https://github.com/Achintha-Dev" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#C6E7D1] px-6 py-2.5 rounded-full text-sm text-black font-medium hover:bg-[#b5dec2] transition-colors inline-flex items-center gap-2"
        >
          <BsGithub size={16} /> 
          GitHub
        </a>

        <button 
          onClick={() => navigate("/resume")}
          className="bg-[#c6d8e7] px-6 py-2.5 rounded-full text-sm text-black font-medium hover:bg-[#b5d8de] transition-colors inline-flex items-center gap-2"
        >
          <TbFileCvFilled size={16} className="text-blue-500"/> 
          Resume
        </button>
      </nav>
      
      <a href="#contact" className="hidden lg:block bg-[#D6F1F7] px-6 py-2.5 text-sm font-medium border border-black/10 hover:bg-[#c2e9f2] transition-colors">
        Get In Touch
      </a>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <span className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Dropdown Nav */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#E8E6E1] lg:hidden flex flex-col items-center gap-4 py-8 shadow-xl border-b border-black/10 z-50">
          <a 
            onClick={() => [setIsMenuOpen(false), scrollToAbout('about')]} 
            className="bg-[#C6E7D1] w-2/3 py-3 rounded-full text-black font-medium hover:bg-[#b5dec2] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <BiInfoCircle size={16} />
            About
          </a>
          
          <a 
            onClick={() => [setIsMenuOpen(false), scrollToAbout('portfolio')]} 
            className="bg-[#C6E7D1] w-2/3 py-3 rounded-full text-black font-medium hover:bg-[#b5dec2] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <GoProject size={16} />
            Portfolio
          </a>
          
          <a 
            onClick={() => [setIsMenuOpen(false), scrollToAbout('contact')]} 
            className="bg-[#C6E7D1] w-2/3 py-3 rounded-full text-black font-medium hover:bg-[#b5dec2] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <BsWhatsapp size={16} />
            Contact
          </a>

          <a 
            onClick={() => [setIsMenuOpen(false), scrollToAbout('skills')]} 
            className="bg-[#C6E7D1] w-2/3 py-3 rounded-full text-black font-medium hover:bg-[#b5dec2] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <GrTechnology size={16} />
            Skills
          </a>  
          
          <a 
            href="https://github.com/Achintha-Dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#C6E7D1] w-2/3 py-3 rounded-full text-sm text-black font-medium hover:bg-[#b5dec2] transition-colors inline-flex items-center justify-center gap-2"
          >
            <BsGithub size={16} />
            GitHub
          </a>
          
          <button 
            onClick={() => navigate('/resume')}
            className="bg-[#c6d8e7] w-2/3 py-3 rounded-full text-sm text-black font-medium hover:bg-[#b5d8de] transition-colors inline-flex items-center justify-center gap-2"
          >
            <TbFileCvFilled size={16} className="text-blue-500"/> 
            Resume
          </button>

          <a 
            onClick={() => [setIsMenuOpen(false), scrollToAbout('contact')]} 
            className="bg-[#D6F1F7] w-2/3 py-3 rounded-full text-black font-medium hover:bg-[#c5e8f0] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
