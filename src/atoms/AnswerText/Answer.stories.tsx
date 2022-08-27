import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { AnswerText, AnswerTextProps } from './AnswerText'

export default {
  component: AnswerText,
  title: 'Atoms/AnswerText',
} as Meta

const Template: Story<AnswerTextProps> = (args) => <AnswerText {...args} />

export const Simple = Template.bind({})
Simple.args = { answer: 'answer' }
