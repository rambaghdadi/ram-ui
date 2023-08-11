import type {Meta, StoryObj} from "@storybook/react"
import FileDropzone from "./FileDropzone"

const meta = {
  title: "INPUTS/FileDropzone",
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
    maxNumOfFiles: 10,
    maxFileSizeKb: 10000,
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
