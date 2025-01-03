interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

export const Input: React.FC<IInputProps> = (props) => {
  const { label, id, ...rest } = props;
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm/6 font-medium text-gray-900 text-left"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          name={id}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          {...rest}
        />
      </div>
    </div>
  );
};
