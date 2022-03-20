import { ReactChild} from "react"
import styled from "styled-components"

interface IButtonType {
  bgColor: string
  children: ReactChild
  fontColor: string
  hoverColor: string
  type: string
}

const Button = ({bgColor,fontColor,hoverColor, children}: IButtonType) => {

  const ButtonStyle = styled.button`
    background-color: ${bgColor};
    border: none;
    color: ${fontColor};
    cursor: pointer;
    padding: 10px 20px;
    transition: 400ms;
    & + button {
      margin-left: 8px;
    }
    &:hover {
      background-color: ${hoverColor};
      transition: 400ms;
    }
  `

  return (
    <>
      <ButtonStyle>{children}</ButtonStyle>
    </>
  )
}

export default Button
