import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ThemeSwitcher/context/SwitchThemeContext.tsx";
import { JobProvider } from "./module/Job/context/JobContext.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <JobProvider>
          <App />
        </JobProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
