import React, { useState } from 'react';

const Todo = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (value !== '') {
      if (editIndex !== -1) {
        // If we're editing an existing todo
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = value;
        setTodos(updatedTodos);
        setEditIndex(-1);
      } else {
        // If we're adding a new todo
        setTodos([...todos, value]);
      }
      setValue('');
    } else {
      alert('Please fill the input!');
    }
  };

  const handleEdit = (index) => {
    setValue(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  let buttonText;
  if (editIndex == -1) {
      buttonText = 'Add Todo';
} else {
    buttonText = 'Edit Todo';
  }

  return (
    <div className='container text-center'>
      <input type="text" onChange={handleChange} value={value} />
      <button onClick={handleAddTodo}>{buttonText}</button>
      <div className="ul">
        <ul>
          {todos.map((todo, index) => (
            <li>
              <span>{todo}</span>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
