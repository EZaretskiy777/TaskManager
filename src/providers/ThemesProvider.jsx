import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

const ThemesProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  const toggleTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useTheme, ThemesProvider };
