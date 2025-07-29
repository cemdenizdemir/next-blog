"use server";
import { BaseService } from "@/services/base";
import BlogList from "../../../../components/BlogList";
import PaginationBar from "@/components/paginationBar";

import { Locale } from "@/i18n/routing";

import { getTranslations } from "next-intl/server";

import fs from "fs/promises";

import path from "path";

export default async function Category({
  params,
  searchParams,
}: {
  params: Promise<{ category: string; locale: Locale }>;
  searchParams?: { [key: string]: number };
}) {
  const t = await getTranslations("blogs");

  const { locale } = await params;
  const localePath = path.join(process.cwd(), "data", `locale_options.json`);
  const localeContentsRaw = await fs.readFile(localePath, "utf8");
  const localeContents = JSON.parse(localeContentsRaw) as Record<
    string,
    { id: number }
  >;

  const pageParam = Number((await searchParams)?.page);
  // const page = Number(pageParam && pageParam > 0 ? pageParam : 1);
  const page = pageParam! > 0 ? pageParam : 1;

  // const page = Number(pageParam ?? 1);

  // console.log("PageParam: ", page);

  const { category } = await params;
  const blogService = new BaseService("blogs");
  const blogs = await blogService.getPaginated({
    page: page,

    pageSize: Number(process.env.PAGINATION_COUNT),
    category_id: Number(category),
    language_id: localeContents[locale].id,
  });

  // console.log("---- categori bloglar : ", blogs);

  // console.log("blog arr uzunluk: ", blogs!.totalLength);

  return (
    <div>
      <div className="text-xl mb-2">{t("blogsInLanguage")} </div>
      <PaginationBar
        totalPageCount={
          blogs!.totalLength / Number(process.env.PAGINATION_COUNT)
        }
      >
        <BlogList blogs={blogs!.paginatedData} />
      </PaginationBar>
    </div>
  );
}
