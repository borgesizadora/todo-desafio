import styles from "./Header.module.css";
import logo from "../assets/todo-logo.svg";

export const Header = () => {
  return (
    <div className={styles.Header}>
      <img src={logo} alt="logotipo Rocketseat todo" />
    </div>
  );
};
