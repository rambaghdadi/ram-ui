import type {Meta, StoryObj} from "@storybook/react"
import TextInput from "./TextInput"

const meta = {
  title: "INPUTS/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>

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
