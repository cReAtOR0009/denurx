import React from "react";
import { testimonials } from "../assets/text";
import { styles } from "../styles";
import { revealDivOnScroll } from "../assets/animation";

const TestimonialCard = ({ image, name, role, testament, gridPosition }) => {
 const color = role ==="Doctor"? "bg-primary_100":role==="Nurse"?"bg-primary":role==="Patient"?"bg-primary":"bg-primary"
  return (
    <li className={`${gridPosition}  flex flex-col gap-4 text-sm leading-6 p-4 bg-primary_20  border-2 border-primary rounded-lg text-black "rounded-bl-[20px] rounded-tr-[20px]"`} style={{}}>
      <div className="flex items-center gap-2 md:gap-4">
        <img
          src={image}
          alt=""
          className="w-12 h-12 bg-center bg-cover border rounded-full"
        />
        <div className="flex flex-col">
          <span className={`${styles.h4} text-secondary2`}>{name}</span>
          <span>{role}</span>
        </div>
      </div>
      <p>{testament}</p>
    </li>
  );
};

const Testimonials = () => {
  revealDivOnScroll("testimonials")
  return (
    <section id="testimonials" className={`${styles.container}`}>
      <div className={` `}>
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-6  md:mb-10">
            <h2 className={`${styles.h2} text-secondary2`}>
              It's not just us, Hear from Others
            </h2>
           
          </div>
        </div>
        <div className=""> 
          <ul className="testimonial_card my-4">
            {testimonials.map((testimonial, index) => {
            
              return (
                <TestimonialCard key={testimonial.name} {...testimonial}  gridPosition={`question${index+1}`}  />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
