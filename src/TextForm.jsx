import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function TextForm() {
    let [text , setText] = useState('Leave a comment here');
    let [color , setColor] = useState('red');
    const upper = () => {
        setText(text.toUpperCase());
    }
    const lower = () => {
        setText(text.toLowerCase());
    }
    const clear = () => {
        setText('');
    }
    const Del = () => {
       setText(text.slice(0 , -1))
    }
   const handleValue = (event) => {
       console.log(event.target);
       setText(event.target.value)
   }
  return (
    <>
    <h2 className='fw-bold'>Text:Type</h2>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control as="textarea"  placeholder="Leave a comment here" style={{ height: '100px' , color : {color} }}
        value={text} onChange={handleValue} />
      </FloatingLabel>
      <div className="container m-3">
      <Button variant="info" style={{marginLeft : '8px' , width : '110px'}} onClick={upper}>UpperCase</Button>
      <Button variant="warning" style={{marginLeft : '8px' , width : '110px'}} onClick={lower}>LowerCase</Button>
      <Button variant="danger" style={{marginLeft : '8px' , width : '110px'}} onClick={clear}>Clear</Button>
      <Button variant="primary" style={{marginLeft : '8px' , width : '110px'}} onClick={Del}>Del</Button>
      </div>
    </>
  );
}

export default TextForm;