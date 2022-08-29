import type { AnswerType } from "../../types/Answer";
import type { QuizSetType } from "../../types/QuizSet";
import type {
  QuestionIdType,
  QuestionTextType,
} from "../../types/TypesComponents";

export type UseGameQuizProps = {
  debug?: boolean;
  quizSet: QuizSetType;
};

export type UseGameQuizResult = {
  questionText: QuestionTextType;
  answers: AnswerType[];
  id: QuestionIdType;
};

export const useGameQuiz = ({
  debug = false,
  quizSet,
}: UseGameQuizProps): UseGameQuizResult => {
  const { questions } = quizSet;
  const { answers, id, questionText } = questions[0];

  return {
    answers,
    id,
    questionText,
  };
};
