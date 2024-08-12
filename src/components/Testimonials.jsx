import { Sectionwrapper } from "./hoc";
import { styles } from "../styles";
import { testimonials } from "../assets/text";


const TestimonialCard = ({ image, name, role, testament, gridPosition }) => {

  return (
    <li className={`${gridPosition} testimonialsContainer relative flex flex-col gap-4 text-sm leading-6 p-4 bg-primary_20  rounded-lg text-white bg-primary opacity0 border-2 border-grey_100 hover:bg-primary hover:text-white`}>
      <div className="fle items-center gap-2 md:gap-4">
       
        <div className="flex flex-col">
          <h4 className={`${styles.h4} `}>{name}</h4>
          <span className="text-grey_500">{role}</span>
        </div>
      </div>
      <p>{testament}</p>
    </li>
  );
};

const Testimonials = () => {

  return (
    <section  id="testimonials" className={`${""}   `}>
      <div className={` testimonials `}>
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-6  md:mb-10">
            <h2 className={`${styles.h2} `}>
              It's not just us, Hear from Others
            </h2>
           
          </div>
        </div>
        <div className="relative "> 
          <ul className="testimonial_card  flex flex-wrap lg:flex-nowrap gap-4 my-4 overflow--scroll">
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

export default Sectionwrapper(Testimonials, "testimonials");
