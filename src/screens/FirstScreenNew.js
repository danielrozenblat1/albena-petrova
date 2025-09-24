import React, { useEffect, useRef, useState } from 'react';
import styles from './FirstScreenNew.module.css';
import inbar from "../images/אלבנה ללא רקע נוסף.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Popped from '../components/poppedUpWindow/Popped';
import LoadingEffect from '../components/loader/Loader';

// Import all 72 images
import result1 from "../images/אלבנה פטרובה תוצאות 1.png";
import result2 from "../images/אלבנה פטרובה תוצאות 2.png";
import result3 from "../images/אלבנה פטרובה תוצאות 3.png";
import result4 from "../images/אלבנה פטרובה תוצאות 4.png";
import result5 from "../images/אלבנה פטרובה תוצאות 5.png";
import result6 from "../images/אלבנה פטרובה תוצאות 6.png";
import result7 from "../images/אלבנה פטרובה תוצאות 7.png";
import result8 from "../images/אלבנה פטרובה תוצאות 8.png";
import result9 from "../images/אלבנה פטרובה תוצאות 9.png";
import result10 from "../images/אלבנה פטרובה תוצאות 10.png";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const preHeaderRef = useRef(null);
  const textBlockRef = useRef(null);
  const imageRef = useRef(null);
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const carouselImages = [
    result1, result2, result3, result4, result5, result6, result7, result8, result9, result10
  ];

  useEffect(() => {
    if (!imageLoaded) return;

    gsap.fromTo(
      preHeaderRef.current,
      { opacity: 0, y: -50, filter: 'blur(8px)', scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: preHeaderRef.current,
          start: 'top 95%',
        },
      }
    );

    const textElements = textBlockRef.current?.children || [];
    gsap.fromTo(
      textElements,
      { opacity: 0, y: 60, filter: 'blur(4px)', scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: textBlockRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotateY: -20,
        rotateX: 10,
        filter: 'blur(6px) brightness(0.8)'
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        filter: 'blur(0px) brightness(1)',
        duration: 1.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
        },
      }
    );

    const button = textBlockRef.current?.querySelector('button');
    if (button) {
      gsap.set(button, { perspective: 1000 });

      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          rotateY: 5,
          boxShadow: '0 8px 30px rgba(18, 66, 73, 0.5)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          rotateY: 0,
          boxShadow: '0 4px 15px rgba(18, 66, 73, 0.3)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }

    gsap.to(imageRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });

  }, [imageLoaded]);

  const handleButtonClick = () => {
    setIsPoppedOpen(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // אם התמונה לא נטענה עדיין, הצג רק את הלואדר
  if (!imageLoaded) {
    return (
      <>
        <LoadingEffect />
        {/* תמונה נסתרת לטעינה */}
        <img
          src={inbar}
          alt="אלבנה פטרובה"
          onLoad={handleImageLoad}
          style={{ display: 'none' }}
        />
      </>
    );
  }

  // אם התמונה נטענה, הצג את כל הקומפוננטה
  return (
    <>
      <div className={styles.preHeader} ref={preHeaderRef}>
        במיוחד עבור נשים שרוצות להראות מתוקתקות לאורך כל היום, <br/> להרגיש שלמות מול המראה ולהפסיק לבזבז זמן כל בוקר על תיקונים והשלמות.
      </div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.textContent} ref={textBlockRef}>
            <div className={styles.title}>
              איפור קבוע לגבות ולשפתיים בכל השיטות, <span className={styles.boldText}>מותאם אישית אלייך</span> בלי{' '}
              <span className={styles.highlightedText}>מראה מוגזם וללא כאב במהלך הטיפול</span>
            </div>

            <p className={styles.descriptionP}>
           עם ניסיון של מעל 8 שנים בתחום והכשרות מהמאסטריות הגדולות בחו׳׳ל, כל טיפול מותאם אלייך אישית - מהבחירה של הגוון המושלם ועד לסוג השיטה.
            </p>

            <div className={styles.glassContainer}>
              <p className={styles.description}>
               
                גם אם פוחדת ממחטים ורגישה לכאב - תקבלי טיפול עדין ומדויק שנעשה בהתאם לצורת הפנים שלך, לסוג העור שלך, לסגנון החיים שלך ולמה שמתאים לך באמת.
            
              </p>
            </div>

            <button onClick={handleButtonClick} className={styles.ctaButton}>
              אלבנה אני רוצה שנדבר!
            </button>
          </div>

          <div className={styles.imageWrapper} ref={imageRef}>
            <img
              src={inbar}
              alt="אלבנה פטרובה"
              className={styles.image}
            />
          </div>
        </div>
      </section>
      
      {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
    </>
  );
};

export default HeroSection;