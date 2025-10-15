import { ThemeSwitcher } from "../../components/ThemeSwitcher/ThemeSwitcher";
import { Logo } from "../../ui/Logo/Logo";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Logo />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
