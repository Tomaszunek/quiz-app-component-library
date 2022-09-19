import { QuestionText } from "../../atoms";
import { AnswersGridWrapper } from "../../molecules";
import type { QuestionGridAnswerType } from "../../molecules/AnswersGridWrapper/AnswersGridWrapper";
import type { AllAnswerBodies, AllAnswerTypes } from "../../types/Question";
import type { QuestionIdType } from "../../types/TypesComponents";

export type QuestionProps = {
  answers: AllAnswerBodies;
  answerType: AllAnswerTypes;
  questionText: string;
  onClickAnswerHandler: (questionIdType: QuestionIdType) => void;
  type?: QuestionGridAnswerType;
};

export function Question({
  answers,
  answerType,
  onClickAnswerHandler,
  questionText,
  type,
}: QuestionProps): JSX.Element {
  return (
    <div>
      <QuestionText questionText={questionText} />
      <AnswersGridWrapper
        answers={answers}
        answerType={answerType}
        onClickAnswerHandler={onClickAnswerHandler}
        type={type}
      />
    </div>
  );
}
