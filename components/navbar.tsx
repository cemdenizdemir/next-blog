import Link from "next/link";
// import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Navbar() {
  // const t = useTranslations("navbar");
  const t = await getTranslations("navbar");

  return (
    <div className="bg-emerald-300">
      <ul className="flex justify-between items-center max-w-[1000px] mx-auto [&>*]:flex [&>*]:items-center [&>*>*]:py-3 [&>*>*]:px-4 [&>*>*]:hover:bg-emerald-400 [&>*>*]:cursor-pointer ">
        <div>
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
            <LocaleSwitcher />
          </li>
        </div>
      </ul>
    </div>
  );
}
