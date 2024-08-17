import React, { useState, useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { IoIosUndo } from "react-icons/io";
import TickIcon from './TickIcon.jsx';

const Content = () => {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleAdd = () => {
    if (todo.trim()) {
      setTodos([...todos, { todo, isComplete: false }]);
      setTodo('');
      saveLS()
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    saveLS()
  };

  const handleEdit = (index) => {
    const newTodo = prompt('Edit your todo:', todos[index].todo);
    if (newTodo !== null && newTodo.trim()) {
      const updatedTodos = todos.map((item, i) =>
        i === index ? { ...item, todo: newTodo } : item
      )
      setTodos(updatedTodos)
      saveLS()
    }
  }

  const handleComplete = (index) => {
    const updatedTodos = todos.map((item, i) =>
      i === index ? { ...item, isComplete: !item.isComplete } : item
    )
    setTodos(updatedTodos)
    saveLS()
  }


  return (
    <div className="M-Content overflow-auto w-[100vw] h-[100vh] md:w-[50vw] md:h-[90vh] mx-auto bg-white mt-2 rounded-lg shadow-lg p-6">
      <h1 className="font-bold text-2xl text-gray-800 flex items-center justify-center mt-1 mb-3">iTask - Manage Your Todos at One Place</h1>
      <h3 className="text-xl font-semibold text-gray-700 mb-3">Add a Todo</h3>

      <div className="flex items-center mb-6 flex-wrap justify-center gap-2">
        <input
          className="p-3 w-[90vw] md:w-[35vw] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter a Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
        />

        <button
          className="ml-3 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
          onClick={handleAdd}
        >
          Save
        </button>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <input type="checkbox" className="h-5 w-5 text-blue-600 focus:ring-blue-500 rounded" />
        <label className="text-gray-700">Show Finished</label>
      </div>
      <hr className="my-4 border-gray-300" />
      <h1 className="font-semibold text-xl text-gray-800">Todo List</h1>
      <ul >
        {todos.map((item, index) => (
          <li key={index} className="Todo-data flex gap-2 flex-wrap justify-center md:justify-between items-center mb-3 p-2 bg-gray-100 rounded-lg">
            <p className={`text-gray-700 flex-grow ${item.isComplete ? 'line-through' : ''}`}>{item.todo}</p>
            <div className="flex gap-2">
              <button
                className="ml-3 bg-green-600 hover:bg-green-700 text-white p-2 w-auto rounded-lg transition-colors"
                onClick={() => handleComplete(index)}
              >
                {item.isComplete ? <IoIosUndo /> : <TickIcon />}
              </button>
              <button
                className="ml-1 bg-yellow-600 hover:bg-yellow-700 text-white p-2 w-auto rounded-lg transition-colors"
                onClick={() => handleEdit(index)}
              >
                <FaEdit />
              </button>

              <button
                className="ml-1 bg-red-600 hover:bg-red-700 text-white p-2 w-auto rounded-lg transition-colors"
                onClick={() => handleDelete(index)}
              >
                <AiFillDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Content
