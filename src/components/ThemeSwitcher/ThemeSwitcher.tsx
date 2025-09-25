import { useState } from "react";
import "./ThemeSwitcher.scss";
import classNames from "classnames";

export const ThemeSwitcher = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  const handleSwitch = () => {
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
