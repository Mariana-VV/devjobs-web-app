/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useContext, useMemo, useState } from "react";
import "./ThemeSwitcher.scss";
import classNames from "classnames";
import { ThemeContext } from "./context/SwitchThemeContext";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useMemo(() => {
    theme === "dark"
      ? (document.body.style.backgroundColor = "#121721")
      : (document.body.style.backgroundColor = "#f4f6f8");
  }, [theme]);

  const [isSwitched, setIsSwitched] = useState(false);
  const handleSwitch = () => {
    toggleTheme;

    setIsSwitched((switcher) => !switcher);
  };

  const buttonClass = classNames("switcher__box", {
    switch: isSwitched,
  });
  return (
    <div className="switcher">
      <div className="switcher__icon">
        <img
          src={`${import.meta.env.BASE_URL}/assets/images/sun.svg`}
          alt="sun"
        />
      </div>
      <button className={buttonClass} onClick={handleSwitch} />
      <div className="switcher__icon">
        <img
          src={`${import.meta.env.BASE_URL}/assets/images/moon.svg`}
          alt="moon"
        />
      </div>
    </div>
  );
};
