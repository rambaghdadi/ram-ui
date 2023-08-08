export interface IFileDropzoneProps {
  maxFileSizeKb: number
  uploadFiles: (files: File[]) => void
  acceptedFileTypes?: string[]
  maxNumOfFiles?: number
}
