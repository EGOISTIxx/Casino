import { useEffect } from 'react'

export const useDebounce = (func: void, delay: number = 1000): void => {
  useEffect(() => {
    const handler = setTimeout(() => {
      func
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [])
}