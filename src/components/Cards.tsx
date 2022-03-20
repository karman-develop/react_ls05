import { Card } from 'react-bootstrap';
import { VscTrash } from "react-icons/vsc";
import Button from './Button';

interface ICard {
  arr: string[]
  destroyArr: Function
}

const Cards = ({ arr, destroyArr }: ICard) => {

  const trashArr = (index: number) => {
    destroyArr(index)
  }

  return (
    <div className="">
      {
        arr && arr.map((txt, index) => (
          <div key={index} className='col-md-4'>
            <Card className="card-bg mb-3">
              <Card.Body className="align-items-center d-flex justify-content-between">
                <div className="lead mr-2">{txt}</div>
                <div onClick={()=> trashArr(index)}><Button type="submit" fontColor="#ffffff" bgColor="black" hoverColor="#333"><VscTrash /></Button></div>
              </Card.Body>
            </Card>
          </div>
        ))
      }
    </div>
  )
}

export default Cards