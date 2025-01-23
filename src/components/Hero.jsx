import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState, useEffect } from 'react';
import smallHeroVideo from '/assets/videos/smallHero.mp4';
import hero from '/assets/videos/hero.mp4';
import hairVideo from '/assets/videos/haircinematic.mp4'; // Beauty-related video

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? hairVideo : hairVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(hairVideo);
    } else {
      setVideoSrc(hairVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1.5 });
  }, []);

  return (
    <section className="w-full bg-black relative">
      {/* Hero Section */}
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          Transform Your Hair
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            loop
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#shop" className="btn">
          Shop Now
        </a>
        <p className="font-normal text-xl text-white">
          Starting at just $29.99
        </p>
      </div>
    </section>
  );
};

export default Hero;
