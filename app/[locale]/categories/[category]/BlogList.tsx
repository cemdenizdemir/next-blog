
import { Blogs } from "@/types/types";
import Link from "next/link";

// import { useTranslation } from 'react-i18next';
import { headers } from 'next/headers';


export default function BlogList({ blogs,lang }: { blogs: Blogs,lang:string }) {

  // const { i18n } = useTranslation();
  // const currentLanguage = i18n?.language || "en";
  // console.log("locale: ", currentLanguage)

  // const headersList = headers();
  //  const header_url = headersList.get('x-url') || "";
  //  console.log("header_url: ", header_url)
  
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-2">
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/${lang}/blogs/${blog.id}`}
      
          className="bg-[var(--pri-100)] border-2 border-[var(--sec-500)] p-3"
        >
          <div className="border-[var(--sec-500)] bg-[var(--pri-200)] border-2 h-20 px-3 flex text-lg text-center items-center justify-center">
            {blog.title}
          </div>
          <div className="p-2">{blog.content}...</div>
        
         </Link>
      ))}
    </div>
  );
}
