import type { ReactNode } from "react";
import type { AllAnswerBodies, AllAnswerTypes } from "../../types/Question";
import type { QuestionIdType } from "../../types/TypesComponents";
import { UnreachableCaseError } from "../../utils/errors";
import { AnswerText } from "../../atoms/AnswerText";

export type AnswerWrapperProps = {
  onClickAnswerHandler: (questionIdType: QuestionIdType) => void;
  answerType: AllAnswerTypes;
} & { answers: AllAnswerBodies };

export const AnswerWrapper = ({
  answerType,
  answers,
  onClickAnswerHandler,
}: AnswerWrapperProps): ReactNode | ReactNode[] => {
  let answerComponent = null;
  switch (answerType) {
    case "simpleAnswerType":
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      answerComponent = answers.map(({ answerText, nextQuestionId }) => (
        <AnswerText
          key={nextQuestionId}
          answerText={answerText}
          nextQuestionId={nextQuestionId}
          onClickAnswerHandler={onClickAnswerHandler}
        />
      ));
      break;
    default:
      return UnreachableCaseError(answerType);
  }
  return <>{answerComponent}</>;
};
