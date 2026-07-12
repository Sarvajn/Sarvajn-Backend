export * from "./user";
export * from "./course";
export * from "./module";
export * from "./chapter";
export * from "./quiz";
export * from "./progress";
export * from "./quiz-attempt";
export * from "./certificate";

import * as user from "./user";
import * as course from "./course";
import * as courseModule from "./module";
import * as chapter from "./chapter";
import * as quiz from "./quiz";
import * as progress from "./progress";
import * as quizAttempt from "./quiz-attempt";
import * as certificate from "./certificate";

export default {
  user,
  course,
  module: courseModule,
  chapter,
  quiz,
  progress,
  quizAttempt,
  certificate,
};
