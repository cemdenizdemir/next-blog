"use client";
import Link from "next/link";

import { type getDictionary } from "../get-dictionary";

export default function Navbar({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["navbar"];
}) {
  return (
    <div className="bg-emerald-300">
      <ul className="flex justify-between items-center max-w-[1000px] mx-auto  ">
        <div className="flex [&>*]:py-3 [&>*]:px-4 [&>*]:hover:bg-emerald-400 [&>*]:cursor-pointer">
          <li>
            <Link href="/">{dictionary.homePage}</Link>
          </li>
          <li>
            <Link href="/categories">{dictionary.categories}</Link>
          </li>
          <li>
            <Link href="/create-blog">{dictionary.createBlog}</Link>
          </li>
        </div>
        <div className="flex">
          <li className="p-3 hover:bg-emerald-400 cursor-pointer">
            <Link href="/login">{dictionary.login} </Link>
          </li>
          <li className="p-3 hover:bg-emerald-400 cursor-pointer">
            <Link href="/signup">{dictionary.signup} </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
