import type {Meta, StoryObj} from "@storybook/react"
import Skeleton from "./Skeleton"
import Flex from "../../layout/Flex/Flex"

const meta: Meta<typeof Skeleton> = {
  title: "FEEDBACK/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props = {}

const SkeletonTemplate: Story = {
  render: (args) => {
    return (
      <Flex gap={1}>
        <Skeleton
          {...props}
          {...args}
          width="3.125rem"
          height="3.125rem"
          isCircle={true}
        />
        <Skeleton {...props} {...args} width="20rem" height="1rem" />
        <Skeleton {...props} {...args} width="20rem" height="1rem" />
        <Skeleton {...props} {...args} width="14rem" height="1rem" />
      </Flex>
    )
  },
}

export const Default: Story = {
  ...SkeletonTemplate,
  args: {},
}
