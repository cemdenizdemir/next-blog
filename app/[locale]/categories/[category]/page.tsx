"use server";
import { BaseService } from "@/services/base";
import BlogList from "./BlogList";

export default async function Category({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams?: { [key: string]: number };
}) {
  const page = searchParams?.page ?? 1;

  const { category } = await params;
  const blogService = new BaseService("blogs");
  const blogs = await blogService.getPaginated({
    page: page,
    pageSize: 10,
    category_id: category,
  });

  console.log("---- categori bloglar : ", blogs);

  console.log("search paramlar: ", page);

  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  );
}
