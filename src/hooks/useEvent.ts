import { useCallback, useLayoutEffect, useRef } from 'react'
import { TTableItems } from '../pages/Roulette/RouletteTable/RouletteTable'

export const useEvent = (
  handler: (params: TTableItems) => void
) => {
  const handlerRef = useRef<(params: TTableItems) => void | null>()

  useLayoutEffect(() => {
    handlerRef.current = handler
  }, [])

  return useCallback((...args: any) => {
    const fn: any = handlerRef.current
    return fn(...args)
  }, [])
}
