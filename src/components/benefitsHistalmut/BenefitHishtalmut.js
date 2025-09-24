import React from 'react';
import needle from "../../icons/wired-outline-3141-female-jumping-hover-jump (1).json"
import technic from "../../icons/wired-outline-1589-makeup-mirror-hover-pinch.json"

import lips from "../../icons/wired-outline-1559-lipstick-hover-pinch.json"
import work from "../../icons/wired-outline-1598-makeup-hover-pinch (2).json"
import styles from './BenefitHishtalmut.module.css';
import ScrollReveal from 'scrollreveal';
import { useEffect,useRef } from 'react';
import {Player} from "@lordicon/react"

const VerticalIconCard = ({ text, icon }) => {

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500);
  };
  
  const playerRef1 = useRef(null);
  
  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);
  
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.text}`, {
      duration: 1000,
      distance: "40px",
      origin: "bottom",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);
  
  return (
    <div className={styles.card}>
       <div className={styles.icon}>
        <Player 
          icon={icon} 
          ref={playerRef1} 
          size="100%" 
          onComplete={handleComplete}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};


const BenefitsContainer = () => {

const benefits = [
   {
    icon: needle,
    text: "יוצאת מהבית עם שקט בראש כשאת נראית בגרסה הכי יפה של עצמך"
  },
  {
    icon: technic,
    text: "לא צריכה יותר לבזבז זמן יקר כל בוקר מול המראה בהתארגנויות, תיקונים והשלמות"
  },
{
  icon: work,
  text: "חוסכת אלפי שקלים בשנה על מוצרי איפור שלא באמת פותרים את הבעיה"
},
{
  icon: lips,
  text: "לא צריכה לבדוק כל שעה אם האודם עדיין במקום או לתקן אותו אחרי כל קפה"
}
];

  return (
    <div className={styles.container}>
      {benefits.map((benefit, index) => (
        <VerticalIconCard 
          key={index} 
          text={benefit.text} 
          icon={benefit.icon}
        />
      ))}
    </div>
  );
};

export default VerticalIconCard;
export { BenefitsContainer };