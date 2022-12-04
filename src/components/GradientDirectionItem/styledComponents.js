import styled from 'styled-components'

export const TabButton = styled.button`
  margin: 10px;
  font-weight: 600;
  background-color: #ededed;
  opacity: ${props => props.active};
  padding: 5px 20px 5px 20px;
  border: none;
  border-radius: 5px;
`
