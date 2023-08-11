import type {Meta, StoryObj} from "@storybook/react"
import Accordion from "./Accordion"
import {data} from "./_mockData"

const meta = {
  title: "DATA DISPLAY/Accordion",
  component: Accordion,
  parameters: {
    // layout: "100%",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    allowMultipleOpen: true,
    items: data,
    variant: "default",
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}

export const Contained: Story = {
  args: {
    ...props.args,
    variant: "contained",
  },
}

export const Seperated: Story = {
  args: {
    ...props.args,
    variant: "seperated",
  },
}
