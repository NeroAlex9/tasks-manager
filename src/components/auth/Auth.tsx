import { Route, Routes } from "react-router-dom";
import Form from "../form/Form";
import styles from "./auth.module.scss";

interface IAuth {
  formName: string;
  textButton: string;
  textLink: string;
}

const Auth: React.FC<IAuth> = ({ formName, textButton, textLink }) => {
  return (
    <div className={styles.auth}>
      <Routes>
        <Route
          path="/"
          element={
            <Form
              formName={formName}
              textButton={textButton}
              textLink={textLink}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Auth;
