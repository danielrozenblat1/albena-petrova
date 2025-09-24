import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Player } from '@lordicon/react';
import styles from './Steps.module.css';
import magnet from "../../icons/wired-lineal-2435-number-1-hover-pinch (1).json";
import price from "../../icons/wired-lineal-2433-number-3-hover-pinch.json"
import business from "../../icons/wired-lineal-2434-number-2-hover-pinch.json"
import acne from "../../icons/wired-lineal-2432-number-4-hover-pinch.json"
import Button from '../button/Button';

const Steps = () => {
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);
  const playerRef3 = useRef(null);
  const playerRef4 = useRef(null);

const stepsData = [
  {
    id: 1,
    icon: magnet,
    playerRef: playerRef1,
    title: "פגישת ייעוץ והתאמה אישית",
    description: "נשב יחד, נדבר על המראה שאת אוהבת ומה חשוב לך לשנות או לשפר. אראה לך את השיטות האפשריות ואבחר איתך את הדרך שתתאים בצורה מדויקת למבנה הפנים, לסוג העור ולתוצאה שתרצי – בין אם מדובר בגבות או בשפתיים."
  },
  {
    id: 2,
    icon: business,
    playerRef: playerRef2,
    title: "הטיפול הראשון",
    description: "זה הרגע שבו מתחיל השינוי. בעבודה עדינה ומדויקת אני יוצרת עבורך את הצורה והגוון הרצויים, תוך שימוש בטכניקות מתקדמות ובידע שצברתי. כבר בסיום תראי תוצאה יפה וברורה, מעט חזקה יותר כדי שלאחר ההחלמה תיראה טבעית."
  },
  {
    id: 3,
    icon: price,
    playerRef: playerRef3,
    title: "שלב ההחלמה",
    description: "בימים הראשונים הצבע ייראה כהה או בולט יותר, וזה חלק רגיל מהתהליך. במהלך השבועיים שלאחר מכן הצבע יתבהר ויתייצב. אני זמינה עבורך לכל שאלה או הרגעה, כדי שתעברי את התקופה הזו בראש שקט."
  },
  {
    id: 4,
    icon: acne,
    playerRef: playerRef4,
    title: "טיפול משלים וגימור",
    description: "בטיפול זה אני מוסיפה תיקונים ונגיעות אחרונות כדי שהכול ייראה אחיד ומדויק. בסוף השלב הזה התוצאה כבר יציבה וטבעית – גבות או שפתיים שנראות מושלמות מהבוקר ועד הלילה."
  }
];

  useEffect(() => {
    // הפעלת כל האנימציות בהתחלה
    playerRef1?.current?.playFromBeginning();
    playerRef2?.current?.playFromBeginning();
    playerRef3?.current?.playFromBeginning();
    playerRef4?.current?.playFromBeginning();

    ScrollReveal().reveal(`.${styles.stepTitle}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
    ScrollReveal().reveal(`.${styles.stepDescription}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
    ScrollReveal().reveal(`.${styles.iconContainer}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
  }, []);

  const handleComplete = (ref) => {
    setTimeout(() => {
      ref?.current?.playFromBeginning();
    }, 1000);
  };

  return <>
    <div className={styles.stepsContainer}>
      {stepsData.map((step, index) => (
        <div key={step.id} className={styles.stepWrapper}>
          <div className={`${styles.stepItem} step-${step.id}`}>
            <div className={styles.iconContainer}>
              <Player 
                icon={step.icon} 
                ref={step.playerRef} 
                size="100%" 
                onComplete={() => handleComplete(step.playerRef)}
              />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
          
          {index < stepsData.length - 1 && (
            <div className={styles.connector}></div>
          )}
        </div>
      ))}
         <Button text="לחצי כאן לתיאום תור" message="היי אלבנה הגעתי מהדף שלך אשמח לתאם איתך תור ל.."/>
    </div>
 
  </>
};

export default Steps;