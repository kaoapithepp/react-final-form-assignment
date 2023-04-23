import { useState } from "react";
import { find } from "lodash";

import useViewModel from "./viewModel";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Options = {
  label: string,
  value: string
}

type DropdownProps = {
  name: string;
  label: string;
  options: Options[];
};

export const Dropdown = ({ name, label, options }: DropdownProps) => {
  const { value, handleChildClick } = useViewModel(name);

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="my-2">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div onClick={(e) => setIsActive(!isActive)}>
        <div className="mt-2 flex justify-between items-center box-border relative p-2 py-1.5 rounded-md ring-1 ring-inset ring-gray-300 cursor-pointer shadow-sm">
          <>
            <p>{find(options, ['value', value])?.label}</p>
            {isActive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </>
        </div>
        {isActive && (
          <div className="mt-1 flex flex-col absolute z-10 bg-white w-2/3 max-w-md h-1/6 overflow-y-scroll rounded-md shadow-lg">
            {options.map((element: Options, key: number) => {
              return (
                <p
                  key={key}
                  className="px-4 py-2 hover:bg-amber-600 hover:bg-opacity-50 hover:text-white cursor-pointer"
                  onClick={() => handleChildClick(element.value)}
                >
                  {element.label}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
