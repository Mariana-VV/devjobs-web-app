import { HashRouter, Route, Routes } from "react-router";
import "./App.scss";
import { ThemeProvider } from "../src/store/ThemeContext";
import { MainPage } from "./pages/MainPage";
import { PositionDetailsPage } from "./pages/PositionDetailsPage";

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:id" element={<PositionDetailsPage />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
