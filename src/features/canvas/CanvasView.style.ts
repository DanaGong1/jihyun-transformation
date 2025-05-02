import styled from '@emotion/styled'

export const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const Canvas = styled.canvas`
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.canvasBackground};
`
