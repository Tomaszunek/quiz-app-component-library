import { QuestionText } from "../../atoms";
import { AnswersWrapper } from "../../molecules";

export type QuestionProps = {
  answers: string[];
  questionText: string;
};

export const Question = ({ answers, questionText }: QuestionProps) => {
  return (
    <div>
      <QuestionText questionText={questionText} />
      <AnswersWrapper answers={answers} />
    </div>
  );
};
