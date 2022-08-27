import { Question } from "../../organisms";

export type QuestionViewProps = {
  answers: string[];
  questionText: string;
};

export const QuestionView = ({ answers, questionText }: QuestionViewProps) => (
  <Question answers={answers} questionText={questionText} />
);
