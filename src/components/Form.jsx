import { useContext } from "react";
import { WaitlistContext } from "../context/waitlistContext";
import { Sectionwrapper } from "./hoc";
import {doctor7, patient2 } from "../assets/images";
import { styles } from "../styles";

const Form = () => {
  const { setShowJoinwaitlist } = useContext(WaitlistContext);
  return (
    <div className={`${""}  flex-wrap justify-between `}>
      <div
        id="providerform"
        className="flex  py-10 justify-between items-center flex-wrap lg:flex-nowrap"
      >
        <div className=" flex  flex-col gap-2 lg:w-1/2 text-left px-4 py-0 sm:px-6 md:px-6 lg:px-10 xl:px-16">
          <h3 className={`${styles.h2} `}>
            Cost-Effective Healthcare Solutions.
          </h3>

          <article className={`${styles.paragraph} text-justify`}>
            Denurx makes healthcare affordable and accessible by eliminating the
            need for costly in-person visits. Save on travel expenses, reduce
            time off work, and avoid long clinic waits. Virtual consultations
            lower operational costs for providers, resulting in more competitive
            pricing and lower consultation fees. Regular check-ups help catch
            health issues early, saving on expensive treatments. Flexible
            payment options and insurance plans ensure you get the care you need
            without financial strain. Denurx is dedicated to providing
            high-quality, cost-effective healthcare for everyone.
          </article>
          <button
            onClick={() => setShowJoinwaitlist(true)}
            className={`${styles.button_primary2} self-start`}
          >
            Join Us Now
          </button>
        </div>
        <div className="w-1/2 hidden overflow-hidden lg:flex rounded-[20px] sm:rounded-[50px]">
          <img
            src={doctor7}
            alt="Doctor meeting with a patient online using Denurx Virtual Appointment Scheduling feature"
            className="h-auto hover:scale-[1.2] transition duration-1000"
          />
        </div>
      </div>
      <div className="w-full h-1 bg-grey_300 rounded my-10"></div>
      <div
        id="userform"
        className="flex py-10 justify-between items-center flex-wrap lg:flex-nowrap"
      >
        <div className="w-1/2 overflow-hidden hidden lg:flex rounded-[20px] sm:rounded-[50px]">
          <img
            src={patient2}
            alt="patients using Denurx Secure medical virtual Consultations feature to Get prescription"
            className="h-auto hover:scale-[1.2] transition duration-1000"
          />
        </div>
        <div className=" flex flex-col gap-2 lg:w-1/2 text-left px-4 py-0 sm:px-6 md:px-6 lg:px-10 xl:px-16">
          <h3 className={`${styles.h2} `}>
            Verified and Qualified Professionals
          </h3>
          <article className={`${styles.paragraph} text-justify`}>
            At Denurx, we prioritize your health by ensuring that all healthcare
            professionals on our platform are verified and qualified. Each
            practitioner undergoes rigorous screening and verification processes
            to ensure they meet our high standards of competence and
            professionalism. You can trust that your healthcare provider is
            experienced and accredited in their field, providing you with
            reliable medical advice and treatment. Our commitment to quality
            ensures that you receive care from trusted professionals who are
            dedicated to delivering the highest standards of healthcare.
          </article>
          <button
            onClick={() => setShowJoinwaitlist(true)}
            className={`${styles.button_primary2}  self-start`}
          >
            Join Us Now
          </button>
        </div>
        {/* <UserRegistrationForm /> */}
      </div>
    </div>
  );
};

export default Sectionwrapper(Form, "form", "bg-scrollmodern");
