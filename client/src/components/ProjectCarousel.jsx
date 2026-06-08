import { useState } from "react";

// A dedicated, reusable component for each project's carousel
function ProjectCarousel({images, title}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fallback if there are no images provided in the data array
    if (!images || images.length === 0) {
        return <div className="w-full h-full bg-[#E1DFD9]" />;
    }

    const prevSlide = (e) => {
        e.preventDefault(); // Prevents layout shifts if wrapped in links
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = (e) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full h-full relative group/carousel overflow-hidden ">
            {/* Slider Wrapper */}
            <div 
                className="flex w-full h-full transition-transform duration-500 ease-out  "
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`${title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover shrink-0 "
                />
                ))}
            </div>

            {/* Navigation Controls (Hidden by default, visible on hover) */}
            {images.length > 1 && (
                <>
                    {/* Left Arrow */}
                    <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
                    aria-label="Previous image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
                    aria-label="Next image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Bottom Dot Indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => { e.preventDefault(); setCurrentIndex(index); }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentIndex === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default ProjectCarousel;