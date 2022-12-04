import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  color: #ffffff;
`

export const Heading = styled.h1`
  font-size: 28px;
`

export const ColorPickersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CustomInput = styled.input``

export const Paragraph = styled.p``

export const ColorPicker = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CustomList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CustomListItem = styled.li``
export const CustomButton = styled.button`
  margin-top: 10px;
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  font-weight: 600;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
`
