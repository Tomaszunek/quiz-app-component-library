import type { Story } from "@storybook/react";
import type { Meta } from "@storybook/react/types-6-0";
import { QuestionView } from "../../templates";

import type { UseGameQuizProps } from "./useGameQuiz";
import { useGameQuiz } from "./useGameQuiz";

const GAME_QUIZ_PROPS: UseGameQuizProps = {};

const UseGameQuizExample = (gameQuizProps: UseGameQuizProps): JSX.Element => {
  const { currentQuestion } = useGameQuiz(gameQuizProps);
  return <QuestionView answers={[]} questionText={currentQuestion} />;
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
