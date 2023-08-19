import type {Meta, StoryObj} from "@storybook/react"
import Title from "./Title"

const meta: Meta<typeof Title> = {
  title: "TYPOGRAPHY/Title",
  component: Title,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const TitleComponent = () => {
  return (
    <>
      <Title>Hello World</Title>
      <Title size={2}>Hello World</Title>
      <Title size={3}>Hello World</Title>
      <Title size={4}>Hello World</Title>
      <Title size={5}>Hello World</Title>
      <Title size={6}>Hello World</Title>
    </>
  )
}

export const Primary: Story = {
  render: () => <TitleComponent />,
}
