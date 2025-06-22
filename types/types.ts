type LocaleProps = {
  [key in LocaleKeys]: {
    label: LocaleLabels;
  };
};

export type BlogProps = {
  id: number;
  title: string;
  content: string;
  user_id: number;
  category_id: number;
  language_id: number;
};

export type CategoryProps = {
  id: number;
  name: CategoryNames;
};

export type LocaleOptions = LocaleProps;
export type Categories = CategoryProps[];
export type Blogs = BlogProps[];

type LocaleKeys = "en" | "tr";
type LocaleLabels = "english" | "türkçe";

type CategoryNames =
  | "Positive"
  | "Grow"
  | "Charge"
  | "Trade"
  | "Certain"
  | "Night"
  | "Lead"
  | "Key"
  | "Beautiful"
  | "Stage";
