import { useRef } from "react";
import { FiDownload, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function ResumePage() {
  const resumeRef = useRef(null);
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // resume.pdf inside the /public folder
    link.download = "Achintha_Bandara_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#F4F3F0] font-serif">
      
      {/* Top Action Bar */}
      <div className="sticky top-0 z-50 bg-[#E8E6E1] border-b border-black/10 px-6 md:px-12 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-sans text-black/60 hover:text-black transition-colors"
        >
          <FiArrowLeft /> Back to Portfolio
        </button>

        <span className="text-sm font-sans uppercase tracking-widest text-black/40 hidden md:block">
          Achintha Bandara — Resume
        </span>

        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-black text-white text-sm font-sans px-5 py-2.5 hover:bg-black/80 transition-colors"
        >
          <FiDownload size={14} /> Download PDF
        </button>
      </div>

      {/* Resume Card */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div
          ref={resumeRef}
          className="bg-white shadow-xl border border-black/5 p-8 md:p-14"
        >
            {/* Header */}
            <div className="border-b border-black/10 pb-8 mb-10">
                <h1 className="text-4xl md:text-5xl font-light tracking-tight uppercase mb-2">
                Achintha Bandara
                </h1>
                <p className="text-base font-sans text-black/60 mb-4">
                Full-Stack Developer & Cybersecurity Learner
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-sans text-black/50 uppercase tracking-widest">
                <span className="lowercase text-base">achinthabandara2023@gmail.com</span>
                <span>·</span>
                <span>github.com/Achintha-Dev</span>
                <span>·</span>
                <span>linkedin.com/in/Achintha Bandara</span>
                <span>·</span>
                <span>Kurunegala, Sri Lanka.</span>
                </div>
            </div>

            {/* Summary */}
            <ResumeSection title="Summary">
                <p className="text-sm md:text-base font-sans text-black/70 leading-relaxed">
                    Software Engineering undergraduate passionate about Full-Stack
                    Development and Cybersecurity. Experienced in building modern web
                    applications using React, Node.js, Express, and MongoDB. Currently
                    expanding my knowledge in secure coding practices, OWASP Top 10,
                    network security, and cloud technologies while developing scalable
                    and user-focused software solutions.
                </p>
            </ResumeSection>

            {/* Experience */}
            {/* <ResumeSection title="Experience">
                <ResumeEntry
                    title="Full-Stack Developer"
                    company="Your Company / Freelance"
                    period="2023 — Present"
                    points={[
                        "Built and deployed responsive web applications using React and Tailwind CSS.",
                        "Developed RESTful APIs with Node.js and Express, backed by MongoDB and MySQL.",
                        "Implemented authentication systems and secured routes against OWASP vulnerabilities.",
                    ]}
                />
            </ResumeSection> */}

            <ResumeSection title="Projects & Practical Experience">
                <ResumeEntry
                    title="Full-Stack Development Projects"
                    company="Personal & Academic Projects"
                    period="2024 — Present"
                    points={[
                        "Designed and developed responsive web applications using React and Tailwind CSS.",
                        "Built RESTful APIs with Node.js and Express connected to MongoDB databases.",
                        "Implemented authentication, role-based access control, and secure API communication.",
                    ]}
                />
            </ResumeSection>

            {/* Education */}
            <ResumeSection title="Education">
                <ResumeEntry
                    title="Bachelor of Information Technology (BIT)"
                    company="University of Moratuwa"
                    period="2024 — Present"
                    points={[
                        "Studying software engineering, web technologies, databases, and cybersecurity.",
                        "Developing practical experience through full-stack and software engineering projects.",
                    ]}
                />
            </ResumeSection>

            {/* Skills */}
            <ResumeSection title="Technical Skills">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                <SkillGroup label="Frontend" items={["React", "JavaScript", "Tailwind CSS", "WordPress"]} />
                <SkillGroup label="Backend" items={["Node.js", "Express.js", "REST APIs", "PHP"]} />
                <SkillGroup label="Database" items={["MongoDB", "MySQL"]} />
                <SkillGroup label="Cybersecurity" items={["OWASP Top 10", "Kali Linux", "Network Security"]} />
                <SkillGroup label="Tools" items={["Git", "GitHub", "Postman", "VS Code"]} />
                </div>
            </ResumeSection>

            {/* Projects */}
            <ResumeSection title="Projects" isLast>
                <ResumeEntry
                    title="Silver Path"
                    company="github.com/Achintha-Dev/silver-path"
                    period="2026"
                    points={[
                        "Developed a full-stack web application with a responsive user interface and scalable backend architecture.",
                        "Built using React, Node.js, Express, and MongoDB with emphasis on usability and maintainable code.",
                        "Implemented dynamic content management and modern frontend design practices."
                    ]}
                />
                <ResumeEntry
                    title="DualMind AI"
                    company="github.com/Achintha-Dev/DualMind_AI"
                    period="2026"
                    points={[
                        "Built a multi-agent AI platform capable of coordinating specialized AI agents for contextual task assistance.",
                        "Integrated external AI APIs and developed a modular architecture for scalability and maintainability.",
                        "Implemented modern React frontend and Node.js backend services."
                    ]}
                />
            </ResumeSection>

            {/* <ResumeSection title="Certifications">
                <ResumeEntry
                    title="Cisco Networking Basics"
                    company="Cisco Networking Academy"
                    period="2026"
                    points={[
                    "Learned networking fundamentals, IP addressing, routing, and network troubleshooting."
                    ]}
                />
            </ResumeSection> */}

        </div>
      </div>
    </div>
  );
}

// Reusable sub-components 

function ResumeSection({ title, children, isLast }) {
  return (
    <div className={`${isLast ? "" : "border-b border-black/10"} pb-8 mb-8`}>
      <h2 className="text-xs font-sans uppercase tracking-widest text-black/40 mb-5">
        {title}
      </h2>
      {children}
    </div>
  );
}

function ResumeEntry({ title, company, period, points }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
        <h3 className="text-base md:text-lg font-light tracking-tight">{title}</h3>
        <span className="text-xs font-sans text-black/40 uppercase tracking-widest mt-0.5 md:mt-0">
          {period}
        </span>
      </div>
      <p className="text-xs font-sans text-black/50 uppercase tracking-wider mb-3">
        {company}
      </p>
      <ul className="space-y-1.5">
        {points.map((point, i) => (
          <li key={i} className="flex gap-3 text-sm font-sans text-black/70 leading-relaxed">
            <span className="text-black/30 mt-0.5">—</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ label, items }) {
  return (
    <div>
      <p className="text-xs font-sans uppercase tracking-widest text-black/40 mb-2">{label}</p>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-sm font-sans text-black/70">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumePage;