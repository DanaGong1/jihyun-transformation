import { theme } from '@/styles/theme'
import { RectState } from '@/types'

export const drawBackground = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  currentTheme: typeof theme,
) => {
  ctx.save()
  ctx.translate(width / 2, height / 2)
  ctx.scale(1, -1)

  ctx.strokeStyle = currentTheme.colors.axisColor
  ctx.lineWidth = 0.5
  ctx.beginPath()
  ctx.moveTo(-width / 2, 0)
  ctx.lineTo(width / 2, 0)
  ctx.moveTo(0, -height / 2)
  ctx.lineTo(0, height / 2)
  ctx.stroke()

  ctx.strokeStyle = currentTheme.colors.gridColor
  ctx.lineWidth = 0.25
  ctx.beginPath()
  for (
    let x = -Math.floor(width / 2 / 100) * 100;
    x <= Math.floor(width / 2 / 100) * 100;
    x += 100
  ) {
    if (x === 0) continue
    ctx.moveTo(x, -height / 2)
    ctx.lineTo(x, height / 2)
  }
  for (
    let y = -Math.floor(height / 2 / 100) * 100;
    y <= Math.floor(height / 2 / 100) * 100;
    y += 100
  ) {
    if (y === 0) continue
    ctx.moveTo(-width / 2, y)
    ctx.lineTo(width / 2, y)
  }
  ctx.stroke()

  ctx.restore()
}

export const drawRectangle = (
  ctx: CanvasRenderingContext2D,
  rect: RectState,
  width: number,
  height: number,
  currentTheme: typeof theme,
) => {
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

  const e = finalWorldOriginX + width / 2
  const f = -finalWorldOriginY + height / 2

  ctx.setTransform(a, b, c, d, e, f)

  ctx.fillStyle = currentTheme.colors.rectFill
  ctx.strokeStyle = currentTheme.colors.rectStroke
  ctx.lineWidth = 1
  ctx.fillRect(0, 0, size.width, size.height)
  ctx.strokeRect(0, 0, size.width, size.height)

  ctx.resetTransform()
}

export const drawPivot = (
  ctx: CanvasRenderingContext2D,
  rect: RectState,
  width: number,
  height: number,
  currentTheme: typeof theme,
) => {
  const { position, pivot } = rect
  const targetPivotWorldX = position.x + pivot.x
  const targetPivotWorldY = position.y + pivot.y

  const pivotCanvasX = targetPivotWorldX + width / 2
  const pivotCanvasY = -targetPivotWorldY + height / 2

  ctx.fillStyle = currentTheme.colors.pivotColor
  ctx.beginPath()
  ctx.arc(pivotCanvasX, pivotCanvasY, 5, 0, 2 * Math.PI)
  ctx.fill()
}
