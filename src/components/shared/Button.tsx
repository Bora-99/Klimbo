interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.JSX.Element;
  types?: "primary" | "secondary";
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, types } = props;

  return (
    <button className={types} {...props}>
      {children}
    </button>
  );
};
