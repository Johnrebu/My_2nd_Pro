import React from "react";
import styles from "./Team.module.css";

const Team = () => {
  return (
    <div className={styles.teamSection}>
      <img src="/images/team.png" alt="Background" className={styles.bg} />

      <div className={styles.content}>
        <h2 className={styles.title}>
          MEET THE PEOPLE{" "}
          <span className={styles.highlight}>BEHIND AIONION CAPITAL</span>
        </h2>

        <img
          src="/images/details.png"
          alt="Details"
          className={styles.details}
        />

        <div className={styles.cards}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.imageCircle}></div>
              <div className={styles.textBlock}>
                <h3 className={styles.name}>Anish Gupta</h3>
                <p className={styles.role}>Director</p>
                <p className={styles.desc}>
                  Our platform offers a robust suite of investor-focused
                  features, helping you make data-driven decisions effortlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.imageCircle}></div>
              <div className={styles.textBlock}>
                <h3 className={styles.name}>Anish Gupta</h3>
                <p className={styles.role}>Director</p>
                <p className={styles.desc}>
                  Our platform offers a robust suite of investor-focused
                  features, helping you make data-driven decisions effortlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.imageCircle}></div>
              <div className={styles.textBlock}>
                <h3 className={styles.name}>Anish Gupta</h3>
                <p className={styles.role}>Director</p>
                <p className={styles.desc}>
                  Our platform offers a robust suite of investor-focused
                  features, helping you make data-driven decisions effortlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.imageCircle}></div>
              <div className={styles.textBlock}>
                <h3 className={styles.name}>Anish Gupta</h3>
                <p className={styles.role}>Director</p>
                <p className={styles.desc}>
                  Our platform offers a robust suite of investor-focused 
                  features, helping you make data-driven decisions effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
