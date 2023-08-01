import {useEffect, useState} from "react"

export type Device = "mobile" | "tablet" | "desktop"
export default function useMediaQuery() {
  const [device, setDevice] = useState<Device>("desktop")

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 640px)")
    const desktopQuery = window.matchMedia("(min-width: 1024px)")

    function updateDevice() {
      if (mobileQuery.matches) {
        setDevice("mobile")
      } else if (desktopQuery.matches) {
        setDevice("desktop")
      } else {
        setDevice("tablet")
      }
    }

    mobileQuery.addEventListener("change", updateDevice)
    desktopQuery.addEventListener("change", updateDevice)
    updateDevice()

    return () => {
      mobileQuery.removeEventListener("change", updateDevice)
      desktopQuery.removeEventListener("change", updateDevice)
    }
  }, [])

  return device
}
