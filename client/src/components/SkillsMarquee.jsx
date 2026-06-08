import { FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiOwasp, SiGit, SiGithub, SiPostman, SiMysql, SiKalilinux } from 'react-icons/si';
import { MdOutlineShield } from 'react-icons/md';
import { BsWordpress } from 'react-icons/bs';
import { VscVscode } from "react-icons/vsc";

function SkillsMarquee() {
  const allSkills = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] rounded-sm" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="text-black" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "OWASP", icon: <SiOwasp className="text-[#E24F1A]" /> },
    { name: "Kali Linux", icon: <SiKalilinux className="text-black" /> },
    { name: "Security", icon: <MdOutlineShield className="text-[#005A9C]" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "GitHub", icon: <SiGithub className="text-black" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    {name: 'VS Code', icon: <VscVscode className="text-[#4477e4]" />},
    { name: "MySql", icon: <SiMysql className="text-[#375cff]" /> },
    { name: "Laravel", icon: <FaLaravel className="text-[#ff4437]" /> },
    { name: "Wordpress", icon: <BsWordpress className="text-[#3776ff]" /> }
  ];

  // We duplicate the array to guarantee there's always a trailing item trailing to loop into perfectly
  const doubledSkills = [...allSkills, ...allSkills];

  return (
    <div className="w-full bg-transparent pb-10 overflow-hidden mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        
        {/* Subtle decorative framing lines */}
        <div className="w-full border-t border-b border-black/10 py-2 relative overflow-hidden mask-gradient">
          
          {/* Left/Right Edge Fading Overlays for Visual Depth */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F3F0] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F3F0] to-transparent z-10 pointer-events-none" />

          {/* Sliding Marquee Track */}
          <div className="flex w-max gap-12 items-center animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            {doubledSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3  opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 px-2"
              >
                <div className="text-2xl md:text-3xl">
                  {skill.icon}
                </div>
                <span className="text-sm md:text-base font-sans font-medium uppercase tracking-wider text-black">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default SkillsMarquee;