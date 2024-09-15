import React, {useState} from 'react'
import { styles } from '../styles';
import { Helmet } from 'react-helmet-async';
const ServiceCard = ({ icon, title, description, image }) => {
    const trimmedContent = `${description.slice(0, 200)}...`;
    const [readMore, setReadMore] = useState(false);
  
    return (
      // <HashLink to={`/services/#${title}`}>
  
      <div
        key={title}
        id={`${title}`}
        className=" relative rounded-[26px] lg:rounded-[46px] p-4 border-2 border-grey_100  cursor-pointer hover:transition-colors transition:border"
        onClick={() => setReadMore(!readMore)}
      >
        {readMore && (
          <Helmet>
            <title>{`Services- ${title}`}</title>{" "}
            <meta name="description" content={`${description}`}/>
          </Helmet>
        )}
        <img
          src={`${image}`}
          alt={title}
          className="w-[100%] rounded-[10px] lg:rounded-[30px] min-h-[auto] sm:max-h-[250px] sm:min-h-[300px] "
        />
        <div className="">
          <img
            src={icon}
            alt={`${title} icon`}
            className="mt-[-12%] w-8 lg:w-20 md:w-20 "
          />
          <h3 className={`${styles.h3} text-black`}>{title}</h3>
          <p className={`${styles.paragraph} text-black`}>
            {readMore ? description : trimmedContent}
            <button
              onClick={() => setReadMore(!readMore)}
              className={`${
                readMore
                  ? "text-secondary_100 group-hover:underline"
                  : "text-primary "
              } text-black underline inline-block text-xxs md:text-sm  cursor-pointer p-2 underline-offset-2 sm:underline-offset-4`}
            >
              {readMore ? "Read less" : "Read more"}
            </button>
          </p>
        </div>
      </div>
      // </HashLink>
    );
  };

export default ServiceCard