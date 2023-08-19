import type {Meta, StoryObj} from "@storybook/react"
import Text from "./Text"
import Flex from "../../layout/Flex/Flex"

const meta: Meta<typeof Text> = {
  title: "TYPOGRAPHY/Text",
  component: Text,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const TextComponent = () => {
  return (
    <Flex>
      <Text color="green" size="sm">
        Small Green Hello World
      </Text>
      <Text>Hello World</Text>
      <Text color="blue" size="lg">
        Large Blue Hello World
      </Text>
      <Text weight={700} size="xl">
        XL Bold Hello World
      </Text>
      <Text textDecoration="underline">Underlined Hello World</Text>
      <Text textDecoration="line-through">Line-through Hello World</Text>
      <Text isUppercase>Uppercased Hello World</Text>
      <Text isCapitalized>Capitalized Hello World</Text>
      <Text isLowercase>Lowercased Hello World</Text>
    </Flex>
  )
}

export const Default: Story = {
  render: () => <TextComponent />,
}
