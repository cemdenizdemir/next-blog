//https://github.com/vercel/next.js/tree/canary/examples/i18n-routing
export const i18n = {
  defaultLocale: "en",
  locales: ["en", "tr"],
};

export type Locale = (typeof i18n)["locales"][number];
