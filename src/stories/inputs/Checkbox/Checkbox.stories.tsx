import type {Meta, StoryObj} from "@storybook/react"
import Checkbox from "./Checkbox"
import {useState} from "react"

const meta: Meta<typeof Checkbox> = {
  title: "INPUTS/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props = {
  label: "I agree to the T&Cs",
}

const CheckboxTemplate: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
      <Checkbox
        {...args}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
    )
  },
}

export const Default: Story = {
  ...CheckboxTemplate,
  args: {
    ...props,
  },
}
export const Red: Story = {
  ...CheckboxTemplate,
  args: {
    ...props,
    color: "red",
  },
}
export const Required: Story = {
  ...CheckboxTemplate,
  args: {
    ...props,
    required: true,
  },
}
export const WithError: Story = {
  ...CheckboxTemplate,
  args: {
    ...props,
    error: "Must consent to the terms & conditions",
  },
}
export const Disabled: Story = {
  ...CheckboxTemplate,
  args: {
    ...props,
    disabled: true,
  },
}
