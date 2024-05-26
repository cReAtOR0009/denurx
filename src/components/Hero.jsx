import React from 'react'
import { Link } from 'react-router-dom'
import { HeroText,  } from '../assets/text'
import { styles } from '../styles'
import { revealDivOnScroll } from '../assets/animation'
import { HashLink } from 'react-router-hash-link'

const Hero = () => {
  revealDivOnScroll("home")
  return (
    <section id='home' className={`${styles.container} flex justify-between items-center md:items-center flex-wrap h-[80vh] sm:h-screen `}> {/**mt-20 lg:mt-20  */}
        <div className='flex flex-col justify-center flex-1 w-[50%]'>
        <h1 className={`${styles.h1}  py-4 md:py-2 lg:py-6 text-6xl sm:text-8xl md:text-8xl lg:text-6xl xl:text-8xl font-bold leading-tight text-white `}>{HeroText.h1}</h1> 
        <p className=' text-base sm:text-base md:text-lg lg:text-[20px] xl:text-xl leading-relaxed text-white'>{HeroText.tagLine}</p> 
        <div className=' flex gap-6 sm:gap-8 sm:py-4 md:py-4 my-4'>
        <HashLink to="/denurx/#about"><button className={` rounded-[30px] bg-primary px-4 py-2 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] hover:bg-primary_200 focus:border-white transition duration-150`}>Learn More</button></HashLink>
        <Link to={"/denurx/waitlist"}>
        <button
          className={`rounded-[30px] bg-primaryBt btn featuresCardShadow px-4 py-2 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal  text-primary-700 border border-[transparent] hover:bg-secondary_100 focus:border-white transition duration-150`}
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