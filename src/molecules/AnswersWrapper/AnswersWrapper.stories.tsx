import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { AnswersWrapper, AnswersWrapperProps } from './AnswersWrapper'

export default {
  component: AnswersWrapper,
  title: 'Molecules/AnswersWrapper',
} as Meta

const Template: Story<AnswersWrapperProps> = (args) => (
  <AnswersWrapper {...args} />
)

export const Simple = Template.bind({})
Simple.args = { answers: ['question1', 'question2', 'question3', 'question4'] }
