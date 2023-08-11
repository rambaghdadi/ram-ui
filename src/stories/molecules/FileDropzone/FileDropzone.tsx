import {ChangeEvent, DragEvent, useRef, useState} from "react"
import classes from "./FileDropzone.module.css"
import {IFileDropzoneProps} from "./FileDropzone.types"
import Upload from "./SVGs/Upload"

export default function FileDropzone({
  maxFileSizeKb = 5000,
  maxNumOfFiles = 5,
  uploadFiles,
  acceptedFileTypes = ["image/png", "image/jpeg", "image/jpg"],
}: IFileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [error, setError] = useState("")
  const [isFileAddSuccessful, setIsFileAddSuccessful] = useState(false)

  const cls = isFileAddSuccessful ? classes.success : ""

  function onDrop(e: DragEvent<HTMLDivElement>) {
    stopDefault(e)

    try {
      const dt = e.dataTransfer
      const files = Array.from(dt.files)
      errorCheck(files, maxNumOfFiles, acceptedFileTypes, maxFileSizeKb)
      uploadFiles(files)
      setIsFileAddSuccessful(true)
    } catch (e) {
      const err = e as Error
      setError(err.message)
    }
  }

  function onClick() {
    inputRef.current?.click()
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    stopDefault(e)
    try {
      const files = Array.from(e.target.files || [])
      errorCheck(files, maxNumOfFiles, acceptedFileTypes, maxFileSizeKb)
      uploadFiles(files)
      setIsFileAddSuccessful(true)
    } catch (e) {
      const err = e as Error
      setError(err.message)
    }
  }

  function stopDefault(
    e: DragEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement>
  ) {
    e.preventDefault()
    e.stopPropagation()
    setError("")
    setIsFileAddSuccessful(false)
  }

  return (
    <div
      onDragEnter={stopDefault}
      onDragOver={stopDefault}
      onDrop={onDrop}
      onClick={onClick}
      className={`${classes.container} ${cls}`}
      role="button"
      aria-label="Drop files or click to select files"
    >
      <input
        onChange={onChange}
        ref={inputRef}
        className={classes.input}
        type="file"
        accept={acceptedFileTypes.join(",")}
        multiple
        aria-label="File upload input"
      />
      <div className={classes.instructions}>
        <Upload />
        <div className={classes.text} aria-live="polite">
          <p className={classes.mainText}>Drag here or click to select files</p>
          <p className={classes.secondaryText}>
            Attach as many files as you like, each file should not exceed
            {" " + (maxFileSizeKb / 1000).toFixed(0) + " " + "MB"}.
          </p>
          {error && <p className={classes.errorMessage}>{error}</p>}
        </div>
      </div>
    </div>
  )
}

function errorCheck(
  files: File[],
  maxNumOfFiles: number,
  acceptedFileTypes: string[],
  maxFileSizeKb: number
) {
  isNumOfFilesCorrect(files, maxNumOfFiles)
  isCorrectType(files, acceptedFileTypes)
  isCorrectSize(files, maxFileSizeKb)
}

function isCorrectSize(files: File[], sizeLimit: number) {
  const isOk = files.every((file) => file.size / 1000 <= sizeLimit)
  if (!isOk) throw new Error("One or more files exceed the upload limit.")
}

function isCorrectType(files: File[], fileTypes: string[]) {
  const isOk = files.every((file) => fileTypes.includes(file.type))
  if (!isOk) throw new Error("One or more files type is not supported.")
}

function isNumOfFilesCorrect(files: File[], max: number) {
  const isOk = files.length <= max
  if (!isOk) throw new Error("Number of files added exceed the allowed amount.")
}
