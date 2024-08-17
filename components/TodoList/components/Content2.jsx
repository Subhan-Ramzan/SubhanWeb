import React, { useState, useEffect } from 'react';

const Content = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(false);

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (todo.trim()) {
      setTodos((prevTodos) => [...prevTodos, { todo, isComplete: false }]);
      setTodo('');
    }
  };

  const handleDelete = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const newTodo = prompt('Edit your todo:', todos[index].todo);
    if (newTodo !== null && newTodo.trim()) {
      setTodos((prevTodos) =>
        prevTodos.map((item, i) =>
          i === index ? { ...item, todo: newTodo } : item
        )
      );
    }
  };

  const handleComplete = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((item, i) =>
        i === index ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  const filteredTodos = showFinished
    ? todos.filter((item) => item.isComplete)
    : todos.filter((item) => !item.isComplete);

  return (
    <div className="w-[50vw] h-[90vh] mx-auto bg-white mt-2 rounded-lg shadow-lg p-6">
      <h1 className="font-bold text-2xl text-gray-800 flex items-center justify-center mt-1 mb-3">iTask - Manage Your Todos at One Place</h1>
      <h3 className="text-xl font-semibold text-gray-700 mb-3">Add a Todo</h3>
      <div className="flex items-center mb-6">
        <input
          className="p-3 w-[35vw] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
        <input
          type="checkbox"
          className="h-5 w-5 text-blue-600 focus:ring-blue-500 rounded"
          checked={showFinished}
          onChange={(e) => setShowFinished(e.target.checked)}
        />
        <label className="text-gray-700">Show Finished</label>
      </div>
      <hr className="my-4 border-gray-300" />
      <h1 className="font-semibold text-xl text-gray-800">Todo List</h1>
      <ul>
        {filteredTodos.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-3 p-2 bg-gray-100 rounded-lg">
            <p className={`text-gray-700 flex-grow ${item.isComplete ? 'line-through' : ''}`}>{item.todo}</p>
            <div className="flex gap-2">
              <button
                className="ml-3 bg-green-600 hover:bg-green-700 text-white p-1 w-20 rounded-lg transition-colors"
                onClick={() => handleComplete(index)}
              >
                {item.isComplete ? 'Undo' : 'Complete'}
              </button>
              <button
                className="ml-3 bg-yellow-600 hover:bg-yellow-700 text-white p-1 w-14 rounded-lg transition-colors"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="ml-3 bg-red-600 hover:bg-red-700 text-white p-1 w-14 rounded-lg transition-colors"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
