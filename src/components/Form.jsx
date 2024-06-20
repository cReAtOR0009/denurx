import {useContext} from "react";
import { WaitlistContext } from "../context/waitlistContext";
import { ProviderRegistrationForm } from "./form/ProviderForm";
import { UserRegistrationForm } from "./form/UserRegistrationForm";
import { doctor4, doctor7, patient2 } from "../assets/images";
import { Sectionwrapper } from "./hoc";
import { styles } from "../styles";

const Form = () => {
  const {showJoinwaitlist, setShowJoinwaitlist} = useContext(WaitlistContext)
  return (
    <div className={`${""}  flex-wrap justify-between`}>
      <div id="providerform"  className="flex py-6 justify-between items-center flex-wrap lg:flex-nowrap">
        {/* <ProviderRegistrationForm /> */}
        <div  className=" flex  flex-col gap-2 lg:w-1/2 text-left px-4 py-0 sm:px-6 md:px-6 lg:px-10 xl:px-16">
          <h3 className={`${styles.h2} `}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt iste quasi assumenda.
          </h3>
          {/* <p className={`${styles.paragraph}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
          {/* <p className={`${styles.paragraph}`}>
            Join Our Healthcare Providers Waiting list below
          </p> */}
          <article className={`${styles.paragraph}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque illo
            laborum doloribus necessitatibus magni autem fugit amet! Vero quas
            ad sit totam temporibus eveniet iste provident, labore ducimus non
            et accusantium facere delectus voluptate, nam qui, dolorem expedita
            excepturi quae repellat quod repellendus tempore officiis quidem!
            Eum minima et ut.
          </article>
          <button  onClick={() => setShowJoinwaitlist(true)} className={`${styles.button_primary2} self-start`}>Join Us Now</button>

        
        </div>
        <div className="w-1/2 hidden lg:flex">
          <img src={doctor7} alt="" className="h-auto rounded-[20px] sm:rounded-[50px]" />
        </div>
      </div>
      <div id="userform" className="flex py-6 justify-between items-center flex-wrap lg:flex-nowrap">
        <div className="w-1/2 hidden lg:flex">
        <img src={patient2} alt="" className="h-auto  rounded-[20px] sm:rounded-[50px]" />
        </div>
        <div  className=" flex  flex-col gap-2 lg:w-1/2 text-left px-4 py-0 sm:px-6 md:px-6 lg:px-10 xl:px-16">
          <h3 className={`${styles.h2} `}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt iste quasi assumenda.
          </h3>
          {/* <p className={`${styles.paragraph}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
          {/* <p className={`${styles.paragraph}`}>
            Join Our Healthcare Providers Waiting list below
          </p> */}
          <article className={`${styles.paragraph}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque illo
            laborum doloribus necessitatibus magni autem fugit amet! Vero quas
            ad sit totam temporibus eveniet iste provident, labore ducimus non
            et accusantium facere delectus voluptate, nam qui, dolorem expedita
            excepturi quae repellat quod repellendus tempore officiis quidem!
            Eum minima et ut.
          </article>
          <button  onClick={() => setShowJoinwaitlist(true)} className={`${styles.button_primary2}  self-start`}>Join Us Now</button>

        
        </div>
        {/* <UserRegistrationForm /> */}
      </div>
    </div>
  );
};

export default Sectionwrapper(Form, "form");
