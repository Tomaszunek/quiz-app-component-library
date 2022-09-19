import type { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import type { AnswerTypeWithText } from "../../types/Answer";
import type { QuestionIdType } from "../../types/TypesComponents";

export type AnswerTextProps = AnswerTypeWithText &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    type?: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["type"]>;
    onClickAnswerHandler: (questionIdType: QuestionIdType) => void;
  };

const AnswerTextButton = styled.button`
  width: 100%;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-delay: 75ms;
  &:hover {
    background-color: #e1e1e1;
  }
`;

export function AnswerText({
  type = "button",
  onClickAnswerHandler,
  nextQuestionId,
  answerText,
}: AnswerTextProps): JSX.Element {
  return (
    <AnswerTextButton
      onClick={(): void => {
        onClickAnswerHandler(nextQuestionId);
      }}
      type={type}
    >
      {answerText}
    </AnswerTextButton>
  );
}
