import React from "react";

interface IRadioButton extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
}

const RadioButton = React.forwardRef<HTMLInputElement, IRadioButton>(
  ({ title, name, ...rest }, ref) => {
    return (
      <div className="flex items-center pl-3">
        <input
          id="list-radio-license"
          type="radio"
          value=""
          name={name}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          {...rest}
          ref={ref}
        />
        <label
          htmlFor="list-radio-license"
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
