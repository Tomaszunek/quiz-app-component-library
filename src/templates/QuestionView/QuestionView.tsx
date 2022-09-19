import { Question } from "../../organisms";
import type { AllAnswerBodies, AllAnswerTypes } from "../../types/Question";
import type { QuestionIdType } from "../../types/TypesComponents";

export type QuestionViewProps = {
  answers: AllAnswerBodies;
  answerType: AllAnswerTypes;
  questionText: string;
  onClickAnswerHandler: (questionIdType: QuestionIdType) => void;
};

export function QuestionView({
  answers,
  answerType,
  questionText,
  onClickAnswerHandler,
}: QuestionViewProps): JSX.Element {
  return (
    <Question
      answers={answers}
      answerType={answerType}
      onClickAnswerHandler={onClickAnswerHandler}
      questionText={questionText}
    />
  );
}
