import { useContext } from "react";
import { ThemeContext } from "../context/SwitchThemeContext";

export const useTheme = () => useContext(ThemeContext);
