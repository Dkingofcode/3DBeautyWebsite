import React, { useRef } from 'react';
import { serumImg, mirrorImg, applicationVideo } from '../utils'; // Update image and video imports
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#serum', {
      scrollTrigger: {
        trigger: '#serum',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    });

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* Image Section */}
        <div id="serum" className="flex-center w-full my-20">
          <img src={serumImg} alt="Radiance Serum" width={180} height={180} />
        </div>

        {/* Title and Subtitle */}
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Radiance Serum.
            <br /> Transform your glow.
          </h2>

          <p className="hiw-subtitle">
            Experience the power of innovation in skincare with our advanced formula.
          </p>
        </div>

        {/* Video and Frame Section */}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={mirrorImg}
                alt="Mirror Frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={applicationVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            How to Use the Radiance Serum
          </p>
        </div>

        {/* Text Content */}
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              The Radiance Serum delivers{' '}
              <span className="text-white">
                unparalleled hydration and luminosity
              </span>{' '}
              with every application.
            </p>

            <p className="hiw-text g_fadeIn">
              With ingredients like{' '}
              <span className="text-white">vitamin C and hyaluronic acid</span>,
              your skin will feel refreshed and rejuvenated.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Advanced</p>
            <p className="hiw-bigtext">Skincare Formula</p>
            <p className="hiw-text">for all skin types</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
