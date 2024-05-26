import React, { useState } from "react";
import { styles } from "../../styles";
import { revealDivOnScroll } from "../../assets/animation";
import CustomForm from "./CustomForm";
import MailChimp from "./MailChimp";

const JoinWaitlist = () => {

  revealDivOnScroll("join wait list");
  return (
    <section
      id="join wait list"
      class={`${styles.container} flex flex-col justify-center items-center min-h-screen bg-waitList fullbgAuto h-screen mt-20 `} //  bg-waitList fullbgAuto
    >
      <h1
        className={`${"styles.h1"} text-3xl md:text-4xl lg:4xl xl:text-5xl font-bold text-secondary2 leading-tight text-center`}
      >
        Join the Future of Health Management Today!
      </h1>
      <h2
        className={`${"styles.h2"} text-2xl md:text-3xl lg:text-4xl xl:text-4xl my-[20px] font-semibold leading-snug text-secondary text-center`}
      >
        "Your Clinic In Your Hands."
      </h2>
      <p
        className={`${styles.paragraph} text-[#000000] text-center  px-[5%] md:px-[5%]`}
      >
        Be among the first to experience a revolutionary app that puts your
        health in your hands. Track your wellness, get personalized
        recommendations, and connect with healthcare professionals instantly.
        Sign up for our waitlist and be the first to know when we launch!
      </p>
    <MailChimp />
    </section>
  );
};

export default JoinWaitlist;
