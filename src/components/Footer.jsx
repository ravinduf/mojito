import { openingHours, socials } from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Footer = () => {
  useGSAP(() => {
    // Split the heading into word nodes so each word can animate on its own.
    const titleSplit = SplitText.create('#contact h2', { type: 'words'});

    // Run the whole sequence when the footer enters the viewport (top of #contact hits viewport center).
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
        // scrub: true,
      },
      // `ease` shapes how each tween moves through its duration: time goes 0→1 linearly, but the ease
      // remaps that to how properties interpolate (slow-in / slow-out feels natural). `power1.inOut` is
      // mild acceleration at the start and deceleration at the end.
      // Put it on `defaults` so every child tween inherits it; tweens that set their own `ease` (the
      // leaf images below) still override this for those steps only.
      defaults: { ease: 'power1.inOut' },
    })

    timeline
      // Reveal title: words fade in and slide up, slightly offset in time.
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.2,
      })
      // Then the section labels and body copy, same motion pattern.
      .from('#contact h3, #contact p', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      // Decorative leaves drift up together ("<" = start at the same time as the previous tween).
      .to("#f-right-leaf", {
        y: "-50", duration: 1, ease: "power1.inOut"
      })
      .to("#f-left-leaf", {
        y: "-50", duration: 1, ease: "power1.inOut"
      }, "<")
  })
  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div className='mt-10!'>
          <h3>Socials</h3>

          <div className="flex-center gap-5 mt-10">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer