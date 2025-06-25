"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useTranslations, useLocale } from "next-intl";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
// import { useRouter } from "next/router";

export default function PaginationBar({
  totalPageCount,
  children,
}: {
  totalPageCount: number;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = Number(searchParams.get("page"));

  useEffect(() => {
    if ((pageParam && pageParam < 1) || pageParam === 0) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [pageParam, pathname, router, searchParams]);

  const pageNumber = pageParam > 0 ? pageParam : 1;

  console.log("pathname: ", pathname);
  console.log("search: ", pageNumber);

  return (
    <div className="grid gap-2">
      <div>
        <Bar
          pathname={pathname}
          pageNumber={pageNumber}
          totalPageCount={totalPageCount}
        />
      </div>
      <div>{children}</div>
      <div>
        <Bar
          pathname={pathname}
          pageNumber={pageNumber}
          totalPageCount={totalPageCount}
        />
      </div>
    </div>
  );
}

function Bar({
  pathname,
  pageNumber,
  totalPageCount,
}: {
  pathname: string;
  pageNumber: number;
  totalPageCount: number;
}) {
  const t = useTranslations("pagination");
  const locale = useLocale();

  const router = useRouter();

  // if (pageNumber < 0) {
  //   router.push(`?page=3`);
  // }

  return (
    <Pagination className="border-2 border-[var(--sec-500)] bg-[var(--pri-100)] p-2 ">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={
              pageNumber > 1 ? `${pathname}?page=${pageNumber - 1}` : undefined
            }
            className="hover:bg-[var(--pri-200)]"
          >
            {t("previous")}
          </PaginationPrevious>
        </PaginationItem>

        {Array.from({ length: 3 }).map((_, i) => {
          if (pageNumber - Math.abs(3 - i) > 0) {
            return (
              <PaginationItem key={i}>
                <PaginationLink
                  href={`${pathname}?page=${pageNumber - Math.abs(3 - i)}`}
                  className="hover:bg-[var(--pri-200)]"
                >
                  {pageNumber - Math.abs(3 - i)}
                </PaginationLink>
              </PaginationItem>
            );
          } else {
            return null; // render etme
          }
        })}

        <PaginationItem>
          <PaginationLink
            href={`${pathname}?page=${pageNumber}`}
            className="hover:bg-[var(--pri-200)] bg-[var(--pri-200)]"
          >
            {pageNumber}
          </PaginationLink>
        </PaginationItem>

        {Array.from({ length: 3 }).map((_, i) => {
          if (pageNumber + i < totalPageCount) {
            return (
              <PaginationItem key={i}>
                <PaginationLink
                  href={`${pathname}?page=${pageNumber + i + 1}`}
                  className="hover:bg-[var(--pri-200)]"
                >
                  {pageNumber + i + 1}
                </PaginationLink>
              </PaginationItem>
            );
          } else {
            return null; // render etme
          }
        })}

        <PaginationItem>
          <PaginationNext
            href={
              pageNumber < totalPageCount
                ? `${pathname}?page=${pageNumber + 1}`
                : undefined
            }
            className="hover:bg-[var(--pri-200)]"
          >
            {t("next")}
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
