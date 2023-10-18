import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  // 输入框内的默认提示信息
  tips: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ tips, onInput }: InputProps) => {
  return (
    <input
      className={styles.menuInput}
      type="text"
      placeholder={tips}
      onChange={onInput}
    ></input>
  );
};

export default Input;
