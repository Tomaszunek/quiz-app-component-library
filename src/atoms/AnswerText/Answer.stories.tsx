import type { Story } from "@storybook/react";
import type { Meta } from "@storybook/react/types-6-0";
import React from "react";

import type { AnswerTextProps } from "./AnswerText";
import { AnswerText } from "./AnswerText";

export default {
  component: AnswerText,
  title: "Atoms/AnswerText",
} as Meta;

const Template: Story<AnswerTextProps> = (args) => <AnswerText {...args} />;

export const Simple = Template.bind({});
Simple.args = { children: "answer" };
