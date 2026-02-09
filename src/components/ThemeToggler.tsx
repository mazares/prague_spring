import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

import { useThemeStore } from "../store/themeStore";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="flex justify-center items-center p-2 rounded-4xl border self-start justify-self-end  "
    >
      {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
    </button>
  );
};
