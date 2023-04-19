import React from "react";

// interfaces
import { InputProps } from "../interfaces/InputProps";

export const InputRadio: React.FC<InputProps> = ({ input, data, label }) => {
  const { value, onChange, type, name } = input;
  const positions = data;

  return (
    <div className="my-4">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {positions.map(
          (position: { id: string; name: string }, key: number) => {
            return (
              <div key={key} className="flex items-center mt-2">
                <input
                  type="radio"
                  name={name}
                  className="radio-input"
                  value={position.id}
                  onChange={onChange}
                />
                <label
                  htmlFor={position.id}
                  className="ml-2 block text-sm font-medium leading-6 text-gray-900"
                >
                  {position.name}
                </label>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
