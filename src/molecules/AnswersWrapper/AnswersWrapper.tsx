import { AnswerText } from "../../atoms";

export type QuestionGridType =
  | "auto"
  | "grid-cols-2"
  | "grid-cols-3"
  | "grid-rows-2"
  | "grid-rows-3"
  | "horizontal"
  | "vertical";

export type AnswersWrapperProps = {
  answers: string[];
  type?: QuestionGridType;
};

export function AnswersWrapper({
  answers,
  type = "auto",
}: AnswersWrapperProps): JSX.Element {
  return (
    <div>
      {answers.map((answer) => (
        <AnswerText key={answer} answer={answer} />
      ))}
    </div>
  );
}
