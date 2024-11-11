"use client";
import { useState } from "react";

export default function Switch() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className="inline-block w-12 ml-2 align-middle select-none">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="hidden"
        onChange={() => setIsClicked(!isClicked)}
        checked={isClicked}
      />
      <label
        htmlFor="toggle"
        className="block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer"
      >
        <div
          className={`w-1/2 h-6 rounded-full bg-white dark:bg-black shadow-md transform transition-transform ${
            isClicked ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </label>
    </div>
  );
}
