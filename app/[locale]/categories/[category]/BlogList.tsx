import { Blogs } from "@/types/types";
import Link from "next/link";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function BlogList({ blogs }: { blogs: Blogs }) {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-2">
      {blogs.map((blog) => (
        // <Link key={blog.id} href={`${pathname}?page=${pageNumber + i + 1}`}>
        <div
          key={blog.id}
          className="bg-[var(--pri-100)] border-2 border-[var(--sec-500)] p-3"
        >
          <div className="border-[var(--sec-500)] bg-[var(--pri-200)] border-2 h-20 px-3 flex text-lg text-center items-center justify-center">
            {blog.title}
          </div>
          <div className="p-2">{blog.content}...</div>
        </div>
        // </Link>
      ))}
    </div>
  );
}
