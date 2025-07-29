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

  async getOne({ id }: { id: number }) {
    try {
      const data = await this.fetchData();

      return data.find(
        (item: BlogProps | CategoryProps | any) => item.id === id
      );
    } catch (e) {
      return null;
    }
  }

  async getPaginated({
    page = 1,
    pageSize = Number(process.env.PAGINATION_COUNT),
    category_id,
    language_id,
    user_id,
  }: {
    page: number;
    pageSize: number;
    category_id?: number;
    language_id?: number;
    user_id?: number;
  }) {
    try {
      const data = await this.fetchData();

      let filteredData;

      if ((this.serviceName = "blogs") && data != null) {
        if (language_id) {
          filteredData = data!.filter(
            (item: BlogProps) => item.language_id === language_id
          );
        }
        if (category_id) {
          filteredData = data!.filter(
            (item: BlogProps) => item.category_id === category_id
          );
        }
        if (user_id) {
          filteredData = data!.filter(
            (item: BlogProps) => item.user_id === user_id
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
        language_code: "en",
        content: data.content.slice(0, 200),
      }));

      return { paginatedData: paginatedData, totalLength: filteredData.length };
    } catch (e) {
      return null;
    }
  }
}
