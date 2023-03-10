import { action } from "@storybook/addon-actions"
import { ComponentMeta, Story } from "@storybook/react"
import { LoginPageView, LoginPageViewProps } from "./LoginPageView"

export default {
  title: "pages/LoginPageView",
  component: LoginPageView,
} as ComponentMeta<typeof LoginPageView>

const Template: Story<LoginPageViewProps> = (args) => (
  <LoginPageView {...args} />
)

export const Example = Template.bind({})
Example.args = {
  isLoading: false,
  onSignIn: action("onSignIn"),
  context: {},
}
