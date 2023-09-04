import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Count = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  const Increament = () => {
    setCount(count + 1)
  }
  const Decreament = () => {
    setCount(count - 1)
  }
  const Reset = () => {
    setCount(0)
  }

  // DMAS FUNCTION START
  const Addition = () => {
    let input1 = Number(document.getElementById('input11').value);
    let input2 = Number(document.getElementById('input22').value);
    let addition = input1 + input2;
    console.log(addition);
    if(input1 != '' || input2 != ''){
      setCount1('Addition : ' + addition)
    }
    else{
      alert('Please Fill The Input!')
    }
  }
  
  const Subtraction = () => {
    let input1 = Number(document.getElementById('input11').value);
    let input2 = Number(document.getElementById('input22').value);
    let subtraction = input1 - input2;
    console.log(subtraction);
    if(input1 != '' || input2 != ''){
      setCount1('Subtraction : ' + subtraction)
    }
    else{
      alert('Please Fill The Input!')
    }
  }
  const Multiply = () => {
    let input1 = Number(document.getElementById('input11').value);
    let input2 = Number(document.getElementById('input22').value);
    console.log(input1);
    console.log(input2);
    let multiply = input1 * input2;
    console.log(multiply);
    if(input1 != '' || input2 != ''){
      setCount1('Multiply : ' + multiply)
    }
    else{
      alert('Please Fill The Input!')
    }
  }
  const Divide = () => {
    let input1 = Number(document.getElementById('input11').value);
    let input2 = Number(document.getElementById('input22').value);
    let divide = input1 / input2;
    console.log(divide);
    if(input1 != '' || input2 != ''){
      setCount1('Divide : ' + divide)
    }
    else{
      alert('Please Fill The Input!')
    }
  }
  // DMAS FUNCTION END

  return (
    <div className='container count-down'>
      <div className="heading-count-button shadow p-4">
        <div className="heading">
          <h2 className='fw-bold p-2'>Increament</h2>
          <h2 className='fw-bold p-2'>Decreament</h2>
          <h2 className='fw-bold p-2'>Reset</h2>
        </div>
        <div className="count-show">
          <h1 className='fw-bold p-2'>{count}</h1>
        </div>
        <div className="button">
        <Button variant="outline-primary" className='m-1' onClick={Increament}>Increament</Button>
          <Button variant="outline-info" className='m-1' onClick={Decreament}>Decreament</Button>
          <Button variant="outline-success" className='m-1' onClick={Reset}>Reset</Button>
        </div>
      </div>
      <div className="input-button shadow p-4">
        <div className="input">
          <div className="input-group m-4">
            <input type="text" className="form-control m-2" id='input11' placeholder="Number" aria-label="Username" aria-describedby="basic-addon1" />
            <input type="text" className="form-control m-2" id='input22' placeholder="Number" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="button1">
          <Button variant="outline-primary" className='m-1' onClick={Addition}>Additon</Button>
          <Button variant="outline-info" className='m-1' onClick={Subtraction}>Subtraction</Button>
          <Button variant="outline-success" className='m-1' onClick={Multiply}>Multiply</Button>
          <Button variant="outline-warning" className='m-1' onClick={Divide}>Divide</Button>
        </div>
        <div className="value-show text-center m-3">
          <h4 className='fw-bold'>This value is {count1}</h4>
        </div>
      </div>
    </div>
  )

}


export default Count


