import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.heroHeader}>
      <img src="/images/s.png" alt="Logo" className={styles.logo} />
      <img src="/images/h.png" alt="Menu" className={styles.navMenu} />
      <div className={styles.btns}>
        <img
          src="/images/o.png"
          alt="Open Demat"
          className={styles.opendemat}
        />
        <img src="/images/l.png" alt="Login" className={styles.loginTop} />
      </div>
    </div>
  );
};

export default Header;
