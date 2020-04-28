import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <input id="input-text" type="text" autoFocus value={newTodo} onChange={handleChange} />
      <button id="submit-button" type="submit" onClick={handleSubmit}>
        Add New To-Do
      </button>
    </form>
  );
};