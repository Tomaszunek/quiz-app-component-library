import type { Story } from "@storybook/react";
import type { Meta } from "@storybook/react/types-6-0";

import type { AnswersGridWrapperProps } from "./AnswersGridWrapper";
import { AnswersGridWrapper } from "./AnswersGridWrapper";

export default {
  component: AnswersGridWrapper,
  title: "Molecules/AnswersGridWrapper",
} as Meta;

const Template: Story<AnswersGridWrapperProps> = (args) => (
  <AnswersGridWrapper {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  answers: [
    {
      answerText: "question1",
      nextQuestionId: "n-1",
    },
    {
      answerText: "question2",
      nextQuestionId: "n-2",
    },
    {
      answerText: "question3",
      nextQuestionId: "n-3",
    },
    {
      answerText: "question4",
      nextQuestionId: "n-4",
    },
  ],
};
