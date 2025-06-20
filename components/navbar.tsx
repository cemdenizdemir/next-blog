import Link from "next/link";
// import { useTranslations, useLocale } from "next-intl";

import { getTranslations, getLocale } from "next-intl/server";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Navbar() {
  // const t = useTranslations("navbar");
  // const locale = useLocale();

  const t = await getTranslations("navbar");
  const locale = await getLocale();

  return (
    <div className="bg-[var(--pri-200)] border-b border-[var(--pri-400)]">
      <ul className="container flex justify-between [&>*>*]:hover:bg-[var(--pri-300)] [&>*>*]:py-2 [&>*>*]:px-4 [&>*]:flex [&>*>*]:flex [&>*>*]:items-center [&>*>*]:h-full   [&>*>*]:cursor-pointer ">
        <div className="flex">
          <li>
            <Link href={`/${locale}/`}>{t("homePage")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/categories`}>{t("categories")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/create-blog`}>{t("createBlog")}</Link>
          </li>
        </div>
        <div>
          <li>
            <Link href={`/${locale}/login`}>{t("login")}</Link>
          </li>
          <li>
            <Link href={`/${locale}/signup`}>{t("signup")}</Link>
          </li>
          <li>
            <div>
              <LocaleSwitcher />
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
}
