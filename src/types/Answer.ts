import type { AnswerTextType, QuestionIdType } from "./TypesComponents";

type AnswerType = {
  nextQuestionId: QuestionIdType;
};

export type AnswerTypeWithText = AnswerType & {
  answerText: AnswerTextType;
};
