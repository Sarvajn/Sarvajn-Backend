import * as z from "zod";

const BaseProgressSchema = z.object({
  id: z.uuid(),
  user: z.uuid(),
  completedAt: z.date(),
});

export const CourseProgressSchema = BaseProgressSchema.extend({
  course: z.uuid(),
});
export type CourseProgress = z.infer<typeof CourseProgressSchema>;

export const ModuleProgressSchema = BaseProgressSchema.extend({
  module: z.uuid(),
});
export type ModuleProgress = z.infer<typeof ModuleProgressSchema>;

export const ChapterProgressSchema = BaseProgressSchema.extend({
  chapter: z.uuid(),
});
export type ChapterProgress = z.infer<typeof ChapterProgressSchema>;
