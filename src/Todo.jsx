import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function TodoApp() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (value !== '') {
      if (editIndex !== -1) {
        const updatedTodos = [...todos];
        console.log(updatedTodos);
        updatedTodos[editIndex] = value;
        console.log(value);
        setTodos(updatedTodos);
        setEditIndex(-1);
      } else {
        setTodos([...todos, value]);
      }
      setValue('');
    } else {
      alert('Please fill the input!');
    }
  };

  // Enter Key press code start
  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };
  // Enter Key press code end

  let buttonText;
  if (editIndex == -1) {
    buttonText = 'Add Todo';
  } else {
    buttonText = 'Edit Todo';
  }
  // edit and delete funtion start
  const edit = (e) => {
    console.log(e);
    setValue(todos[e])
    setEditIndex(e)
  }
  const dele = (e) => {
    console.log(e);
    const updatedTodos = [...todos];
    updatedTodos.splice(e , 1);
    setTodos(updatedTodos);
  }
  // edit and delete funtion end

  return (
    <div className='container todo'>
      <div className="input-group mb-3 todo-input">
        <input type="text" className="form-control" placeholder="AddTodo" aria-label="Recipient's username" aria-describedby="basic-addon2" value={value} onChange={handleInputChange} onKeyPress={handleInputKeyPress} />
        <div className="input-group-append">
          <span className="input-group-text" style={{ cursor: 'pointer' }} onClick={handleAddTodo}>{buttonText}</span>
        </div>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className='p-2' style={{ listStyle: 'none' }}>
            <span style={{ width: '60px' }}>{todo}</span>
            <Button variant="outline-primary" style={{ width: '70px' }} className='m-2' onClick={() => edit(index)}>Edit</Button>
            <Button variant="outline-danger" style={{ width: '70px' }} className='m-2' onClick={() => dele(index)}>
              Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default TodoApp;


// import React, { useState } from 'react';

// const Todo = () => {
//   const [value, setValue] = useState('');
//   const [todos, setTodos] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleAddTodo = () => {
//     if (value !== '') {
//       if (editIndex !== -1) {
//         // If we're editing an existing todo
//         const updatedTodos = [...todos];
//         updatedTodos[editIndex] = value;
//         setTodos(updatedTodos);
//         setEditIndex(-1);
//       } else {
//         // If we're adding a new todo
//         setTodos([...todos, value]);
//       }
//       setValue('');
//     } else {
//       alert('Please fill the input!');
//     }
//   };

//   const handleEdit = (index) => {
//     setValue(todos[index]);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//   };

//   let buttonText;
//   if (editIndex == -1) {
//     buttonText = 'Add Todo';
//   } else {
//     buttonText = 'Edit Todo';
//   }

//   return (
//     <div className='container text-center'>
//       <div class="input-group mb-3">
//         <input type="text" class="form-control" placeholder="AddTodo" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChange} value={value}/>
//           <div class="input-group-append">
//             <span class="input-group-text" style={{cursor: 'pointer'}} onClick={handleAddTodo}>{buttonText}</span>
//           </div>
//       </div>
//       <div className="ul">
//         <ul>
//           {todos.map((todo, index) => (
//             <li>
//               <span>{todo}</span>
//               <button onClick={() => handleEdit(index)}>Edit</button>
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todo;
