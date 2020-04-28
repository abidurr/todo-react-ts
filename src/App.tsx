import React from "react"
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import useLocalStorageState from 'use-local-storage-state'

const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorageState<Array<Todo>>('todos', []);
  
  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  const deleteCompleted = () => {
    let newTodos: Array<Todo> = [...todos]
    console.log(newTodos);
    newTodos = newTodos.filter(todo => (todo.complete !== true))
    console.log(newTodos);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <h1>To-Do List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <button id="submit-button" onClick={deleteCompleted}>Delete Completed</button>
    </React.Fragment>
  );
};

export default App;