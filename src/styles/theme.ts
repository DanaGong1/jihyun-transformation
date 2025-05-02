export const theme = {
  colors: {
    primary: '#FA8072',
    secondary: '#FFECEC',
    background: '#FFFFFF',
    text: '#212529',
    error: '#DC3545',
    canvasBackground: '#FCFCFC',
    appBackground: '#FFECEC',
    controlBackground: '#FFFFFF',
    borderColor: '#CCC',
    axisColor: 'lightgray',
    rectFill: '#CCC',
    rectStroke: '#000',
    pivotColor: 'red',
  },
  fontSizes: {
    small: '0.8em',
    medium: '1em',
    large: '1.2em',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '20px',
  },
  borderRadius: '8px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
}

export type ThemeType = typeof theme
