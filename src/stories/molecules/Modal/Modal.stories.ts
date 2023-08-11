import type {Meta, StoryObj} from "@storybook/react"

import Modal from "./Modal"

const meta = {
  title: "OVERLAYS/Modal",
  component: Modal,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    children: "Hello World",
    isBlured: false,
    isVisible: true,
    title: "Form",
    withHeader: true,
    onBackdropClick: () => {},
    onXClick: () => {},
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
export const Blured: Story = {
  args: {
    ...props.args,
    isBlured: true,
  },
}
export const WithoutHeader: Story = {
  args: {
    ...props.args,
    withHeader: false,
  },
}
