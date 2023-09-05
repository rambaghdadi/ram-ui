import type {Meta, StoryObj} from "@storybook/react"
import PasswordInput from "./PasswordInput"

const meta: Meta<typeof PasswordInput> = {
  title: "INPUTS/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    name: "exampleInput",
    id: "exampleInput",
    placeholder: "Placeholder",
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
export const WithPasswordStrength: Story = {
  args: {
    ...props.args,
    includePasswordStrength: true,
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
