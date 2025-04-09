import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.overlay}>
        <img src="/images/back2.png" alt="Overlay" className={styles.back2} />
        <div className={styles.textBlock}>
          <img
            src="/images/title.png"
            alt="Title"
            className={styles.titleImage}
          />
          <img
            src="/images/capital.png"
            alt="Capital"
            className={styles.capitalImage}
          />
          <img
            src="/images/description.png"
            alt="Description"
            className={styles.descriptionImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
