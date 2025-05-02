import { Point } from './point'

export interface RectState {
  position: Point
  size: { width: number; height: number }
  rotation: number
  pivot: Point
}
