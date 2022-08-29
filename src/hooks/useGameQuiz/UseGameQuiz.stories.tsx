import type { Story } from "@storybook/react";
import type { Meta } from "@storybook/react/types-6-0";
import { QuestionView } from "../../templates";

import type { UseGameQuizProps } from "./useGameQuiz";
import { useGameQuiz } from "./useGameQuiz";

const GAME_QUIZ_PROPS: UseGameQuizProps = {
  quizSet: {
    questions: [
      {
        answers: [
          {
            answerText: "que-1",
            nextQuestionId: "n-1",
          },
          {
            answerText: "que-2",
            nextQuestionId: "n-2",
          },
          {
            answerText: "que-3",
            nextQuestionId: "n-3",
          },
          {
            answerText: "que-4",
            nextQuestionId: "n-4",
          },
          {
            answerText: "que-5",
            nextQuestionId: "n-5",
          },
          {
            answerText: "que-6",
            nextQuestionId: "n-6",
          },
        ],
        id: "question1",
        questionText: "question1",
      },
    ],
  },
};

const UseGameQuizExample = (gameQuizProps: UseGameQuizProps): JSX.Element => {
  const { answers, questionText } = useGameQuiz(gameQuizProps);
  return <QuestionView answers={answers} questionText={questionText} />;
};

export default {
  component: UseGameQuizExample,
  title: "Hooks/UseGameQuiz",
} as Meta;

const Template: Story<UseGameQuizProps> = (args) => (
  <UseGameQuizExample {...args} />
);

export const Simple = Template.bind({});
Simple.args = GAME_QUIZ_PROPS;
