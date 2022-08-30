import { Question } from "../../organisms";
import type { AnswerType } from "../../types/Answer";
import type { QuestionIdType } from "../../types/TypesComponents";

export type QuestionViewProps = {
  answers: AnswerType[];
  questionText: string;
  onClickAnswerHandler: (questionIdType: QuestionIdType) => void;
};

export function QuestionView({
  answers,
  questionText,
  onClickAnswerHandler,
}: QuestionViewProps): JSX.Element {
  return (
    <Question
      answers={answers}
      onClickAnswerHandler={onClickAnswerHandler}
      questionText={questionText}
    />
  );
}
