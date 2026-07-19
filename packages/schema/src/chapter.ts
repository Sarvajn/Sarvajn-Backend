import * as z from "zod";
import { timestamp } from "./utils";

const ChapterContentSchema = z.object({
  video: z.url().nullable(),
  audio: z.url().nullable(),
  image: z.url().nullable(),
  text: z.string().nullable(),
});

const BaseChapterSchema = z
  .object({
    id: z.uuid(),
    module: z.uuid(),
    title: z.string(),
    subtitle: z.string().nullable(),
    content: ChapterContentSchema,
  })
  .extend(timestamp.shape);

export const AdminChapterSchema = BaseChapterSchema.extend({
  isPublished: z.boolean(),
  publishedAt: z.date(),
});
export type AdminChapter = z.infer<typeof AdminChapterSchema>;

export const ChapterSchema = BaseChapterSchema;
export type Chapter = z.infer<typeof ChapterSchema>;
