import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete
}) => {
  return (
    <li>
      <label style={{textDecoration : todo.complete ? "line-through" : "none"}}>
        <input
          type="checkbox"
          style={{display:"none"}}
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
    </li>
  );
};