import type {Meta, StoryObj} from "@storybook/react"
import Select from "./Select"
import {useState} from "react"

const meta: Meta<typeof Select> = {
  title: "INPUTS/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const SelectWithState = () => {
  const localData = Array.from({length: 50})
    .fill(0)
    .map((_, i: number) => `Local ${i}`)

  const externalData = Array.from({length: 50})
    .fill(0)
    .map((_, i: number) => `External ${i}`)

  const [value, setValue] = useState("")
  const [data, setData] = useState<string[]>([])

  function onChangeHandler(data: string) {
    const updatedData = externalData.filter((item) => item.includes(data))
    setData(updatedData)
  }

  return (
    <div style={{minHeight: "40vh"}}>
      <Select
        isLocalSearch={false}
        id="selectid"
        name="selectid"
        placeholder="Select one"
        onInputChange={onChangeHandler}
        onSelect={(data) => setValue(data)}
        value={value}
        data={data}
        clearSelection={() => setValue("")}
        nothingFound="No results found"
      />
    </div>
  )
}

export const Primary: Story = {
  render: () => <SelectWithState />,
}
