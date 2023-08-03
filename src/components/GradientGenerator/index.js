import {Component} from 'react'
import {Container, Card, Button} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: 'top',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    tempDirection: 'top',
    tempFirstColor: '#8ae323',
    tempSecondColor: '#014f7b',
  }

  onClickDirectionBtn = value => {
    this.setState({tempDirection: value})
  }

  onChangeFirstColor = event => {
    this.setState({tempFirstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({tempSecondColor: event.target.value})
  }

  onClickGenerate = () => {
    const {tempDirection, tempFirstColor, tempSecondColor} = this.state
    this.setState({
      direction: tempDirection,
      firstColor: tempFirstColor,
      secondColor: tempSecondColor,
    })
  }

  render() {
    const {
      direction,
      firstColor,
      secondColor,
      tempDirection,
      tempFirstColor,
      tempSecondColor,
    } = this.state
    return (
      <Container
        data-testid="gradientGenerator"
        firstColor={firstColor}
        secondColor={secondColor}
        direction={direction}
      >
        <Card flexDirection="column">
          <h1>Generate a CSS Color Gradient</h1>
          <p>Choose Direction</p>
          <ul>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                item={each}
                key={each.directionId}
                direction={tempDirection}
                onClickDirectionBtn={this.onClickDirectionBtn}
              />
            ))}
          </ul>

          <p>Pick the Colors</p>

          <Card>
            <Card flexDirection="column">
              <p>{firstColor}</p>
              <input
                type="color"
                value={tempFirstColor}
                onChange={this.onChangeFirstColor}
              />
            </Card>
            <Card flexDirection="column">
              <p>{firstColor}</p>
              <input
                type="color"
                value={tempSecondColor}
                onChange={this.onChangeSecondColor}
              />
            </Card>
          </Card>

          <Button onClick={this.onClickGenerate}>Generate</Button>
        </Card>
      </Container>
    )
  }
}

export default GradientGenerator
