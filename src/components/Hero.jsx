import { Link } from 'react-router-dom'
import { HeroText,  } from '../assets/text'
import {WaitlistContext } from "../context/waitlistContext"
import { styles } from '../styles'
import { HashLink } from 'react-router-hash-link'
import { useContext } from 'react'


const Hero = () => {

  const {showJoinwaitlist,setShowJoinwaitlist} = useContext(WaitlistContext)

  return (
    <section id='home' className={`${styles.container} flex justify-between items-center md:items-center flex-wrap h-[100vh] md:h-[auto] lg:h-[100vh]  `}>
        <div className='flex flex-col justify-center flex-1 w-[50%]'>
        <h1 className={`${styles.h1}  py-4 md:py-2 lg:py-6 text-7xl sm:text-8xl md:text-8xl lg:text-6xl xl:text-8xl font-bold leading-tight text-white mt-20 `}>{HeroText.h1}</h1> 
        <p className=' text-base sm:text-base md:text-lg lg:text-[20px] xl:text-xl leading-relaxed text-white'>{HeroText.tagLine}</p> 
        <div className=' flex gap-6 sm:gap-8 sm:py-4 md:py-4 my-4'>
        <HashLink to="/denurx/#about"><button className={` rounded-[30px] bg-primary px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] hover:bg-[transparent] hover:border-white focus:border-white transition duration-150`}>Learn More</button></HashLink>
        <button
        onClick={() => setShowJoinwaitlist(true)}
          className={`rounded-[30px] animate-pulse bg-primaryBtn outline-none  px-6 py-4 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal  text-primary-700 border border-[transparent] hover:animate-pop-up-infinite focus:border-white transition duration-150`}
        >
          Join Waitlist
        </button>
        </div>
        </div>

        <div className='flex-1  bg-heroMockup fullbg  hidden lg:flex lg:items-end   md:w-[50%] h-[100%] mt-20'>
        <img src={HeroText.image} alt="Telemedicine App" className='' />
        </div>
    </section>
  )
}

export default Hero