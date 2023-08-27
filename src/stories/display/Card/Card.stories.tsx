import type {Meta, StoryObj} from "@storybook/react"
import Card from "./Card"
import img from "./assets/elephants.jpg"

const meta: Meta<typeof Card> = {
  title: "DATA DISPLAY/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props = {
  imageSrc: img,
  imageAlt: "elephant in safari photo",
  cardHeader: "Safari Visit",
  cardDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ducimus nostrum adipisci cumque commodi fugit suscipit inventore autem quia quae, dolor asperiores iure animi, at consequatur eum doloribus eligendi veritatis!",
}

const CardTemplate: Story = {
  render: (args) => {
    return (
      <div style={{maxWidth: "20rem"}}>
        <Card {...props} {...args} />
      </div>
    )
  },
}

export const Default: Story = {
  ...CardTemplate,
  args: {},
}
export const WithCustomChildren: Story = {
  ...CardTemplate,
  args: {
    children: (
      <div style={{padding: "1rem"}}>
        <p style={{lineHeight: 1.4}}>
          This is a card component with custom children, in this case a basic
          {"<p>"} tag, which overrides the default props on the component, such
          as the image, header, and description. This essentially turns the card
          component into a simple "Paper" component.
        </p>
      </div>
    ),
  },
}
