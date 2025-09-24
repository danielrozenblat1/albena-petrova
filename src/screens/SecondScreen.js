import { BenefitsContainer } from "../components/benefitsHistalmut/BenefitHishtalmut"
import AboutSection from "../components/me/Me"
import styles from "./SecondScreen.module.css"
import certificates from "../images/אלבנה הכשרות.png"
import Works from "../components/recommends/Works"
import RecommendsScreen from "../components/RecommendsScreen/RecommendsScreen"
import Button from "../components/button/Button"

const SecondScreen=()=>{

    return <>
    {/* <div className={styles.title}>אני יודעת בדיוק למה את כאן</div>
   
 */}

    <div className={styles.title}>את מכירה את התחושה הזו, נכון?</div>
      <div className={styles.description}>את קמה בבוקר, נעמדת מול המראה.. הגבות שוב לא שוות, השפתיים חיוורות, הגבולים לא ברורים..</div>
      <div className={styles.description}>את שולפת את העיפרון, את התוחם, מנסה "לסדר" ומבזבזת זמן יקר כל בוקר מחדש על תיקונים והשלמות</div>
      <div className={styles.description}>
  היום ממשיך ואת תופסת את עצמך בודקת את ההשתקפות בכל חלון או מראה.  
  אחרי אימון, גשם, חום או אפילו שתייה מכוסות - האיפור והאודם מתחילים להימרח..</div>
      <div className={styles.title}>וזה פשוט לא חייב להיות ככה</div>
         <div className={styles.description}>את יכולה לקום כל בוקר מחדש כשאת..</div>
             <BenefitsContainer/>
               {/* <div className={styles.title}>ואני יכולה להביא אותך לשם..</div> */}
                    <div className={styles.description}>אבל רגע לפני שנרחיב על הדרך לשם..</div>
                      <AboutSection/>
                       <div className={styles.title}>עברתי עשרות הכשרות <span className={styles.specialUnderline}>ברחבי העולם</span></div>
                       <div className={styles.imageContainer}><img className={styles.image} src={certificates}/></div>
                        <div className={styles.title}>והוצאתי מאות נשים עם הגבות והשפתיים שהן תמיד חלמו עליהן</div>
                        <Works/>
                        <RecommendsScreen/>
                        <Button text="אלבנה, בואי נדבר!"/>
                   
    </>
}
export default SecondScreen