// src/LocaleContext.tsx
import React, { createContext, useContext, useState } from "react";

// Define el tipo del contexto
interface LocaleContextType {
  currentLocale: "en" | "es";
  setLocale: (locale: "en" | "es") => void;
}

// Crea el contexto, el valor por defecto es undefined
const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// Crea el provider del contexto
export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLocale, setLocale] = useState<"en" | "es">("en");

  return (
    <LocaleContext.Provider value={{ currentLocale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

// Hook para usar el contexto
export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
