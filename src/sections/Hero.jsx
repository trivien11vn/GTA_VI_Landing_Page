import CoomingSoon from "./CoomingSoon"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useMaskSettings } from "../../constants"


const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    })

    gsap.set('.mask-logo', {
      marginTop: '-100vh',
      opacity: 0
    })

    gsap.set('.entrance-message', {
      marginTop: '0vh'
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2.5,
        end: '+=200%',
        pin: true,
      }
    })
  })
  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img src="/images/hero-bg.webp" alt="background" className="scale-out" />
        <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out" />
        <img src="/images/watch-trailer.png" alt="trailer" className="trailer-logo fade-out" />
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="play" className="w-7 ml-1" />
        </div>
      </div>
      <div>
        <img src="/images/big-hero-text.svg" alt="logo" className="size-full object-cover mask-logo" />
      </div>
      <div className="fake-logo-wrapper">
        <img src="/images/big-hero-text.svg" className="overlay-logo" />
      </div>
      <CoomingSoon />
    </section>
  )
}

export default Hero