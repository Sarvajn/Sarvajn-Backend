import * as z from "zod";
import { timestamp } from "./utils";

export const _QuestionType = z.enum(["SingleChoice", "MultipleChoice"]);
const QuizCategory = z.enum(["Course", "Module"]);

const BaseQuestionAttachment = z.object({
  video: z.url().nullable(),
  audio: z.url().nullable(),
  text: z.url().nullable(),
});

const BaseQuestionSchema = z.object({
  id: z.number(),
  question: z.string(),
  attachment: BaseQuestionAttachment.nullable(),
  points: z.number().default(0),
});

export const QuestionSchema = z.discriminatedUnion("type", [
  BaseQuestionSchema.extend({
    type: z.literal(_QuestionType.enum.SingleChoice),
    answer: z.string(),
  }),
  BaseQuestionSchema.extend({
    type: z.literal(_QuestionType.enum.MultipleChoice),
    answer: z.array(z.string()),
  }),
]);
export type Question = z.infer<typeof QuestionSchema>;

const BaseQuizSchema = z
  .object({
    id: z.uuid(),
    questions: z.array(QuestionSchema),
    cutOff: z.number().min(0).max(100),
    // reshuffle: z.boolean().default(false),
  })
  .extend(timestamp.shape);

export const QuizSchema = z.discriminatedUnion("category", [
  BaseQuizSchema.extend({
    category: z.literal(QuizCategory.enum.Course),
    course: z.uuid(),
  }),
  BaseQuizSchema.extend({
    category: z.literal(QuizCategory.enum.Module),
    module: z.uuid(),
  }),
]);
export type Quiz = z.infer<typeof QuizSchema>;
