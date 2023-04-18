import { FC, useState } from "react";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Dropdown: FC<any> = (props) => {
  const { id, label, input, placeholder, data }: any = props;
  const { value, onChange, type, name } = input;

  const [isActive, setIsActive] = useState(false);

  function handleChildClick(element: string) {
    onChange(element);
  }

  const childList = data.map((element: any, key: number) => {
    return (
      <p key={key} className="px-4 py-2 hover:bg-indigo-100 cursor-pointer" onClick={() => handleChildClick(element.dept_name)}>
        {element.dept_name}
      </p>
    );
  });

  const focusConfig = "focus:ring-1 focus:ring-inset focus:ring-indigo-600";

  return (
    <>
      <div onClick={(e) => setIsActive(!isActive)} className="mt-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-2 flex justify-between items-center box-border relative p-2 py-1.5 rounded-md ring-1 ring-inset ring-gray-300 cursor-pointer shadow-sm">
          {isActive ? (
            <>
              <p>{value}</p>
              <KeyboardArrowUpIcon />
            </>
          ) : (
            <>
              <p>{value}</p>
              <KeyboardArrowDownIcon />
            </>
          )}
        </div>
        {isActive && <ChildList>{childList}</ChildList>}
      </div>
    </>
  );
}

const ChildList = ({ children }: any) => {
  return (
    <div className="mt-1 flex flex-col absolute z-10 bg-white w-1/3 max-w-md h-1/6 overflow-y-scroll rounded-md shadow-lg">
      {children}
    </div>
  );
}