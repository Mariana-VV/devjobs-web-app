import "./App.scss";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import "./ui/button/BaseButton/BaseButton.scss";
import { MainButton } from "./ui/button/MainButton/MainButton";
import { SecondaryButton } from "./ui/button/SeconderyButton/SecondaryButton";
import { Input } from "./ui/input/Input/Input";

function App() {
  return (
    <>
      <ThemeSwitcher />
      <div className="temp">
        <MainButton text="Search" style={{ paddingInline: "35px" }} />

        <MainButton text="Load More" style={{ paddingInline: "30px" }} />

        <SecondaryButton
          text="Company Site"
          style={{ paddingInline: "35px" }}
        />

        <MainButton text="Apply Now" style={{ paddingInline: "20px" }} />

        <Input text="Enter desired job…" style={{ paddingInline: "28px" }} />
      </div>
    </>
  );
}

export default App;
