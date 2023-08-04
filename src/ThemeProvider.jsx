import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#EFFFFB" : "#090030";
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-light-primary dark:bg-dark-primary text-light-quaternary dark:text-dark-tertiary dark:outline-dark-tertiary outline-light-quaternary" >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
