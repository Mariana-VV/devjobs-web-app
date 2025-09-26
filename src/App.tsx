import { useContext } from "react";
import "./App.scss";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import { ThemeContext } from "./components/ThemeSwitcher/context/SwitchThemeContext";

function App() {
  return (
    <>
      <ThemeSwitcher />
      <h1>ThemeSwitcherContext</h1>
    </>
  );
}

export default App;
