import React from 'react'

import DiscordButton from './index'

export default {
  title: 'components/DiscordButton',
  component: DiscordButton
}

const Template = (args) => <DiscordButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Sign in with Discord'
}