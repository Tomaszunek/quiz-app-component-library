import { QuestionText } from "../../atoms";
import { AnswersWrapper } from "../../molecules";
import type { AnswerType } from "../../types/Answer";
import type { QuestionIdType } from "../../types/TypesComponents";

export type QuestionProps = {
  answers: AnswerType[];
  questionText: string;
  onClickAnswerHandler: (questionIdType: QuestionIdType) => void;
};

export function Question({
  answers,
  onClickAnswerHandler,
  questionText,
}: QuestionProps): JSX.Element {
  return (
    <div>
      <QuestionText questionText={questionText} />
      <AnswersWrapper
        answers={answers}
        onClickAnswerHandler={onClickAnswerHandler}
      />
    </div>
  );
}
