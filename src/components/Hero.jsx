import React, {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import { HeroText,  } from '../assets/text'
import { styles } from '../styles'
import { revealDivOnScroll } from '../assets/animation'
import { HashLink } from 'react-router-hash-link'


const Hero = () => {

  const divRef = useRef(null);
  const heroRef = useRef(null)

  useGSAP(() => {
    revealDivOnScroll(divRef)
    const children = gsap.utils.toArray(heroRef.current.children)
    children.forEach((child, index) => {
      gsap.fromTo(
        child,
        { opacity: 0, y:50 },
        {
          opacity: 1,
          y:0,
          duration:1,
          delay:index * .3,
          // scrollTrigger: {
          //   trigger: child,
          //   start: "top 90%",
          //   end: "bottom 10%",
          //   ease: "power1.out",
          //   // scrub: true,
          // },
        }
      );
    });
  }, []);

  return (
    <section id='home' ref={divRef} className={`${styles.container} flex justify-between items-center md:items-center flex-wrap h-[auto]  `}> {/**mt-20 lg:mt-20  */}
        <div ref={heroRef} className='flex flex-col justify-center flex-1 w-[50%]'>
        <h1 className={`${styles.h1}  py-4 md:py-2 lg:py-6 text-7xl sm:text-8xl md:text-8xl lg:text-6xl xl:text-8xl font-bold leading-tight text-white mt-20 `}>{HeroText.h1}</h1> 
        <p className=' text-base sm:text-base md:text-lg lg:text-[20px] xl:text-xl leading-relaxed text-white'>{HeroText.tagLine}</p> 
        <div className=' flex gap-6 sm:gap-8 sm:py-4 md:py-4 my-4'>
        <HashLink to="/denurx/#about"><button className={` rounded-[30px] bg-primary px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] hover:bg-primary_200 focus:border-white transition duration-150`}>Learn More</button></HashLink>
        <Link to={"/denurx/waitlist"}>
        <button
          className={`rounded-[30px] animate-pulse bg-primaryBtn  px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal  text-primary-700 border border-[transparent] hover:bg-secondary_100 focus:border-white transition duration-150`}
        >
          Join Waitlist
        </button>
      </Link>
        </div>
        </div>

        <div className='flex-1  bg-heroMockup fullbg  hidden lg:flex lg:items-end   md:w-[50%] h-[100%] mt-20'>
        <img src={HeroText.image} alt="Telemedicine App" className='' />
        </div>
    </section>
  )
}

export default Hero