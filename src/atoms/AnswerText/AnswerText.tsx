export type AnswerTextProps = {
  answer: string;
};

export function AnswerText({ answer }: AnswerTextProps): JSX.Element {
  return <div>{answer}</div>;
}
