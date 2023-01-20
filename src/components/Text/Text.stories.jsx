import Text from './index'

export default {
  title: 'components/Title',
  component: Text
}

const Template = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Your text here',
  light: false
}

export const Light = Template.bind({})
Light.args = {
  children: 'Your text here',
  light: true
}