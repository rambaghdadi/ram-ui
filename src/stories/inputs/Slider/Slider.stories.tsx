import type {Meta, StoryObj} from "@storybook/react"
import Slider from "./Slider"
import {useState} from "react"

const meta: Meta<typeof Slider> = {
  title: "INPUTS/Slider",
  component: Slider,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props = {
  showLabel: true,
}

const SliderTemplate: Story = {
  render: (args) => {
    const [value, setValue] = useState([0, 100])

    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "40rem",
            margin: "2rem",
          }}
        >
          <Slider {...props} {...args} {...{value}} onChange={setValue} />
        </div>
      </div>
    )
  },
}

export const Default: Story = {
  ...SliderTemplate,
  args: {},
}
export const isRange: Story = {
  ...SliderTemplate,
  args: {
    isRange: true,
  },
}
export const LabelOnDragGreen: Story = {
  ...SliderTemplate,
  args: {
    showLabel: false,
    color: "green",
  },
}
