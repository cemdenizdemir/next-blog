import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return <div>{dictionary.homePage.heroText}</div>;
}
