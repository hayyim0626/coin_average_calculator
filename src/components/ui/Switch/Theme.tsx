"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import NightThemeImage from "/Images/nav/moon.png";
import LightThemeImage from "/Images/nav/sun@3x.png";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer ml-4">
      {theme === "dark" ? (
        <Image src={LightThemeImage} width={20} alt="theme switcher" />
      ) : (
        <Image src={NightThemeImage} width={20} alt="theme switcher" />
      )}
    </div>
  );
}
