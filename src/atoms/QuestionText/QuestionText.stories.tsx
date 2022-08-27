import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { QuestionText, QuestionTextProps } from './QuestionText'

export default {
  component: QuestionText,
  title: 'Atoms/QuestionText',
} as Meta

const Template: Story<QuestionTextProps> = (args) => <QuestionText {...args} />

export const Simple = Template.bind({})
Simple.args = { questionText: 'Question text' }
