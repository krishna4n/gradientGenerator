import {Component} from 'react'
import DirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  Heading,
  Paragraph,
  ColorPickersContainer,
  ColorPicker,
  CustomInput,
  DictionaryContainer,
  CustomButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class Generator extends Component {
  state = {
    direction: 'top',
    color1: '#8ae323',
    color2: '#014f7b',
    directionDisplay: '',
    color1Display: '',
    color2Display: '',
  }

  componentDidMount = () => {
    this.onGenerate()
  }

  onTabClicked = id => {
    this.setState({direction: id})
  }

  onColor1Change = event => {
    this.setState({color1: event.target.value})
  }

  onColor2Change = event => {
    this.setState({color2: event.target.value})
  }

  onGenerate = () => {
    const {direction, color1, color2} = this.state
    this.setState({
      directionDisplay: direction,
      color1Display: color1,
      color2Display: color2,
    })
  }

  render() {
    const {
      direction,
      directionDisplay,
      color1Display,
      color2Display,
      color1,
      color2,
    } = this.state
    return (
      <AppContainer
        direction={directionDisplay}
        color1={color1Display}
        color2={color2Display}
      >
        <Heading>Generate CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <DictionaryContainer>
          {gradientDirectionsList.map(each => (
            <DirectionItem
              key={each.directionId}
              direction={each}
              tabClicked={this.onTabClicked}
              activeTab={direction}
            />
          ))}
        </DictionaryContainer>
        <Paragraph>Pick the Colors</Paragraph>
        <ColorPickersContainer>
          <ColorPicker>
            <Paragraph>{color1}</Paragraph>
            <CustomInput
              type="color"
              value={color1}
              onChange={this.onColor1Change}
            />
          </ColorPicker>
          <ColorPicker>
            <Paragraph>{color2}</Paragraph>
            <CustomInput
              type="color"
              value={color2}
              onChange={this.onColor2Change}
            />
          </ColorPicker>
        </ColorPickersContainer>
        <CustomButton onClick={this.onGenerate}>Generate</CustomButton>
      </AppContainer>
    )
  }
}

export default Generator
