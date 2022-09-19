import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import { AnswerWrapper, AnswerWrapperProps } from "./AnswerWrapper";

export default {
  component: AnswerWrapper,
  title: "Molecules/AnswerWrapper",
} as Meta;

const Template: Story<AnswerWrapperProps> = (args) => (
  <AnswerWrapper {...args} />
);

export const Simple = Template.bind({});
Simple.args = {};
