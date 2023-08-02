import {useState} from "react"
import Button from "./stories/atoms/Button/Button"
import Modal from "./stories/molecules/Modal/Modal"
import Notification from "./stories/atoms/Notification/Notification"
import Pagination from "./stories/molecules/Pagination/Pagination"
import Flex from "./stories/layout/Flex/Flex"

function App() {
  const [page, setPage] = useState(1)
  const [show, setShow] = useState(false)
  const [notification, setNotification] = useState(false)
  return (
    <div>
      <Modal
        isBlured
        withHeader
        onXClick={() => setShow(!show)}
        title="Welp"
        onBackdropClick={() => setShow(!show)}
        isVisible={show}
      >
        Hi!
      </Modal>
      <Notification
        color="success"
        isVisible={notification}
        title="Title"
        message="This is the message!"
        position={{top: "5%", right: "5px"}}
        onXClick={() => setNotification(false)}
      />
      <Flex>
        <Button onClick={() => setNotification(true)}>Notification!</Button>
        <Button onClick={() => setShow(true)}>Modal!</Button>
        <Pagination
          size="md"
          activePage={page}
          totalPages={15}
          onPageChange={setPage}
        />
      </Flex>
    </div>
  )
}

export default App

//Feedback
//TODO Progress

//Typography
//TODO Text
//TODO Title
//TODO Table

//Display
//TODO Carousel
//TODO Accordion
//TODO Timeline
//TODO Drawer
//TODO Tooltip
//TODO Popover

//INPUTS
//TODO Autocomplete
//TODO Checkbox
//TODO Chip
//TODO Color Input
//TODO Color Picker
//TODO File Input / Dropzone
//TODO Multi Select
//TODO Select Input
//TODO Slider Input
//TODO Basic Input
//TODO Number Input
//TODO Text Input
//TODO Text Area Input
//TODO Password Input
//TODO Pin Input
//TODO Radio Input
//TODO Rating Input
//TODO Switch Input
//TODO Segmented Control Input
//TODO Calendar
