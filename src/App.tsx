import "./App.scss";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import "./ui/button/BaseButton/BaseButton.scss";
import { MainButton } from "./ui/button/MainButton/MainButton";
import { SecondaryButton } from "./ui/button/SeconderyButton/SecondaryButton";
import { Input } from "./ui/input/Input/Input";
import Search from "./assets/images/search.svg?react";
import Location from "./assets/images/location.svg?react";
import { Header } from "./module/Header/Header";
import { JobPage } from "./module/Job/JobPage";
import { Route, Routes } from "react-router";
import { JobDetailsPage } from "./module/JobDetails/JobDetailsPage";

function App() {
  return (
    <>
      {/* <ThemeSwitcher />
      <div className="temp">
        <MainButton text="Search" />

        <MainButton text="Load More" />

        <SecondaryButton text="Company Site" />

        <MainButton text="Apply Now" />

        <Input
          placeholder="Filter by title, companies, expertise..."
          Icon={Search}
        />
        <Input placeholder="Filter by location..." Icon={Location} />
      </div> */}

      <Header />
      <Routes>
        <Route path="/devjobs-web-app" element={<JobPage />} />
        <Route path="/details/:id" element={<JobDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
