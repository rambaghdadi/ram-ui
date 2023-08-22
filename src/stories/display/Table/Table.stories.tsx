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
    highlightOnHover: true,
    spacing: "md",
    withColumnBorders: true,
    columns: ["Name", "Age", "Location", "Height", "Weight"],
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

export const WithNoBorder: Story = {
  args: {
    ...props.args,
    withBorder: false,
  },
}

export const WithPagination: Story = {
  args: {
    ...props.args,
    isPaginated: true,
    lowerPage: 1,
    upperPage: 5,
    totalItems: 5,
  },
}
export const WithResizing: Story = {
  args: {
    ...props.args,
    isResizingEnable: true,
    id: 1,
  },
}

export const WithSorting: Story = {
  args: {
    ...props.args,
    isSortingEnabled: true,
    withColumnBorders: true,
  },
}
export const WithStickyHeader: Story = {
  args: {
    ...props.args,
    maxHeight: "15rem",
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

export const WithColumns: Story = {
  args: {
    ...props.args,
    withColumnBorders: true,
  },
}

export const WithNoStripes: Story = {
  args: {
    ...props.args,
    isStriped: false,
  },
}
export const WithLoadingState: Story = {
  args: {
    ...props.args,
    withColumnBorders: true,
    isStriped: false,
    isLoading: true,
  },
}
export const WithNoData: Story = {
  args: {
    ...props.args,
    rows: [],
  },
}
