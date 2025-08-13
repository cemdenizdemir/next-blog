import Link from "next/link";
// import { useTranslations, useLocale } from "next-intl";

import { getTranslations, getLocale } from "next-intl/server";
import LocaleSwitcher from "./LocaleSwitcher";

import auth from "../app/[locale]/auth";

import { LoginButton, LogoutButton } from "./auth";
import Image from "next/image";

export default async function Navbar() {
  // const t = useTranslations("navbar");
  // const locale = useLocale();

  const t = await getTranslations("navbar");
  const locale = await getLocale();

  const session = await auth();

  return (
    <div className="bg-[var(--pri-100)] border-b-2 border-[var(--sec-500)]">
      <ul className="container flex justify-between [&>*>*]:hover:bg-[var(--pri-200)] [&>*>*]:py-2 [&>*>*]:px-4 [&>*]:flex [&>*>*]:flex [&>*>*]:items-center [&>*>*]:h-full [&>*>*]:cursor-pointer ">
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
          {/* <Link href={`${process.env.PAGE_URL}/${locale}/login`}>
            <li>{t("login")}</li>
          </Link>
          <Link href={`${process.env.PAGE_URL}/${locale}/signup`}>
            <li>{t("signup")}</li>
          </Link> */}
          {session ? <LogoutButton /> : <LoginButton />}
          <li>
            <div>
              <LocaleSwitcher />
            </div>
          </li>
          <li>
            {session ? (
              <Image
                src={session?.user?.image || ""}
                alt="image"
                width="50"
                height="50"
                className="rounded-full border-3 border-[var(--pri-700)]"
              />
            ) : null}
          </li>
        </div>
      </ul>
    </div>
  );
}
