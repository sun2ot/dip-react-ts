interface AlertProps {
  children: string;
  state: "success" | "danger" | "warning" | "primary";
  onClose: () => void;
}

const Alert = ({ children, state, onClose }: AlertProps) => {
  return (
    <div className={["alert alert-" + state, "alert-dismissible"].join(" ")}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

const alertWord = {
  success: "牛的",
  danger: "寄",
  warning: "有东西没选，瞎？",
  primary: "",
};

export default Alert;
export type { AlertProps };
export { alertWord };
