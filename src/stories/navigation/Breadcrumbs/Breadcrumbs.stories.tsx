import type {Meta, StoryObj} from "@storybook/react"
import Breadcrumbs from "./Breadcrumbs"

const meta: Meta<typeof Breadcrumbs> = {
  title: "NAVIGATION/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props = {
  items: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "iPhone",
      href: "/products/iPhone",
    },
  ],
}

const BreadcrumbsTemplate: Story = {
  render: (args) => {
    return <Breadcrumbs {...args} />
  },
}

export const Default: Story = {
  ...BreadcrumbsTemplate,
  args: {
    ...props,
  },
}
export const DifferentSeperator: Story = {
  ...BreadcrumbsTemplate,
  args: {
    ...props,
    separator: ">",
  },
}
