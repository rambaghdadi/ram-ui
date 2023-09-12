import type {Meta, StoryObj} from "@storybook/react"
import Radio from "./Radio"
import {useState} from "react"

const meta: Meta<typeof Radio> = {
  title: "INPUTS/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const RadioTemplate: Story = {
  render: (args) => {
    const data = [
      {id: "macos", value: "macos", label: "macOS"},
      {id: "ios", value: "ios", label: "iOS"},
      {id: "ipados", value: "ipados", label: "iPadOS"},
    ]
    const [selected, setSelected] = useState("macos")

    return (
      <Radio
        {...args}
        {...{selected, data}}
        name="operatingSystem"
        onChange={(e) => setSelected(e.currentTarget.value)}
        legend="Select an operating system:"
      />
    )
  },
}

export const Default: Story = {
  ...RadioTemplate,
  args: {},
}

export const Disabled: Story = {
  ...RadioTemplate,
  args: {
    disabled: true,
    value: "na",
  },
}
