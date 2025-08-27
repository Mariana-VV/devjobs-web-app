import { useEffect, useState } from "react";
import "./App.scss";
import { getData } from "./utils/httpClient";
import type { Position } from "./types/Position";
import { CardList } from "./components/CardList/CardList";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "../src/store/ThemeContext";

function App() {
  const [data, setData] = useState<Position[]>([]);

  useEffect(() => {
    getData().then((d) => setData(d));
  }, []);

  console.log(data);

  return (
    <ThemeProvider>
      <Header />

      <CardList positions={data} />
    </ThemeProvider>
  );
}

export default App;
