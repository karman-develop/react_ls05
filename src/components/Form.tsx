import { useState } from "react";
import Button from "./Button"
import { HiOutlineSave } from "react-icons/hi";
import { Container } from "react-bootstrap";

interface IForm {
  value: string
  setValue: Function
  createArr: Function
}

const Form = ({value, setValue, createArr}: IForm) => {

  const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    createArr(value)
    setValue('')
  }

  return (
    <div>
      <div className="nav-bg py-2">
        <Container>
          <form onSubmit={submitForm}>
            <div className="align-items-center d-flex justify-content-center">
              <input className="" type="text" value={value} onChange={(e)=> setValue(e.target.value)} placeholder="…" />
              <Button type="submit" fontColor="#ffffff" bgColor="blueviolet" hoverColor="#5e1c9c">
                <HiOutlineSave className="lead" />
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  )
}

export default Form
