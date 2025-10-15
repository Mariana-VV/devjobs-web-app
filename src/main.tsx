import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ThemeSwitcher/context/SwitchThemeContext.tsx";
import { JobProvider } from "./module/Job/context/JobContext.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <ThemeProvider>
        <JobProvider>
          <App />
        </JobProvider>
      </ThemeProvider>
    </Router>
  </StrictMode>
);
