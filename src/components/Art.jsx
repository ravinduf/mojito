import React from 'react'
import { featureLists, goodLists } from '../constants/index.js'
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Art = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const start = isMobile ? 'top 20%': 'top top';

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        // Element whose scroll position defines when this ScrollTrigger is active (start/end are relative to it).
        trigger: '#art',
        // When the scroll-linked range begins: `start` above is mobile `top 20%` vs desktop `top top` (trigger vs viewport).
        start,
        // When the range ends: when the bottom of `#art` hits the vertical center of the viewport.
        end: 'bottom center',
        // Tie the timeline progress to scroll; `1.5` seconds of smoothing so motion lags the scrollbar slightly.
        scrub: 1.5,
        // Keep `#art` fixed in place for the duration of start→end so the scrubbed animation plays while user scrolls.
        pin: true
      }})
      
      maskTimeline
      .to('.will-fade', {
        opacity: 0,
        stagger: 0.2,
        ease: 'power1.inOut'
      })
      .to('.masked-img', {
        scale: 1.3,
        maskPosition: 'center',
        maskSize: '400%',
        duration: 1,
        ease: 'power1.inOut'
      })
      .to('#masked-content', {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
      })
  });


  return (
    <section id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Art