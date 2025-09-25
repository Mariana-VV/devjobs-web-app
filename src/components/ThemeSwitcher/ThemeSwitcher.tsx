import { useState } from "react";
import "./ThemeSwitcher.scss";
import classNames from "classnames";

export const ThemeSwitcher = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  function handleThemeSwitcherClick() {
    setIsSwitched((switcher) => !switcher);
  }

  const buttonClass = classNames("switcher__box", {
    switch: isSwitched,
  });
  return (
    <div className="switcher">
      <div className="switcher__icon">
        <img src="src/components/ThemeSwitcher/images/sun.svg" alt="sun" />
      </div>
      <a
        href="#"
        className={buttonClass}
        onClick={handleThemeSwitcherClick}
      ></a>
      <div className="switcher__icon">
        <img src="src/components/ThemeSwitcher/images/moon.svg" alt="moon" />
      </div>
    </div>
  );
};
