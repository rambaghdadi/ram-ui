import type {Meta, StoryObj} from "@storybook/react"

import Flex from "./Flex"
import Button from "../../buttons/Button/Button"

const meta = {
  title: "LAYOUT/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: (args) => {
    return (
      <Flex {...args}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Flex>
    )
  },
}

export const Column: Story = {
  ...Template,
  args: {
    alignItems: "stretch",
    gap: 1,
    flexDirection: "column",
  },
}
export const Row: Story = {
  ...Template,
  args: {
    alignItems: "stretch",
    gap: 1,
    flexDirection: "row",
  },
}
