import { useEffect, useRef } from 'react'

import { theme } from '@/styles/theme'
import { RectState } from '@/types'

import { Canvas, CanvasContainer } from './CanvasView.styles'
import { drawBackground, drawPivot, drawRectangle } from './utils'

interface CanvasViewProps {
  rect: RectState
  width?: number
  height?: number
}

const CanvasView = ({ rect, width = 600, height = 600 }: CanvasViewProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const currentWidth = canvas.width
    const currentHeight = canvas.height

    ctx.clearRect(0, 0, currentWidth, currentHeight)

    drawBackground(ctx, currentWidth, currentHeight, theme)

    drawRectangle(ctx, rect, currentWidth, currentHeight, theme)

    drawPivot(ctx, rect, currentWidth, currentHeight, theme)
  }, [rect, width, height])

  return (
    <CanvasContainer>
      <Canvas ref={canvasRef} width={width} height={height} />
    </CanvasContainer>
  )
}

export default CanvasView
