import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";



function AboutSection() {
  return (
    <section id="about" className="bg-[#F4F3F0] px-6 md:px-12 py-20 md:py-16 border-t border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* Left Intro Column */}
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-5xl font-light text-black mb-8 leading-tight max-w-xl">
                <RiDoubleQuotesL className="inline-block text-2xl md:text-4xl -mt-6 md:-mt-8 mr-1 opacity-60" />
                    I'm Achintha, an IT undergraduate passionate about Full-Stack Development and Cybersecurity.
                <RiDoubleQuotesR className="inline-block text-2xl md:text-4xl mb-5 md:mb-7 ml-1 opacity-60" />
            </h2>
            <p className="text-base md:text-lg text-black/80 leading-relaxed mb-6">
                Currently pursuing my degree at the University of Moratuwa,
                I enjoy building web applications with modern technologies
                while continuously learning secure coding practices,
                network security, and system design.

            </p>
            <p className="text-base md:text-lg text-black/80 leading-relaxed">
                My goal is to become an engineer who builds software that is
                not only functional and scalable, but also secure and reliable.
            </p>
          </div>

          {/* Right Meta Info Table (Matches layout structural elements from image_67a4de.png) */}
          <div className="md:col-span-5 w-full border-t border-black/20 pt-4 text-xs md:text-sm tracking-wider uppercase font-sans grid grid-cols-2 gap-y-6 text-black/70">
            <div className="font-semibold text-black">Focus Areas</div>
            <div>Full-Stack Development
                Cybersecurity <br/>
                Software Engineering
            </div>
            
            <div className="font-semibold text-black">Education</div>
            <div>Bachelor of Information Technology (BIT) <br/>University of Moratuwa</div>
            
            <div className="font-semibold text-black">Core Stack</div>
            <div>React
                Node.js
                Express.js
                MongoDB
                Node.js
                TailwindCSS
                <br/>
                Booststrap
                MySQL
                Python
                Java
                <br/>
                Git & GitHub
            </div>
          </div>

        </div>
      </section>
  )
}

export default AboutSection