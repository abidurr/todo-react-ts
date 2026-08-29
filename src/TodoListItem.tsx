import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <div className="list-item-div">
      <div className="check-button" onClick={() => toggleComplete(todo)}>
        <div
          className="check-button-inner"
          style={{
            backgroundColor: todo.complete
              ? "var(--color-four)"
              : "var(--color-five)",
          }}
        />
      </div>
      <li>
        <label
          style={{ textDecoration: todo.complete ? "line-through" : "none" }}
        >
          <input
            type="checkbox"
            style={{ display: "none" }}
            onChange={() => toggleComplete(todo)}
            checked={todo.complete}
          />
          {todo.text}
        </label>
      </li>
    </div>
  );
};
