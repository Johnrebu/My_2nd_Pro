import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.aboutSection}>
      <img
        src="/images/Rectangle34.png"
        alt="Background"
        className={styles.background}
      />

      {/* Logo */}
      <div className={styles.logoWrapper}>
        <img
          src="/images/aionionsym.png"
          alt="Aionion Logo"
          className={styles.logo}
        />
        <img
          src="/images/centreoflogo.png"
          alt="Center Logo"
          className={styles.centerLogo}
        />
      </div>

      {/* Social Icons */}
      <div className={styles.socialIcons}>
        <img src="/images/fb.png" alt="Facebook" />
        <img src="/images/twitter.png" alt="Twitter" />
        <img src="/images/youtube.png" alt="YouTube" />
        <img src="/images/insta.png" alt="Instagram" />
      </div>

      {/* Info Columns */}
      <div className={styles.columns}>
        {/* Column 1 - Markets */}
        <div className={styles.column}>
          <img src="/images/market.png" alt="Market" />
          <img src="/images/popular.png" alt="Popular" />
          <img src="/images/popular.png" alt="Popular" />
          <img src="/images/popular.png" alt="Popular" />
          <img src="/images/popular.png" alt="Popular" />
        </div>

        {/* Column 2 - Account Types */}
        <div className={styles.column}>
          <img src="/images/account.png" alt="Account" />
          <img src="/images/demo.png" alt="Demo" />
          <img src="/images/standard.png" alt="Standard" />
          <img src="/images/ecn.png" alt="ECN" />
          <img src="/images/islam.png" alt="Islam" />
        </div>

        {/* Column 3 - Platforms */}
        <div className={styles.column}>
          <img src="/images/plat.png" alt="Platform" />
          <img src="/images/demo.png" alt="Demo" />
          <img src="/images/standard.png" alt="Standard" />
          <img src="/images/ecn.png" alt="ECN" />
          <img src="/images/islam.png" alt="Islam" />
        </div>

        {/* Column 4 - Trade */}
        <div className={styles.column}>
          <img src="/images/trade.png" alt="Trade" />
          <img src="/images/demo.png" alt="Demo" />
          <img src="/images/standard.png" alt="Standard" />
          <img src="/images/ecn.png" alt="ECN" />
          <img src="/images/islam.png" alt="Islam" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
