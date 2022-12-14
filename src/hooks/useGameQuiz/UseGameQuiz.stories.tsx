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
      {
        answers: [
          {
            answerText: "ans-1-1",
            nextQuestionId: "n-1-1",
          },
        ],
        id: "n-1",
        questionText: "question2",
      },
      {
        answers: [
          {
            answerText: "ans-2-1",
            nextQuestionId: "n-2-1",
          },
        ],
        id: "n-2",
        questionText: "question3",
      },
      {
        answers: [
          {
            answerText: "ans-3-1",
            nextQuestionId: "n-3-1",
          },
        ],
        id: "n-3",
        questionText: "question4",
      },
      {
        answers: [
          {
            answerText: "ans-1-1-1",
            nextQuestionId: "n-1-1-1",
          },
        ],
        id: "n-1-1",
        questionText: "question5",
      },
      {
        answers: [
          {
            answerText: "ans-2-1-1",
            nextQuestionId: "n-2-1-1",
          },
        ],
        id: "n-2-1",
        questionText: "question6",
      },
      {
        answers: [
          {
            answerText: "ans-3-1-1",
            nextQuestionId: "n-3-1-1",
          },
        ],
        id: "n-3-1",
        questionText: "question7",
      },
    ],
  },
  firstQuestionId: "question1",
};

const UseGameQuizExample = (gameQuizProps: UseGameQuizProps): JSX.Element => {
  const question = useGameQuiz(gameQuizProps);
  const { answers, handleChangeQuestionId, questionText } = question;
  return (
    <QuestionView
      answers={answers}
      onClickAnswerHandler={handleChangeQuestionId}
      questionText={questionText}
    />
  );
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
