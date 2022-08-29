import { QuestionText } from "../../atoms";
import { AnswersWrapper } from "../../molecules";
import type { AnswerType } from "../../types/Answer";

export type QuestionProps = {
  answers: AnswerType[];
  questionText: string;
};

export function Question({
  answers,
  questionText,
}: QuestionProps): JSX.Element {
  return (
    <div>
      <QuestionText questionText={questionText} />
      <AnswersWrapper answers={answers} />
    </div>
  );
}
