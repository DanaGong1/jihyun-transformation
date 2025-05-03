import styled from '@emotion/styled'

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
`

export const CoordinatesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`
