import type { Locale } from "./i18n-config";
import type { Dictionary } from "./app/types/dictionary";

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  tr: () => import("./dictionaries/tr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]?.() ?? dictionaries.en();

// export async function getDictionary(lang: Locale, namespace: string) {
//   return import(`./dictionaries/${lang}/${namespace}.json`).then(
//     (module) => module.default
//   );
// }
