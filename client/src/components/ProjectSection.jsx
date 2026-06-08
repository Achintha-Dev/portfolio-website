import projects from "../data/projects";
import ProjectCarousel from "./ProjectCarousel";

function ProjectSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {projects.map((project) => (
                <div key={project.id} className="flex flex-col group relative">
                
                    {/* Carousel Container Block */}
                    <div className="w-full aspect-[4/3] bg-[#E1DFD9] border border-black/10 relative overflow-hidden transition-all group-hover:border-black/30 mb-4">
                        <ProjectCarousel images={project.images} title={project.title} />
                    </div>

                    {/* Project Meta Information */}
                    {/* Notice: Changed from absolute positioning relative to container to prevent overlapping layout issues */}
                    <div className="pt-1">
                        <span className="text-xs font-sans tracking-widest uppercase text-black/50 block mb-2">
                        {project.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-light mb-4">{project.title}</h3>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold mb-2">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="text-xs bg-black/10 text-black/70 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-start">
                        <p className="text-sm text-black/70 font-sans leading-relaxed max-w-lg mb-3 text-justify">
                        {project.description}
                        </p>
                        
                        <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs font-sans font-semibold tracking-wider uppercase border-b border-black pb-0.5 hover:text-black/60 hover:border-black/40 transition-colors"
                        >
                        Explore Repository
                        </a>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default ProjectSection;