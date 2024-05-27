import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { socials } from "../assets/text";
import { menu, telephone, mail } from "../assets/images";
import { styles } from "../styles";
import { revealDivOnScroll } from "../assets/animation";
import { useGSAP } from "@gsap/react";

const Footer = () => {
  const containerRef = useRef(null)


  useGSAP(() => {

    revealDivOnScroll(containerRef)
  }, [])
  return (
    <footer ref={containerRef} id="footer" className={`${styles.footer_container} px-4 py-4 sm:px-10 md:py-6  lg:p-6 xl:px-20 xl:py-10  max-w-[100%] text-black bg-footerBg fullbg flex flex-wrap justify-between items-center`}>
      <div className=" flex justify-between items-center w-screen md:w-[auto]" >
        <div id="logo_container">
        <img src="./logo.png" alt="Logo here" className="w-6 md:w-12" />
      </div>
      <Link to={"/denurx/waitlist"}>
        <button
          className={`rounded-[30px] animate-pulse bg-primaryBtn px-4 py-2 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal  text-primary-700 border border-[transparent] hover:bg-secondary_100 focus:border-white transition duration-150`}
        >
          Join Waitlist
        </button>
      </Link>
      </div>
        <div className="flex flex-col w-screen md:w-[auto] my-2">
          <div className="flex justify-between  sm:flex-row gap-4 sm:gap-6">
            <a href="tel:+234 00000000" className="flex flex-col items-center p-2 sm:p-4 flex-1 text-center">
              <img src={telephone} alt="" className="w-6 md:w-12 rounded-full"  />  +234 00000000
            </a>
            <a  href="mailto:creator@gmail.com" className="flex flex-col items-center p-2 sm:p-4 flex-1 text-center">
              <img src={mail} alt="" className="w-6 md:w-12 rounded-full" />creator@gmail.com
            </a>
          </div>
          <div className="flex justify-between flex-wrap gap-2 sm:gap-6 my-2">
            {socials.map((social, index) => (
              <a href={`${social.link}`} key={index} className="flex flex-col items-center cursor-pointer">
                <img src={social.image} alt="" className="w-4 md:w-8 rounded-full"  />
                <p>{social.platform}</p>
              </a>
            ))}
          </div>
          <div>
            <div className="flex">
            <a href="#">Terms and Conditions &nbsp;</a> |
            <a href="#"> &nbsp; Privacy Policy</a>
            </div>
            Copyright &copy; 2024 Denurx
          </div>
        </div>
      {/* <div></div> */}
    </footer>
  );
};

export default Footer;
