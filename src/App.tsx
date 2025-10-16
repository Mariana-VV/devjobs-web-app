import "./App.scss";
import "./ui/button/BaseButton/BaseButton.scss";
import { Header } from "./module/Header/Header";
import { JobPage } from "./module/Job/JobPage";
import { Route, Routes } from "react-router-dom";
import { JobDetailsPage } from "./module/JobDetails/JobDetailsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<JobPage />} />
        <Route path="/details/:id" element={<JobDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
