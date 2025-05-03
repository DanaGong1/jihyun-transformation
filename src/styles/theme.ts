export const theme = {
  colors: {
    primary: '#FA8072',
    secondary: '#FFECEC',
    background: '#FFFFFF',
    text: '#212529',
    error: '#DC3545',
    appBackground: '#FFECEC',
    canvasBackground: '#F5F5F5',
    gridColor: '#CCC',
    borderColor: '#CCC',
    axisColor: '#8A8A8A',
    rectFill: '#CCC',
    rectStroke: '#000',
    pivotColor: '#FF0000',
    buttonBackground: '#EEE',
    buttonHover: '#DDD',
    buttonActive: '#CCC',
    inputFocusBorderColor: '#888',
  },
  fontSizes: {
    small: '0.9em',
    medium: '1em',
    large: '1.1em',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '20px',
  },
  labelSizes: {
    small: '28px',
    medium: '32px',
    large: '36px',
  },
  borderRadius: '8px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
}

export type ThemeType = typeof theme
