import React from 'react'
import { styles } from '../../styles';

const Sectionwrapper = (Component, idName) =>
    function HOC(props) {
      return (
        <section
         
          className={`${styles.container} relative dark:bg-dark-containerBg`}
        >
          <span className='hash-span' id={idName}>
            &nbsp;
          </span>
  
          <Component {...props}  />
        </section>
      );
    };

export default Sectionwrapper