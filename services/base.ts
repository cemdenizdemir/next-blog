import { Categories } from "@/types/types";
import fs from "fs/promises";
import path from "path";

export class BaseService {
  serviceName: "categories" | "users" | "blogs";

  constructor(serviceName: "categories" | "users" | "blogs") {
    this.serviceName = serviceName;
  }

  async fetchData(): Promise<Categories | null> {
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
    const data = this.fetchData();
    return data;
  }

  async getPaginated({
    page = 1,
    pageSize = 10,
  }: {
    page: number;
    pageSize: number;
  }) {
    const data = await this.fetchData();

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = data!.slice(startIndex, endIndex);

    return paginatedData;
  }
}
