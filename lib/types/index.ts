import { IconName } from "./icons";

export interface News {
  id: number;
  title: string;
  date: string;
  link: string;
}

export interface Category {
  id: number;
  name: string;
  icon: IconName;
  link?: string;
}

export interface Afisha {
  id: number;
  title: string;
  image: string;
  tags: string;
  link?: string;
}

export interface Rabota {
  id: number;
  companyName: string;
  logo?: string;
  vacancies: number;
  link?: string;
}

export interface Eda {
  id: number;
  image: string;
}

export const TAG_COLORS = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  green: "bg-green-100 text-green-700 border-green-200",
  red: "bg-red-100 text-red-700 border-red-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
} as const;

export type TagColor = keyof typeof TAG_COLORS;

export interface Tag {
  name: string;
  color: TagColor;
}

export interface Widget {
  title: string;
  description?: string;
  image: string;
  tags?: Tag[];
  link?: string;
}
