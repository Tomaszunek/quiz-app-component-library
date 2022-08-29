import type { QuestionTextType } from "../../types/TypesComponents";

export type QuestionTextProps = { questionText: QuestionTextType };

export function QuestionText({ questionText }: QuestionTextProps): JSX.Element {
  return <div>{questionText}</div>;
}
