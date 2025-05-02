import { useCallback, useState } from 'react'

import { RectState } from '../types'

const initialRectState: RectState = {
  position: { x: 0, y: 0 },
  size: { width: 100, height: 100 },
  rotation: 0,
  pivot: { x: 0, y: 0 },
}

export const useRectState = () => {
  const [rect, setRect] = useState<RectState>(initialRectState)

  const updateRectState = useCallback((newRect: Partial<RectState>) => {
    setRect((prevRect: RectState) => ({ ...prevRect, ...newRect }))
  }, [])

  const moveRect = useCallback(
    (x: number, y: number) => {
      updateRectState({ position: { x, y } })
    },
    [updateRectState],
  )

  const rotateRect = useCallback(
    (degrees: number) => {
      updateRectState({ rotation: degrees })
    },
    [updateRectState],
  )

  const changePivot = useCallback(
    (x: number, y: number) => {
      updateRectState({ pivot: { x, y } })
    },
    [updateRectState],
  )

  return {
    rect,
    moveRect,
    rotateRect,
    changePivot,
  }
}
