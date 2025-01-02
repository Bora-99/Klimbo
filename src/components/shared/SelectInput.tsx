import { ChevronDownIcon } from "@heroicons/react/16/solid";
import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: Array<{ value: string; label: string }>;
}

export default function SelectInput(props: SelectProps) {
  const { label, id, options, ...rest } = props;

  return (
    <div className="mt-2 grid grid-cols-1">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm/6 font-medium text-gray-900 text-left"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        name={id}
        autoComplete="country-name"
        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        aria-hidden="true"
        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
      />
    </div>
  );
}
