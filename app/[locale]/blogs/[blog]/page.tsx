import { BaseService } from '@/services/base';
import { notFound } from 'next/navigation';

export default async function BlogPage({
  params,
}: {
  params: { blog: string  };
}) {
  const {blog: blogParam} = await  params;
  const blogId = parseInt(blogParam, 10);

  if (isNaN(blogId) || !/^\d+$/.test(blogId.toString())) {
    notFound();
  }

  const blogService = new BaseService('blogs');
  const blog = await blogService.getOne({ id:  blogId});

  console.log("blog : ", blog)

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
