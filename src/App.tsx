import React from "react";
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

  return (
    <React.Fragment>
      <h1>To Do App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </React.Fragment>
  );
};

export default App;