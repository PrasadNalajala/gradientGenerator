import {Button} from './styledComponents'

const GradinetDirectionItem = props => {
  const {item, onClickDirectionBtn, direction} = props
  const {directionId, value, displayText} = item
  const handleDirection = () => {
    onClickDirectionBtn(value)
  }
  const opacity = direction === value ? 1 : 0.5
  return (
    <Button type="button" onClick={handleDirection} opacity={opacity}>
      {displayText}
    </Button>
  )
}

export default GradinetDirectionItem
