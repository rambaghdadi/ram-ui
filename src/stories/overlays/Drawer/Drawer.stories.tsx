import type {Meta, StoryObj} from "@storybook/react"
import Drawer from "./Drawer"
import {useState} from "react"
import Button from "../../buttons/Button/Button"

const meta: Meta<typeof Drawer> = {
  title: "OVERLAYS/Drawer",
  component: Drawer,
  // tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props = {
  drawerTitle: "Title Here",
  withHeader: true,
  children: "Hello World",
  height: "100%",
  width: "30vw",
}

const DrawerTemplate: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState(true)

    return (
      <>
        <Drawer
          {...props}
          {...args}
          isVisible={isVisible}
          onBackdropClick={() => setIsVisible(false)}
          onXClick={() => setIsVisible(false)}
        />
        <Button onClick={() => setIsVisible(true)}>Click Me!</Button>
      </>
    )
  },
}

export const Default: Story = {
  ...DrawerTemplate,
  args: {},
}
export const NoTitle: Story = {
  ...DrawerTemplate,
  args: {
    withHeader: false,
  },
}
export const Top: Story = {
  ...DrawerTemplate,
  args: {
    position: "top",
  },
}
export const Bottom: Story = {
  ...DrawerTemplate,
  args: {
    position: "bottom",
  },
}
export const Right: Story = {
  ...DrawerTemplate,
  args: {
    position: "right",
  },
}
