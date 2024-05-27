import React from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { revealDivOnScroll } from "../assets/animation";


const NotFound = () => {
    revealDivOnScroll("notfound")
  return (
    <div id="notfound" className={`${styles.container} flex flex-col justify-center items-center bg-notFoundbg fullbg sm:fullbgAuto h-screen mt-20`}>
      <h1 className={`text-5xl md:text-6xl lg:7xl xl:text-7xl font-bold leading-tight  text-secondary_100`}>404 Error</h1>
      <h2 className={`text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold leading-snug text-center text-black`}>
        Opps!, you seem to be Looking in The Wrong Direction{" "}
      </h2>
      <div className=' flex gap-6 sm:gap-8 sm:py-4 md:py-4 my-4'>
        <HashLink to="/denurx"><button className={` rounded-[30px] bg-primary px-4 py-2 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] hover:bg-primary_200 focus:border-white transition duration-150`}>Go Home</button></HashLink>
        <Link to={"/denurx/waitlist"}>
        <button
          className={`rounded-[30px] animate-pulse bg-primaryBtn px-4 py-2 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal  text-primary-700 border border-[transparent] hover:bg-secondary_100 focus:border-white transition duration-150`}
        >
          Join Waitlist
        </button>
      </Link>
      </div>
    </div>
  );
};

export default NotFound;
