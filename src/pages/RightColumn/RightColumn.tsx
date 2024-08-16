import React from "react";
import styles from "./RightColumn.module.scss";
import { Welcome } from "../../components/welcome/Welcome";
import Tasks from "../tasks/Tasks";

function RightColumn() {
  return (
    <div className={styles.column}>
      {/* <Welcome /> */}
      <Tasks />
    </div>
  );
}
export default RightColumn;
