interface ITextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id: string;
}

export const TextArea: React.FC<ITextAreaProps> = ({ label, id, ...rest }) => {
  return (
    <div className="col-span-full">
      {label && (
        <label
          htmlFor={label}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <textarea
          id={id}
          name={id}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          {...rest}
        />
      </div>
    </div>
  );
};
