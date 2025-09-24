import React from 'react';
import styles from './Recommends.module.css';
import Button from '../button/Button';


import result1 from "../../images/אלבנה תוצאות מהטיפולים 1.png";
import result2 from "../../images/אלבנה תוצאות מהטיפולים 2.png";
import result3 from "../../images/אלבנה תוצאות מהטיפולים 3.png";
import result4 from "../../images/אלבנה תוצאות מהטיפולים 4.png";
import result5 from "../../images/אלבנה תוצאות מהטיפולים 5.png";
import result6 from "../../images/אלבנה תוצאות מהטיפולים 6.png";
import result7 from "../../images/אלבנה תוצאות מהטיפולים 7.png";
import result8 from "../../images/אלבנה תוצאות מהטיפולים 8.png";
import result9 from "../../images/אלבנה תוצאות מהטיפולים 9.png";
import result10 from "../../images/אלבנה תוצאות מהטיפולים 10.png";
import result11 from "../../images/אלבנה תוצאות מהטיפולים 11.png";
import result12 from "../../images/אלבנה תוצאות מהטיפולים 12.png";
import result13 from "../../images/אלבנה תוצאות מהטיפולים 13.png";
import result14 from "../../images/אלבנה תוצאות מהטיפולים 14.png";
import result15 from "../../images/אלבנה תוצאות מהטיפולים 15.png";
import result16 from "../../images/אלבנה תוצאות מהטיפולים 16.png";
import result17 from "../../images/אלבנה תוצאות מהטיפולים 17.png";
import result18 from "../../images/אלבנה תוצאות מהטיפולים 18.png";
import result19 from "../../images/אלבנה תוצאות מהטיפולים 19.png";
import result20 from "../../images/אלבנה תוצאות מהטיפולים 20.png";
import result21 from "../../images/אלבנה תוצאות מהטיפולים 21.png";

const Works = () => {
  const images = [
    result1, result2, result3, result4,   result5, result6, result7, result8, 
    result9, result10, result11, result12, result13, result14, result15, result16, result17, result18, result19, result20, result21
  ];

  return (
    <>

<div className={styles.explain}>(בשיטה שמתאימה ספציפית לכל אחת)</div>
   
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Works;