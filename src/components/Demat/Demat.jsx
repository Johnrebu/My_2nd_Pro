import React from "react";
import styles from "./demat.module.css";

const Demat = () => {
  return (
    <div className={styles.dematSection}>
      {/* Left Side */}
      <div className={styles.left}>
        <img src="/images/Mob.back.png" alt="Mobile" className={styles.mob} />
      </div>

      {/* Right Side */}
      <div className={styles.right}>
        <img
          src="/images/Rec47.png"
          alt="Background Right"
          className={styles.rec47}
        />
        <div className={styles.overlayBox}>
          <img
            src="/images/Rec48.png"
            alt="Overlay Card"
            className={styles.rec48}
          />
          <div className={styles.content}>
            <img
              src="/images/get.png"
              alt="Get Started"
              className={styles.get}
            />
            <img
              src="/images/Dematacc.png"
              alt="Demat Account"
              className={styles.dematTitle}
            />
            <img
              src="/images/Ourplat.png"
              alt="Platform Description"
              className={styles.description}
            />
            <img
              src="/images/know.png"
              alt="Know More Button"
              className={styles.button}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demat;
