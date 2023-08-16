export function debounce(
  callback: (...args: any[]) => any,
  wait: number = 250
) {
  let timeout: NodeJS.Timeout

  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}
