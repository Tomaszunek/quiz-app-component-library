import type { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

export type AnswerTextProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode | ReactNode[];
  type?: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["type"]>;
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
  children,
  type = "button",
}: AnswerTextProps): JSX.Element {
  return <AnswerTextButton type={type}>{children}</AnswerTextButton>;
}
