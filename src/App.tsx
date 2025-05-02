import styled from '@emotion/styled'

import { CanvasView } from './features/canvas'
import { useRectState } from './hooks'

const AppContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.appBackground};
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

function App() {
  const { rect } = useRectState()

  return (
    <AppContainer>
      <CanvasView rect={rect} />
    </AppContainer>
  )
}

export default App
