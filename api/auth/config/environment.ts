import { z } from "zod";
import { createConfig } from "@sarvajn/config";

const environmentSchema = z.object({
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(32),
  PORT: z.coerce.number().int().positive().default(3000),
  NODE_ENV: z
    .enum(["development", "production"])
    .default("development"),
});

export const env = createConfig(environmentSchema);