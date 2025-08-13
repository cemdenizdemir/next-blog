"use client";

import { signIn, signOut } from "next-auth/react";

import { useTranslations, useLocale } from "next-intl";

export const LoginButton = () => {
  const t = useTranslations("navbar");
  const locale = useLocale();

  return <button onClick={() => signIn()}>{t("login")}</button>;
};

export const LogoutButton = () => {
  const t = useTranslations("navbar");
  const locale = useLocale();
  return <button onClick={() => signOut()}>{t("logOut")}</button>;
};
