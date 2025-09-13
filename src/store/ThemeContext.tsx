/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Position } from "../types/Position";
import { getData } from "../utils/httpClient";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme?: () => void;
  positions: Position[];
  setPositions: (data: Position[]) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
  positions: [],
  setPositions: (_data: Position[]) => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    getData().then((d) => setPositions(d));
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, positions, setPositions }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
