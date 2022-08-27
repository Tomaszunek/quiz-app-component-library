import type { Story } from "@storybook/react";
import type { Meta } from "@storybook/react/types-6-0";
import React from "react";

import type { QuestionViewProps } from "./QuestionView";
import { QuestionView } from "./QuestionView";

export default {
  component: QuestionView,
  title: "Templates/QuestionView",
} as Meta;

const Template: Story<QuestionViewProps> = (args) => <QuestionView {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  answers: ["question1", "question2"],
  questionText: "What is Your question",
};
