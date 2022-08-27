import { AnswerText } from "../../atoms";

export type QuestionGridType =
  | "auto"
  | "grid-cols-2"
  | "grid-cols-3"
  | "grid-rows-2"
  | "grid-rows-3"
  | "horizontal"
  | "vertical";

export type AnswersWrapperProps = {
  answers: string[];
  type?: QuestionGridType;
};

const SINGLE_ANSWER = 1;
const TWO_ANSWERS = 2;

const calculateGridClassOnAuto = (itemCount: number): string => {
  switch (itemCount) {
    case SINGLE_ANSWER:
      return "";
    case TWO_ANSWERS:
      return "grid-cols-2";
    default:
      return "";
  }
};

export const AnswersWrapper = ({
  answers,
  type = "auto",
}: AnswersWrapperProps) => {
  if (!answers) {
    throw Error("Answers must exists, and ");
  }
  let wrapperClass = "";
  switch (type) {
    case "auto":
      wrapperClass = calculateGridClassOnAuto(answers?.length);
      break;
    case "horizontal":
      wrapperClass = "grid-flow-col";
      break;
    case "vertical":
      wrapperClass = "grid-flow-row";
      break;
    default:
      wrapperClass = type;
      break;
  }
  return (
    <div className={`grid ${wrapperClass}`}>
      {answers?.map((answer) => (
        <AnswerText key={answer} answer={answer} />
      ))}
    </div>
  );
};
