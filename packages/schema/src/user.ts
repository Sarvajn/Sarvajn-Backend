import * as z from "zod";
import { location, timestamp } from "./utils";

const BaseUserSchema = z
  .object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    isActive: z.boolean(),
  })
  .extend(timestamp);

export const AdminUserSchema = BaseUserSchema.extend({
  id: z.number(),
  addedBy: z.number().nullable(),
});
export type AdminUser = z.infer<typeof AdminUserSchema>;

export const UserSchema = BaseUserSchema.extend({
  id: z.uuid(),
  location: location.nullable(),
});
export type User = z.infer<typeof UserSchema>;
