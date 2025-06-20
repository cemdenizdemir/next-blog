import { Locale } from "@/i18n/routing";

export default async function Categories({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const res = await fetch(`${process.env.PAGE_URL}/${locale}/api/categories`);
  const categories = await res.json();

  console.log(categories);

  return <div>Locale: {locale}</div>;
}
