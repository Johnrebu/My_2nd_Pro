import React from "react";
import styles from "./Footer2.module.css";
import backgroundFooter from "/images/backroundfooter.png";
import copyrightImg from "/images/Copyright.png";

const Footer2 = () => {
  return (
    <div
      className={styles.footerContainer}
      style={{ backgroundImage: `url(${backgroundFooter})` }}
    >
      <div className={styles.contentWrapper}>
        <img
          src={copyrightImg}
          alt="Copyright"
          className={styles.copyrightImage}
        />
      </div>
    </div>
  );
};

export default Footer2;
