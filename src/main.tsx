import { Global, ThemeProvider, css } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './styles/global.css'
import { theme } from './styles/theme'

const globalStyles = css`
  body {
    background-color: ${theme.colors.appBackground};
    color: ${theme.colors.text};
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
