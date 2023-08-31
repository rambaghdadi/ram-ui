import type {Meta, StoryObj} from "@storybook/react"
import Switch from "./Switch"
import {useState} from "react"

const meta: Meta<typeof Switch> = {
  title: "INPUTS/Switch",
  component: Switch,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props = {
  label: "I agree to sell",
}

const SwitchTemplate: Story = {
  render: (args) => {
    const [isOn, setIsOn] = useState(true)

    //@ts-ignore
    return <Switch value={isOn} {...args} onChange={setIsOn} />
  },
}

export const Default: Story = {
  ...SwitchTemplate,
  args: {
    ...props,
  },
}
export const Green: Story = {
  ...SwitchTemplate,
  args: {
    ...props,
    color: "green",
  },
}
export const Disabled: Story = {
  ...SwitchTemplate,
  args: {
    ...props,
    disabled: true,
    value: false,
  },
}
