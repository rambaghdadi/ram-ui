import type {Meta, StoryObj} from "@storybook/react"
import Table from "./Table"

const meta = {
  title: "DATA DISPLAY/Table",
  component: Table,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    lowerPage: 1,
    upperPage: 5,
    totalItems: 5,
    withColumnBorders: false,
    highlightOnHover: true,
    isStriped: true,
    withBorder: true,
    spacing: "md",
    isPaginated: true,
    columns: ["Name", "Age", "Location", "Height", "Weight"],
    isLoading: false,
    rows: [
      {
        data: ["George", "18", "London", "164 cm", "70 kg"],
      },
      {
        data: ["James", "24", "New York", "190 cm", "120 kg"],
      },
      {
        data: ["Jill", "67", "Paris", "175 cm", "93 kg"],
      },
      {
        data: ["Jad", "42", "Madrid", "177 cm", "81 kg"],
      },
      {
        data: ["Michael", "16", "Rome", "182 cm", "114 kg"],
      },
    ],
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
