import {useState} from "react"
import Button from "./stories/atoms/Button/Button"
import Modal from "./stories/molecules/Modal/Modal"
import Notification from "./stories/atoms/Notification/Notification"
import Pagination from "./stories/molecules/Pagination/Pagination"

function App() {
  const [page, setPage] = useState(1)
  const [show, setShow] = useState(false)
  const [notification, setNotification] = useState(false)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
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
      {/* <Button onClick={() => setNotification(true)}>Notification!</Button>
      <Button onClick={() => setShow(true)}>Modal!</Button> */}
      <Pagination
        size="md"
        activePage={page}
        totalPages={15}
        onPageChange={setPage}
      />
      <Notification
        color="success"
        isVisible={notification}
        title="Title"
        message="This is the message!"
        position={{top: "5%", right: "5px"}}
        onXClick={() => setNotification(false)}
      />
    </div>
  )
}

export default App
