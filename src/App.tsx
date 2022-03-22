import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header'
import Cards from './components/Cards'
import Form from './components/Form';

function App() {

  const [value, setValue] = useState<string>('')

  const [arr, setArr] = useState<string[]>([])

  const createArr = (value: string) => {
    const newArr: string[] = [...arr, value]
    setArr(newArr)
  }

  const destroyArr = (index: number) => {
    const newArr: string[] = [...arr]
    newArr.splice(index, 1)
    setArr(newArr)
  }

  return (
    <div id="wrapper" className="App">
      <Header />
      <div className="main px-3">
        <Cards arr={arr} destroyArr={destroyArr}/>
      </div>
      <div className='nav-form'>
        <Form value={value} setValue={setValue} createArr={createArr} />
      </div>
      
    </div>
  );
}

export default App;
