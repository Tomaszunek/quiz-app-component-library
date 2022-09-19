import styled from "styled-components";
import type { DefaultTheme, StyledComponent } from "styled-components";
import { DEVICE_SIZES } from "../../typography/sizes";
import type { QuestionIdType } from "../../types/TypesComponents";
import { AnswerWrapper } from "../AnswerWrapper";
import type { AllAnswerBodies, AllAnswerTypes } from "../../types/Question";
import { UnreachableCaseError } from "../../utils/errors";

const GRID_ANSWER_WRAPPER_GAP = "8px";
const SINGLE_ANSWER = 1;
const TWO_ANSWERS = 2;
const THREE_ANSWERS = 3;
const FOUR_ANSWER = 4;
const FIVE_ANSWERS = 5;
const SIX_ANSWERS = 6;
const SEVEN_ANSWER = 7;
const EIGHT_ANSWERS = 8;
const NINE_ANSWERS = 9;
const ANSWERS_DIVIDED_BY_3 = 3;
const DIVIDE_RESULT_ZERO = 0;

export type QuestionGridAnswerType =
  | "auto"
  | "grid-cols-2"
  | "grid-cols-3"
  | "horizontal"
  | "vertical";

const WrapperDivFlex = styled.div<AnswersWrapperDivProps>`
  display: grid;
  gap: ${GRID_ANSWER_WRAPPER_GAP};
`;

const WrapperDivGridSingleColumn = styled(
  WrapperDivFlex
)<AnswersWrapperDivProps>`
  grid-template-columns: 1fr;
`;

const WrapperDivGridTwoColumns = styled(WrapperDivFlex)<AnswersWrapperDivProps>`
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${DEVICE_SIZES.TABLET}) {
    grid-template-columns: 1fr;
  }
`;

const WrapperDivGridThreeColumns = styled(
  WrapperDivFlex
)<AnswersWrapperDivProps>`
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${DEVICE_SIZES.TABLET}) {
    grid-template-columns: 1fr;
  }
`;

type AnswersWrapperDivProps = {
  type: QuestionGridAnswerType;
};

type StyledComponentWrapper = StyledComponent<
  "div",
  DefaultTheme,
  AnswersWrapperDivProps
>;

const styledAutoBaseOnAnswerCount = (
  answersCount: number
): StyledComponentWrapper => {
  switch (answersCount) {
    case SINGLE_ANSWER:
      return WrapperDivFlex;
    case TWO_ANSWERS:
    case FOUR_ANSWER:
    case FIVE_ANSWERS:
      return WrapperDivGridTwoColumns;
    case THREE_ANSWERS:
    case SIX_ANSWERS:
    case SEVEN_ANSWER:
    case EIGHT_ANSWERS:
    case NINE_ANSWERS:
      return WrapperDivGridThreeColumns;
    default:
      return answersCount % ANSWERS_DIVIDED_BY_3 === DIVIDE_RESULT_ZERO
        ? WrapperDivGridThreeColumns
        : WrapperDivGridTwoColumns;
  }
};

const stylesBaseOnWrapperType = (
  answersCount: number,
  type: QuestionGridAnswerType
): StyledComponentWrapper => {
  switch (type) {
    case "auto":
      return styledAutoBaseOnAnswerCount(answersCount);
    case "grid-cols-2":
      return WrapperDivGridTwoColumns;
    case "grid-cols-3":
      return WrapperDivGridThreeColumns;
    case "vertical":
      return WrapperDivGridSingleColumn;
    case "horizontal":
      return styled(WrapperDivFlex)<AnswersWrapperDivProps>`
        grid-template-columns: repeat(${answersCount}, 1fr);
      `;
    default:
      return UnreachableCaseError(type);
  }
};

export type AnswersGridWrapperProps = {
  answers: AllAnswerBodies;
  type?: QuestionGridAnswerType;
  onClickAnswerHandler: (questionIdType: QuestionIdType) => void;
  answerType: AllAnswerTypes;
};

export function AnswersGridWrapper({
  answers,
  onClickAnswerHandler,
  type = "auto",
  answerType,
}: AnswersGridWrapperProps): JSX.Element {
  const answersCount = answers.length;
  const AnswerWrapperDiv = stylesBaseOnWrapperType(answersCount, type);
  return (
    <AnswerWrapperDiv type={type}>
      {answers.map((props) => (
        <AnswerWrapper
          // eslint-disable-next-line react/prop-types
          key={props.nextQuestionId}
          {...props}
          answerType={answerType}
          onClickAnswerHandler={onClickAnswerHandler}
        />
      ))}
    </AnswerWrapperDiv>
  );
}
