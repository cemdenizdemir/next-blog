import { getTranslations } from "next-intl/server";
// import { useTranslations } from "next-intl";

import auth from "./auth";

export default async function Home() {
  // const t = useTranslations("homePage");
  const t = await getTranslations("homePage");
  const session = await auth();

  return (
    <div>
      <div>{JSON.stringify(session)}</div>
      {t("title")} - {t("welcome.title")}
    </div>
  );
}
