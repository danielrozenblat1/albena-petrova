import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Me.module.css';
import albena from "../../images/אלבנה פטרובה תדמית ימין.png"

const AboutSection = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    // הגדרת ScrollReveal
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 200,
      reset: false,
      easing: 'ease-out'
    });

    // אפקטים שונים לאלמנטים שונים
    sr.reveal(`.${styles.nameSection}`, {
      origin: 'right',
      distance: '80px',
      duration: 1200,
      delay: 100
    });

    sr.reveal(`.${styles.professionalTitle}`, {
      origin: 'right',
      distance: '60px',
      duration: 1000,
      delay: 300
    });

    sr.reveal(`.${styles.quoteCard}`, {
      origin: 'left',
      distance: '80px',
      duration: 1200,
      delay: 400,
      scale: 0.9
    });

    sr.reveal(`.${styles.storyParagraph}`, {
      origin: 'bottom',
      distance: '40px',
      duration: 1000,
      delay: 600
    });

    sr.reveal(`.${styles.highlightBox}`, {
      origin: 'bottom',
      distance: '50px',
      duration: 1200,
      delay: 700,
      scale: 0.95
    });

    sr.reveal(`.${styles.whatsappButton}`, {
      origin: 'bottom',
      distance: '30px',
      duration: 800,
      delay: 900
    });

    sr.reveal(`.${styles.imageContainer}`, {
      origin: 'left',
      distance: '100px',
      duration: 1300,
      delay: 200
    });



    sr.reveal(`.${styles.decorativeElement1}`, {
      origin: 'top',
      distance: '60px',
      duration: 1500,
      delay: 100,
      opacity: 0.8
    });

    sr.reveal(`.${styles.decorativeElement2}`, {
      origin: 'bottom',
      distance: '60px',
      duration: 1500,
      delay: 200,
      opacity: 0.8
    });

    const animateNumbers = () => {
      const statNumbers = document.querySelectorAll(`.${styles.statNumber}`);
      
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateNumber = () => {
          if (current < target) {
            current += increment;
            stat.textContent = Math.ceil(current);
            setTimeout(updateNumber, 20);
          } else {
            // הצגת המספר הסופי עם הסימנים המתאימים
            if (target === 10) {
              stat.textContent = '10+';
            } else if (target === 500) {
              stat.textContent = '500+';
            } else if (target === 100) {
              stat.textContent = '100%';
            }
          }
        };
        
        updateNumber();
      });
    };

    // התחלת אנימציית המספרים לאחר שהאלמנטים נכנסו
    const timer = setTimeout(animateNumbers, 1500);
    
    // ניקוי
    return () => {
      clearTimeout(timer);
      sr.destroy();
    };
  }, []);

  return (
    <section className={styles.aboutContainer}>
      {/* אלמנטים דקורטיביים */}
      <div className={styles.decorativeElement1}></div>
      <div className={styles.decorativeElement2}></div>
      
      <div className={styles.aboutContent}>
        {/* תוכן בצד ימין */}
        <div className={styles.contentSide}>
          <div className={styles.nameSection}>
            <div className={styles.nameWrapper}>
              <h1 className={styles.nameTitle}>נעים מאוד, אלבנה פטרובה</h1>
         
            </div>
            <p className={styles.professionalTitle}>מאסטרית לאיפור קבוע לגבות ולשפתיים</p>
          </div>

          <div className={styles.quoteCard}>
            <div className={styles.quoteMark}></div>
            <blockquote className={styles.quote}>
              אני כאן כדי לעזור לנשים להיות בגרסה הכי טובה שלהן, להראות כמו שהן תמיד חלמו מול המראה ושלמות עם עצמן
            </blockquote>
         
          </div>

          <div className={styles.storySection}>
            <div className={styles.contentCard}>
              <p className={styles.storyParagraph}>
                ציור ואומנות תמיד היו חלק ממני והתשוקה שלי לדיוק הובילה אותי ללמוד בבית ספר לאומנות. כשנחשפתי לתחום האיפור הקבוע ישר הבנתי שאני חייבת ללמוד אותו ולהתעסק בו וכשנרשמתי ללמוד את התחום, הרגשתי שמצאתי את המקום שלי! מאז, במשך כמעט עשור, למדתי רק אצל מאסטריות בחו"ל את כל הדרכים להוציא אישה מושלמת ממיטת הטיפולים שלי ועזרתי למאות נשים לצאת עם גבות והשפתיים שהן תמיד חלמו עליהן! לא מוגזם, לא מצויר, אלא טבעי, רך ונקי.
              </p>

              <div className={styles.highlightBox}>
                <p className={styles.highlightText}>
                  לפני כל טיפול אני בודקת את סוג העור שלך, את מבנה הפנים, ואת סגנון החיים שלך ומציעה בדיוק את מה שיתאים ספציפית אלייך כי המטרה שלי היא שתקומי כל בוקר, תסתכלי במראה, ותחייכי בשקט ובביטחון כי את יודעת שאת נראית כמו הגרסה הכי יפה של עצמך!
                </p>
              </div>

            <div className={styles.ctaSection}>

              <a 
                href="https://wa.me/972533245003?text=היי%20אלבנה%2C%20ראיתי%20את%20הדף%20שלך%20וממש%20מסקרן%20אותי%20לשמוע%20עוד%20על%20עיצוב%20גבות%20באיפור%20קבוע"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                <span className={styles.buttonIcon}>💬</span>
                לחצי כאן לשיחת ייעוץ ללא עלות
              </a>
            </div>
            </div>

          </div>
        </div>

        {/* תמונה וגרפיקה בצד שמאל */}
        <div className={styles.visualSide}>
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <div className={styles.profileImage}>
                <img 
                  src={albena} 
                  alt="אלבנה פטרובה - מומחית איפור קבוע ואומנית גבות" 
                  className={styles.image}
                />
              </div>
              <div className={styles.imageOverlay}></div>
            </div>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber} data-target="10">0</div>
              <div className={styles.statLabel}>שנות ניסיון</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber} data-target="500">0</div>
              <div className={styles.statLabel}>לקוחות מרוצות</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber} data-target="100">0</div>
              <div className={styles.statLabel}> איכות מובטחת</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;