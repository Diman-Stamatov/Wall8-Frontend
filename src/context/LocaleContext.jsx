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

export function formatDate(dateString, userLocale) {
  const options = {
    year: "2-digit",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  if (!dateString || !userLocale) {
    return ""; 
  }

  const formattedDate = new Date(dateString).toLocaleString(
    userLocale,
    options
  );
  return formattedDate;
}
