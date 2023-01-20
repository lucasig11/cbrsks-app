import InfoBox from './index'

export default {
  title: 'components/InfoBox',
  component: InfoBox
}

const Template = (args) => <InfoBox {...args} />

export const Warning = Template.bind({})
Warning.args = {
  title: 'During Closed Alpha, you may face some bugs.',
  info: 'We appreciate your feedback.'
}