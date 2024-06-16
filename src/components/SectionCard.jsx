import React, {useState} from 'react'
import { HashLink } from 'react-router-hash-link';
import { baseUrl } from '../../config';
import { arrow } from '../assets/images';
import { styles } from '../styles';

export const ServiceCard = ({ icon, title, description, image }) => {
    const trimmedContent = `${description.slice(0, 200)}...`;
    const [readMore, setReadMore] = useState(false);
  
    return (
      <HashLink to={`${baseUrl}/services/#${title}`}>
        <div
          key={title}
          id="title"
          className="serciveCard relative rounded-[20px] sm:rounded-[50px] border-1 border-[#cacaca]  cursor-pointer max-w-[500px] hover:scale-[1.1] group transition"
          onClick={() => setReadMore(!readMore)}
        >
          <img
            src={image}
            alt=""
            className="w-[100%] rounded-[20px] sm:rounded-[50px] "
          />
          <img
            src={arrow}
            alt=""
            className="absolute top-0 right-0 z-10 w-[40px] sm:w-[80px] lg:w-[80px] xl:w-[80px] cursor-pointer rounded-full hover:scale-[1.1] transition"
          />
          <div className="p-4 absolute bottom-0 left-0 right-0 rounded-[20px] sm:rounded-[50px] bg-black bg-opacity-30">
            <img
              src={icon}
              alt={`${title}`}
              className="mt-[-12%] w-10 lg:w-20 md:w-20"
            />
            <h3 className={`${styles.h3} text-white group-hover:underline`}>{title}</h3>
            {/* <p className={`${styles.paragraph} text-black`}>{readMore?description:trimmedContent}
                      <button onClick={() => setReadMore(!readMore)} className={`${readMore?"bg-secondary_100 group-hover:bg-primary":"bg-primary "} text-white inline-block text-xxs md:text-sm  rounded-full cursor-pointer p-2`}>{readMore?"Read less":"Read more"}</button>
                      </p> */}
          </div>
        </div>
      </HashLink>
    );
  };

// export default SectionCard