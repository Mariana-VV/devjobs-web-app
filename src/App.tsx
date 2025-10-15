import "./App.scss";
import "./ui/button/BaseButton/BaseButton.scss";
import { Header } from "./module/Header/Header";
import { JobPage } from "./module/Job/JobPage";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<JobPage />} />
        <Route path="/details/:id" element={<JobDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
