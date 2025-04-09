import React from "react";
import styles from "./Approach.module.css";

const Approach = () => {
  return (
    <div className={styles.approachSection}>
      <img
        src="/images/Rectangle46.png"
        alt="Background"
        className={styles.bg}
      />

      <div className={styles.content}>
        <img
          src="/images/our appr.png"
          alt="Our Approach"
          className={styles.title}
        />
        <img
          src="/images/Lorem.png"
          alt="Description"
          className={styles.lorem}
        />

        <div className={styles.cards}>
          {/* Card 1 */}
          <div className={styles.card}>
            <img
              src="/images/Ellipse24.png"
              alt="Circle Background"
              className={styles.ellipse}
            />
            <img
              src="/images/business.png"
              alt="Business Icon"
              className={`${styles.icon} ${styles.businessIcon}`}
            />
            <img
              src="/images/Trans.png"
              alt="Trans"
              className={styles.cardTitle}
            />
            <img
              src="/images/Weensure.png"
              alt="Description"
              className={styles.cardText}
            />
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <img
              src="/images/Ellipse24.png"
              alt="Circle Background"
              className={styles.ellipse}
            />
            <img
              src="/images/raisehand.png"
              alt="Raise Hand Icon"
              className={`${styles.icon} ${styles.raisehandIcon}`}
            />
            <img
              src="/images/Empower.png"
              alt="Empower"
              className={styles.cardTitle}
            />
            <img
              src="/images/our.png"
              alt="Description"
              className={styles.cardText}
            />
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <img
              src="/images/Ellipse24.png"
              alt="Circle Background"
              className={styles.ellipse}
            />
            <img
              src="/images/world.png"
              alt="World Icon"
              className={`${styles.icon} ${styles.worldIcon}`}
            />
            <img
              src="/images/Aworld.png"
              alt="A World"
              className={styles.cardTitle}
            />
            <img
              src="/images/Weenvision.png"
              alt="Description"
              className={styles.cardText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
