import styled from '@emotion/styled'

export const ActionSectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 16px;
`

export const ActionSectionTitle = styled.h4`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin-bottom: 10px;
  padding-bottom: 4px;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
`
