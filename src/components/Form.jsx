import React from "react";
import { ProviderRegistrationForm } from "./form/ProviderForm";
import { UserRegistrationForm } from "./form/UserRegistrationForm";
import { doctor4 } from "../assets/images";
import { Sectionwrapper } from "./hoc";
import { styles } from "../styles";

const Form = () => {
  return (
    <div className={`${""}  flex-wrap justify-between`}>
      <div id="providerform"  className="flex justify-between items-center flex-wrap lg:flex-nowrap">
        <ProviderRegistrationForm />
        <div className="w-1/2">
          <img src={doctor4} alt="" className="hidden lg:flex w-1/ h-auto" />
        </div>
      </div>
      <div id="userform" className="flex justify-between flex-wrap lg:flex-nowrap">
        <img src={doctor4} alt="" className="hidden lg:flex md:w-1/2" />
        <UserRegistrationForm />
      </div>
    </div>
  );
};

export default Sectionwrapper(Form, "form");
