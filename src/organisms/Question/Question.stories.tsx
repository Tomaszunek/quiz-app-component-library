import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { Question, QuestionProps } from './Question'

export default {
  component: Question,
  title: 'Organisms/AnswersWrapper',
} as Meta

const Template: Story<QuestionProps> = (args) => <Question {...args} />

export const Simple = Template.bind({})
Simple.args = { answers: ['question1', 'question2'] }
