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
    try {
      const data = await this.fetchData();
      return data;
    } catch (e) {
      return null;
    }
  }

  async getPaginated({
    page = 1,
    pageSize = Number(process.env.PAGINATION_COUNT),
    category_id,
    language_id,

  }: {
    page: number;
    pageSize: number;
    category_id?: number;
    language_id?: number;

  }) {
    try {
      const data = await this.fetchData();

      let filteredData = data;

      console.log("----- category_id ? ", category_id);

      if ((this.serviceName = "blogs") && filteredData != null) {
        if (language_id) {
          filteredData = filteredData!.filter(
            (item: BlogProps) => item.language_id === language_id 
          );
        }
        if (category_id) {
          filteredData = filteredData!.filter(
            (item: BlogProps) => item.category_id === category_id
          );
        }
      }

      // console.log("filterlenmiş data : ", filteredData)

      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      let paginatedData: BlogProps[] = filteredData!.slice(
        startIndex,
        endIndex
      );

      paginatedData = paginatedData.map((data) => ({
        ...data,
        content: data.content.slice(0, 200),
      }));

      return { paginatedData: paginatedData, totalLength: filteredData.length };
    } catch (e) {
      return null;
    }
  }
}
