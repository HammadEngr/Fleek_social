import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem("lang");
    return stored || "en";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "de" : "en"));
  };

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
