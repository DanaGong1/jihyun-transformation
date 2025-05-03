import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { RectState } from '@/types'

export interface ControlsFormValues {
  posX: number
  posY: number
  rotation: number
  pivotX: number
  pivotY: number
}

interface UseControlsFormProps {
  rect: RectState
  // eslint-disable-next-line no-unused-vars
  onMove: (x: number, y: number) => void
  // eslint-disable-next-line no-unused-vars
  onRotate: (degrees: number) => void
  // eslint-disable-next-line no-unused-vars
  onPivotChange: (x: number, y: number) => void
}

export const useControlsForm = ({
  rect,
  onMove,
  onRotate,
  onPivotChange,
}: UseControlsFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ControlsFormValues>({
    defaultValues: {
      posX: rect.position.x,
      posY: rect.position.y,
      rotation: rect.rotation,
      pivotX: rect.pivot.x,
      pivotY: rect.pivot.y,
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    reset({
      posX: rect.position.x,
      posY: rect.position.y,
      rotation: rect.rotation,
      pivotX: rect.pivot.x,
      pivotY: rect.pivot.y,
    })
  }, [rect, reset])

  const handleMoveSubmit = (data: ControlsFormValues) => {
    onMove(data.posX, data.posY)
  }

  const handleRotateSubmit = (data: ControlsFormValues) => {
    onRotate(data.rotation)
  }

  const handlePivotSubmit = (data: ControlsFormValues) => {
    onPivotChange(data.pivotX, data.pivotY)
  }

  const handleResetAll = () => {
    reset({
      posX: 0,
      posY: 0,
      rotation: 0,
      pivotX: 0,
      pivotY: 0,
    })
    onMove(0, 0)
    onRotate(0)
    onPivotChange(0, 0)
  }

  return {
    register,
    handleSubmit,
    errors,
    handleResetAll,
    handleMoveSubmit,
    handleRotateSubmit,
    handlePivotSubmit,
  }
}
