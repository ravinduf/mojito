import gsap from 'gsap';
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const About = () => {

  useGSAP(() => {
    // Split the <h2> inside #about into individual word elements
    const titleSplit = SplitText.create('#about h2', {
      type: 'words',
    })

    // Create a timeline that starts when the About section scrolls into view
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',       // Element that triggers the scroll-based animation
        start: 'top center',     // Start when #about's top reaches the viewport center
      }
    })

    // 1) Reveal the title words: slide up and fade in, one word at a time
    scrollTimeline.from(titleSplit.words, {
      opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
    })

    // 2) Reveal the image grid blocks after the title starts
    // "-=0.5" overlaps this animation so it begins 0.5s before the previous one finishes
    .from('.top-grid div, .botom-grid div', {
      opacity: 0, duration: 1, ease: "power1.inOut", stagger: 0.04
    }, "-=0.5")
  })
  return (
    <section id="about">
      <div className='mb-16 md:px-0 px-5'>
        <div className='content'>
          <div className='md:col-span-8'>
            <p className='badge'>Best Cocktails</p>
            <h2>
              Where every detail matters <span className='text-white'>-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className='sub-content'>
            <p>
              Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className='md:text-3xl text-xl font-bold'>
                <span>4.5</span>/5
              </p>
              <p className='text-sm text-white-100'>
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>

        <div className='top-grid'>

          <div className="md:col-span-3">
            <div className='noisy' />
            <img src="/images/abt1.png" alt="grid-img-1" />
          </div>

          <div className="md:col-span-6">
            <div className="noisy" />
            <img src="/images/abt2.png" alt="grid-img-2" />
          </div>

          <div className="md:col-span-3">
            <div className="noisy" />
            <img src="/images/abt5.png" alt="grid-img-5" />
          </div>
        </div>

        <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy" />
            <img src="/images/abt3.png" alt="grid-img-3" />
          </div>

          <div className="md:col-span-4">
            <div className="noisy" />
            <img src="/images/abt4.png" alt="grid-img-4" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About