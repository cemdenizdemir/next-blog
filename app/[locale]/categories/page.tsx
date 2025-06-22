import { Locale } from "@/i18n/routing";
import { BaseService } from "@/services/base";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import { CategoriesCarousel } from "@/app/[locale]/categories/CategoriesCarousel";
import { CategoryProps } from "@/types/types";

export default async function Categories({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("categories");

  const categoryService = new BaseService<CategoryProps>("categories");
  const categories = await categoryService.getAll();

  // const data = await categoryService.getPaginated({ page: 1, pageSize: 5 });
  // console.log("-- data page", data);

  return (
    <div>
      {/* {categories!.map((category) => (
        <div key={category.id}>
          <Image
            src={`/category-images/${category.name}.jpg`}
            alt={category.name}
            width={250}
            height={250}
          />
          <p>{t(category.name)}</p>
        </div>
      ))} */}

      <CategoriesCarousel categories={categories} />
    </div>
  );
}
