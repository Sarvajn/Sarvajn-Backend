import * as z from "zod";
import { timestamp } from "./utils";

const BaseModuleSchema = z
  .object({
    id: z.uuid(),
    course: z.uuid(),
    title: z.string(),
    description: z.string().nullable(),
  })
  .extend(timestamp);

export const AdminModuleSchema = BaseModuleSchema.extend({
  isPublished: z.string(),
  publishedAt: z.date(),
});
export type AdminModule = z.infer<typeof AdminModuleSchema>;

export const ModuleSchema = BaseModuleSchema;
export type Module = z.infer<typeof ModuleSchema>;
