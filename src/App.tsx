import { useEffect, useState } from "react";
import "./App.scss";
import { getData } from "./utils/httpClient";
import type { Position } from "./types/Position";
import { CardList } from "./components/CardList/CardList";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "../src/store/ThemeContext";

function App() {
  const [data, setData] = useState<Position[]>([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    getData().then((d) => setData(d));
  }, []);

  const fileredPositions =
    location !== ""
      ? data.filter((p) =>
          p.location.toLowerCase().includes(location.toLowerCase())
        )
      : data;

  return (
    <ThemeProvider>
      <Header setLocation={setLocation} />

      <CardList positions={fileredPositions} />
    </ThemeProvider>
  );
}

export default App;
