import { CategoryProps, Categories, Blogs, BlogProps } from "@/types/types";
import fs from "fs/promises";
import path from "path";

export class BaseService<T> {
  serviceName: "categories" | "users" | "blogs";

  constructor(serviceName: "categories" | "users" | "blogs") {
    this.serviceName = serviceName;
  }

  async fetchData() {
    // async fetchData(): Promise<object[] | null> {
    try {
      const filePath = path.join(
        process.cwd(),
        "data",
        `${this.serviceName}.json`
      );
      const fileContents = await fs.readFile(filePath, "utf8");
      const data = JSON.parse(fileContents);

      return data || null;
    } catch (e) {
      return null;
    }
  }

  async getAll() {
    const data = await this.fetchData();
    return data;
  }

  async getPaginated({
    page = 1,
    pageSize = 10,
    locale,
    category_id,
  }: {
    page: number;
    pageSize: number;
    locale?: string;
    category_id?: string;
  }) {
    const data = await this.fetchData();

    let filteredData = data;

    if ((this.serviceName = "blogs") && filteredData != null) {
      if (locale) {
        filteredData = filteredData!.filter(
          (item: BlogProps) => item.language_id === 1
        );
      }
      if (category_id) {
        filteredData = filteredData!.filter(
          (item: BlogProps) => item.category_id === 1
        );
      }
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    let paginatedData: BlogProps[] = filteredData!.slice(startIndex, endIndex);

    paginatedData = paginatedData.map((data) => ({
      ...data,
      content: data.content.slice(0, 200),
    }));

    return paginatedData;
  }
}
