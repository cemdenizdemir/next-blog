import { BaseService } from "@/services/base";
import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: { blog: string };
}) {
  const { blog: blogParam } = await params;
  const blogId = parseInt(blogParam, 10);

  if (isNaN(blogId) || !/^\d+$/.test(blogId.toString())) {
    notFound();
  }

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
          <h1 className="text-lg break-all">{user.username}</h1>
          <div>{category.name}</div>
        </div>
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
