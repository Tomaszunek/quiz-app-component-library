import type { AnswerType } from "./Answer";
import type { QuestionIdType, QuestionTextType } from "./TypesComponents";

export type QuestionType = {
  id: QuestionIdType;
  questionText: QuestionTextType;
  answers: AnswerType[];
};
