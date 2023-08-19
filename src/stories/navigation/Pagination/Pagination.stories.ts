import type {Meta, StoryObj} from "@storybook/react"

import Pagination from "./Pagination"

const meta = {
  title: "NAVIGATION/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    color: "blue",
    activePage: 1,
    siblings: 2,
    totalPages: 10,
    size: "md",
    onPageChange: () => {},
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
export const LargeAndGreen: Story = {
  args: {
    ...props.args,
    color: "green",
    activePage: 5,
    size: "lg",
  },
}
export const SmallAndGreen: Story = {
  args: {
    ...props.args,
    color: "green",
    activePage: 8,
    size: "sm",
  },
}
