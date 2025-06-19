import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import localeOptions from "@/data/locale_options.json";
import { LocaleOptions } from "@/types/locale_options";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Object.keys(localeOptions as LocaleOptions),

  // Used when no locale matches
  defaultLocale: "en",
  // pathnames: {
  //   "/contact": {
  //     en: "/contact-me",
  //     fr: "/contactez-moi",
  //     de: "/kontaktiere-mich",
  //   },
  // },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
