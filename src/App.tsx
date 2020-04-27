import React from 'react'

const todos = []

const App = () => {
  return (
    <div>
      <h1> To-Do App</h1>
      <TodoAdd />
      <TodoItem todo={todos[0]}/>

      
    </div>
  )
}

export default App