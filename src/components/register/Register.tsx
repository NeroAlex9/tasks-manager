import Form from "../form/Form";
import styles from "./register.module.scss";

interface IRegister {
  formName: string;
  textButton: string;
  textLink: string;
}

const Register: React.FC<IRegister> = ({ formName, textButton, textLink }) => {
  return (
    <div className={styles.auth}>
     
            <Form
              formName={formName}
              textButton={textButton}
              textLink={textLink}
            />
      
    </div>
  );
};

export default Register;
