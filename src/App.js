import React, { useReducer, useState } from "react";

const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    // TODO: implement ADD_TODO case
    // TODO: implement TOGGLE_TODO case
    // TODO: implement CLEAR_COMPLETED case
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo.trim()) {
      // TODO: dispatch action to add new todo
      setNewTodo("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>{/* TODO: display list of todos */}</ul>
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear Completed
      </button>
    </div>
  );
}

export default App;
