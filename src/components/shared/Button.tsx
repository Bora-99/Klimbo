interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.JSX.Element;
  types?: "primary" | "secondary";
}

export const Button = (props: IButtonProps) => {
  const { children, types } = props;

  return (
    <button className={types} {...props}>
      {children}
    </button>
  );
};
