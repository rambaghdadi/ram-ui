import {useState} from "react"
import Button from "./stories/atoms/Button/Button"
import Modal from "./stories/molecules/Modal/Modal"
import Notification from "./stories/atoms/Notification/Notification"
import Pagination from "./stories/molecules/Pagination/Pagination"
import Flex from "./stories/layout/Flex/Flex"
import Tooltip from "./stories/atoms/Tooltip/Tooltip"
import Accordion from "./stories/molecules/Accordion/Accordion"
import AccordionItem from "./stories/molecules/Accordion/components/AccordionItem/AccordionItem"

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
      <Flex alignItems="center" justifyContent="center">
        <Button onClick={() => setNotification(true)}>Notification!</Button>
        <Tooltip visibleOnHover={true} label="This is a label">
          <Button onClick={() => setShow(true)}>Modal!</Button>
        </Tooltip>
        <Pagination
          size="md"
          activePage={page}
          totalPages={15}
          onPageChange={setPage}
        />
      </Flex>
      <Accordion>
        <AccordionItem iconSrc="./ss.png" title="First" body="How do you do?" />
        <AccordionItem
          iconSrc="./gg.png"
          title="Second"
          body="How do you do too?"
        />
      </Accordion>
    </div>
  )
}

export default App

//Typography
//TODO Text
//TODO Title
//TODO Table

//Display
//TODO Accordion
//TODO Carousel
//TODO Timeline
//TODO Drawer

//INPUTS
//TODO Segmented Control Input
//TODO Autocomplete
//TODO Checkbox
//TODO Chip
//TODO Color Input
//TODO Color Picker
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
//TODO Calendar
