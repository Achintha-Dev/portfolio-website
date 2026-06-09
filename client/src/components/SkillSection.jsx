import { FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiOwasp, SiGit, SiGithub, SiPostman, SiKalilinux, SiMysql } from 'react-icons/si';
import { MdOutlineShield } from 'react-icons/md';
import { BsWordpress } from 'react-icons/bs';

import SkillsMarquee from './SkillsMarquee';
import { VscVscode } from "react-icons/vsc";

function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] rounded-sm" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        {name: 'WordPress', icon: <BsWordpress className='text-blue-500'/> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-black" /> },    
        { name: "Laravel", icon: <FaLaravel className="text-[#a24753]" /> }
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "OWASP Top 10", icon: <SiOwasp className="text-[#E24F1A]" /> },
        { name: "Kali Linux", icon: <SiKalilinux className="text-black" /> },
        { name: "Network Security", icon: <MdOutlineShield className="text-[#005A9C]" /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "MySql", icon: <SiMysql className="text-blue-600" /> },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="text-black" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "VS Code", icon: <VscVscode className="text-[#4477e4]" /> }
      ]
    }
  ];
  

  return (
    <section id="skills" className="relative bg-[#F4F3F0] px-6 md:px-12 py-10 md:py-32 border-t border-black/10 overflow-hidden">
      
        {/* --- bg animation layer --- */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtly moving BLUE dot grid background texture */}
        <div className="absolute inset-0 opacity-[0.2]" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', 
                backgroundSize: '24px 24px' 
            }} 
        />
        
        {/* Updated class mappings to match your index.css keyframe links perfectly */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-stone-300/30 blur-3xl animate-float-1" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-stone-400/20 blur-3xl animate-float-2" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-neutral-200/40 blur-2xl animate-float-2" />
        </div>

        {/* --- CONTENT LAYER (Z-Indexed above the shapes) --- */}
        <div className="max-w-6xl mx-auto relative z-10">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-black/20 pb-2 mb-10">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight uppercase">Technical Skills</h2>
                <p className="text-xs md:text-sm font-sans uppercase tracking-widest text-black/60 mt-2 md:mt-0">
                  Full-stack skills from UI to security
                </p>
            </div>

            {/* 4-Column Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {skillCategories.map((category, index) => (
                <div key={index} className="flex flex-col">
                <h3 className="text-xs font-sans uppercase tracking-widest text-black/40 font-medium mb-6 pb-2 border-b border-black/5">
                    {category.title}
                </h3>

                <div className="flex flex-col gap-3">
                    {category.skills.map((skill, sIdx) => (
                    <div 
                        key={sIdx} 
                        className="group flex items-center justify-between p-3.5 bg-white/10 backdrop-blur-[2px] hover:bg-white/80 border border-black/[0.04] hover:border-black/20 rounded-xl transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-sm hover:shadow-md cursor-default"
                    >
                        <span className="text-base font-serif font-light text-black/80 group-hover:text-black transition-colors duration-200">
                        {skill.name}
                        </span>
                        <div className="text-xl scale-125  group-hover:opacity-100 group-hover:scale-110 rotate-0 group-hover:rotate-6 transition-all duration-300 ease-out">
                        {skill.icon}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
            <SkillsMarquee />
        </div>
    </section>
  );
}

export default SkillsSection;