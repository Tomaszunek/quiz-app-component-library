import { QuestionText } from "../../atoms";
import { AnswersWrapper } from "../../molecules";

export type QuestionProps = {
  answers: string[];
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
