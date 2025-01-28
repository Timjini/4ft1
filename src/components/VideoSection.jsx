import { useEffect, useState } from 'react';
import LogoSlide from './LogoSlide';
import ParallaxContent from './ParallaxContent';

const VideoSection = () => {
    const showModal = (videoUrl) => {
        console.log('Video clicked:', videoUrl);
    };

    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 1200; 
      
      if (scrollPosition >= threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <>
            <section className="videoSection relative isolate bg-gray-100 py-36 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg 
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-50 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" 
                    aria-hidden="true"
                >
                    <defs>
                        <pattern 
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0" 
                            width="200" 
                            height="200" 
                            x="50%" 
                            y="-1" 
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none"></path>
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0"></path>
                    </svg>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"></rect>
                </svg>
            </div>
                <div className={`sticky-div ${isSticky ? "sticky" : ""}`}>
                    <video 
                        className="neu-bg transform duration-300 transition duration-300 ease-in-out hover:scale-101 hover:cursor-pointer" 
                        onClick={() => showModal('https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/videoplayback.mp4')}
                        style={{ width: '100%', height: '65vh', objectFit: 'cover' }}
                        loading="lazy" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    >
                        <source 
                            src="https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/videoplayback.mp4" 
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <ParallaxContent />
            </section>
        </>
    );
}

export default VideoSection;
