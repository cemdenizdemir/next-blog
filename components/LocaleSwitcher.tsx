"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

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
    <div>
      <Select defaultValue={locale} onValueChange={onSelectChange}>
        <SelectTrigger className="border-emerald-400 bg-white">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {routing.locales.map((locale) => (
            <SelectItem value={locale} key={locale}>
              {locale}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
