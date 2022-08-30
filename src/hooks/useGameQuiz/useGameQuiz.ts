import { useState } from "react";
import type { AnswerType } from "../../types/Answer";
import type { QuestionType } from "../../types/Question";
import type { QuizSetType } from "../../types/QuizSet";
import type {
  QuestionIdType,
  QuestionTextType,
} from "../../types/TypesComponents";

export type UseGameQuizProps = {
  debug?: boolean;
  firstQuestionId: QuestionIdType;
  quizSet: QuizSetType;
};

export type UseGameQuizResult = {
  questionText: QuestionTextType;
  answers: AnswerType[];
  currentQuestionId: QuestionIdType;
  handleChangeQuestionId: (questionIdType: QuestionIdType) => void;
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

  const { answers, id, questionText } = currentQuestion;
  return {
    answers,
    currentQuestionId: id,
    handleChangeQuestionId,
    questionText,
  };
};
