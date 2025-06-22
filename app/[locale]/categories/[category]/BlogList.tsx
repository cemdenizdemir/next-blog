import { Blogs } from "@/types/types";

export default function BlogList({ blogs }: { blogs: Blogs }) {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div>{blog.title}</div>
          <div>{blog.content}</div>
        </div>
      ))}
    </div>
  );
}
