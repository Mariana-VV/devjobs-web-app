import "./App.scss";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import "./ui/button/BaseButton/BaseButton.scss";
import { MainButton } from "./ui/button/MainButton/MainButton";
import { SeconderyButton } from "./ui/button/SeconderyButton/SecondaryButton";
import { Input } from "./ui/input/Input/Input";

function App() {
  return (
    <>
      <ThemeSwitcher />
      {/* <h1>ThemeSwitcherContext</h1> */}
      <div className="temp">
        <MainButton text="Search" style={{ maxWidth: "123px" }} />

        <MainButton text="Load More" />

        <SeconderyButton text="Company Site" />

        <MainButton text="Apply Now" />

        <Input text="Enter desired job…" />
      </div>
    </>
  );
}

export default App;
