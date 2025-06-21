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
    <div className="bg-[var(--pri-200)] border-b border-[var(--pri-300)]">
      <ul className="container flex justify-between [&>*>*]:hover:bg-[var(--pri-300)] [&>*>*]:py-2 [&>*>*]:px-4 [&>*]:flex [&>*>*]:flex [&>*>*]:items-center [&>*>*]:h-full   [&>*>*]:cursor-pointer ">
        <div className="flex">
          <Link href={`${process.env.PAGE_URL}/${locale}/`}>
            <li>{t("homePage")}</li>
          </Link>
          <Link href={`${process.env.PAGE_URL}/${locale}/categories`}>
            <li>{t("categories")}</li>
          </Link>
          <Link href={`/${locale}/create-blog`}>
            <li>{t("createBlog")}</li>
          </Link>
        </div>
        <div>
          <Link href={`${process.env.PAGE_URL}/${locale}/login`}>
            <li>{t("login")}</li>
          </Link>
          <Link href={`${process.env.PAGE_URL}/${locale}/signup`}>
            <li>{t("signup")}</li>
          </Link>
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
