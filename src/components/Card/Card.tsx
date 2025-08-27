import { useTheme } from "../../store/ThemeContext";
import type { Position } from "../../types/Position";
import "./Card.scss";

import classNames from "classnames";

type Props = {
  position: Position;
};

export const Card: React.FC<Props> = ({ position }) => {
  const { theme } = useTheme();

  const themeClass = classNames({
    card: true,
    dark: theme === "dark",
    light: theme === "light",
  });

  return (
    <div className={themeClass}>
      <span
        className="card__icon"
        style={{
          backgroundColor: `${position?.logoBackground}`,
          color: `${position.logo}`,
        }}
      >
        <img src={position?.logo} alt="" />
      </span>
      <div className="card__info">
        <p>{position?.postedAt}</p>
        <svg
          width="4"
          height="4"
          viewBox="0 0 4 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="2" r="2" fill="#6E8098" />
        </svg>

        <p>{position?.contract}</p>
      </div>
      <h2 className="card__title title">{position?.position}</h2>
      <p className="card__company">{position?.company}</p>
      <p className="card__country">{position?.location}</p>
    </div>
  );
};
