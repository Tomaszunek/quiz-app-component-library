import { useState } from "react";
import type { QuestionGridAnswerType } from "../../molecules/AnswersGridWrapper/AnswersGridWrapper";
import type {
  AllAnswerBodies,
  AllAnswerTypes,
  AllQuestionBodies,
  AllQuestionTypes,
  QuestionType,
} from "../../types/Question";
import type { QuizSetType } from "../../types/QuizSet";
import type { QuestionIdType } from "../../types/TypesComponents";

export type UseGameQuizProps = {
  debug?: boolean;
  firstQuestionId: QuestionIdType;
  quizSet: QuizSetType;
};

export type UseGameQuizResult = {
  answers: AllAnswerBodies;
  answerType: AllAnswerTypes;
  currentQuestionId: QuestionIdType;
  handleChangeQuestionId: (questionIdType: QuestionIdType) => void;
  gridType?: QuestionGridAnswerType;
  question: AllQuestionBodies;
  questionType: AllQuestionTypes;
};

export const useGameQuiz = ({
  debug = false,
  firstQuestionId,
  quizSet,
}: UseGameQuizProps): UseGameQuizResult => {
  const { questions } = quizSet;
  const [currentQuestionId, setCurrentQuestionId] =
    useState<QuestionIdType>(firstQuestionId);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>(
    questions.find(({ id }) => id === currentQuestionId) ?? questions[0]
  );

  const handleChangeQuestionId = (questionIdType: QuestionIdType): void => {
    const newQuestion = questions.find(({ id }) => id === questionIdType);
    if (newQuestion) {
      setCurrentQuestionId(questionIdType);
      setCurrentQuestion(newQuestion);
    }
  };

  const {
    answers,
    id,
    questionType,
    gridType,
    questionAnswerType,
    questionBody,
  } = currentQuestion;
  return {
    currentQuestionId: id,
    handleChangeQuestionId,
    questionType,
    gridType,
    answers,
    answerType,
    question,
  };
};
