import {
  createContext,
  useState,
  useEffect,
  type PropsWithChildren,
  type FC,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme");

    return storedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.style.setProperty("color-scheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
