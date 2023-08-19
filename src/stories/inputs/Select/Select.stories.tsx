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

  //@ts-ignore
  const [data, setData] = useState<string[]>(localData)
  const [value, setValue] = useState("")

  return (
    <div style={{minHeight: "40vh"}}>
      <Select
        isLocalSearch={true}
        // onInputChange={onChangeHandler}
        // debounceSearch
        // debounceTimeInMs={500}
        //Change above when necessary
        id="selectid"
        name="selectid"
        placeholder="Select one"
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
