import { useNavigate } from "react-router-dom";
import styles from "./Jump.module.css";

interface ButtonProps {
  children: string;
  path: string;
}

const Jump = ({ children, path }: ButtonProps) => {
  const navigate = useNavigate();
  const jump = () => {
    navigate(path);
  };

  return (
    <button type="button" className={styles.btn} onClick={jump}>
      {children}
    </button>
  );
};

export default Jump;
