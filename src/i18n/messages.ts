import { enLang } from "./en";
import { esLang } from "./es";

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}
export const messages: Messages = {
  en: enLang,
  es: esLang,
};