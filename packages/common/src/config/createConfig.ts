import "dotenv/config";
import { z } from "zod";

export function createConfig<T extends z.ZodType>(
  schema: T
): Readonly<z.infer<T>> {
  const result = schema.safeParse(process.env);

  if (!result.success) {
    console.error(
      "❌ Invalid environment variables:",
      z.treeifyError(result.error)
    );

    throw new Error("Invalid environment configuration");
  }

  return Object.freeze(result.data);
}