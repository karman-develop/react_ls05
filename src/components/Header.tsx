
import styled from "styled-components"

const Ul = styled.ul`
list-style-type: square;
`

const Li = styled.li`
cursor: pointer;
margin: 0 40px 0 0;
& + li {
  margin: 0;
}
`

const Header = () => {

  return (
    <>
      <div className="border border-dark mb-2 pt-2 pb-2 px-3">
        <div>
          <img width="60" src="/img/todo_icon.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Header