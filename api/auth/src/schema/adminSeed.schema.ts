import { AdminUserSchema } from "@sarvajn/schema";
import * as z from "zod";

export const adminSeedItemSchema = AdminUserSchema.pick({
  id: true,
  name: true,
  email: true,
});

export const adminSeedSchema = z.array(adminSeedItemSchema);

export type AdminSeed = z.infer<typeof adminSeedItemSchema>;
