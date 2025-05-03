import styled from '@emotion/styled'

import { CanvasView } from './features/canvas'
import { ControlsView } from './features/controls'
import { useRectState } from './hooks'

const AppContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.appBackground};
  min-height: 100vh;
  justify-content: center;
`

function App() {
  const { rect, cornerCoords, moveRect, rotateRect, changePivot } = useRectState()

  return (
    <AppContainer>
      <CanvasView rect={rect} />
      <ControlsView
        rect={rect}
        cornerCoords={cornerCoords}
        onMove={moveRect}
        onRotate={rotateRect}
        onPivotChange={changePivot}
      />
    </AppContainer>
  )
}

export default App
