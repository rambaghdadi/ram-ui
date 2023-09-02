// import {useState} from "react"
// import Button from "./stories/atoms/Button/Button"
// import Modal from "./stories/molecules/Modal/Modal"
// import Notification from "./stories/atoms/Notification/Notification"
// import Pagination from "./stories/molecules/Pagination/Pagination"
// import Flex from "./stories/layout/Flex/Flex"
// import Tooltip from "./stories/atoms/Tooltip/Tooltip"
// import Accordion from "./stories/molecules/Accordion/Accordion"
// import AccordionItem from "./stories/molecules/Accordion/components/AccordionItem/AccordionItem"
// import TextArea from "./stories/inputs/TextArea/TextArea"

import {useState} from "react"
import TextInput from "./stories/inputs/TextInput/TextInput"
import SegmentedControlInput from "./stories/inputs/SegmentedControlInput/SegmentedControlInput"
import Button from "./stories/buttons/Button/Button"
import Flex from "./stories/layout/Flex/Flex"
import Marker from "./stories/typography/Marker/Marker"

function App() {
  // const [page, setPage] = useState(1)
  // const [show, setShow] = useState(false)
  // const [notification, setNotification] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [controlValue, setControlValue] = useState("one")

  function handleSubmit(e: any) {
    e.preventDefault()
    console.log(controlValue)
    console.log(textValue)
  }

  return (
    <div style={{padding: "10rem"}}>
      <form onSubmit={handleSubmit}>
        <Flex>
          <TextInput
            id="test"
            name="test"
            placeholder="Hello World"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <TextInput
            id="test"
            name="test"
            placeholder="Hello World"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <SegmentedControlInput
            color="blue"
            onChange={(e) => setControlValue(e)}
            value={controlValue}
            data={[
              {value: "one", label: "One"},
              {value: "two", label: "Two"},
              {value: "three", label: "Three"},
            ]}
          />
          <Button type="submit">Submit</Button>
          <p>
            Hello how's <Marker>it</Marker> going?
          </p>
        </Flex>
      </form>
    </div>
  )
}

export default App

//Display
//TODO Carousel

//INPUTS
//TODO Number Input
//TODO Password Input
//TODO Email Input
//TODO Color Picker
//TODO Multi Select
//TODO Pin Input
//TODO Radio Input
//TODO Rating Input
