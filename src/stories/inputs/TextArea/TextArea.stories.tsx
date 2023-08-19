import type {Meta, StoryObj} from "@storybook/react"
import TextArea from "./TextArea"

const meta = {
  title: "INPUTS/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    id: "textArea",
    name: "textArea",
    placeholder: "Placeholder",
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
export const WithUncontrolledValue: Story = {
  args: {
    ...props.args,
    value: "Hello World",
  },
}
export const Error: Story = {
  args: {
    ...props.args,
    error: "This is an error message.",
  },
}
export const Disabled: Story = {
  args: {
    ...props.args,
    disabled: true,
  },
}
export const Required: Story = {
  args: {
    ...props.args,
    required: true,
  },
}
