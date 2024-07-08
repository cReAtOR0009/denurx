import React from 'react'
import { styles } from '../../styles';

const Sectionwrapper = (Component, idName, background) =>
    function HOC(props) {
    // let  background = `bg-${background}`
      return (
        <section
         
          className={`${styles.container} relative dark:bg-dark-containerBg bg-${background}`}
        >
          <span className='hash-span' id={idName}>
            &nbsp;
          </span>
  
          <Component {...props}  />
        </section>
      );
    };

export default Sectionwrapper