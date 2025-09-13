import { useContext, useState } from "react";
import { CardList } from "../components/CardList/CardList";
import { ThemeContext, ThemeProvider } from "../store/ThemeContext";
import { MainPanel } from "../shared/MainPanel";

export const MainPage = () => {
  const [location, setLocation] = useState("");
  const { positions } = useContext(ThemeContext);

  const fileredPositions =
    location !== ""
      ? positions.filter((p) =>
          p.location.toLowerCase().includes(location.toLowerCase())
        )
      : positions;
  return (
    <>
      <ThemeProvider>
        <MainPanel setLocation={setLocation} />

        <CardList positions={fileredPositions} />
      </ThemeProvider>
    </>
  );
};
