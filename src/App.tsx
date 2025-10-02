import "./App.scss";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import { BaseButton } from "./ui/button/BaseButton/BaseButton";
import "./ui/button/BaseButton/BaseButton.scss";
import { Input } from "./ui/input/Input/Input";

function App() {
  return (
    <>
      <ThemeSwitcher />
      {/* <h1>ThemeSwitcherContext</h1> */}
      <div className="temp">
        <BaseButton
          text="Search"
          className="btn"
          style={{ maxWidth: "123px" }}
        />
        <BaseButton text="Load More" className="btn" />

        <BaseButton text="Company Site" className="btn added" />

        <BaseButton text="Apply Now" className="btn" />

        <Input text="Enter desired job…" />
      </div>
    </>
  );
}

export default App;
