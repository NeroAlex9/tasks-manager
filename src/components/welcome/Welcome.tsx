import React from "react";
import styles from "./welcome.module.scss";

export const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.welcome__text}>
        <span className={styles.welcome__text__span}>Менеджер </span>задач
      </h1>
      <div className={styles.welcome__subText}>
          Войди или зарегистрируйся
      </div>
    </div>
  );
};
