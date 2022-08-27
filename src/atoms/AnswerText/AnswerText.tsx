export type AnswerTextProps = {
  answer: string;
};

export const AnswerText = ({ answer }: AnswerTextProps) => (
  <div className="border p-4 shadow transition w-full delay-75 hover:bg-slate-200">
    {answer}
  </div>
);
