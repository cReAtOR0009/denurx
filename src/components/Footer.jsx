import React from "react";
import { socials } from "../assets/text";
import { menu, telephone, mail } from "../assets/images";
import { styles } from "../styles";
import { revealDivOnScroll } from "../assets/animation";

const Footer = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("form submit bbtn triggered")
  }
  revealDivOnScroll("footer")
  return (
    <footer id="footer" className={`${styles.footer_container} px-4 py-4 sm:px-10 md:py-6  lg:p-6 xl:px-20 xl:py-10  max-w-[100%] text-black bg-footerBg fullbg flex flex-wrap justify-between items-center`}>
      <div className="w-screen md:w-[auto]" >
        <div id="logo_container">
        <img src="./logo.png" alt="Logo here" className="w-6 md:w-12" />
      </div>
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-between items-center gap-2 sm:gap-6 my-2">
          <input type="text"  placeholder="Enter your email address" className="flex-1 h-10 rounded-md sm:rounded-xl text-sm text-[#000000] sm:text-base p-2 outline-none border border-[transparent] bg-white placeholder-secondary_100 focus:border-white" />
          <button
            className={`${""} rounded-[30px] bg-secondary px-6 py-2 sm:px-6 sm:py-4 text-xxs text-white sm:text-base font-medium uppercase leading-normal text-primary-700 border border-[transparent] hover:bg-secondary_100 focus:border-white  hover:border-primary transition duration-150`}
          >
            Join Waitlist
          </button>
        </form>
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
          <div className="flex justify-between gap-2 sm:gap-6 my-2">
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
            &copy; 2024 @ denurx
          </div>
        </div>
      {/* <div></div> */}
    </footer>
  );
};

export default Footer;
