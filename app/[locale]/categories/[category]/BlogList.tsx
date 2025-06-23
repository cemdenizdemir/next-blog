import { Blogs } from "@/types/types";

export default function BlogList({ blogs }: { blogs: Blogs }) {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-[var(--pri-100)] p-3 m-2 ">
          <div className="bg-[var(--pri-200)] h-20 px-3 flex text-lg text-center items-center justify-center">
            {blog.title}
          </div>
          <div className="p-2">{blog.content}...</div>
        </div>
      ))}
    </div>
  );
}
