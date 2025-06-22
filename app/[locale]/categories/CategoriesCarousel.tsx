"use client";
import * as React from "react";
import Image from "next/image";

import { useTranslations, useLocale } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Categories } from "@/types/types";
import Link from "next/link";

export function CategoriesCarousel({
  categories,
}: {
  categories: Categories | null;
}) {
  const t = useTranslations("categories");
  const locale = useLocale();

  return (
    <div className="px-16 relative">
      <Carousel className="flex justify-center ">
        <CarouselContent className="-ml-1 grid lg:flex sm:grid-cols-3">
          {categories!.map((category, index) => (
            <CarouselItem className="pl-1 basis-1/4 " key={index}>
              <Link href={`/${locale}/categories/${index}`}>
                <div className="p-1">
                  <Card className="py-0 bg-[var(--pri-100)] border border-[var(--pri-300)]">
                    <CardContent className="flex aspect-square items-center justify-center ">
                      <div key={category.id} className="flex gap-2 flex-col">
                        <div className=" text-center">
                          <p className="text-xl">{t(category.name)}</p>
                        </div>
                        <div className="flex  items-center border-2 rounded-b-md border-[var(--pri-300)] overflow-hidden">
                          <Image
                            src={`/category-images/${category.name}.jpg`}
                            alt={category.name}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-[200px] h-[140px] overflow-hidden"
                            style={{
                              // width: "200px",
                              // maxHeight: "140px",
                              overflow: "hidden",
                              objectFit: "cover",
                            }} // optional
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
