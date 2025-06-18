import { getTranslations } from "next-intl/server";
// import { useTranslations } from "next-intl";

export default async function Home() {
  // const t = useTranslations("homePage");
  const t = await getTranslations("homePage");

  return (
    <div>
      {t("title")} - {t("welcome.title")}
    </div>
  );
}
