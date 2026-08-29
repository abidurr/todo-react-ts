import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
}) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, i) => (
          <TodoListItem key={i} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
};
