import React from 'react'
import { navLinks } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

  useGSAP(() => {
    // Tweening in animation is a short for inbetweening, and it is the process of creating a smooth transition between two keyframes.

    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      }
    })

    navTween.fromTo('nav',
      {
        backgroundColor: 'transparent',
      },
      {
        backgroundColor: '#00000050',
        backgroundFilter: 'blur(10px)',
        duration: 1,
        ease: 'power2.inOut',
      })

  })

  return (
    <nav >
      <div>
        <a href="/" className='flex items-center gap-2'>
          <img src="/images/logo.png" alt="logo" />
          <p>Velvert Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar