import React, { useState } from 'react'
import { services } from '../assets/text'
import { styles } from '../styles'
import { revealDivOnScroll } from '../assets/animation'

const ServiceCard = ({icon, title, description, image}) => {
    const trimmedContent = `${description.slice(0, 200)}...`
    const [readMore, setReadMore] = useState(false)

    return (
        <div key={title} className='relative rounded-md sm:rounded-xl border border-white shadow-featuresCardShadow hover:shadow-featuresCardHover  hover:border-primary_100 cursor-pointer transition' onClick={() => setReadMore(!readMore)}>
            <img src={image} alt=""  className='w-[100%] rounded-md sm:rounded-xl '/>
            <div className='p-4'>
                <img src={icon} alt={`${title}`} className='mt-[-12%] w-8 lg:w-20 md:w-20 ' />
                <h3 className={`${styles.h3} text-primary`}>{title}</h3>
                <p className={`${styles.paragraph} text-black`}>{readMore?description:trimmedContent}<span onClick={() => setReadMore(!readMore)} className={`${readMore?"bg-secondary_100 group-hover:bg-primary":"bg-primary "} text-white inline-block text-xxs md:text-sm  rounded-full cursor-pointer p-2`}>{readMore?"Read less":"Read more"}</span></p>
            </div>  
        </div>
    )
}

const Services = () => {
    revealDivOnScroll("services")
  return (
    <section id='services' className={`${styles.container} flex flex-col my-4 gap-6 sm:gap-10`} >
        <h2 className={`${styles.h2}`}>Our High Quality Service</h2>
        <div className='service_grid py-4 sm:py-6'>
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    </section>
  )
}

export default Services