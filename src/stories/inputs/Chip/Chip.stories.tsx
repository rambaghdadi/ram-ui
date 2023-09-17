import type {Meta, StoryObj} from "@storybook/react"
import Chip from "./Chip"
import {useState} from "react"

const meta: Meta<typeof Chip> = {
  title: "INPUTS/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props = {
  allowMultiSelection: true,
}

const ChipTemplate: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(["theOffice"])

    const options = [
      {
        label: "Friends",
        value: "friends",
      },
      {
        label: "Community",
        value: "community",
      },
      {
        label: "IASIP",
        value: "iasip",
      },
      {
        label: "The Office",
        value: "theOffice",
      },
      {
        label: "Modern Family",
        value: "modernFamily",
      },
    ]
    return <Chip {...args} {...{options, selected}} onSelect={setSelected} />
  },
}

export const Default: Story = {
  ...ChipTemplate,
  args: {
    ...props,
  },
}
export const OnlyOneSelection: Story = {
  ...ChipTemplate,
  args: {
    ...props,
    allowMultiSelection: false,
  },
}
export const Green: Story = {
  ...ChipTemplate,
  args: {
    ...props,
    color: "green",
  },
}
export const Disabled: Story = {
  ...ChipTemplate,
  args: {
    ...props,
    disabled: true,
  },
}
