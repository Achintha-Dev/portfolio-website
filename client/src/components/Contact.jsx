import { useState } from 'react';

import { BiArrowFromBottom } from 'react-icons/bi';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FiCheck, FiCopy } from 'react-icons/fi';
import GmailLightIcon from '@iconify-react/skill-icons/gmail-light';

function Contact() {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = async (text, id) => {
    try {
        await navigator.clipboard.writeText(text);
        setCopiedItem(id);
        setTimeout(() => setCopiedItem(null), 2000); // Reset after 2s
    } catch (err) {
        console.error("Failed to copy:", err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  return (
    <section id="contact" className="bg-[#F4F3F0] px-6 py-24 text-center border-t border-black/10">
        {/* FIX 1: Removed md:text-left to keep the text framework balanced in the middle */}
        <div className="max-w-2xl mx-auto text-center">

            <p className="text-xs font-sans uppercase tracking-widest text-black/50 mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-light mb-8">Let's Build It Together.</h2>

            {/* FIX 2: Removed md:justify-start so it centers perfectly on both mobile & desktop */}
            <div className="flex flex-wrap items-center justify-center gap-4 min-h-[48px] w-full">
                
                {/* EMAIL ITEM */}
                <div className="group flex items-center bg-black/[0.03] hover:bg-black/[0.06] p-1 rounded-full transition-all duration-300 cursor-pointer">
                    {/* Icon */}
                    <div className="p-2 rounded-full bg-white flex items-center justify-center shrink-0">
                        <GmailLightIcon  height="1em" className="text-[#EA4335]" />
                    </div>
                    {/* Sliding Content */}
                    <div className="flex items-center gap-2 max-w-0 opacity-0 overflow-hidden group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-out whitespace-nowrap">
                        <span className="text-sm font-light tracking-wide text-black/80 pl-1">
                            achinthabandara2023@gmail.com
                        </span>
                        {/* Copy Button */}
                        <button
                        onClick={(e) => { e.stopPropagation(); handleCopy("achinthabandara2023@gmail.com", "email"); }}
                        className="p-1 rounded hover:bg-black/10 transition-colors"
                        aria-label="Copy email"
                        >
                            {copiedItem === "email" ? (
                                <FiCheck size={14} className="text-green-600" />
                            ) : (
                                <FiCopy size={14} className="text-black/50" />
                            )}
                        </button>
                        {copiedItem === "email" && (
                            <span className="text-xs text-green-600 font-sans">Copied!</span>
                        )}
                    </div>
                </div>

                {/* WHATSAPP ITEM */}
                <div className="group flex items-center bg-black/[0.03] hover:bg-black/[0.06] p-1 rounded-full transition-all duration-300 cursor-pointer">
                    {/* Icon */}
                    <div className="p-2 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                        <BsWhatsapp size={18} className="text-green-500" />
                    </div>
                    {/* Sliding Content */}
                    <div className="flex items-center gap-2 max-w-0 opacity-0 overflow-hidden group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-out whitespace-nowrap">
                        <span className="text-sm font-light tracking-wide text-black/80 pl-1">
                            +94 70 240 3537
                        </span>
                        {/* Copy Button */}
                        <button
                        onClick={(e) => { e.stopPropagation(); handleCopy("+94702403537", "whatsapp"); }}
                        className="p-1 rounded hover:bg-black/10 transition-colors"
                        aria-label="Copy WhatsApp number"
                        >
                            {copiedItem === "whatsapp" ? (
                                <FiCheck size={14} className="text-green-600" />
                            ) : (
                                <FiCopy size={14} className="text-black/50" />
                            )}
                        </button>
                        {copiedItem === "whatsapp" && (
                            <span className="text-xs text-green-600 font-sans">Copied!</span>
                        )}
                    </div>
                </div>

                {/* GITHUB ITEM */}
                <span 
                className="group flex items-center  bg-black/[0.03] hover:bg-black/[0.06] p-1 rounded-full transition-all duration-300 no-underline"
                >
                    {/* Icon */}
                    <div className="p-2 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                        <BsGithub size={18} className="text-black" />
                    </div>
                    {/* Sliding Content */}
                    <div className="flex items-center max-w-0 opacity-0 overflow-hidden group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-out whitespace-nowrap">
                        <a 
                        href="https://github.com/Achintha-Dev" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-light tracking-wide text-black/80 pl-1 pr-1">
                            GitHub Profile
                        </a>
                    </div>
                </span>

                {/* LINKEDIN ITEM */}
                <span 
                 
                className="group flex items-center bg-black/[0.03] hover:bg-black/[0.06] p-1 rounded-full transition-all duration-300 no-underline"
                >
                    {/* Icon */}
                    <div className="p-2 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <BsLinkedin size={18} className="text-blue-600" />
                    </div>
                    {/* Sliding Content */}
                    <div className="flex items-center max-w-0 opacity-0 overflow-hidden group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-out whitespace-nowrap">
                        <a 
                        href="https://linkedin.com/in/your-profile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-light tracking-wide text-black/80 pl-1 pr-1">
                            LinkedIn Profile
                        </a>
                    </div>
                </span>

            </div>
        </div>

        <div className="flex justify-end mt-12 -mb-20">
            <button className='rounded-2xl bg-stone-300 p-1 md:scale-150' onClick={scrollToTop}>
                <a><BiArrowFromBottom /></a>
            </button>
        </div>

      </section>
  )
}

export default Contact;