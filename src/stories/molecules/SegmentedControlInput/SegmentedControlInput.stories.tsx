import type {Meta, StoryObj} from "@storybook/react"
import SegmentedControlInput from "./SegmentedControlInput"
import {useState} from "react"

const meta: Meta<typeof SegmentedControlInput> = {
  title: "BUTTONS/SegmentedControlInput",
  component: SegmentedControlInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const SegmentedControlWithState = () => {
  const [value, setValue] = useState("friends")

  return (
    <SegmentedControlInput
      color={"blue"}
      value={value}
      onChange={(e) => setValue(e)}
      data={[
        {
          label: "Friends",
          value: "friends",
        },
        {
          label: "Modern Family",
          value: "modernFamily",
        },
        {
          label: "Community",
          value: "community",
        },
      ]}
    />
  )
}

export const Primary: Story = {
  render: () => <SegmentedControlWithState />,
}
