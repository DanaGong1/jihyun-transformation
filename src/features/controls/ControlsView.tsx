import React from 'react'

import { Button } from '@/components'
import { Point, RectState } from '@/types'
import { formatCoord } from '@/utils'

import { ControlsContainer, CoordinatesList, ListItem } from './Controls.styles'
import { ActionSection } from './components'
import { ActionSectionContainer, ActionSectionTitle } from './components/ActionSection.styles'
import { ControlsFormValues, useControlsForm } from './hooks'

interface ControlsViewProps {
  rect: RectState
  cornerCoords: Point[]
  // eslint-disable-next-line no-unused-vars
  onMove: (x: number, y: number) => void
  // eslint-disable-next-line no-unused-vars
  onRotate: (degrees: number) => void
  // eslint-disable-next-line no-unused-vars
  onPivotChange: (x: number, y: number) => void
}

const ControlsView: React.FC<ControlsViewProps> = ({
  rect,
  cornerCoords,
  onMove,
  onRotate,
  onPivotChange,
}) => {
  const {
    register,
    handleSubmit,
    errors,
    handleResetAll,
    handleMoveSubmit,
    handleRotateSubmit,
    handlePivotSubmit,
  } = useControlsForm({
    rect,
    onMove,
    onRotate,
    onPivotChange,
  })

  const cornerLabels = [
    `1. left, top: ${formatCoord(cornerCoords[3]?.x ?? 0)} / ${formatCoord(cornerCoords[3]?.y ?? 0)}`,
    `2. right, top: ${formatCoord(cornerCoords[2]?.x ?? 0)} / ${formatCoord(cornerCoords[2]?.y ?? 0)}`,
    `3. right, bottom: ${formatCoord(cornerCoords[1]?.x ?? 0)} / ${formatCoord(cornerCoords[1]?.y ?? 0)}`,
    `4. left, bottom: ${formatCoord(cornerCoords[0]?.x ?? 0)} / ${formatCoord(cornerCoords[0]?.y ?? 0)}`,
  ]

  const moveFields = [
    {
      name: 'posX' as const,
      label: 'X:',
      labelSize: 'medium' as const,
      requiredMessage: 'X 좌표를 입력하세요.',
    },
    {
      name: 'posY' as const,
      label: 'Y:',
      labelSize: 'medium' as const,
      requiredMessage: 'Y 좌표를 입력하세요.',
    },
  ]

  const rotateFields = [
    {
      name: 'rotation' as const,
      label: '각도:',
      labelSize: 'medium' as const,
      requiredMessage: '회전 각도를 입력하세요.',
    },
  ]

  const pivotFields = [
    {
      name: 'pivotX' as const,
      label: 'X:',
      labelSize: 'medium' as const,
      requiredMessage: '원점 X 좌표를 입력하세요.',
    },
    {
      name: 'pivotY' as const,
      label: 'Y:',
      labelSize: 'medium' as const,
      requiredMessage: '원점 Y 좌표를 입력하세요.',
    },
  ]

  return (
    <ControlsContainer>
      <ActionSectionContainer>
        <ActionSectionTitle>점의 좌표</ActionSectionTitle>
        <CoordinatesList>
          {cornerLabels.map((label, index) => (
            <ListItem key={index}>{label}</ListItem>
          ))}
        </CoordinatesList>

        <Button type="button" onClick={handleResetAll}>
          초기화
        </Button>
      </ActionSectionContainer>

      <ActionSection<ControlsFormValues>
        title="이동"
        fields={moveFields}
        buttonText="저장"
        onSubmit={handleSubmit(handleMoveSubmit)}
        register={register}
        errors={errors}
      />

      <ActionSection<ControlsFormValues>
        title="회전"
        fields={rotateFields}
        buttonText="저장"
        onSubmit={handleSubmit(handleRotateSubmit)}
        register={register}
        errors={errors}
      />

      <ActionSection<ControlsFormValues>
        title="원점 변경"
        fields={pivotFields}
        buttonText="저장"
        onSubmit={handleSubmit(handlePivotSubmit)}
        register={register}
        errors={errors}
      />
    </ControlsContainer>
  )
}

export default ControlsView
