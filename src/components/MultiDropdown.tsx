import { FC, useEffect, useState } from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const MultiDropdown: FC<any> = ({ input, data, label }) => {
  const { value, onChange } = input;

  const [isActive, setIsActive] = useState(false);
  const [tags, setTags] = useState<any[]>([]);

  function handleChildClick(element: any) {
    setTags([...tags, element]);
    onChange([...value, element]);
  }

  const childList = data.map((element: any, key: number) => {
    return (
      <div
        key={key}
        className="px-4 py-2 flex gap-2 items-center hover:bg-amber-600 hover:bg-opacity-50 cursor-pointer"
        onClick={() => handleChildClick(element.name)}
      >
        <div className={element.style} />
        <p>{element.name}</p>
      </div>
    );
  });

  return (
    <div className="my-2">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div onClick={(e) => setIsActive(!isActive)}>
        <div className="mt-2 flex justify-between items-center box-border relative p-2 py-1.5 rounded-md ring-1 ring-inset ring-gray-300 cursor-pointer shadow-sm">
          {isActive ? (
            <>
              <Tag>{tags}</Tag>
              <KeyboardArrowUpIcon />
            </>
          ) : (
            <>
              <Tag>{tags}</Tag>
              <KeyboardArrowDownIcon />
            </>
          )}
        </div>
      </div>
      {isActive && <ChildList>{childList}</ChildList>}
    </div>
  );
};

const ChildList = ({ children }: any) => {
  return (
    <div className="mt-1 flex flex-col absolute z-10 bg-white w-2/3 max-w-md h-1/6 overflow-y-scroll rounded-md shadow-lg">
      {children}
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
