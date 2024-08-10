import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { WaitlistContext } from "../context/waitlistContext";
import { socials } from "../assets/text";
import { telephone, mail } from "../assets/images";
import { styles } from "../styles";
import Privacy from "./Privacy";
import TermAndCondition from "./TermAndCondition";

const Footer = () => {
  const {showJoinwaitlist, setShowJoinwaitlist} = useContext(WaitlistContext)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const handleShowPrivacy = (e) => {
    // e.preventDefault()
    setShowPrivacy(true)
  }
  return (
    <footer  id="footer" className={`${styles.footer_container} ${styles.paragraph}  max-w-[100%] text-black border-t-2 border-[#0048ff44] bg-[#eaecf0a7] dark:bg-dark-backgroundNav font-bold flex flex-col xl:flex-row  flex-wrap justify-between items-stretch`}>
      <div className="flex justify-between items-center gap-6  md:w-[auto]" >
        <div id="logo_container">
        <img src="/logo.png" alt="Logo here" className="w-12 h-12 md:w-28 md:h-28" />
      </div>
        <button
        onClick={() => setShowJoinwaitlist(true)}
          className={`${styles.button_primary}`}
        >
          Join Waitlist
        </button>
      </div>
        <div className="flex flex-col  md:w-[auto] my-2">
          <div className="flex xl:flex-row flex-wrap justify-center lg:justify-between items-center">

          <div className="flex flex-wrap justify-between  sm:flex-row gap-4 sm:gap-6">
            <a href="tel:+234 8076091961" className="flex flex-col items-center p-2 sm:p-4 sm:pb-0 sm:self-end flex-1 text-center hover:scale-[1.2] transition-all">
              <img src={telephone} alt="" className="w-6 md:w-12 rounded-full"  />  +234 8076091961
            </a>
            <a  href="mailto:denurxco@denurx.com" className="flex flex-col items-center p-2 sm:p-4 sm:pb-0 sm:self-end flex-1 text-center hover:scale-[1.2] transition-all">
              <img src={mail} alt="" className="w-6 md:w-12 rounded-full" />denurx@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col items-center ">
            <h5 className={`${styles.h5}`}>Join us On Our Social Handles!</h5>
          <div className="flex justify-between flex-wrap gap-2 sm:gap-6 my-2">
            {socials.map((social, index) => (
              <a href={`${social.link}`} target="_blank" key={index} className="flex flex-1 flex-col items-center  cursor-pointer hover:scale-[1.2] transition-all">
                <img src={social.image} alt="" className="w-4 md:w-8 rounded-full"  />
                <p>{social.platform}</p>
              </a>
            ))}
          </div>
          </div>
          </div>
          <div className="w-full h-[2px] bg-[#0048ff44] rounded my-1"></div>
          <div>
            <div className="flex justify-between">
            <p onClick={() =>setShowTerms(true)} className={`hover:underline transition`}>Terms and Conditions &nbsp;</p> 
            <p onClick={() => setShowPrivacy(true)} className={`hover:underline transition`}> &nbsp; Privacy Policy</p>
            </div>
            <span className="float-right">Copyright &copy; 2024 Denurx</span> 
          </div>
        </div>
    { showPrivacy && <Privacy showPrivacy={showPrivacy} setShowPrivacy={setShowPrivacy}/>}
    { showTerms && <TermAndCondition showTerms={showTerms} setShowTerms={setShowTerms}/>} 
    </footer>
  );
};

export default Footer;
