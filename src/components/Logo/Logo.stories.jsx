import Logo from './index'

export default {
  title: 'components/Logo',
  component: Logo
}

const Template = (args) => <Logo {...args} />

export const Default = Template.bind({})