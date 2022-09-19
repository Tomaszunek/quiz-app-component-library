import type { Story } from "@storybook/react";
import type { Meta } from "@storybook/react/types-6-0";

import type { QuestionViewProps } from "./QuestionView";
import { QuestionView } from "./QuestionView";

export default {
  component: QuestionView,
  title: "Templates/QuestionView",
} as Meta;

const Template: Story<QuestionViewProps> = (args) => <QuestionView {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  answers: [
    {
      answerText: "answer-1",
      nextQuestionId: "n-1",
    },
  ],
  questionText: "What is Your question",
};
