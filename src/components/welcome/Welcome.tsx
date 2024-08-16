import React from "react";
import styles from "./welcome.module.scss";

export const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.welcome__text}>
        <span className={styles.welcome__text__span}>Менеджер </span>задач
      </h1>
      <div className={styles.welcome__subText}>
        <svg
          width="48"
          height="28"
          viewBox="0 0 48 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 14H48M4 14L16.0548 2M4 14L16.0548 26"
            stroke="#051021"
            stroke-width="5"
          />
        </svg>
        <p className={styles.welcome__subText__text}>
          Войди или зарегистрируйся
        </p>
      </div>
    </div>
  );
};
