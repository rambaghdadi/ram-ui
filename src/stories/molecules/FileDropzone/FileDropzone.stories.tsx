import type {Meta, StoryObj} from "@storybook/react"
import FileDropzone from "./FileDropzone"

const meta = {
  title: "MOLECULES/FileDropzone",
  component: FileDropzone,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileDropzone>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    uploadFiles: (data) => {
      console.log(data)
    },
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
