import Link from "next/link";
// import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Navbar() {
  // const t = useTranslations("navbar");
  const t = await getTranslations("navbar");

  return (
    <div className="bg-[var(--pri-200)] border-b border-[var(--pri-400)]">
      <ul className="container flex justify-between [&>*>*]:hover:bg-[var(--pri-300)] [&>*>*]:py-2 [&>*>*]:px-4 [&>*]:flex [&>*>*]:flex [&>*>*]:items-center [&>*>*]:h-full   [&>*>*]:cursor-pointer ">
        <div className="flex">
          <li>
            <Link href="/">{t("homePage")} </Link>
          </li>
          <li>
            <Link href="/categories">{t("categories")} </Link>
          </li>
          <li>
            <Link href="/create-blog">{t("createBlog")} </Link>
          </li>
        </div>
        <div>
          <li>
            <Link href="/login">{t("login")} </Link>
          </li>
          <li>
            <Link href="/signup">{t("signup")} </Link>
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
