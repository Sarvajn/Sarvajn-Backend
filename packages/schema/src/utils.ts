import * as z from "zod";

export const timestamp = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const location = z.object({
  city: z.string(),
  start: z.string(),
  country: z.string(),
  pincode: z.string(),
});
