"use server";
import { BaseService } from "@/services/base";
import BlogList from "./BlogList";
import PaginationBar from "@/components/paginationBar";

export default async function Category({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams?: { [key: string]: number };
}) {
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
  });

  // console.log("---- categori bloglar : ", blogs);

  console.log("blog arr uzunluk: ", blogs!.totalLength);

  return (
    <div>
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
