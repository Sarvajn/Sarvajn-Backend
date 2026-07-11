import * as z from "zod";

export const CertificateSchema = z.object({
  id: z.uuid(),
  course: z.object({
    title: z.string(),
    subTitle: z.string().nullable(),
  }),
  user: z.uuid(),
  score: z.number().min(0).max(100).nullable(),
  createdAt: z.date(),
});

export type Certificate = z.infer<typeof CertificateSchema>;
