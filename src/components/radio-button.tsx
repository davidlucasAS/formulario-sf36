import React from "react";

interface IRadioButton extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  id: string | undefined;
}

const RadioButton = React.forwardRef<HTMLInputElement, IRadioButton>(
  ({ title, name, id, ...rest }, ref) => {
    return (
      <div className="flex items-center pl-3">
        <input
          id={id}
          type="radio"
          name={name}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          {...rest}
          ref={ref}
        />
        <label
          htmlFor={id}
          className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {title}
        </label>
      </div>
    );
  }
);

RadioButton.displayName = "RadioButton";

export default RadioButton;
