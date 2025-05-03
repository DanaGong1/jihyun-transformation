import { Point, RectState } from '../types'

export function calculateCornerCoordinates(rect: RectState): Point[] {
  const { position, size, rotation, pivot } = rect
  const w = size.width
  const h = size.height

  const cornersLocal = [
    { x: 0 - pivot.x, y: 0 - pivot.y },
    { x: w - pivot.x, y: 0 - pivot.y },
    { x: w - pivot.x, y: h - pivot.y },
    { x: 0 - pivot.x, y: h - pivot.y },
  ]

  const theta = (rotation * Math.PI) / 180
  const cosTheta = Math.cos(theta)
  const sinTheta = Math.sin(theta)

  const rotatedCorners = cornersLocal.map((corner) => ({
    x: corner.x * cosTheta + corner.y * sinTheta,
    y: -corner.x * sinTheta + corner.y * cosTheta,
  }))

  const worldCorners = rotatedCorners.map((corner) => ({
    x: corner.x + position.x + pivot.x,
    y: corner.y + position.y + pivot.y,
  }))

  return worldCorners
}

export function formatCoord(coord: number, precision = 2): string {
  return coord.toFixed(precision)
}
