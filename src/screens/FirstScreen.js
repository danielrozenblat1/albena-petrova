import React, { useState, useEffect } from 'react';


import styles from './FirstScreen.module.css';

import middleImage from "../images/אלבנה פטרובה תדמית מרכזית.png";
import rightImage from "../images/אלבנה פטרובה תדמית ימין.png"
import leftImage from "../images/אלבנה פטרובה תדמית שמאל.png"
import Loader from '../components/loader/Loader';
const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <Loader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>ALBENA PETROVA</h1>
  
        <div className={styles.buttonContainer}>
        {/* <PinkScrollButton text="אני רוצה ללמוד את התחום" icon={learn} to="קורס"/>
        <PinkScrollButton text="אני רוצה לקבוע טיפול" icon={lashes} to="טיפולים"/> */}
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;