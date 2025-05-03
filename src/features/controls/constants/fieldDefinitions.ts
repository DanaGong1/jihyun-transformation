export const moveFields = [
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

export const rotateFields = [
  {
    name: 'rotation' as const,
    label: '각도:',
    labelSize: 'medium' as const,
    requiredMessage: '회전 각도를 입력하세요.',
  },
]

export const pivotFields = [
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
