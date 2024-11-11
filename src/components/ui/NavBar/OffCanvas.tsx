"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import XIcon from "/Images/nav/close.svg";
import DarkIcon from "/Images/nav/moon.svg";
import LightIcon from "/Images/nav/sun.svg";

type PropType = {
  isOpen: boolean;
  onClose: () => void;
};

export default function OffCanvas({ isOpen, onClose }: PropType) {
  const { theme, setTheme } = useTheme();

  console.log("THEME", theme);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-700 opacity-50"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed inset-y-0 right-0 z-10 w-64 bg-white dark:bg-navbar-dark shadow transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-2">
          <li
            onClick={onClose}
            className="flex items-center flex-row-reverse pt-2 px-3 dark:text-white"
          >
            <XIcon width={16} height={16} />
          </li>
          <li className="border-b dark:border-gray-500 mt-3 mx-3" />
          <li className="px-3">
            <label className="items-center cursor-pointer py-2 inline-block">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={theme === "dark"}
                  onChange={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                  }
                />
                <div className="block bg-gray-200 dark:bg-gray-700 w-15 h-7.5 rounded-full">
                  {theme === "light" ? (
                    <div className="w-4.5 h-4.5 text-gray-400 absolute top-1.5 right-1.5">
                      <DarkIcon fill="currentColor" />
                    </div>
                  ) : (
                    <div className="w-4.5 h-4.5 text-gray-400 absolute top-1.5 left-1.5">
                      <LightIcon fill="currentColor" />
                    </div>
                  )}
                </div>
                <div
                  className={`dot absolute left-1 top-0.75 bg-white dark:bg-gray-800 w-6 h-6 rounded-full transition transform ${
                    theme === "dark" ? "translate-x-7" : ""
                  }`}
                >
                  {theme === "light" ? (
                    <div className="w-4.5 h-4.5 text-red-500 absolute top-0.75 left-0.75">
                      {/* <LightIcon fill="currentColor" /> */}
                    </div>
                  ) : (
                    <div className="w-4.5 h-4.5 text-amber-400 absolute top-0.75 left-0.75">
                      {/* <DarkIcon fill="currentColor" /> */}
                    </div>
                  )}
                </div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}
