import { Question } from "../../organisms";
import type { AnswerType } from "../../types/Answer";

export type QuestionViewProps = {
  answers: AnswerType[];
  questionText: string;
};

export function QuestionView({
  answers,
  questionText,
}: QuestionViewProps): JSX.Element {
  return <Question answers={answers} questionText={questionText} />;
}
