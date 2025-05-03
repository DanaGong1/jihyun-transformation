import { useEffect, useRef } from 'react'

import { theme } from '@/styles/theme'
import { RectState } from '@/types'

import { Canvas, CanvasContainer } from './CanvasView.styles'

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

    ctx.strokeStyle = theme.colors.gridColor
    ctx.lineWidth = 0.25

    ctx.beginPath()
    for (
      let x = -Math.floor(canvasWidth / 2 / 100) * 100;
      x <= Math.floor(canvasWidth / 2 / 100) * 100;
      x += 100
    ) {
      if (x === 0) continue
      ctx.moveTo(x, -canvasHeight / 2)
      ctx.lineTo(x, canvasHeight / 2)
    }
    for (
      let y = -Math.floor(canvasHeight / 2 / 100) * 100;
      y <= Math.floor(canvasHeight / 2 / 100) * 100;
      y += 100
    ) {
      if (y === 0) continue
      ctx.moveTo(-canvasWidth / 2, y)
      ctx.lineTo(canvasWidth / 2, y)
    }
    ctx.stroke()

    ctx.restore()

    const { position, size, pivot, rotation } = rect
    const theta = (rotation * Math.PI) / 180
    const cosTheta = Math.cos(theta)
    const sinTheta = Math.sin(theta)

    const targetPivotWorldX = position.x + pivot.x
    const targetPivotWorldY = position.y + pivot.y

    const a = cosTheta
    const b = sinTheta
    const c = sinTheta
    const d = -cosTheta

    const rotatedVecX = -pivot.x * cosTheta - pivot.y * sinTheta
    const rotatedVecY = pivot.x * sinTheta - pivot.y * cosTheta

    const finalWorldOriginX = targetPivotWorldX + rotatedVecX
    const finalWorldOriginY = targetPivotWorldY + rotatedVecY

    const e = finalWorldOriginX + canvasWidth / 2
    const f = -finalWorldOriginY + canvasHeight / 2

    ctx.setTransform(a, b, c, d, e, f)

    ctx.fillStyle = theme.colors.rectFill
    ctx.strokeStyle = theme.colors.rectStroke
    ctx.lineWidth = 1
    ctx.fillRect(0, 0, size.width, size.height)
    ctx.strokeRect(0, 0, size.width, size.height)

    ctx.resetTransform()

    const pivotCanvasX = targetPivotWorldX + canvasWidth / 2
    const pivotCanvasY = -targetPivotWorldY + canvasHeight / 2

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
