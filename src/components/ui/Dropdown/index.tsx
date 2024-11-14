"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface PropType {
  width?: string;
  selected: DropDownDefault | null;
  data: DropDownDefault[];
  handleSelect: (data: string) => void;
  labelText?: string;
}

export interface DropDownDefault {
  label: string;
  value: string;
  img?: string;
}

const Dropdown: React.FC<PropType> = (props) => {
  const { selected, data, handleSelect, labelText = "" } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOption = (value: string) => {
    handleSelect(value);
    setIsOpen(false);
  };

  const isNodeType = (eTarget: EventTarget): eTarget is Node =>
    "nodeType" in eTarget;

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      event.target &&
      isNodeType(event.target) &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {labelText && <p className="mb-0.5">{labelText}</p>}
      <div
        className={`relative min-w-64 ${props.width || ""}`}
        ref={dropdownRef}
      >
        <div
          className="flex items-center justify-between p-2 border border-sky-600 rounded-lg cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected && (
            <div className="flex items-center">
              {selected.img && (
                <Image
                  width={24}
                  height={24}
                  src={selected.img}
                  alt={selected.label}
                  style={{ height: "auto", width: "auto" }}
                />
              )}
              <span className="ml-2">{selected.label}</span>
            </div>
          )}
          <span className={`ml-2 ${isOpen ? "rotate-180" : ""}`}>▼</span>
        </div>
        {isOpen && (
          <ul className="absolute dark:bg-page-dark bg-white z-10 w-full mt-1 border border-sky-600 rounded-lg shadow-lg max-h-60 overflow-auto flex flex-col gap-2 p-2">
            {data.map((el, idx) => (
              <li
                key={`${el.label}-${idx}`}
                className="flex items-center p-2 hover:dark:bg-slate-500 hover:bg-sky-100 cursor-pointer rounded-2xl"
                onClick={() => handleClickOption(el.value)}
              >
                {el.img && (
                  <Image width={24} height={24} src={el.img} alt={el.label} />
                )}
                <span className="ml-2">{el.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;
