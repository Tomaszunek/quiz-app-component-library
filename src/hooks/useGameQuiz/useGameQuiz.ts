export type UseGameQuizProps = {
  debug?: boolean;
};

export type UseGameQuizResult = {
  currentQuestion: string;
};

export const useGameQuiz = ({
  debug = false,
}: UseGameQuizProps): UseGameQuizResult => {
  const currentQuestion = "current-question";
  if (debug) {
  }

  return {
    currentQuestion,
  };
};
