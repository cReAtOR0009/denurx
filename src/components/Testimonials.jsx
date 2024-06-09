import { testimonials } from "../assets/text";
import { styles } from "../styles";


const TestimonialCard = ({ image, name, role, testament, gridPosition }) => {

  return (
    <li className={`${gridPosition} relative flex flex-col gap-4 text-sm leading-6 p-4 bg-primary_20  rounded-lg text-black border-2 border-[#cacaca] hover:bg-primary hover:text-white`}>
      <div className="fle items-center gap-2 md:gap-4">
        {/* <img
          src={image}
          alt=""
          className="absolute -top-10 right-1/2 w-20 h-20 bg-center bg-cover border rounded-full"
        /> */}
        <div className="flex flex-col">
          <h4 className={`${styles.h4} `}>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
      <p>{testament}</p>
    </li>
  );
};

const Testimonials = () => {

  return (
    <section  id="testimonials" className={`${styles.container} testimonials relative border-[#eaeaea] bg-[#eaecf0a7]`}>
      <div className={` relative`}>
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-6  md:mb-10">
            <h2 className={`${styles.h2} `}>
              It's not just us, Hear from Others
            </h2>
           
          </div>
        </div>
        <div className=""> 
          <ul className="testimonial_card flex flex-wrap lg:flex-nowrap gap-4 my-4 overflow--scroll">
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
