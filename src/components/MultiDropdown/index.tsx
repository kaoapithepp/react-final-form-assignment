import { useState } from "react";
import useViewModel from "./viewModel";
import { includes, without, concat } from "lodash";
import { cx, css } from "@emotion/css";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";

type MultiDropdownProps = {
  name: string;
  label: string;
  data: any[];
};

export const MultiDropdown = ({ name, data, label }: MultiDropdownProps) => {
  const { value, onChange } = useViewModel(name);

  const [isActive, setIsActive] = useState(false);

  function handleChildClick(name: any) {
    if (includes(value, name)) {
      onChange(without(value, name));
    } else {
      onChange([...value, name]);
    }
  }

  return (
    <div className="my-2">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div onClick={(e) => setIsActive(!isActive)}>
        <div className="mt-2 h-10 flex justify-between items-center box-border relative p-2 py-1.5 rounded-md ring-1 ring-inset ring-gray-300 cursor-pointer shadow-sm">
          <>
            <Tag>{value}</Tag>
            {isActive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </>
        </div>
      </div>
      {isActive && (
        <div className="mt-1 flex flex-col absolute z-10 bg-white w-2/3 max-w-md h-1/6 overflow-y-scroll rounded-md shadow-lg">
          {data.map((element: any, key: number) => {
            return (
              <div
                key={key}
                className={cx(
                  "p-4 flex gap-2 h-10 items-center hover:bg-amber-600 hover:bg-opacity-50 hover:text-white cursor-pointer",
                  includes(value, element.name) ? "bg-amber-600 text-white" : ""
                )}
                onClick={() => handleChildClick(element.name)}
              >
                <p className="flex items-center gap-1">
                  {element.name}{" "}
                  {includes(value, element.name) && (
                    <CheckIcon className="w-1 h-1" />
                  )}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Tag = ({ children }: any) => {
  return (
    <div className="flex gap-1">
      {children.map((element: any, key: number) => {
        return (
          <p
            key={key}
            className="bg-amber-600 text-white px-2 py-1 rounded-full"
          >
            {element}
          </p>
        );
      })}
    </div>
  );
};
