import { Options } from "types";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";
import { useState } from "react";
type SelectProps = {
  options?: Options[];
  value?: Options;
  onChange?: (o: Options) => void;
};
export const Select = ({ options = [], value, onChange }: SelectProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleChange = (target: Options) => {
    onChange && onChange(target);
    handleOpen();
  };
  return (
    <div className="flex-auto flex flex-col items-center relative">
      <div className="flex flex-col items-center  h-8 w-full">
        <div className="w-full">
          <div className=" bg-white p-1 flex border border-gray-200 rounded h-8">
            <input
              value={String(value?.label || "")}
              readOnly
              className="p-1 px-2 appearance-none outline-none w-full title"
            />
            <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-20">
              <IoIosArrowDown
                className=" cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none icon"
                onClick={handleOpen}
              />
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="select-menu-list">
          {options.map((option) => (
            <div
              key={option.value}
              className="cursor-pointer w-full  rounded p-1 h-8 title hover:text-white  bg-white  border-b hover:bg-gray-400 "
              onClick={() => handleChange(option)}
            >
              <div className="flex w-full items-center pl-2 border-transparent border-l-2 relative ">
                <div className="w-full items-center flex">
                  <div className="mx-2 leading-6  ">{option?.label} </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
