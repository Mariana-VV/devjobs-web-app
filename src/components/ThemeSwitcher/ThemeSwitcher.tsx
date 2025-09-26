import "./ThemeSwitcher.scss";
import classNames from "classnames";
import { useTheme } from "./hooks/useTheme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const buttonClass = classNames("switcher__box", {
    switch: theme === "dark",
  });
  return (
    <div className="switcher">
      <div className="switcher__icon">
        <img
          src={`${import.meta.env.BASE_URL}/assets/images/sun.svg`}
          alt="sun"
        />
      </div>
      <button className={buttonClass} onClick={toggleTheme} />
      <div className="switcher__icon">
        <img
          src={`${import.meta.env.BASE_URL}/assets/images/moon.svg`}
          alt="moon"
        />
      </div>
    </div>
  );
};
