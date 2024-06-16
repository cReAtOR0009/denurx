import React from "react";
import { ProviderRegistrationForm } from "./form/ProviderForm";
import { UserRegistrationForm } from "./form/UserRegistrationForm";
import { doctor4, doctor7, patient2 } from "../assets/images";
import { Sectionwrapper } from "./hoc";
import { styles } from "../styles";

const Form = () => {
  return (
    <div className={`${""}  flex-wrap justify-between`}>
      <div id="providerform"  className="flex justify-between items-center flex-wrap lg:flex-nowrap">
        <ProviderRegistrationForm />
        <div className="w-1/2 hidden lg:flex">
          <img src={doctor7} alt="" className="h-auto rounded-[20px] sm:rounded-[50px]" />
        </div>
      </div>
      <div id="userform" className="flex justify-between flex-wrap lg:flex-nowrap">
        <div className="w-1/2 hidden lg:flex">
        <img src={patient2} alt="" className="h-auto  rounded-[20px] sm:rounded-[50px]" />
        </div>
        <UserRegistrationForm />
      </div>
    </div>
  );
};

export default Sectionwrapper(Form, "form");
