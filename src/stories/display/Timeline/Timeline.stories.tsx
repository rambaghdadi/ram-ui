import type {Meta, StoryObj} from "@storybook/react"
import Timeline from "./Timeline"

const meta = {
  title: "DATA DISPLAY/Timeline",
  component: Timeline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    color: "blue",
    active: 2,
    data: [
      {
        branchName: "Dipiscing elit",
        branchDetails:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        branchTime: "2 months ago",
      },
      {
        branchName: "Nostrud exercitation",
        branchDetails:
          "Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        branchTime: "1 month ago",
      },
      {
        branchName: "Voluptate velit",
        branchDetails:
          "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        branchTime: "1 week ago",
      },
      {
        branchName: "Officia deserunt",
        branchDetails:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        branchTime: "3 days ago",
      },
    ],
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
export const Green: Story = {
  args: {
    ...props.args,
    color: "green",
  },
}
export const OneActive: Story = {
  args: {
    ...props.args,
    active: 1,
  },
}
