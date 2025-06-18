import Link from "next/link";
// import { useTranslations } from "next-intl";

import { getTranslations } from "next-intl/server";

export default async function Navbar() {
  // const t = useTranslations("navbar");
  const t = await getTranslations("navbar");

  return (
    <div className="bg-emerald-300">
      <ul className="flex justify-between items-center max-w-[1000px] mx-auto  ">
        <div className="flex [&>*]:py-3 [&>*]:px-4 [&>*]:hover:bg-emerald-400 [&>*]:cursor-pointer">
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
        <div className="flex">
          <li className="p-3 hover:bg-emerald-400 cursor-pointer">
            <Link href="/login">{t("login")} </Link>
          </li>
          <li className="p-3 hover:bg-emerald-400 cursor-pointer">
            <Link href="/signup">{t("signup")} </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
