import { z } from "astro/zod";

export const projectCategories = [
  "Web Projects",
  "Game Systems",
  "Visual Work",
] as const;

export const projectCategorySchema = z.enum(projectCategories);
export type ProjectCategory = (typeof projectCategories)[number];
