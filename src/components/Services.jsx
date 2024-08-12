import { HashLink } from "react-router-hash-link";
import { Sectionwrapper } from "./hoc";
import { ServiceCard } from "./SectionCard";
import { styles } from "../styles";



const Services = ({ services }) => {
  return (
    <section id="services" className={`${""} services`}>
      <div className=" flex flex-col my-4 gap-6 sm:gap-10">
        <div className="flex items-center justify-between flex-wrap">
          <h2 className={`${styles.h2}`}>Our High Quality Service</h2>
          <HashLink
            to={`/services`}
            className="underline decoration-primary hover:scale-[1.1] transition"
          >
            <h4 className={`${styles.h3}`}>All Services</h4>
          </HashLink>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 py-4 sm:py-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectionwrapper(Services, "services");
