import * as z from "zod";
import { timestamp } from "./utils";

const BaseCourseSchema = z
  .object({
    id: z.uuid(),
    category: z.string(),
    title: z.string(),
    subTitle: z.string().nullable(),
    description: z.string(),
    thumbnail: z.string().nullable(),
    objective: z.array(z.string()),
  })
  .extend(timestamp);

export const AdminCourseSchema = BaseCourseSchema.extend({
  isPublished: z.string(),
  publishedAt: z.date(),
});
export type AdminCourse = z.infer<typeof AdminCourseSchema>;

export const CourseSchema = BaseCourseSchema.extend({
  ennrollment: z.number().default(0),
});
export type Course = z.infer<typeof CourseSchema>;
