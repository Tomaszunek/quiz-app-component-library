import { Question } from "../../organisms";

export type QuestionViewProps = {
  answers: string[];
  questionText: string;
};

export function QuestionView({
  answers,
  questionText,
}: QuestionViewProps): JSX.Element {
  return <Question answers={answers} questionText={questionText} />;
}
