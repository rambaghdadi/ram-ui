import type {Meta, StoryObj} from "@storybook/react"
import NumberInput from "./NumberInput"
import {useState} from "react"

const meta: Meta<typeof NumberInput> = {
  title: "INPUTS/NumberInput",
  component: NumberInput,
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

const NumberInputTemplate: Story = {
  render: (args) => {
    const [value, setValue] = useState(0.0)

    console.log(value)
    return (
      <NumberInput
        {...props}
        {...args}
        value={value}
        onChange={setValue}
        min={0}
        max={1000}
      />
    )
  },
}

export const Default: Story = {
  ...NumberInputTemplate,
  args: {},
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
