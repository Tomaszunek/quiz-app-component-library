import type { QuestionGridAnswerType } from "../molecules/AnswersGridWrapper/AnswersGridWrapper";
import type { AnswerTypeWithText } from "./Answer";
import type { QuestionIdType, QuestionTextType } from "./TypesComponents";

export type QuestionType = {
  id: QuestionIdType;
  gridType?: QuestionGridAnswerType;
} & {
  questionAnswerType: "simpleAnswerType";
  answers: AnswerTypeWithText[];
} & {
  questionType: "simpleText";
  questionBody: QuestionTextType;
};

export type AllAnswerTypes = QuestionType["questionAnswerType"];
export type AllAnswerBodies = QuestionType["answers"];
export type AllQuestionTypes = QuestionType["questionType"];
export type AllQuestionBodies = QuestionType["questionBody"];
