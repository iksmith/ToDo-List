import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');


  // Store todos in local storage
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleEditTodo(index) {
    const editedValue = todos[index]
    setTodoValue(editedValue);
    handleDeleteTodo(index);
    persistData(newTodoList);
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
<>
  <TodoInput 
    todoValue={todoValue} 
    setTodoValue={setTodoValue} 
    handleAddTodos={handleAddTodos}/>
  <TodoList 
    handleEditTodo={handleEditTodo} 
    handleDeleteTodo={handleDeleteTodo} 
    todos={todos} />
</>
  )
}

export default App
