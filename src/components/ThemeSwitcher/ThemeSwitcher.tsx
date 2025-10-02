import "./ThemeSwitcher.scss";
import classNames from "classnames";
import { useTheme } from "./hooks/useTheme";
import Sun from "../../assets/images/sun.svg?react";
import Moon from "../../assets/images/moon.svg?react";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const buttonClass = classNames("switcher__box", {
    switch: theme === "dark",
  });
  return (
    <div className="switcher">
      <div className="switcher__icon">
        <Sun />
      </div>
      <button className={buttonClass} onClick={toggleTheme} />
      <div className="switcher__icon">
        <Moon />
      </div>
    </div>
  );
};
