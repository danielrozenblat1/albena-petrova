import styles from "./ThirdScreen.module.css"
import { BenefitsContainer } from "../components/benefitsHistalmut/BenefitHishtalmut"
import AboutSection from "../components/me/Me"

import certificates from "../images/אלבנה הכשרות.png"
import Works from "../components/recommends/Works"
import RecommendsScreen from "../components/RecommendsScreen/RecommendsScreen"
import Button from "../components/button/Button"
import Steps from "../components/steps/Steps"
import IconTextComponent from "../components/can/Can"
import check from "../icons/doodle-outline-477-approved-checked-hover-pinch.json"
import Shorts from "../components/shorts/Shorts"

const ThirdScreen=()=><>

    <div className={styles.background}>
        <div className={styles.title}>דמייני לעצמך את החיים האלה:</div>
     <div className={styles.description}>
  את קמה בבוקר, נעמדת מול המראה,  
  <span className={styles.highlight}>  ולא מרגישה צורך לגעת בכלום</span>.  
  הגבות שלך כבר מסודרות, מאוזנות, עדינות, והפנים שלך נראות רעננות יותר.  
  לא צריך לתקן, לא להסתיר, לא להשוות בין הצדדים.  
  את נראית מתוקתקת, צעירה יותר, טבעית.  
  והכי חשוב? את 
  <span className={styles.highlight}> מרגישה שלמה עם עצמך</span>.  
</div>
<div className={styles.description}>
  את ממשיכה את היום שלך בלי לבדוק את המראה כל רגע.  
  פגישות, עבודה, סידורים, אפילו אחרי אימון – 
  <span className={styles.highlight}> הכל נשאר במקום! </span>
  את חופשייה להתרכז במה שחשוב לך, לא באיך שאת נראית.  
</div>

        <div className={styles.title}>כי בעזרת איפור קבוע</div>
     
        <div className={styles.row}>
        <IconTextComponent icon={check} text="את תוכלי לתקן חוסר סימטרייה וכל בעיה הכי קטנה שיש לך בגבות"/>
               <IconTextComponent 
    icon={check} 
    text="אפשר ליצור איזון בגוון השפתיים ולהתחיל להפרד מהאודם שלך." 
  />
                  
<IconTextComponent 
  icon={check} 
  text="תוכלי למלא אזורים דלילים בגבות ולהפסיק להתעסק במילוי יומיומי." 
/>
        </div>
       <div className={styles.row}>
        <IconTextComponent icon={check} text="אפשר לכסות ולתקן איפור קבוע ישן או דהוי"/>
 <IconTextComponent 
  icon={check} 
  text="תוכלי להפסיק לחשוש מגשם, זיעה או לחות שימחקו לך את האיפור" 
/>

        </div>
   
           <div className={styles.description}>ומהסיבה שלכל אחת יש סוג עור שונה,גיל שונה וצרכים שונים   <span className={styles.highlight}> כל טיפול אצלי מותאם ספציפית אלייך! </span></div>


        <div className={styles.title}>והתהליך איתי עובד בצורה הבאה:</div>
        <Steps />
 <div className={styles.title}>התוצאה?</div>
        <Shorts/>
         <div style={{paddingBottom:"20px"}}> <Button text="אלבנה, אני רוצה שנדבר!"/></div>

    </div>

</>
export default ThirdScreen
