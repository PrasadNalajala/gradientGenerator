import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #ffffff;
  background: ${props =>
    `linear-gradient(to ${props.direction},${props.firstColor},${props.secondColor})`};
`
export const Card = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  justify-content: center;
  margin: 10px;
`
export const Button = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  border-style: none;
  height: 30px;
  width: 80px;
  border-radius: 5px;
  cursor: pointer;
`
