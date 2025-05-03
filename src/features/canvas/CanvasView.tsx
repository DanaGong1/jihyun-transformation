import { useEffect, useRef } from 'react'

import { theme } from '@/styles/theme'
import { RectState } from '@/types'

import { Canvas, CanvasContainer } from './CanvasView.styles'

interface CanvasViewProps {
  rect: RectState
  width?: number
  height?: number
}

const CanvasView = ({ rect, width = 500, height = 500 }: CanvasViewProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { position, size, pivot } = rect
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    ctx.save()

    ctx.translate(canvasWidth / 2, canvasHeight / 2)
    ctx.scale(1, -1)

    ctx.strokeStyle = theme.colors.axisColor
    ctx.lineWidth = 0.5
    ctx.beginPath()
    ctx.moveTo(-canvasWidth / 2, 0)
    ctx.lineTo(canvasWidth / 2, 0)
    ctx.moveTo(0, -canvasHeight / 2)
    ctx.lineTo(0, canvasHeight / 2)
    ctx.stroke()

    ctx.restore()

    const logicalX = position.x
    const logicalY = position.y

    const canvasTopLeftX = logicalX + canvasWidth / 2
    const canvasTopLeftY = -(logicalY + size.height) + canvasHeight / 2

    ctx.fillStyle = theme.colors.rectFill
    ctx.strokeStyle = theme.colors.rectStroke
    ctx.lineWidth = 1
    ctx.fillRect(canvasTopLeftX, canvasTopLeftY, size.width, size.height)
    ctx.strokeRect(canvasTopLeftX, canvasTopLeftY, size.width, size.height)

    const logicalPivotX = position.x + pivot.x
    const logicalPivotY = position.y + pivot.y

    const pivotCanvasX = logicalPivotX + canvasWidth / 2
    const pivotCanvasY = -logicalPivotY + canvasHeight / 2

    ctx.fillStyle = theme.colors.pivotColor
    ctx.beginPath()
    ctx.arc(pivotCanvasX, pivotCanvasY, 5, 0, 2 * Math.PI)
    ctx.fill()
  }, [rect, width, height])

  return (
    <CanvasContainer>
      <Canvas ref={canvasRef} width={width} height={height} />
    </CanvasContainer>
  )
}

export default CanvasView
