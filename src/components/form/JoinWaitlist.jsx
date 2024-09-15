import { useEffect } from "react";
import { styles } from "../../styles";
import MailChimp from "./MailChimp";
import MultiStepForm from "./MultistepForm";

const JoinWaitlist = ({ setShowJoinwaitlist, showJoinwaitlist }) => {

  useEffect(() => {
    if (showJoinwaitlist) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showJoinwaitlist]);

  
  return (
    <section
      id="join wait list"
      className={` h-screen  px-4  py-[80px] sm:py-[150px] pb-20  lg:py-20 xl:pt-6  my-0 mx-[auto]  fixed z-50 top-0 left-0 bottom-0 right-0 w-[100%]  bg-grey_200 dark:bg-dark-backgroundNav animate-pop-up overflow-y-auto`}
    >
      <div
        onClick={() => setShowJoinwaitlist(false)}
        className="fixed z-50 right-0 top-2 p-2  mr-4 space-y-2 group group-hover:scale-[1.1] select-none cursor-pointer "
      >
        <span className="block h-1 w-6 sm:h-1 sm:w-10 origin-center rounded-full bg-black dark:bg-white transition-transform ease-in-out rotate-45 translate-y-1.5 group-hover:bg-primary_100"></span>
        <span className="block h-1 w-6 sm:h-1 sm:w-10  origin-center rounded-full bg-black dark:bg-white transition-transform ease-in-out -rotate-45  -translate-y-1.5 group-hover:bg-primary_100"></span>
      </div>
      <div className="flex flex-col justify-center items-center ">
          <h1
        className={`${"styles.h1"} text-2xl md:text-2xl lg:4xl xl:text-3xl font-bold  leading-tight text-center dark:text-dark-text`}
      >
        Join the Future of Health Management Today!
      </h1>
      <h2
        className={`${"styles.h2"} text-lg md:text-2xl lg:text-3xl xl:text-3xl my-[10px] font-semibold leading-snug text-black text-center dark:text-dark-text`}
      >
        "Your Clinic In Your Hands."
      </h2>
      <p
        className={`${styles.paragraph} text-black text-center md:w-[50%]`}
      >
        Be among the first to experience a revolutionary app that puts your
        health in your hands. Track your wellness, connect with healthcare professionals instantly and get personalized
        recommendations.
        Sign up for our waitlist and be the first to know when we launch!
      </p>
      {/* <MailChimp /> */}
      <MultiStepForm />  
      </div>
  
    </section>
  );
};

export default JoinWaitlist;
