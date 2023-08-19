import type {Meta, StoryObj} from "@storybook/react"

import Notification from "./Notification"

const meta = {
  title: "FEEDBACK/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Notification>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    onXClick: () => {},
    isVisible: true,
    color: "success",
    message: "This is a message...",
    title: "Success",
    position: {
      top: "10%",
      right: "10px",
    },
  },
}

export const Success: Story = {
  args: {
    ...props.args,
  },
}
export const SuccessNoTitle: Story = {
  args: {
    ...props.args,
    message: "",
  },
}
export const Pending: Story = {
  args: {
    ...props.args,
    title: "Pending",
    color: "pending",
  },
}
export const Fail: Story = {
  args: {
    ...props.args,
    title: "Fail",
    color: "fail",
  },
}
