import { ThemeSwitcher } from "../../components/ThemeSwitcher/ThemeSwitcher";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="logo">
            <img
              src={`${import.meta.env.BASE_URL}/src/assets/images/logo.png`}
              alt="logo"
            />
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
