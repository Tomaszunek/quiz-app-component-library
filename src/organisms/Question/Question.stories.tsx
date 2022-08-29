import type { Story } from "@storybook/react";
import type { Meta } from "@storybook/react/types-6-0";

import type { QuestionProps } from "./Question";
import { Question } from "./Question";

export default {
  component: Question,
  title: "Organisms/Question",
} as Meta;

const Template: Story<QuestionProps> = (args) => <Question {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  answers: [
    {
      answerText: "question1",
      nextQuestionId: "next-1",
    },
    {
      answerText: "question2",
      nextQuestionId: "next-2",
    },
  ],
};
