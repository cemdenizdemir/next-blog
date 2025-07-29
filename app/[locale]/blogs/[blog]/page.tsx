import { BaseService } from "@/services/base";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getTranslations } from "next-intl/server";

export default async function BlogPage({
  params,
}: {
  params: { blog: string; locale: string };
}) {
  const { blog: blogParam, locale } = await params;
  const blogId = parseInt(blogParam, 10);

  if (isNaN(blogId) || !/^\d+$/.test(blogId.toString())) {
    notFound();
  }

  const t = await getTranslations("categories");

  const blogService = new BaseService("blogs");
  const blog = await blogService.getOne({ id: blogId });

  const categoryService = new BaseService("categories");
  const category = await categoryService.getOne({ id: blog.category_id });

  const userService = new BaseService("users");
  const user = await userService.getOne({ id: blog.user_id });

  console.log("category : ", user);

  if (!blog) {
    notFound();
  }

  return (
    <div className="grid gap-2">
      <h1 className="text-2xl">{blog.title}</h1>
      <div className="grid gap-1 ">
        <div className="flex  justify-between items-end">
          <Link href={`/${locale}/users/${user.id}`}>
            <h1 className="text-lg break-all">{user.username}</h1>
          </Link>
          <div> {t(category.name)}</div>
        </div>
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
