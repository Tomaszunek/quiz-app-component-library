import styled from "styled-components";
import { AnswerText } from "../../atoms";

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

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
    <Title>
      {answers.map((answer) => (
        <AnswerText key={answer} answer={answer} />
      ))}
    </Title>
  );
}
