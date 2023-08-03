// Style your elements here
import styled from 'styled-components'

export const Button = styled.button`
  height: 30px;
  margin: 10px;
  width: 80px;
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: ${props => props.opacity};
`
