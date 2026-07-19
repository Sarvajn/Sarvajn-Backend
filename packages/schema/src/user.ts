import * as z from "zod";
import { location, timestamp } from "./utils";

const BaseUserSchema = z
  .object({
    id: z.uuid(),
    name: z.string(),
    email: z.email(),
    password: z.string(),
    isActive: z.boolean().default(true),
    refreshToken: z.string().nullable(),
  })
  .extend(timestamp.shape);

export const AdminUserSchema = BaseUserSchema.extend({
  addedBy: z.uuid().nullable(),
});
export type AdminUser = z.infer<typeof AdminUserSchema>;

export const UserSchema = BaseUserSchema.extend({
  location: location.nullable(),
});
export type User = z.infer<typeof UserSchema>;
