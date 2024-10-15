// src/Provider.tsx
import React from "react";
import { IntlProvider } from "react-intl";
import { LocaleProvider, useLocale } from "./LocaleContext";
import { messages } from "./messages";

// Componente interno para acceder al contexto
const LocaleIntlProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { currentLocale } = useLocale(); // Usa el hook para obtener el contexto

  return (
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
      {children}
    </IntlProvider>
  );
};

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <LocaleIntlProvider>{children}</LocaleIntlProvider>
    </LocaleProvider>
  );
}
