import styled from '@emotion/styled'

export const CanvasContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.large};
`

export const Canvas = styled.canvas`
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.canvasBackground};
`
