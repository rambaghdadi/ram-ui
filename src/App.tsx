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
