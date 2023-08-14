import { createContext, useContext, useState, useEffect } from "react";

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [userLocale, setUserLocale] = useState("");

  useEffect(() => {
    const userLang = navigator.language || navigator.userLang;
    setUserLocale(userLang);
  }, []);

  return (
    <LocaleContext.Provider value={userLocale}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useUserLocale() {
  return useContext(LocaleContext);
}
