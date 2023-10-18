interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type="button" className="btn btn-secondary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
