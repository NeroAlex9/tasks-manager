import React from "react";
import styles from "./RightColumn.module.scss";
import { Welcome } from "../../components/welcome/Welcome";

function RightColumn() {
  return (
    <div className={styles.column}>
      <Welcome />
    </div>
  );
}
export default RightColumn;
