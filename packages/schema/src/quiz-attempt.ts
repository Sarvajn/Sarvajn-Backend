import * as z from "zod";
import { timestamp } from "./utils";
import { _QuestionType } from "./quiz";

const BaseAnswerSchema = z.object({
  id: z.number(),
});

export const QuestionAttemptSchema = z.object({
  attempt: z.discriminatedUnion("type", [
    BaseAnswerSchema.extend({
      type: z.literal(_QuestionType.enum.SingleChoice),
      answer: z.string(),
    }),
    BaseAnswerSchema.extend({
      type: z.literal(_QuestionType.enum.MultipleChoice),
      answer: z.array(z.string()),
    }),
  ]),
  score: z.number().min(0).max(0),
  createdAt: z.date(),
});

export const QuizAttemptSchema = z
  .object({
    id: z.uuid(),
    quiz: z.uuid(),
    bestScore: z.number().min(0).max(0),
    attempts: z.array(QuestionAttemptSchema),
  })
  .extend(timestamp);
