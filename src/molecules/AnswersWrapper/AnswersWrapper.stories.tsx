import type { Story } from "@storybook/react";
import type { Meta } from "@storybook/react/types-6-0";
import React from "react";

import type { AnswersWrapperProps } from "./AnswersWrapper";
import { AnswersWrapper } from "./AnswersWrapper";

export default {
  component: AnswersWrapper,
  title: "Molecules/AnswersWrapper",
} as Meta;

const Template: Story<AnswersWrapperProps> = (args) => (
  <AnswersWrapper {...args} />
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
