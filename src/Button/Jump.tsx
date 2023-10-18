import { useNavigate } from "react-router-dom";
import styles from "./Jump.module.css";

interface ButtonProps {
  children: string;
  path: string;
}

const Button = ({ children, path }: ButtonProps) => {
  const navigate = useNavigate();
  const jump = () => {
    navigate(path);
  };

  return (
    <button type="button" className={styles.lineSpace} onClick={jump}>
      {children}
    </button>
  );
};

export default Button;
