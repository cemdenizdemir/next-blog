"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  // SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

import type { LocaleOptions } from "@/types/types";

import localeOptionsJson from "@/data/locale_options.json";
import Image from "next/image";
const localeOptions = localeOptionsJson as LocaleOptions;

export default function LocaleSwitcher() {
  // const [selectedOption, setSelectedOption] = useState("tr");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <div className="[&>*]:hover:cursor-pointer ">
      <Select defaultValue={locale} onValueChange={onSelectChange}>
        <SelectTrigger className="border-[var(--pri-400)] bg-white bg-[var(--pri-100)]">
          {/* <SelectValue /> */}
          <Image
            src={`/language-flags/${locale}.png`}
            width={25}
            height={1}
            alt={locale}
          />
          {locale.toUpperCase()}
        </SelectTrigger>
        <SelectContent className="bg-[var(--pri-100)] ">
          {routing.locales.map((locale) => (
            <SelectItem
              value={locale}
              key={locale}
              className="focus:cursor-pointer focus:bg-[var(--pri-200)] "
            >
              <Image
                src={`/language-flags/${locale}.png`}
                width={25}
                height={1}
                alt={locale}
              />
              {localeOptions[locale as Locale].label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
