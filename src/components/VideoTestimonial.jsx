import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    videoThumbnail: "/hero_da_vin.avif", // Placeholder
    videoSrc: "https://www.youtube.com/shorts/ZICXlb9Irgo", // Placeholder video link
    quote: "MZ Media is the most reliable editing partner you could ask for your content creation ventures",
    author: "Josh Faulkner",
    role: "Entrepreneur",
    avatar: "/hero_da_vin.avif" // Using same image for avatar placeholder
  },
  {
    id: 2,
    videoThumbnail: "/hero_da_vin.avif",
    videoSrc: "#",
    quote: "They transformed my raw footage into a masterpiece. Highly recommended for anyone serious about quality.",
    author: "Sarah Jenkins",
    role: "YouTuber",
    avatar: "/hero_da_vin.avif"
  },
  {
    id: 3,
    videoThumbnail: "/hero_da_vin.avif",
    videoSrc: "#",
    quote: "Fast turnaround and exceptional attention to detail. A game changer for my daily vlogs.",
    author: "Mike Chen",
    role: "Digital Nomad",
    avatar: "/hero_da_vin.avif"
  }
];

export const VideoTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);
  const slideRef = useRef(null);
  const textRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const animateSlide = (direction) => {
    setIsPlaying(false); // Reset video state on slide change
    const tl = gsap.timeline();
    
    // Animate out
    tl.to([slideRef.current, textRef.current], {
      opacity: 0,
      x: direction === 'next' ? -50 : 50,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        // Update index
        if (direction === 'next') {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
      }
    })
    // Animate in
    .fromTo([slideRef.current, textRef.current], 
      { opacity: 0, x: direction === 'next' ? 50 : -50 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  };

  const handleNext = contextSafe(() => {
    animateSlide('next');
  });

  const handlePrev = contextSafe(() => {
    animateSlide('prev');
  });
  
  const getEmbedUrl = (url) => {
    if (!url) return "";
    let videoId = "";
    if (url.includes("shorts/")) {
        videoId = url.split("shorts/")[1];
    } else if (url.includes("v=")) {
        videoId = url.split("v=")[1];
    }
    // Remove any trailing query params
    if (videoId.includes("?")) videoId = videoId.split("?")[0];
    if (videoId.includes("&")) videoId = videoId.split("&")[0];

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div ref={containerRef} className="w-full bg-[var(--dark)] text-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] mb-3 text-gray-400 font-medium font-[Poppins]">
            Client Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl headingFont font-medium">
            Hear What They're <br/> <span className="text-white">Saying About Us</span>
          </h2>
        </div>

        {/* Slider Section */}
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          
          {/* Top Section: Buttons + Video */}
          <div className="flex justify-center items-center gap-6 md:gap-12 w-full">
            
            {/* Prev Button */}
            <button 
              onClick={handlePrev}
              className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Video Card */}
            <div ref={slideRef} className="relative w-[280px] md:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800 shrink-0">
              
              {!isPlaying ? (
                <>
                  <img 
                    src={currentTestimonial.videoThumbnail} 
                    alt="Video Thumbnail" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div 
                        onClick={() => setIsPlaying(true)}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                     >
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                     </div>
                  </div>
                  
                  {/* Fake Timeline (for aesthetics matching screenshot) */}
                  <div className="absolute bottom-4 left-4 right-4 bg-gray-700/50 h-1 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-[var(--primary-color)]"></div>
                  </div>
                  <div className="absolute bottom-6 left-4 text-[10px] font-mono">
                    01:38
                  </div>
                </>
              ) : (
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={getEmbedUrl(currentTestimonial.videoSrc)} 
                    title="YouTube video player" 
                    className="w-full h-full"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Next Button */}
            <button 
              onClick={handleNext}
              className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

          </div>

          {/* Bottom Section: Quote and Author */}
          <div ref={textRef} className="text-center px-4 mt-12">
            <p className="text-lg md:text-2xl font-light leading-relaxed mb-8 max-w-xl mx-auto font-[Poppins]">
              "{currentTestimonial.quote}"
            </p>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2 border-2 border-gray-700">
                  <img src={currentTestimonial.avatar} alt={currentTestimonial.author} className="w-full h-full object-cover"/>
              </div>
              <h4 className="text-lg font-semibold headingFont">{currentTestimonial.author}</h4>
              <p className="text-sm text-gray-400 font-[Poppins]">{currentTestimonial.role}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default VideoTestimonial;