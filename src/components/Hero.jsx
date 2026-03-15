import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"


const Hero = () => {

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // Animate each character: start below and slide up into place
    // gsap.from() = animate FROM these values TO current state
    gsap.from(heroSplit.chars, {
      yPercent: 100,      // Start 100% of char height below → slides up into final position
      duration: 1.8,      // Each character’s animation lasts 1.8 seconds
      ease: 'expo.out',   // Fast start, slow finish (exponential ease out)
      stagger: 0.06      // 0.06s delay between each char → left-to-right wave effect
    })

    // Animate each line of the subtitle: fade in and slide up, after the title
    gsap.from(paragraphSplit.lines, {
      opacity: 0,         // Start invisible → fades in
      yPercent: 100,      // Start 100% below → slides up into place
      duration: 1.8,      // Each line animates over 1.8 seconds
      ease: "expo.out",   // Fast start, slow finish
      stagger: 0.06,      // 0.06s between each line → sequential reveal
      delay: 1,           // Wait 1s before starting (lets title animation lead)
    });

    // Parallax: tie a timeline to scroll progress over the hero section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",        // Use #hero as the scroll reference
          start: "top top",        // Start when hero top hits viewport top
          end: "bottom top",       // End when hero bottom hits viewport top
          scrub: true,             // Animation progress = scroll position (no auto-play)
        },
      })
      .to(".right-leaf", { y: 200 }, 0)   // Right leaf moves down 200px (position 0 = same time)
      .to(".left-leaf", { y: -200 }, 0)   // Left leaf moves up 200px
      .to(".arrow", { y: 100 }, 0);       // Arrow moves down 100px
  }, [])
  return (
    <section id="hero" className="noisy">
      <h1 className="title">Mojito</h1>

      <img src="/images/hero-left-leaf.png" className="left-leaf" />
      <img src="/images/hero-right-leaf.png" className="right-leaf" />

      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Cool. Crisp. Classic.</p>
            <p className="subtitle">
              Sip the Spirit <br /> of Summer
            </p>
          </div>

          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>
            <a href="#cocktails">View cocktails</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero