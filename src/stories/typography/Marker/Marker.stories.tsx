import type {Meta, StoryObj} from "@storybook/react"
import Marker from "./Marker"

const meta = {
  title: "TYPOGRAPHY/Marker",
  component: Marker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    children: "Hello World",
    color: "yellow",
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
