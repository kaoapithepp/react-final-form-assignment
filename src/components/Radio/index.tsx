import { find } from "lodash"

import useViewModel from "./viewModel";

type Options = {
  label: string;
  value: string;
};

type InputRadioProps = {
  name: string;
  label: string;
  options: Options[];
};

export const InputRadio = ({ name, label, options }: InputRadioProps) => {
  const { value, onChange, type } = useViewModel(name, "radio");

  return (
    <div className="my-4">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {options.map((position: Options, key: number) => {
          return (
            <div key={key} className="flex items-center">
              <input
                type={type}
                name={name}
                value={position.value}
                checked={position.value === value}
                onChange={onChange}
                className="radio-input"
              />
              <label
                htmlFor={position.value}
                className="ml-2 block text-sm font-medium leading-6 text-gray-900"
              >
                {position.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
