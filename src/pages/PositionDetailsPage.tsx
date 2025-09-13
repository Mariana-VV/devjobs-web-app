import { ThemeProvider } from "../store/ThemeContext";
import { PositionDetails } from "../components/PositionDetails.tsx/PositionDetails";
import { DetailsPanel } from "../shared/DetailsPanel";

export const PositionDetailsPage = () => {
  return (
    <>
      <ThemeProvider>
        <DetailsPanel />

        <PositionDetails />
      </ThemeProvider>
    </>
  );
};
