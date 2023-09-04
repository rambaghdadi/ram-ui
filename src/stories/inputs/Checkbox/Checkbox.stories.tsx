import type {Meta, StoryObj} from "@storybook/react"
import Checkbox from "./Checkbox"
import {useState} from "react"

const meta: Meta<typeof Checkbox> = {
  title: "INPUTS/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
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
    id: "checkboxRed",
    name: "checkboxRedName",
  },
}
export const Required: Story = {
  ...CheckboxTemplate,
  args: {
    ...props,
    required: true,
    id: "checkboxReq",
    name: "checkboxReqName",
  },
}
export const WithError: Story = {
  ...CheckboxTemplate,
  args: {
    ...props,
    error: "Must consent to the terms & conditions",
    id: "checkboxErr",
    name: "checkboxErrName",
  },
}
export const Disabled: Story = {
  ...CheckboxTemplate,
  args: {
    ...props,
    disabled: true,
    id: "checkboxDisabled",
    name: "checkboxDisabledName",
  },
}
