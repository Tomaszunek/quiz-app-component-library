export type QuestionTextProps = { questionText: string };

export function QuestionText({ questionText }: QuestionTextProps): JSX.Element {
  return <div>{questionText}</div>;
}
