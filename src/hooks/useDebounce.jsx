import { useEffect, useState } from 'react'

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // cleanup the timeout
    return () => clearTimeout(timeout)
  }, [delay, value])
  
  return debouncedValue
}

export default useDebounce
