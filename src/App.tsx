import "./App.scss";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import "./ui/button/BaseButton/BaseButton.scss";
import { MainButton } from "./ui/button/MainButton/MainButton";
import { SecondaryButton } from "./ui/button/SeconderyButton/SecondaryButton";
import { Input } from "./ui/input/Input/Input";
import Search from "./assets/images/search.svg?react";
import Location from "./assets/images/location.svg?react";

function App() {
  return (
    <>
      <ThemeSwitcher />
      <div className="temp">
        <MainButton text="Search" />

        <MainButton text="Load More" />

        <SecondaryButton text="Company Site" />

        <MainButton text="Apply Now" />

        <Input text="Filter by title, companies, expertise..." Icon={Search} />
        <Input text="Filter by location..." Icon={Location} />
      </div>
    </>
  );
}

export default App;
