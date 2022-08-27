import type { Story } from "@storybook/react";
import type { Meta } from "@storybook/react/types-6-0";
import React from "react";

import type { QuestionTextProps } from "./QuestionText";
import { QuestionText } from "./QuestionText";

export default {
  component: QuestionText,
  title: "Atoms/QuestionText",
} as Meta;

const Template: Story<QuestionTextProps> = (args) => <QuestionText {...args} />;

export const Simple = Template.bind({});
Simple.args = { questionText: "Question text" };
